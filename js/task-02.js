const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const ulElem = document.getElementById("ingredients");
// for (const ingredient of ingredients) {
//   const liElem = document.createElement("li");
//   liElem.classList.add("item");
//   liElem.textContent = ingredient;
//   // ulElem.appendChild(liElem);
// }
const ulElem = document.getElementById("ingredients");
const liArray = [];
for (const ingredient of ingredients) {
  const liElem = document.createElement("li");
  liElem.classList.add("item");
  liElem.textContent = ingredient;
  liArray.push(liElem);
};
ulElem.append(...liArray);