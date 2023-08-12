// *==== Task 7 ====

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRef = document.getElementById('font-size-control');
const outputRef = document.getElementById('text');

const onFontSizeSlider = () => {
  outputRef.style.fontSize = `${inputRef.value}px`;
  // console.log(inputRef.value);
};

inputRef.addEventListener('input', onFontSizeSlider);
