function loadDoc() {
  const token = localStorage.getItem('token');
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.response);
      const register = document.getElementById('register');
      register.removeChild(register.firstChild);
      register.style.color = 'white';
      register.style.fontWeight = 'bold';
      register.style.cursor = 'pointer';
      register.className = 'mt-2 mr-5';
      const login = document.getElementById('login');
      login.removeChild(login.firstChild);
      register.innerHTML = response.data;
    }
  };
  xhttp.open('GET', 'http://localhost:3000/auth/me', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.setRequestHeader('authorization', token);
  xhttp.send();
}

loadDoc();
