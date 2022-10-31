"use strict";

let counterValue = 0;

const btnHandler = event => {
	event.currentTarget.dataset.action === "decrement" ? (counterValue -= 1) : (counterValue += 1);
	document.querySelector("#value").textContent = counterValue;
};

const decrementBtn = document.querySelector("button[data-action = 'decrement']");
const incrementBtn = document.querySelector("button[data-action = 'increment']");

decrementBtn.addEventListener("click", btnHandler);
incrementBtn.addEventListener("click", btnHandler);
