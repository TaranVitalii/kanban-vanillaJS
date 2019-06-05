'user strict';
import {createCard} from './createElement';
import axios from 'axios';

// функция получает массив карточек
export async function getCards(){
      const cardsURL = 'http://localhost:8089/api/card';
      const response = await fetch(cardsURL,{method:'GET'}) 
      const cardsArr = await response.json();
	return cardsArr;
}
// ===========================================================================================================

// функция удаляет карточку с сервера и UI
export async function removeCard(elementDelete) {
    const url = `http://localhost:8089/api/card/${elementDelete}`;
    const response = await fetch(url,{method:'DELETE',});
    document.querySelector(`[data-card="${elementDelete}"`).remove();
  };
// ==============================================================================================================

// функция добавляет карту на сервер и создает на UI
export async function addCard(promptCard,targetColumn){
  const url = 'http://localhost:8089/api/card';
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
  });
  let data = await response.json();
  createCard(data);

 };
// ==================================================================================================================
                                          // ОБНОВЛЕНИЕ ДАННЫХ НА КАРТОЧКЕ
// функция получает предыдущий title с сервера по нажатию esc 
export async function getCardLastTittle(id) {
  let cardResponse = await axios.get(`/api/card/${id}`)
  let cardtitle = cardResponse.data.title;
  return cardtitle;
}
// функция добавляет новые данные в ноду
export function createNewNode(id,node){
  let elementById = document.querySelector(`[data-text="${id}"]`);
  elementById.textContent = node;
}
// отправляю на сервер обновленные данные ноды
export async function updateCard(node, id) {
  let editorNode = {title:`${node}`,};
  let cardRequest = await axios.patch(`/api/card/${id}`,editorNode)
}
// ================================================================================================================