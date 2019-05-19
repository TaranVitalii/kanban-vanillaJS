'user strict';

import { getCards } from './cards1' ;
import { getColumns } from './columns1' ;

const columnArr = getColumns();

function render(columnArr) {
	let object = [];
	for(let i = 0; i < columnArr.length; i++){
		let newColumn = getCards(columnArr[i]);
		object.push(newColumn);
		}
	return object;
	};
let ObjectArr = render(columnArr);

let toDo = document.getElementById("toDo");

for (let j = 0; j < ObjectArr.length; j++) {
    let div = document.createElement("div");
    	div.setAttribute("class", "new");
		div.innerHTML = "fasd"; 
		toDo.appendChild(div);
    	toDo.appendChild(document.createElement("br"));
}






// if(i===0){
// 				let toDo = document.getElementById("toDo");
// 				console.log(toDo)
// 				for (let j = 0; j < 10; j++) {
// 	  		  	let div = document.createElement("div");
// 				div.innerHTML = "JSON.stringify(newColumn)"; 
// 				toDo.appendChild(div);
// 	  		  	toDo.appendChild(document.createElement("br"));
// 				}

		
// 		}