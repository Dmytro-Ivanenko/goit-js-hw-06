"use strict";

const rangeHandler = event => {
	document.querySelector("#text").style.fontSize = `${event.currentTarget.value}px`;
};

document.querySelector("#font-size-control").addEventListener("input", rangeHandler);
