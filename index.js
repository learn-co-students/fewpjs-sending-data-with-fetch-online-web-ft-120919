// Add your code here
function submitData(name, email) {
  const user = {
    name: name,
    email: email
  }

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  }

  return fetch('http://localhost:3000/users', config)
    .then(response => response.json())
    .then(function(json) {
      document.body.innerHTML += json['id']
    })
    .catch(error => {
      document.body.innerHTML += error
    })
}
