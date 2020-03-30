// Add your code

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// }
// let configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// }
// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(object) {
//     console.log(object)
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnorok!")
//     console.log(error.message)
//   })

  function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(function(response) {
      return response.json()
    })
    .then(function(object) {
      document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
      document.body.innerHTML = error.message
    })
  }