//* одна активна кнопка з багатьох

// // ul предок на нього вішаємо клік

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   // перевірити що клікнули по кнопці
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   //   перевірити активний елемент і зняти клас (при першому кліку null, він не має властивості classList)
//   //   при кожному кліку шукаємо поточний активний, якщо є то знімаємо з нього клас а там де клацнули то додаємо

//   //  додаємо активний клас з перевіркою
//   const currentActiveBtn = document.querySelector('.tags-btn--active');

//   //   if (currentActiveBtn) {
//   //     currentActiveBtn.classList.remove('tags-btn--active');
//   //   }
//   // заміна іфа при доступі до властивості чи є нал чи є властивість
//   currentActiveBtn?.classList.remove('tags-btn--active');

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags-btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

//* якщо обрати кілька активних кнопок і потім їх забирати, щоб видалялись сети

const tagsContainer = document.querySelector('.js-tags');
// для зберігання інформації але дублюється
// const selectedTags = [];

// набір уніуальних елем. без дубляжів
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  // перевірити що клікнули по кнопці
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  // додати клас перевірка додати і відняти тут зберігання даних
  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags-btn--active');

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }
  //

  btn.classList.toggle('tags-btn--active');

  //   selectedTags.push(evt.target.dataset.value);

  //   сет не дублюється і не треба перевіряти на дубляж
  //   selectedTags.add(btn.dataset.value);
  console.log(selectedTags);
}
