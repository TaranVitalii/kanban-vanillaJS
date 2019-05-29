'user strict';

import { getCards ,
		 addCards ,
		 removeCard,
		 updateCards,
		 createCards} from './cards1' ;
import { getColumns,
		 createColumns } from './columns1' ;
import styles from './css.css';




	// вызываем массив колонок
const columnArr = getColumns();

function buildAndCreate() {	
	createColumns(columnArr);
	for(let i = 0; i < columnArr.length; i++){
		let columnId = columnArr[i].id;
		let arrCards = getCards(columnId);
		createCards(arrCards , columnId);
	};
	
		};


buildAndCreate();