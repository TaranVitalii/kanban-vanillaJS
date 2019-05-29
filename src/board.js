'user strict';

import { getCards ,
		 addCards ,
		 removeCard,
		 updateCards} from './cards1' ;
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
				}
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
	};


buildAndCreate(columnArr);
