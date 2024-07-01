const express = require('express');
const pg = require('pg')
const cors = require('cors');

const secrets = require('./secrets.json');

const app = express();

app.use(cors())
app.use(express.json())

async function setupApp() {
  const pgClient = new pg.Client({
    database: secrets.DATABASE_NAME,
    user: secrets.DATABASE_USER,
    password: secrets.DATABASE_PASSWORD,
  });
  await pgClient.connect();

  // HTTP: method (GET or POST...)
  // GET /messages
  app.get('/messages', function(req, res) {
    pgClient.query('SELECT * FROM messages;').then((result) => {
      return res.send(result.rows);
    });
  });

  app.post('/messages', async function(req, res) {
    // consider usually doing beforehand:
    // 1) filter out undesired properties
    // 2) validate the supplied request information
    const newMessage = req.body;

    // if authenticated, usually you'd get something like:
    // req.user
    const author = { id: '123', username: 'fakeuser' };

    try {
      const result = await pgClient.query(`INSERT INTO messages (comment, author_id, created_at) VALUES ($1, $2, $3) RETURNING *`, [newMessage.comment, author.id, new Date()])

      return res.send(result.rows[0]);
    }
    catch (error) {
      // report error somewhere
      console.error(error);
      return res.status(500).send({ error: 'Internal Server Error' });
    }

  });

  app.post('/users', async (req, res) => {
    try {
      const { name, email, password, dateOfBirth, notificationPreference, biography, agreeToTerms, subscribeToNewsLetter } = req.body;
      const user = await pgClient.query('SELECT * FROM  users WHERE email = $1', [email]);
      if(user.length !== 0){
        return res.send({ error: 'email already exists' });
      }
      if (!user.password || user.password.length < 6){
        return res.status(401).send({ message: 'password has to be more than 6 characters' });
      }

      const userData = await pgClient.query(`INSERT INTO users (name, email, birthdate, notification_preference, terms_agreed, newsletter_subscribed) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, email, password, dateOfBirth, notificationPreference, biography, agreeToTerms, subscribeToNewsLetter ]);
      return res.send(userData);
    } catch(err){
      console.error(err.message)
      return res.status(500).send({error: 'Internal server error'});
    }
  });

  // REST naming CONVENTION for endpoint paths:
  // retrieve all things:   GET /resource
  // retrieve one thing:    GET /resource/:resourceId  (express req.params.resourceId)
  // delete one thing:      DELETE /resource/:resourceId
  // update one thing:      PUT /resource/:resourceId
  // partial update thing:  PATCH /resource/:resourceId
  // create one thing:      POST /resource

  const port = 3001;
  app.listen(port, function() {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

setupApp();
