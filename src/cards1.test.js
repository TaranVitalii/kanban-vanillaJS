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

		// тест на условия reject
		it('function reject promise', async () => {  // почему мне пишет ошибку на it????

			global.fetch = fetchMock(null,'reject');

		  	const data = await getCards().reject;
		  	expect(data).toEqual(undefined);
		});
});
// ==========================================================================addCards=======================================================
// describe('addCards',()=>{
// 	test('addCards with request',async()=>{
// 		global.fetch = mockFetch(cardValue,'resolve');
// 		window.createCard = jest.fn();// жест начинает тестить функцию которая внутри addCards и ни как не получается её замокать.(не знаю что делать)
// 		const data = await addCard();
// 		expect(data).toBe(cardValue);
// 	})
// });
// ===================================================getCardsLastTittle=========================================================
describe('getCardLastTittle',()=>{
	it('getCardLastTittle', async ()=>{
		const cardId = 0;
		const cardData = {
					id:0,
					title:'todo something',
					column:1,
				};


		axios.get = jest.fn(()=> Promise.resolve({data:cardData}));
		const result = await getCardLastTittle(cardId);

		expect(axios.get).toHaveBeenCalledWith( `/api/card/${cardId}`);
		expect(result).toEqual('todo something');
	});
	it('getCardLastTittle', async ()=>{
		const cardId = 0;
		const err = new Error('Async error');
 
		axios.get = jest.fn(()=>Promise.reject(err.message));
		const result = await getCardLastTittle(cardId).reject;

		expect(axios.get).toHaveBeenCalledWith( `/api/card/${cardId}`);
		expect(result).toEqual(undefined);
	});
})
// ===================================================updateCard=========================================================

describe('updateCard',()=>{
		let cardId ;
		let cardData;
		const textValue = 'hello';
		beforeEach(()=>{
			cardId = 0;
			cardData = {
					id:0,
					title:'todo something',
					column:1,
				};
		})
	it('with method patch', async ()=>{

		axios.patch = jest.fn(()=> Promise.resolve({cardData}));
		const result = await updateCard(textValue,cardId);

		expect(axios.patch).toHaveBeenCalledWith(`/api/card/${cardId}`, {title:textValue})
		expect(result).toEqual(undefined);
	});
	it('with method patch', async ()=>{

		axios.patch = jest.fn(()=> Promise.reject({cardData}));
		const result = await updateCard(textValue,cardId).reject;

		expect(axios.patch).toHaveBeenCalledWith(`/api/card/${cardId}`, {title:textValue})
		expect(result).toBe(undefined);
	});

})