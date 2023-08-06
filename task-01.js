// ==== Task 1 ====

// const items = document.querySelectorAll('.item');
// console.log(`Number of categories: ${items.length}`);

// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${title} \n Elements: ${itemsLength}`);
// });

// ==== Task 2 ====

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  
  const list = document.querySelector("#ingredients");
  
  const elements = ingredients.map(ingredient => {
    const listItem = document.createElement("li")
    listItem.textContent = ingredient;
    listItem.classList.add("item");

    return listItem
  });

  list.append(...elements);
  
  console.log(list);


//   const list = elements => {
//     return elements.map(element => {
//         const listItem = document.createElement("li");
//         listItem.textContent = element;
//         listItem.classList.add("item");
    
//         return listItem;
//   });
// };

// const elements = list(newList);
// newlist.append(...elements);
  
// console.log(list);
// console.log(elements);