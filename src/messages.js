fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
  return response.json()
}).then(function(posts) {
  // let index = 0;
  // for(const post of posts) {
  // for(let index = 0; index < posts.length; index++) {
  //   const divElement = document.createElement('div');
  //   divElement.classList.add('message-list-item')
  //   divElement.textContent = posts[index].title
  //   document.getElementById('message-list').appendChild(divElement)
  //   // index = index + 1
  // }

  posts.map(function(post) {
    const divElement = document.createElement('div');
    divElement.classList.add('message-list-item')
    divElement.textContent = post.title
    document.getElementById('message-list').appendChild(divElement)
  })
}).catch(function(error) {
  // handle the error.
  // e.g. inject an error message to document
});

function addMessage(event) {
  event.preventDefault();
  
  const divElement = document.createElement('div')
  const textareaElement = document.querySelector('#new-message-form-comment')

  divElement.textContent = textareaElement.value

  textareaElement.value = ''

  divElement.classList.add('message-list-item')

  document.getElementById('message-list').appendChild(divElement)
}
