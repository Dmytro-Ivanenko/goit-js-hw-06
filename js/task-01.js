"use strict";

const refs = {
	categories: document.querySelector("[id = categories]"),

	items: document.querySelectorAll(".item"),
};

const getInfo = obj => {
	console.log(`Number of categories: ${obj.categories.childElementCount}`);

	const logItem = item => {
		console.log(`Category: ${item.querySelector("h2").textContent}`);
		console.log(`Elements: ${item.querySelector("ul").childElementCount}`);
	};

	obj.items.forEach(logItem);
};

getInfo(refs);
