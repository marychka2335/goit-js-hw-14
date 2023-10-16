const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");
const ingredientsArray = ingredients.map((ingredient) => {
  const listRef = document.createElement("li");
  listRef.textContent = ingredient;
  listRef.classList.add("item");
  return listRef;
});

ingredientsList.append(...ingredientsArray);
console.log(ingredientsList);
