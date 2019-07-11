import {updateColumnId} from './cards1' ;

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

export async function onDrop(event){
	event.preventDefault();
			
		let targetColumn= +event.target.closest('[data-column]').getAttribute('data-column');
		let data = JSON.parse(event.dataTransfer.getData("object"));
				
			if(data.idColumn != targetColumn){
				let cardFromSetData = document.querySelector(`[data-card="${data.targetId}`);
				let response = await updateColumnId(data.targetId, targetColumn);
				if(response.status ===200){
					this.append(cardFromSetData);
				};
			};
		}