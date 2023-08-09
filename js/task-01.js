// *==== Task 1 ====
//* 1
// const itemsEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${itemsEl.length}`);
// itemsEl.forEach( element => {
//     const titleEl = element.querySelector('h2').textContent;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${titleEl} \n Elements: ${itemsLength}`);
// });

// * 2
const categoriesTotal = document.getElementById("categories");
const categoriesLength = categoriesTotal.children.length;
console.log(`Number of categories: ${categoriesLength}`);
const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach( item => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
