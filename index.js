const usersUrl = "http://localhost:3000/users";

const headersObject = {
  "Content-Type": "application/json",
  "Accept": "application/json"
} 

const configurationObject = {
  method: "POST",
  headers: headersObject
};

function makeList(json) {
  const newList = document.createElement('ul');
  const length = (json.length ? json.length : 1);
  for(let i = 0; i < length; i++) {
    const entry = (length === 1 ? json : json[i]);
    for(const key in entry) {
      let listItem = document.createElement('li');
      listItem.innerText = `${key} - ${entry[key]}`;
      newList.appendChild(listItem);
    }
  }
  document.body.appendChild(newList);
}

function submitData(name, email) {
  const dataObject = {
    "name": name,
    "email": email
  };
  configurationObject["body"] = JSON.stringify(dataObject);
  return fetch(usersUrl, configurationObject)
  .then(resp => resp.json())
  .then(json => {
    // makeList(json);
    console.log(json);
    document.body.innerHTML = json["id"];
  })
  .catch(error => {
    document.body.innerHTML = error.message;  
  });
}