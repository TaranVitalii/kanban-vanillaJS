'user strict';

const cards = [
  {
    id: 1,
    title: 'Зробити домашку',
    column: 0,
  },
  {
    id: 2,
    title: 'Встановити Node.js',
    column: 2,
  },
  {
    id: 3,
    title: 'Встановити Node.js',
    column: 1,
  },
  {
    id: 4,
    title: 'Встановити Node.js',
    column: 0,
  },
];


export function getCards(columnId){
	let correctCards = [];
	for(let i = 0; i < cards.length;i++){
		let column = cards[i].column;
		if(column === columnId){
			correctCards.push(cards[i]);
		}

	}
	return correctCards;
}

// console.log(getCards(1));