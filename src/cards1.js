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
// получение массива нужных карточек  по ид
export function getCards(columnId){
	return cards.filter(card => card.column === columnId);
}
// Создание карточек масива
export function createCards(arrCards ,columnId){
    let element = document.getElementsByClassName(`${columnId}`)[0];
    
  // создание столбца карточек
     for(let i = 0; i < arrCards.length; i++ ){ 
     let card = arrCards[i];
     let cardId = card.id;
     let cardTitle = arrCards[i].title;
     let paragraph = document.createElement("p");
     let cardTextHTML = document.createTextNode(cardTitle);
     let idCardPlus10 = cardId;
     paragraph.setAttribute("id", idCardPlus10);
     paragraph.appendChild(cardTextHTML);
     element.appendChild(paragraph);

     // создание ивента для редактирование текстовой ноды
     paragraph.addEventListener('click',()=>{
       let idCards = paragraph.id;
       let text =prompt("Update your Cards");
       updateCards(idCards, text);
     });

     // создание иконки для удаление
     let icon = document.getElementById(`${idCardPlus10}`);
     let buttonDelete = document.createElement("i");
     buttonDelete.setAttribute("class", "fas fa-trash-alt");
     icon.appendChild(buttonDelete);

     // создание ивент для удаления
       buttonDelete.addEventListener('click',()=>{
       event.stopPropagation();
       let idCards = buttonDelete.parentElement.id;
       removeCard(idCards);

       })
     }
}


// удаление карточки
export function removeCard(id) {
  document.getElementById(id).remove();
}

// добавление карточки
export function addCards( clientTitle, columnIdCreate ,element){
  let newId = cards.length+1;
  // новая карточка с нужными нам данными
  let newTask = {
    id : newId,
    title: clientTitle ,
    column: columnIdCreate,
  }
  cards.push(newTask);
      // поскольку цикл создания пустой то создаем непосредственно в функции
      let newCardPrompt = document.createElement("p");
      let cardTextHTML = document.createTextNode(newTask.title);
      newCardPrompt.setAttribute("id", newId);
      newCardPrompt.appendChild(cardTextHTML);
      element.appendChild(newCardPrompt);

      // добавляем иконку удаления
      let icon = document.getElementById(newId);
      let buttonDelete = document.createElement("i");
      buttonDelete.setAttribute("class", "fas fa-trash-alt");
      icon.appendChild(buttonDelete);
      // удаления тега
          buttonDelete.addEventListener('click',()=>{
            event.stopPropagation();
            removeCard(newId);
          })
      // Обновление данных
      newCardPrompt.addEventListener('click',()=>{
        let text =prompt("Update your Cards");
        updateCards(newId, text);
      });



};

// функция которая обновляет данные 
export function updateCards(cardId , text){
                                    
  let searchElement =document.getElementById(cardId);// поиск элемента по нужному нам ид
  searchElement.firstChild.remove();// удаление ноды которая находиться в диве
                                   
  let newNode = document.createTextNode(text); // создаем тектс который к нам зашёл с промта
  searchElement.prepend(newNode); // и добавляем его ПЕРЕД Иконкой удаления

}