const cards = [
{
	id:9,
	title: "Делать домашку",
	column: 6,
},
{
	id:10,
	title:"Выгулять собаку ",
	column:7,
},
{
	id:11,
	title:"Стать програмистом",
	column:8,
},
{
	id:12,
	title:"Выучить DOM",
	column:8,
},
{
	id:13,
	title:"Познать",
	column:6,
},
];

function getCards(){
	const arrCards = [];
	for(let i=0; i<cards.length;i++){ 
	
	let newTitle = cards[i].title;
	arrCards.push(newTitle);
	const poza =querySelector('#cards');
	const position = createElement('p');
	console.log(position);
	position.append(`<div>${newTitle}</div>`);
	}

	return arrCards;
}
console.log(getCards());


// function getCards(){
// const toDoArr = [];
// const progressArr = [];
// const done = [];

// for (let i = 0; i < cards.length; i++){
// 	let cardsColumn = cards[i].column;
// 	let cardsTitle = cards[i].title;
// 	if(cardsColumn === 8){
// 		done.push(cardsTitle);
// 	} else if (cardsColumn ===7){
// 		progressArr.push(cardsTitle);
// 	}else {
// 		toDoArr.push(cardsTitle);
// 	}
// }
// return [toDoArr,progressArr,done]
// }