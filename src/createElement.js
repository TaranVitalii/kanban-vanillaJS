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
export function createCards(arrCards ,columnId){
        // выбрали Родительский елемент для создания карточек
      let element = document.querySelector(`[data-column="${columnId}"]`);
        // пробежали по полученому масиву и создали карточки
        for(let i = 0; i < arrCards.length; i++ ){ 
         let card = arrCards[i];
         let cardId = card.id;
         let cardTitle = arrCards[i].title;
         let paragraph = document.createElement("p");
         let headline = document.createElement("h");
         paragraph.setAttribute("data-card", cardId);
         headline.setAttribute("data-text",cardId);
         headline.setAttribute("contenteditable",true);
         headline.append(arrCards[i].title);
         element.appendChild(paragraph);
         paragraph.appendChild(headline)
         // добавили иконку удаление
         let buttonDelete = document.createElement("i");
         buttonDelete.setAttribute("class", "fas fa-trash-alt");
         paragraph.appendChild(buttonDelete);
    }
  };