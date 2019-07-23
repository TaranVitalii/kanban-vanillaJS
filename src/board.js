import {getCards ,
		addCard ,
		updateCard,
		getCardLastTittle} from './cards1' ;
import { getColumns} from './columns1' ;

import {createColumns,
		createCard,
		removeCard,
		updateCardText} from './createElement';

import styles from './css.css';
import {dragStart,
		dragOver,
		onDrop} from './Drag\'n\'Drop';
import {rollUp} from './localStorage';


async function buildAndCreate() {	
	const columnArr = await getColumns();
	// создаю колонки
	createColumns(columnArr);
	let cardsArrFromId = await getCards();
	// создаю карточки
	cardsArrFromId.forEach(object => createCard(object));

// =================РАБОТА С ИВЕНТАМИ=======================

	let elementDesk = document.getElementById('desk');

	//ВОЗВРАЩЕНИЕ ПРЕДДЫДУЩЕГО ЗНАЧЕНИЯ ПОСЛЕ СНЯТИЯ ФОКУСА С ЕЛЕМЕНТА
	elementDesk.addEventListener('blur',async event =>{
		let cardId = event.target.closest('[data-card]').getAttribute('data-card');
		let nodeBeforeEditing = await getCardLastTittle(cardId);
			updateCardText(cardId,nodeBeforeEditing);
	},true);
	// узнаю по какой кнопке нажали и передаю данные в updateCard
	elementDesk.addEventListener('keydown', async event => {	
		if(event.keyCode === 13){
			event.preventDefault();
			let targetElementText = event.target.textContent;
				if(targetElementText && targetElementText.length){
				let targetElementId = event.target.getAttribute('data-text');
				updateCard(targetElementText,targetElementId);
				};
		};
					if(event.keyCode === 27){
						let targetElementId1 = event.target.getAttribute('data-text');
						let nodeBeforeEditing = await getCardLastTittle(targetElementId1);
							updateCardText(targetElementId1,nodeBeforeEditing);
					};
	});
	// узнаю по какому елементу кликнули и передаю данные в removeCard
	elementDesk.addEventListener('click', event =>{
	  	let targetDelete = event.target.getAttribute('data-remove');
	  	
		  	if(targetDelete){
			    let elementDelete = event.target.closest('[data-card]').getAttribute('data-card');
		    		removeCard(elementDelete);
			}
	});
		// узнаю по какому елементу кликнули и передаю данные в addCards
	elementDesk.addEventListener('click',async event => {
		  let targetAdd = event.target.getAttribute('data-add');
		  	if(targetAdd){ 
			  let targetColumn = event.target.closest('[data-column]').getAttribute('data-column');
			  let promptCard = prompt('what you want to do?');
				if(promptCard&&promptCard.length){ 
				  	createCard(await addCard(promptCard,targetColumn));
				};
			};
	});
// ======================================Drag'n'Drop=========================================================
	// выделили колонки и карточки
	let cardId = document.querySelectorAll('[data-card]');
	let elementColumn = document.querySelectorAll('[data-column]');
	// добавили ивент на каждые елемент на каждый елемент родитель
	elementColumn.forEach(elemParent=>{
		elemParent.addEventListener('dragover',dragOver); 
	});
	// добавили ивент на каждые елемент на каждый елемент родитель
	elementColumn.forEach(elemParent=>{
		elemParent.addEventListener('drop' , onDrop);
	});
// ========================localStorage=================================================
	elementDesk.addEventListener('click', rollUp);
// ================================================================================
};

buildAndCreate();
