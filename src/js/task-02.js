"use strict";

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
debugger;
const ingredientsList = document.querySelector("[id = ingredients]");

const addIngredientsElem = arr => {
	const elemArr = arr.map(ingredient => {
		const elem = document.createElement("li");
		elem.textContent = ingredient;

		return elem;
	});

	ingredientsList.append(...elemArr);
};

addIngredientsElem(ingredients);
