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
        method: "POST",
        headers: headerObj,
        body: JSON.stringify(formData)
    };

    let url = 'http://localhost:3000/users';
    /* Begin: asynchronous block:*/
    let f = fetch(url, configObj);// send data
    //debugger
        let ft = f.then(getJSON);//handle response
            let ftt = ft.then(callRender);// handle response
                ftt.catch(handleErrors);//handle any errors
    /* End: asynchronous block */
    return f;
}

function getJSON(response) {return response.json();}
function callRender (json) {render(json);}

function render(user){
    let body = document.querySelector('body');
    //console.log("users ====> " + user.id);
    const h6 = document.createElement('h6');
        h6.innerHTML = `${user.id}`;
    body.appendChild(h6);
}

function handleErrors(error){
    let body = document.querySelector('body');
    const h7 = document.createElement('h7');
        h7.innerHTML = `${error.message}`;
    body.appendChild(h7);
    alert("Error occurred "+ error.message);
    console.log(error.message);
}