// *==== Task 1 ====
//* 1
// const categoriesTotal = document.getElementById("categories");

// const categoriesLength = categoriesTotal.children.length;
// console.log(`Number of categories: ${categoriesLength}`);

// const itemsEl = document.querySelectorAll('.item');

// itemsEl.forEach( item => {
//   console.log("Category:", item.firstElementChild.textContent);
//   console.log("Elements:", item.lastElementChild.children.length);
// });

// * 2

const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

const categoriesTotal = document.getElementById("categories");

[...categoriesTotal.children].forEach( item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length);
  });