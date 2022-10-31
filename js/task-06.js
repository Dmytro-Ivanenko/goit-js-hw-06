"use strict";

const validationInputHandler = event => {
	const input = event.currentTarget;

	input.value.length == input.dataset.length
		? input.setAttribute("class", "valid")
		: input.setAttribute("class", "invalid");
};

document.querySelector("#validation-input").addEventListener("blur", validationInputHandler);
