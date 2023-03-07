const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const loEl = document.createElement("li");

const createItem = (element) => {
return elements.map ((element) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = element;
  return item;
});
};
const itemList = createItem(".ingredients");
listEl.append(...itemList);