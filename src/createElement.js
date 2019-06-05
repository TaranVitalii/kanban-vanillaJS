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
      element.appendChild(buttonAdd);
  }};

// =====================================================СARDS=================================
export function createCard(objectCard){
        let columnId = objectCard.column;
        // выбрали Родительский елемент для создания карточек
      let element = document.querySelector(`[data-column="${columnId}"]`);
        
        // создали карточки
         let cardId = objectCard.id;
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
         cardDiv.appendChild(buttonDelete);
  };