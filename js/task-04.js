// *==== Task 4 ====
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const valueEl = document.getElementById('value');

let counterValue = 0;

const decrementCount = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementCount);

const incrementCount = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

incrementBtn.addEventListener('click', incrementCount);
