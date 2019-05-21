'user strict';

import { getCards } from './cards1' ;
import { getColumns } from './columns1' ;
import styles from './css.css';
// вызываем массив колонок
const columnArr = getColumns();

// за какой елемент в дереве будем цепляться
let div = document.getElementById("desk");

function buildAndCreate(columnArr) {	
	for(let i = 0; i < columnArr.length; i++){
		// заголовок колонки и айдишник
		let columnName = columnArr[i].title;
		let columnId = columnArr[i].id;
		let arrCards = getCards(columnId);
		
		// создание заголовка колонки
		  	let element = document.createElement("div")
			let text = document.createTextNode(`${columnName}`)
			element.setAttribute("id",columnId);
			element.appendChild(text);
			div.appendChild(element);

		// выбираем нужный нам див
		let divColumn = document.getElementById(`${columnId}`);
		
		// создание столбца карточек
			for(let j = 0; j < arrCards.length; j++ ){	
			let card = arrCards[j];
			let cardId = card.id;
			let cardTitle = arrCards[j].title;
			let paragraph = document.createElement("p");
			let cardTextHTML = document.createTextNode(`${cardTitle}`);
			paragraph.setAttribute("class", "card "+cardId );
			paragraph.appendChild(cardTextHTML);
			divColumn.appendChild(paragraph);
				}
		}
	};

	
// вызов данной функции с нужными нам значениями
buildAndCreate(columnArr);
