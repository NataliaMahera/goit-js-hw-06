const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//* 1
  // const list = document.getElementById("ingredients");
  // const elements = ingredients.map(ingredient => {
  //   const listItem = document.createElement("li")
  //   listItem.textContent = ingredient;
  //   listItem.classList.add("item");
  //   return listItem
  // });
  // list.append(...elements);
  // console.log(list);

//* 2 (function(callback in map))

const list = document.getElementById("ingredients");
const makeListElements = elements => {
  return elements.map( ingredient => {
    const listItem = document.createElement("li")
    listItem.textContent = ingredient;
    listItem.classList.add("item");
    return listItem
  });
}

const elements = makeListElements(ingredients)
list.append(...elements);
console.log(list)