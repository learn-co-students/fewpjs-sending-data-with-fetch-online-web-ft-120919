// Add your code here
function submitData(name, email) {
    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }

    return fetch('http://localhost:3000/users', configObj)
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        document.querySelector('body').textContent = object.id
    })
    .catch(function(error){
        let h1 = document.createElement('h1')
        h1.innerHTML = 'Unauthorized Access'
        document.querySelector('body').appendChild(h1)
    })
}