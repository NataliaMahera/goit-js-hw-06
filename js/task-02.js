// *==== Task 2 ====

// HTML містить порожній список ul#ingredients.
// JavaScript містить масив рядків.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const list = document.getElementById('ingredients');
const makeListElements = (elements) => {
  return elements.map((ingredient) => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    return listItem;
  });
};

const elements = makeListElements(ingredients);
list.append(...elements);
console.log(list);
