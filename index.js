// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// let configObj = {
//     method: "POST",
//     headers: {
//      "Content-Type": "application/json",
//      "Accept": "application/json"   
//     },
//     body: JSON.stringify(formData)  
// };

// fetch('http://localhost:3000/dogs', configObj)
//  .then(function(repsonse) {
//     return Response.json();
// })
// .then(function(object) {
//     console.log(object);
// });


function submitData(name, email) {
    
    let data = {
        name: name,
        email: email
    };
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };

    return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
        return response.json();
})
.then(function(object) {
    // console.log(object);
    document.body.innerHTML = object['id'];
})
.catch(function(error) {
    alert("SOmething went wrong");
    console.log(error.message);
    document.body.innerHTML = error.message
});
// return fetch()
}
