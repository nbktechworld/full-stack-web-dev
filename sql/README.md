# SQL

The SQL files were generated using pgAdmin on Windows.

## Problems

If you are using a macOS to regenerate the database, be aware:

For create-full-stack-db.sql, remove the following lines if you get a complaint about them:

```
LC_COLLATE = 'English_United States.1252'
LC_CTYPE = 'English_United States.1252'
```

For create-users.sql, it will complain about the sequence. Replace the definition of id with:

```
id SERIAL NOT NULL,
```

There is no need to run the create-users-seq.sql file.

Similarly, do the same for create-message.sql.
