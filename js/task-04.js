const decrementBtn = document.querySelector(`[data-action="decrement"]`)
const incrementBtn = document.querySelector(`[data-action="increment"]`)
const valueEl = document.getElementById('value')

let counterValue = 0;

const decrementCount = event => {
counterValue -= 1;
valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementCount);

const incrementCount = event => {
counterValue += 1;
valueEl.textContent = counterValue;
};

incrementBtn.addEventListener("click", incrementCount);
