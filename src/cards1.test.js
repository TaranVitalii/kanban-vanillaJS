import {getCards ,
		addCard ,
		updateCard,
		getCardLastTittle} from './cards1' ;
import {createCard} from './createElement';
import axios from 'axios';

// =====================================================================Values=====================================


const dataColumn =[{
	    	column:0,
	    	title:"to do",
	    	id:0,
	    },
	    {	column:1,
	    	title:"progress",
	    	id:1,
	    }];

const dataJSON = {
	ok:true,
	json:()=>dataColumn,
};

const cardData = {
	id:0,
	title:'todo something',
	column:1,
};
// ============================================================getCards========================================================

// тест функции
describe('getCards',()=>{
	const err = new Error('Async error');
		let fetchMock;
		beforeEach(()=> { 
			fetchMock = function(data,stage){//замокали фетч
				switch(stage){
					case 'resolve':
						return jest.fn(() => Promise.resolve(data));
					break;
					case 'reject':
				 		return jest.fn(() => Promise.reject(err.message));
				 	break;
				}
			};
		});
		// тест на resolve условия
		it('getCards function resolve promise', async () => {
			const cardValue = {
				ok:true,
				json:()=>{
					let data ={
			        title: 'hello',
			     	column: 0,
			     	id:4
			     	}
			     	return data;
			  	},
			};
			global.fetch = fetchMock(cardValue,'resolve');

			const data = await getCards();

			expect(data).toEqual(cardValue.json());
		});

		// // тест на условия reject
		it('function reject promise', async () => {  // почему мне пишет ошибку на it????

			global.fetch = fetchMock(null,'reject');

		  	const data = await getCards();
		  	expect(data).toEqual(err.message);
		});
});
