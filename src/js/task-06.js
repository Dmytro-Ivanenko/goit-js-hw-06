"use strict";

const validationInputHandler = event => {
	const input = event.currentTarget;

	input.value.length === 6 ? input.setAttribute("class", "valid") : input.setAttribute("class", "invalid");
};

document.querySelector("#validation-input").addEventListener("blur", validationInputHandler);
