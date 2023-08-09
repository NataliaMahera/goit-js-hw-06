const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function render(arr) {
  const list = document.querySelector(".gallery");
  const images = arr
  const cards = images
  .map(item => `<li style = "display:'flex'; margin-bottom:20px">
  <img src=${item.url} alt=${item.alt} width = "500"></li>`)
  .join('');
list.style.listStyle = "none";
    list.insertAdjacentHTML("afterbegin", cards);
}

render(images)