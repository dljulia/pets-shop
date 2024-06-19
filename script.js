const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

const cardTemplate = document.querySelector('#item-template');
const containerCards = document.querySelector('#shop-items');

function createCard(item) {
  const card = cardTemplate.content.cloneNode(true);

  card.querySelector('h1').textContent = item.title;
  card.querySelector('p').textContent = item.description;
  card.querySelector('.price').textContent = item.price;
  card.querySelector('img').src = item.img;

  const tagsContainer = card.querySelector('.tags');

  for (let value of item.tags) {
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = value;

    tagsContainer.append(tag); 
  }

  containerCards.append(card);  
}

items.forEach((item) => {
  createCard(item);
})

const searchButton = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');

searchButton.addEventListener('click', function() {
  containerCards.innerHTML = '';

  const textNothingFound = document.querySelector('#nothing-found');
  textNothingFound.textContent = '';
  
  let searchText = searchInput.value;
  searchText = searchText.trim();
  searchText = searchText.toLowerCase();

  const resultSearch = [];

  items.forEach((item) => {
    const title = item.title.toLowerCase();

    if (title.includes(searchText)) {
      resultSearch.push(item);
    } 
  })

  if (resultSearch.length > 0) {
    resultSearch.forEach(item => {
      createCard(item);
    })
  } else {
    textNothingFound.textContent = "Ничего не найдено.";
  }

  searchInput.value = '';
});

