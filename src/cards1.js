'user strict';

// возвращает массив карточек
export async function getCards(columnId){
      const cardsURL = 'http://localhost:8089/api/card';
      const response = await fetch(cardsURL,{method:'GET'}) 
      const cards = await response.json();
	return cards.filter(card => card.column === columnId);
}



export async function removeCard(event) {
  let deleteClass = 'fas fa-trash-alt';
  let targetDelete = event.target.getAttribute('class');
  if(targetDelete === deleteClass){
    let elementDelete = event.target.parentNode.getAttribute('data-card');
    const url = `http://localhost:8089/api/card/${elementDelete}`;
    const response = await fetch(url,{method:'DELETE',});
    event.target.parentNode.remove();
  };

}

export async function addCards(event){
  const url = 'http://localhost:8089/api/card';
  let addClass = "fa fa-plus-circle";
  let targetAdd = event.target.getAttribute('class');
  if(targetAdd===addClass){
  let targetColumn = +event.target.parentNode.getAttribute('data-column');  
  let promptCard = prompt('what you want to do?');
  let response = await fetch(url,{
    method:'POST',
    mode:'cors',
    body: JSON.stringify({
      title: promptCard,
     column: targetColumn,
  }),
    headers:{ 
      "Accept":"application/json",
    "Content-Type":"application/json"}//увидил такие данные передавали с json понятно, а вот чарсет нужен ли вообще?
  })
  location.reload(); 
  // можно сказать это ф5 в виде JS я знаю что можно как-то добавить мой елемент без перезагрузки
   // ( дорисовать в дом плохой вариант я считаю, запушить я не могу так как мне надо id.)Буду рад за подсказку:сделать более ефективного?
 };
}


export async function updateCard(event){
 
  const url = `http://localhost:8089/api/card/${targetElementForId}`;
  let targetNode = event.target.querySelector(`[data-text="${targetElementForId}"]`).firstChild;
  let response = await fetch(url,{
    method:'PATCH',
    mode:'cors',
    body: JSON.stringify({
      title: targetNode,
    }
  ),
    headers:{ 
      "Accept":"application/json",
    "Content-Type":"application/json"}//увидил такие данные передавали с json понятно, а вот чарсет нужен ли вообще?
  });
  }
