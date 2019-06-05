'user strict';

import { getCards ,
		 addCard ,
		 removeCard,
		 updateCard,
		 getCardLastTittle,
		 createNewNode} from './cards1' ;
import { getColumns} from './columns1' ;

import {createColumns,
		createCard} from './createElement';

import styles from './css.css';
import { dragStart,
		onDragOver,
		onDrop} from './Drag\'n\'Drop' ;




async function buildAndCreate() {	
	const columnArr = await getColumns();
	// создаю колонки
	createColumns(columnArr);
	let cardsArrFromId = await getCards();
	// создаю карточки
	cardsArrFromId.forEach(object => createCard(object));


// =================РАБОТА С ИВЕНТАМИ=======================
	let elementDesk = document.getElementById('desk');

		// узнаю по какой кнопке нажали и передаю данные в updateCard
	elementDesk.addEventListener('keydown', async event => {
		if(event.keyCode === 13){
			event.preventDefault();
			let targetElementText = event.target.textContent;
				if(targetElementText && targetElementText.length){
				let targetElementId = +event.target.getAttribute('data-text');
				console.log(targetElementId);
				updateCard(targetElementText,targetElementId);
				}
		};
		if(event.keyCode === 27){
			let targetElementId1 = +event.target.getAttribute('data-text');
			let nodeBeforeEditing = await getCardLastTittle(targetElementId1);
			createNewNode(targetElementId1,nodeBeforeEditing);
		};
	});
	// узнаю по какому елементу кликнули и передаю данные в removeCard
	elementDesk.addEventListener('click', event =>{
		let deleteClass = 'fas fa-trash-alt';
	  	let targetDelete = event.target.getAttribute('class');
	  	if(targetDelete === deleteClass){
	    let elementDelete = +event.target.closest('[data-card]').getAttribute('data-card');
	    console.log(elementDelete);
	    removeCard(elementDelete);
		 }
	});
		// узнаю по какому елементу кликнули и передаю данные в addCards
	elementDesk.addEventListener('click', event => {
		  let addClass = "fa fa-plus-circle";
		  let targetAdd = event.target.getAttribute('class');
		  if(targetAdd===addClass){ 
		  let targetColumn = +event.target.closest('[data-column]').getAttribute('data-column');

		  let promptCard = prompt('what you want to do?');
		  if(promptCard&&promptCard.length){ 
		  addCard(promptCard,targetColumn);
		};
	}
	});
// ======================================Drag'n'Drop=========================================================
	let elementCard = document.querySelectorAll('[data-card]');
	let elementColumn = document.querySelectorAll('[data-column]');
	let current;
	elementCard.forEach(elem=>{
		elem.addEventListener('dragstart',event=>{
			current=elem;
			// event.dataTransfer.setData("text", 'This my dragStart');
		});
	});
	elementColumn.forEach(elemParent=>{
		elemParent.addEventListener('gragover', event=>{
		event.preventDefault();
		console.log('dragover');
	});
	});
	elementColumn.forEach(elemParent=>{
		elemParent.addEventListener('drop' , event=>{
		event.preventDefault();

		// console.log(event.dataTransfer.getData("text"));
		elementColumn.appendChild(current);
	});
	});
};

buildAndCreate();
