const form = document.getElementById('create_post_form');
form.addEventListener('submit', (e) => {
  const token = localStorage.getItem('token');
  const postTitle = document.getElementById('post_title').value;
  const postBody = document.getElementById('post_body').value;
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'http://localhost:3000/posts/new', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.setRequestHeader('authorization', token);
  const post = { title: postTitle, body: postBody };
  const postJSON = JSON.stringify(post);
  xhttp.send(postJSON);
});
