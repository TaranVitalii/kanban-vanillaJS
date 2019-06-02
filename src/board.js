'user strict';

import { getCards ,
		 addCards ,
		 removeCard,
		 updateCard} from './cards1' ;
import { getColumns} from './columns1' ;

import {createColumns,
		createCards} from './createElement';

import styles from './css.css';



async function buildAndCreate() {	
	const columnArr = await getColumns();
	createColumns(columnArr);
	for(let i = 0; i < columnArr.length; i++){
		let columnId = columnArr[i].id;
		let cardsArrFromId = await getCards(columnId);
		createCards(cardsArrFromId, columnId);
	};

	let elementDesk = document.getElementById('desk');
	// elementDesk.addEventListener('submit', event =>{                       // не знаю как сделать обновленние правильно, вернее как зафиксировать обновлённые данные.
	// 		 		let targetElementForId = +event.target.getAttribute('data-card');
	// 		 		console.log(targetElementForId);
	// 				let targetAddNode = event.target.querySelector(`[data-text="${targetElementForId}"]`);
	// 				console.log(targetAddNode);
	// });
	elementDesk.addEventListener('click', removeCard);
	elementDesk.addEventListener('click', addCards);
	
};

buildAndCreate();
	
