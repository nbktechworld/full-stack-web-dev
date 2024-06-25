import React from 'react';
import './messages.css';

export default function Messages(props) {
  const [comment, setComment] = React.useState(''); 

  function addMessage(event) {
    event.preventDefault();
    
    setPosts([
      { title: comment },
      ...posts,
    ]);

    setComment('');
  }

  const [posts, setPosts] = React.useState([]);

  React.useEffect(function() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
      return response.json()
    }).then(function(retrievedPosts) {
  
      setPosts(retrievedPosts)
    }).catch(function(error) {
      // handle the error.
      // e.g. inject an error message to document
    });
  }, []);

  function onCommentChange(event) {
    setComment(event.target.value)
  }

  return (
    <>
      <h1>Messages</h1>
      <div className="container">
        <form action="https://jsonplaceholder.typicode.com/posts" method="POST" id="new-message-form" onSubmit={addMessage}>
          <label htmlFor="new-message-form-comment" className="form-label">Leave a comment</label>
          <textarea name="comment" id="new-message-form-comment" placeholder="type anything here" value={comment} onChange={onCommentChange}></textarea>
          <button type="submit" className="btn">submit</button>
        </form>
        <div>
          {posts.map(function(post) {
            return (
              <div className="message-list-item">{post.title}</div>
            );
          })}
        </div>
      </div>
    </>
  );
}