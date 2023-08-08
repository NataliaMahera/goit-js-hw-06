// *==== Task 1 ====

// const items = document.querySelectorAll('.item');
// console.log(`Number of categories: ${items.length}`);

// Array.prototype.forEach.call(items, element => {
//     const title = element.querySelector('h2').textContent;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${title} \n Elements: ${itemsLength}`);
// });


// const itemsEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${itemsEl.length}`);

// const itemsArr = Array.from(itemsEl).forEach.call(itemsEl, element => {
//     const titleEl = element.querySelector('h2').textContent;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${titleEl} \n Elements: ${itemsLength}`);
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
  
// *var 1

  // const list = document.getElementById("ingredients");
  
  // const elements = ingredients.map(ingredient => {
  //   const listItem = document.createElement("li")
  //   listItem.textContent = ingredient;
  //   listItem.classList.add("item");

  //   return listItem
  // });

  // list.append(...elements);
  
  // console.log(list);

// *var 2 (function(callback in map))

// const list = document.querySelector("#ingredients");

// const makeListElements = elements => {
//   return elements.map(ingredient => {
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

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// //* var 1
const list = document.querySelector(".gallery");
const createGalleryElements = images => {
  return images.map(({url, alt}) => {
    const liEl = document.createElement("li");
    const imgEl = document.createElement("img");
    img.src = url;
    img.alt = alt;
    liEl.append(imgEl)

    liEl.append(imgEl);
    return liEl
 });
}
console.log(createGalleryElements)
list.append(...createGalleryElements)

// const markupGallery = createGalleryElements(images);
// createGalleryElements.append(...markupGallery)
// console.log(markupGallery);


// const list = document.querySelector(".gallery");

// const markupGallery = images
// .map(({url, alt}) => 
// const urlEl = document.querySelector(".url")
// `<li><img src="" alt=""></li>`)
// .join(" ");

// list.insertAdjacentHTML("afterbegin", markupGallery)

// console.log(list);
// console.log(markupGallery);