'user strict';

const cards = [
  {
    id: 1,
    title: 'Зробити домашку',
    column: 0,
  },
  {
    id: 2,
    title: 'Выгулять собаку',
    column: 2,
  },
  {
    id: 3,
    title: 'Отправить задание',
    column: 1,
  },
  {
    id: 4,
    title: 'Научиться кодить',
    column: 0,
  },
  {
    id: 5,
    title: 'Прочитать книгу',
    column: 0,
  },
  {
    id: 6,
    title: 'Сходить в магазин',
    column: 0,
  },
  {
    id: 7,
    title: 'Приготовить ужин',
    column: 1,
  },
  {
    id: 8,
    title: 'Заняться уборкой',
    column: 2,
  }
];


export function getCards(columnId){
	let correctCards = []; 

	  for(let i = 0; i < cards.length;i++){
		let necessaryСolumn = cards[i].column;
		  if(necessaryСolumn === columnId){
			correctCards.push(cards[i]);
		  } 
	  }
  // возвращает массив с карточками в нужной нам стадии
	return correctCards;
}
window.getCards = getCards;