import {getCards ,
		addCard ,
		updateCard,
		getCardLastTittle} from './cards1' ;
import {createCard} from './createElement';
import axios from 'axios';

// =====================================================================Values=====================================
function mockFetch(data,stage){//замокали фетч
	
	if(stage === 'resolve'){
	return jest.fn().mockResolvedValueOnce(data);
	}else {
	return jest.fn().mockRejectedValue(new Error('Async error'));
	}
};

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
const cardData = {
	id:0,
	title:'todo something',
	column:1,
};
// ============================================================getCards========================================================

// тест функции
describe('getCards',()=>{
		// тест на обычные условия
		test('getCards function normal work', async () => {
			global.fetch = mockFetch(dataJSON,'resolve');

			const data = await getCards();

			expect(data).toBe(dataColumn);
		});

				// // тест на условия reject
				// test('function reject promise', async () => { //второй тест не работает, показывает ошибку на слово new, и пишет Async error

				// 	global.fetch = mockFetch(null,'reject');

				//   	const data = await getCards();
				//   	expect(data).toBe('Async error');
				// });
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
	test('getCardLastTittle', async ()=>{
		axios.get = jest.fn().mockReturnValue(Promise.resolve({data:cardData}));
		const result = await getCardLastTittle();
		expect(result).toBe('todo something');
	});
	// test('getCardLastTittle', async ()=>{           // тоже не знаю что делать с ошибкой
	// 	 const err = new Error();
 // 			   err.code = 404;
	// 	axios.get = jest.fn().mockReturnValue(Promise.reject(err).rejects.toHaveProperty('code', 404));
	// 	const result = await getCardLastTittle();
	// 	expect(result).toBe(404);
	// });
})
// ===================================================updateCard=========================================================

describe('updateCard',()=>{
	test('with method patch', async ()=>{
		let textValue = 'hello';
		cardData.title = textValue;
		axios.patch = jest.fn().mockReturnValue(Promise.resolve({data:cardData}));
		const result = await getCardLastTittle();
		expect(result).toBe(textValue);
	});
	test('with method patch', async ()=>{
		let textValue;
		cardData.title = textValue;
		axios.patch = jest.fn().mockReturnValue(Promise.resolve({data:cardData}));
		const result = await getCardLastTittle();
		expect(result).toBe(undefined);
	});

})