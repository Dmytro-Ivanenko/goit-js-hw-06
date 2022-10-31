"use strict";

const output = document.querySelector("#name-output");
const input = document.querySelector("#name-input");

const inputHandler = event => {
	event.currentTarget.value === ""
		? (output.textContent = "Anonymous")
		: (output.textContent = event.currentTarget.value);
};

input.addEventListener("input", inputHandler);
