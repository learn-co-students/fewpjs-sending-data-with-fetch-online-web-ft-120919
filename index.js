// Add your code here
function submitData(name, email) {
	let person = {
		name: name,
		email: email
	};
	let configObj = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify(person)
	};
	fetch("http://localhost:3000/users", configObj)
		.then(function(response) {
			return response.json()
		})
		.then(function(object) {
            console.log(object)
			document.querySelector('body').innerHTML += `<p>${object.id}</p>`;
		})
		.catch(function(error) {
			alert("Bad things! Ragnarők!");
            console.log(error.message);
            document.querySelector('body').innerHTML += `<p>${error.message}</p>`;
		});
}
