import {dragStart} from './Drag\'n\'Drop';
// ================================================COLUMNS================================
export function createColumns(columns){
  // выбрали Родительский елемент для создания колонки
  let div = document.getElementById("desk");
    // пробежались по массиву колонок и создали их
   for(let i = 0; i < columns.length; i++){
    let columnName = columns[i].title;
    let columnId = columns[i].id;
      let element = document.createElement("div")
      element.setAttribute("data-column",columnId);
      element.append(columnName);
      div.appendChild(element);
      // Добавили елемент с плюсом для добавления
      let buttonAdd = document.createElement("i");
      buttonAdd.setAttribute("class", "fa fa-plus-circle");
      buttonAdd.setAttribute("data-add", true)
      element.appendChild(buttonAdd);
      // добавляем елемент для свертки
      let rollup = document.createElement("i");
      rollup.setAttribute("class","fas fa-angle-down")
      rollup.setAttribute("data-rollup", columnId)
      element.append(rollup);
  }};

// =====================================================СARDS=================================
export function createCard(objectCard){
        let columnId = objectCard.column;
        // выбрали Родительский елемент для создания карточек
      let element = document.querySelector(`[data-column="${columnId}"]`);
        
        // создали карточки
         let cardId = objectCard._id;
         let cardTitle = objectCard.title;
         let cardDiv = document.createElement("div");
         let textDiv = document.createElement("div");
         cardDiv.setAttribute("data-card", cardId);
         cardDiv.setAttribute("draggable", true);
         textDiv.setAttribute("data-text",cardId);
         textDiv.setAttribute("contenteditable",true);
         textDiv.append(objectCard.title);
         element.appendChild(cardDiv);
         cardDiv.appendChild(textDiv)
         // добавили иконку удаление
         let buttonDelete = document.createElement("i");
         buttonDelete.setAttribute("class", "fas fa-trash-alt");
         buttonDelete.setAttribute("data-remove", true);

         cardDiv.appendChild(buttonDelete);
         // добавление перетаскивание
         cardDiv.addEventListener('dragstart',dragStart);
  };

  // ===================================================================
  // функция удаляет карточку с сервера и UI
export async function removeCard(cardId) {
    const url = `http://localhost:8089/api/card/${cardId}`;
    const response = await fetch(url,{method:'DELETE',});
    document.querySelector(`[data-card="${cardId}"`).remove();
  };
  // функция добавляет новые данные в ноду
export function updateCardText(id,node){
  let elementById = document.querySelector(`[data-text="${id}"]`);
  elementById.textContent = node;
}