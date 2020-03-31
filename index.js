// Add your code here
function submitData(name, email) {
    let userData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(function(object) {
            console.log("Object", object)
            // document.body.innerHTML = `<p> User ID: ${object.id} </p> <br> <p> User Name: ${object.name} </p> <br> <p> User Email: ${object.email} </p>`
            document.body.innerHTML += object.id
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        })
}