const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients')

function onItemCreate(arrayItems) {
  return arrayItems.map(arrayItem => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.classList.add('item');
    ingredientsEl.textContent = arrayItem;
    return ingredientsEl;
  })
}
const elements = onItemCreate(ingredients);
ingredientsRef.append(...elements)