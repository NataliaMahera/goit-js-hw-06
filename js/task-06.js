// *==== Task 6 ====

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputRef = document.getElementById('validation-input');
const inputData = document.querySelector('[data-length]');

function onBlurBorderColor() {
  if (Number(inputData.dataset.length) === inputData.value.length) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}

inputRef.addEventListener('blur', onBlurBorderColor);
