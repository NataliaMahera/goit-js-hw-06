const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'Redux' },
  { label: 'react' },
  { label: 'Next.js' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'PostgreSQL' },
  { label: 'Vue' },
];

// 1. Рендерим розмітку елементів списку
// 2. Слухаємо зміни фільтра
// 3. Фільтруємо дані і рендеримо нові елементи

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

// Викликаємо функцію з розміткою
const listItemsMarkup = createListItemsMarkup(tech);

// Рендерим розмітку елементів списку
function createListItemsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join('');
}
// console.log(listItemsMarkup);

// Додаємо в розмітку
// refs.list.innerHTML = listItemsMarkup;
populateList(listItemsMarkup);

//Слухаємо зміни фільтра
refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

function onFilterChange(evt) {
  //значення нашого фільтра інпута що вводить користувач
  const filter = evt.target.value.toLowerCase();
  //відфільтровуємо тільки ті елементи, текст яких співпадає з нашим фільтром

  //новий масив відфільтрованих елементів
  const filteredItems = tech.filter((t) => t.label.toLowerCase().includes(filter));

  //   console.log(filteredItems);

  //перший раз в лістмаркап передавався весь масив, щоб користувач побачив що буде фільтрувати, а тепер передаємо відфільтрований масив елементів

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  // а тепер розмітку відфільтрованого масиву вішаємо на наш ліст і фільтруються окремі слова в списку і заміняємо розмітку юл

  //   refs.list.innerHTML = listItemsMarkup;
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}

// const options = {
//   includeScore: true,
//   includeMatches: true,
//   keys: ['label'],
// };

// const fuse = new Fuse(tech, options);
// const result = fuse.search(searchValue);
