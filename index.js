function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    };
    let headerObj = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };
    let configObj = {
        headers: headerObj,
        body: JSON.stringify(formData)
    };

    let url = 'http://localhost:3000/users';
    /* Begin: asynchronous block:*/
    let f = fetch(url, configObj);// send data
        let ft = f.then(getJSON);//handle response
            let ftt = ft.then(callRender);// handle response
                ftt.catch(handleErrors);//handle any errors
    /* End: asynchronous block */
    return f;
}

function getJSON(response) {return response.json();}
function callRender (json) {render(json);}

function render(users){
    let body = document.querySelector('body');
    users.forEach( user =>{
                        const h6 = document.createElement('h6')
                            h6.innerHTML = `<h6>${user.id} : ${user.name} : ${user.email} </h6>`;
                        body.appendChild(h6);
                        }
                );
}

function handleErrors(error){
    let body = document.querySelector('body');
    const h7 = document.createElement('h7')
        h7.innerHTML = `<h7>${error.message} </h7>`;
    body.appendChild(h7);
    alert("Error occurred "+ error.message);
    console.log(error.message);
}