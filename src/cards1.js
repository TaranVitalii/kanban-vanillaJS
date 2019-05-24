'user strict';

const cards = [
  {
    id: 0,
    title: 'Зробити домашку',
    column: 0,
  },
  {
    id: 1,
    title: 'Выгулять собаку',
    column: 2,
  },
  {
    id: 2,
    title: 'Отправить задание',
    column: 1,
  },
  {
    id: 3,
    title: 'Научиться кодить',
    column: 0,
  },
  {
    id: 4,
    title: 'Прочитать книгу',
    column: 0,
  },
  {
    id: 5,
    title: 'Сходить в магазин',
    column: 0,
  },
  {
    id: 6,
    title: 'Приготовить ужин',
    column: 1,
  },
  {
    id: 7,
    title: 'Заняться уборкой',
    column: 2,
  }
];


export function getCards(columnId){
	return cards.filter(card => card.column === columnId);
}




export function removeCard(id) {
  localStorage.removeItem("cards"+id);
  document.getElementById(id).remove();
}


export function addCards( clientTitle, columnIdCreate ,element){
  let newId = cards.length+1;
  // новая карточка с нужными нам данными
  let newTask = {
    id : newId,
    title: clientTitle ,
    column: columnIdCreate,
  }
  cards.push(newTask);
      // поскольку стек пустой в момент когда работает онклик и 
      // мы не можем создать данный элемент , то создаем непосредственно в функции
      let newCardPrompt = document.createElement("p");
      let cardTextHTML = document.createTextNode(newTask.title);
      let idCard = newId;
      newCardPrompt.setAttribute("id", newId);
      newCardPrompt.appendChild(cardTextHTML);
      element.appendChild(newCardPrompt);

}




// локал не работает у меня как надо
export function localStorageCards() {
  for (let i = 0 ; i < cards.length ; i++){
    let localValue = localStorage.setItem('cards'+i, JSON.stringify(cards[i]))
  }
}
