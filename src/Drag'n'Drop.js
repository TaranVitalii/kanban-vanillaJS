import {updateColumnId} from './cards1' ;
import io from 'socket.io-client';

const socket = io.connect("ws://localhost:8089/", { transports: ["websocket"] });



export function dragStart(event){
let idColumnBefore = +event.currentTarget.closest('[data-column]').getAttribute('data-column');
let targetIdCard = event.target.getAttribute('data-card');
let object = JSON.stringify({
        idColumn:idColumnBefore,
        targetId:targetIdCard
});
    event.dataTransfer.setData("object", object);
		
}
export function dragOver(event){
	event.preventDefault();
}

export  function onDrop(event){
	event.preventDefault();
			
		let targetColumn= +event.target.closest('[data-column]').getAttribute('data-column');
		let data = JSON.parse(event.dataTransfer.getData("object"));
		let cardIdTarget = data.targetId;
			if(data.idColumn != targetColumn){
				let cardFromSetData = document.querySelector(`[data-card="${data.targetId}`);
				let columnIdAfterEdit = document.querySelector(`[data-column="${targetColumn}`)
				columnIdAfterEdit.append(cardFromSetData);
				return { cardIdTarget, targetColumn }
				// let response = await updateColumnId(data.targetId, targetColumn);
				// if(response.status ===200){
					
				// };
			};
		}