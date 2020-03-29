document.addEventListener("DOMContentLoaded", () => {  
    submitData("Steve", "steve@steve.com") 
})

function submitData(name, email) {
let formData = {
    name: name,
    email: email
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    //   debugger
    addTextToDOM(object.id);
  })
  .catch(function(error) {
        // alert("Unauthorized Access");
        // addTextToDOM(error.message);
        addTextToDOM("Unauthorized Access");
        });       
      
}

function addTextToDOM(elem) {
    const h = document.createElement('h2')
    h.innerHTML = elem    
    document.body.appendChild(h)
    // debugger
}



// return fetch("http://localhost:3000/users", configObj)
//     .then(function(response) {
//         response.json();
//     })
//     .then(function(object) {
//         debugger
//         addTextToDOM(object.id)
//     })
//     .catch(function(error) {
//         alert("Unauthorized Access");
//         addTextToDOM(error.message);
//       });