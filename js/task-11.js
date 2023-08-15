//* Делегування подій (колекція з однією однотипною дією)

const container = document.querySelector('.js-container');
container.addEventListener('click', onClick);

function onClick(evt) {
  // Pattern Guard Clause
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(evt.target.textContent);
}
