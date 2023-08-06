const totalCategories = document.querySelectorAll(".item");
console.dir(`Number of categories: ${totalCategories.length}`);

// totalCategories.forEach(category => {
//     const heading = document.querySelector("h2").innerHTML
//     console.log(`Category: ${heading.textContent}
//     Elements: ${heading.children.length}`)})

const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});

// const items = document.querySelectorAll('.item');
// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });