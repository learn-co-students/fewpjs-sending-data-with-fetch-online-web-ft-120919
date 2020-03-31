// Add your code here
// fetch(url, {
//     method : "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({

//     })
// });

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(name, email)
}

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
        return response.json();
    })
    .then(function(object){
        let h2 = document.createElement('h2');
        h2.innerHTML = object.id;
        document.body.appendChild(h2);
        console.log(object);
    })
    .catch(function(error){
        let h3 = document.createElement('h3');
        h3.innerHTML = error.message;
        document.body.appendChild(h3);
        console.log(error.message);
    })
}