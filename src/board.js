'user strict';

import { getCards } from './cards1' ;
import { addCards } from './cards1' ;
import { localStorageCards } from './cards1' ;
import { removeCard } from './cards1' ;
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
		console.log(arrCards)
		
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
				let columnIdCreate = buttonAdd.parentElement.class;
				addCards(clientValue,columnIdCreate, element);
			});

		

		// создание столбца карточек
			for(let j = 0; j < arrCards.length; j++ ){	
			let card = arrCards[j];
			let cardId = card.id;
			let cardTitle = arrCards[j].title;
			let paragraph = document.createElement("p");
			let cardTextHTML = document.createTextNode(cardTitle);
			let idCardPlus10 = cardId;
			paragraph.setAttribute("id", idCardPlus10);
			paragraph.appendChild(cardTextHTML);
			element.appendChild(paragraph);
			// создание иконки для удаление
			let iconParent = document.getElementById(`${idCardPlus10}`);
			let buttonDelete = document.createElement("i");
			buttonDelete.setAttribute("class", "fas fa-trash-alt");
			iconParent.appendChild(buttonDelete);
			// создание иконки для добавления
				buttonDelete.addEventListener('click',()=>{
				let idCards = buttonDelete.parentElement.id;
				removeCard(idCards);

				})
			}
		}
	};


buildAndCreate(columnArr);

// это я создал просто попробовать добавить все мои карточки в локалсторидж, я их добавил и они даже удаляются но после перезагрузки всё
// по новой, мне кажеться это из-за того что у меня все файлы на прямую работают с массивом кардс
localStorageCards();
