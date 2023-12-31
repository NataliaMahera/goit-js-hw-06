// *==== Task 5 ====

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const textInput = document.getElementById('name-input');
const output = document.getElementById('name-output');

const userInput = (event) => {
  output.textContent = textInput.value !== '' ? event.currentTarget.value : 'Anonymous';
};

textInput.addEventListener('input', userInput);
