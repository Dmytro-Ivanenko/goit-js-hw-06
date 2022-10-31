"use strict";

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
	boxes: document.querySelector("#boxes"),

	numberInput: document.querySelector("#controls").firstElementChild,

	create: document.querySelector("button[data-create]"),

	destroy: document.querySelector("button[data-destroy]"),
};

const createHandler = event => {
	const boxesArr = [];

	if (+refs.numberInput.value > +refs.numberInput.attributes.max.value) {
		alert(" Max number of boxes is 100");
		return;
	}

	for (let i = 0; i < refs.numberInput.value; i += 1) {
		const sizes = 30 + 10 * i;

		const box = `<div style = "width: ${sizes}px; 
		height: ${sizes}px; 
		background-color: ${getRandomHexColor()};"> </div>`;

		boxesArr.push(box);
	}

	refs.boxes.innerHTML = boxesArr.join("");
};

const destroyBoxes = () => {
	refs.boxes.innerHTML = "";
};

refs.create.addEventListener("click", createHandler);
refs.destroy.addEventListener("click", destroyBoxes);
