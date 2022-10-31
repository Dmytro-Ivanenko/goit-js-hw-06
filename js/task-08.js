"use strict";

const submitHandler = event => {
	event.preventDefault();

	const userData = {
		email: event.currentTarget.elements.email.value,

		password: event.currentTarget.elements.password.value,
	};

	if (userData.email === "" || userData.password === "") {
		alert("Please fill in all the fields!");
		return;
	}

	console.log(userData);

	event.currentTarget.reset();
};

document.querySelector(".login-form").addEventListener("submit", submitHandler);
