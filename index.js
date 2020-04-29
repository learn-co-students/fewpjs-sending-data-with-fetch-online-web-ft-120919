
function submitData(name, email) {
  // plain JS Object containing info from arguments
  let userData = {
    name: name,
    email: email
  };

  // plain JS Object containing the obj for fetch message
  let configObj = {
    // indicates client is sending not requesting
    method: "POST",
    // headers send meta information to server about the request or message
    headers: {
      // indicates that the media being sent by client is json
      "Content-Type": "application/json",
      // indicates that the client will accept response type of json
      "Accept": "application/json",
    },
    // turn JS object into JSON string (serialization) and send in body of message
    body: JSON.stringify(userData)
  }

  // asynchronise call to server at url containing the configObj
  return fetch("http://localhost:3000/users", configObj)
    // receive response object and parse body text as JSON
    .then(res => res.json())
    .then(function(json) {
      document.body.innerHTML = json.id;
    })
    .catch(function(error) {
      document.body.innerHTML = error.message;
    });
}