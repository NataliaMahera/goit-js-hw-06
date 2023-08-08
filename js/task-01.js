// *==== Task 1 ====
//* var 1

// const itemsEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${itemsEl.length}`);

// itemsEl.forEach( element => {
//     const titleEl = element.querySelector('h2').textContent;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${titleEl} \n Elements: ${itemsLength}`);
// });

//* var 2
// const categoriesTotal = document.getElementById("categories");
// const categoriesLength = categoriesTotal.children.length;
// console.log(`Number of categories: ${categoriesLength}`);

// const itemsEl = document.querySelectorAll('.item');
// itemsEl.forEach( item => {
//   console.log("Category:", item.firstElementChild.textContent);
//   console.log("Elements:", item.lastElementChild.children.length);
// });


//* ==== Task 2 ====

// const ingredients = [
//     "Potatoes",
//     "Mushrooms",
//     "Garlic",
//     "Tomatos",
//     "Herbs",
//     "Condiments",
//   ];
  
//* var 1

  // const list = document.getElementById("ingredients");
  
  // const elements = ingredients.map(ingredient => {
  //   const listItem = document.createElement("li")
  //   listItem.textContent = ingredient;
  //   listItem.classList.add("item");

  //   return listItem
  // });

  // list.append(...elements);
  // console.log(list);

//* var 2 (function(callback in map))

// const list = document.getElementById("ingredients");

// const makeListElements = elements => {
//   return elements.map( ingredient => {
//     const listItem = document.createElement("li")
//     listItem.textContent = ingredient;
//     listItem.classList.add("item");

//     return listItem
//   });
// }

// const elements = makeListElements(ingredients)
// list.append(...elements);
// console.log(list);

//* ==== Task 3 ====

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// function render(arr) {
//   const list = document.querySelector(".gallery");
//   const images = arr

//   const cards = images
//   .map(item => `<li style = "display:'flex'; margin-bottom:20px">
//   <img src=${item.url} alt=${item.alt} width = "500"></li>`)
//   .join('');
// list.style.listStyle = "none";
//     list.insertAdjacentHTML("afterbegin", cards);
// }
// render(images)
