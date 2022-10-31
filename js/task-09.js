"use strict";

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorHandler = () => (document.body.style.backgroundColor = getRandomHexColor());

document.querySelector(".change-color").addEventListener("click", changeColorHandler);
