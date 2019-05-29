'user strict';
const columns = [
  {
    id: 0,
    title: 'To Do',
  },
  {
    id: 1,
    title: 'In Progress',
  },
  {
    id: 2,
    title: 'Done',
  }
];


export function getColumns(){
// возвращает массив колонок
return columns;
}

export function createColumns(columns){
  let div = document.getElementById("desk");

   for(let i = 0; i < columns.length; i++){
    let columnName = columns[i].title;
    let columnId = columns[i].id;
    // создание заголовка колонки
      let element = document.createElement("div")
      let text = document.createTextNode(`${columnName}`)
      element.setAttribute("class",columnId);
      element.appendChild(text);
      div.appendChild(element);
    // добавили иконку с плюсом
      let buttonAdd = document.createElement("i");
      buttonAdd.setAttribute("class", "fa fa-plus-circle");
      element.appendChild(buttonAdd);
    // добавили ивент на иконку
      buttonAdd.addEventListener('click',()=>{ 
        let clientValue = prompt("What do you want to do?");
        if (clientValue===null){
            clientValue = '';
        };
        let columnIdCreate = buttonAdd.parentElement.class;
        addCards(clientValue,columnIdCreate, element);
      });
  }};
