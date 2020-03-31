// Add your code here
function registerSelf() {
    return fetch("http://guestbook.example.com/register", {
      method: 'POST',
      body: {
        firstName: "Jason",
        registryMessage: "Hello, this is my message to the registry"
      }
    })
    .then(function(result) => {
      return result.json();
    }).then(function(json) {
      return json.message;
    });
  }
  function errorSelf() {
     return fetch("http://guestbook.example.com/register-error", {
      "method": "POST",
      "body": {
        "firstName": "Byron the Poodle",
        "registryMessage": "Bite!"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      return json.message;
    }).catch(function(x) {
      return ":(";
    });
  }