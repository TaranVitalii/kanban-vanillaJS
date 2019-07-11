import axios from 'axios';

// функция получает массив карточек
export async function getCards(){
      const cardsURL = 'http://localhost:8089/api/card';
      const response = await fetch(cardsURL,{method:'GET'}) 
      const cardsArr = await response.json();
      console.log(cardsArr)
	return cardsArr;
}

// ==============================================================================================================

// функция добавляет карту на сервер и создает на UI
export async function addCard(cardText,columnId){
  const url = 'http://localhost:8089/api/card';
  let response = await fetch(url,{
    method:'POST',
    mode:'cors',
    body: JSON.stringify({
      title: cardText,
     column: columnId,
  }),
    headers:{ 
      "Accept":"application/json",
    "Content-Type":"application/json"}
  });
  let data = await response.json();
  return data
 };
// ==================================================================================================================
                                          // ОБНОВЛЕНИЕ ДАННЫХ НА КАРТОЧКЕ
// функция получает предыдущий title с сервера по нажатию esc 
export async function getCardLastTittle(id) {
  let cardResponse = await axios.get(`/api/card/${id}`)
  let cardtitle = cardResponse.data.title;
  return cardtitle;
}

// отправляю на сервер обновленные данные ноды
export async function updateCard(node, id) {
  let editorNode = {title:node,};
  console.log(editorNode);
  let cardRequest = await axios.patch(`/api/card/${id}`,editorNode)
  
}
// // ================================================================================================================
// ======================================Обновление Данных после drag'n'drop=========================================

export async function updateColumnId(id,columnId){
let editorColumnId = {column:columnId,};
let cardRequest = await axios.patch(`/api/card/${id}`, editorColumnId)
return cardRequest;
}