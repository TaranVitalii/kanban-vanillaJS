import {getCards ,
		addCard ,
		updateCard,
		getCardLastTittle} from './cards1' ;
import {createCard} from './createElement';
import axios from 'axios';


// ============================================================getCards========================================================

// тест функции
describe('getCards',()=>{
		// тест на resolve условия
		it('getCards function resolve promise', async () => {
			const cardValue = {
				json:()=>{
					let data ={
			        title: 'hello',
			     	column: 0,
			     	id:4
			     	}
			     	return data;
			  	},
			};
			global.fetch = jest.fn().mockResolvedValueOnce(cardValue);

			const data = await getCards();

			expect(global.fetch).toHaveBeenCalledWith('http://localhost:8089/api/card', {method:'GET'});
			expect(data).toEqual(cardValue.json());
		});

		// тест на условия reject
		it('function getCards reject promise', async () => {
			global.fetch = jest.fn().mockRejectedValueOnce();
			let data = null;
			try {
				data = await getCards();  //ловим ошибку которая образуется в функции
			} catch (e) {
				expect(global.fetch).toHaveBeenCalledWith('http://localhost:8089/api/card', {method:'GET'});
				expect(data).toEqual(null);
			}
		});
});
// ==========================================================================addCards=======================================================
describe('addCards input values',()=>{
	const cardValue = {
				json:()=>{
					let data ={
			        title: 'hello',
			     	column: 0,
			     	id:4
			     	}
			     	return data;
			  	},
			  };
	const methodPost = {
		    method:'POST',
		    mode:'cors',
		    body: JSON.stringify(cardValue),
		    headers:{ 
		      "Accept":"application/json",
		    "Content-Type":"application/json"}
		  };

	it('addCards with response request',async()=>{
		global.fetch = jest.fn().mockResolvedValueOnce(cardValue)

		const data = await addCard();

		expect(global.fetch).toHaveBeenCalledWith('http://localhost:8089/api/card', methodPost);
		expect(data).toEqual(cardValue.json());
	})
	it('addCards with response request', async()=>{
		global.fetch = jest.fn().mockRejectedValueOnce();

		let data = null;
		try{
			data = await addCard();
		}catch (e){
			expect(global.fetch).toHaveBeenCalledWith('http://localhost:8089/api/card', methodPost);
			expect(data).toEqual(null);
		}
	})
});
// ===================================================getCardsLastTittle=========================================================
describe('getCardLastTittle',()=>{
	it('getCardLastTittle function resolve promise', async ()=>{
		const cardId = 0;
		const cardData = {
					id:0,
					title:'todo something',
					column:1,
				};

				// мок аскиоса
		axios.get = jest.fn(()=> Promise.resolve({data:cardData}));
		const result = await getCardLastTittle(cardId); 

		expect(axios.get).toHaveBeenCalledWith( `/api/card/${cardId}`);
		expect(result).toEqual('todo something');
	});
	it('getCardLastTittle function reject promise', async ()=>{
		const cardId = 0;
		axios.get = jest.fn(()=>Promise.reject());//мок функции
 		const result = null;
 		try{
		result = await getCardLastTittle(cardId) //ловим ошибку которая образуется в функции
		}catch(e){
		expect(axios.get).toHaveBeenCalledWith( `/api/card/${cardId}`);
		expect(result).toEqual(null);
		}
	});
})
// ===================================================updateCard=========================================================

describe('updateCard',()=>{
		const textValue = 'hello';
		const cardId = 0;
		const cardData = {
					id:0,
					title:'todo something',
					column:1,
				};
	it('updateCard function resolve promise', async ()=>{

		axios.patch = jest.fn().mockResolvedValueOnce({cardData});
		const result = await updateCard(textValue,cardId);

		expect(axios.patch).toHaveBeenCalledWith(`/api/card/${cardId}`, {title:textValue})
		expect(result).toEqual(undefined); // функция ничего не возвращает так что будет undefined
	});
	it('updateCard function reject promise', async ()=>{

		axios.patch = jest.fn().mockRejectedValueOnce();
		const result = null;
		try{
			result = await updateCard(textValue,cardId);  //ловим ошибку которая образуется в функции
		}catch(e){
		expect(axios.patch).toHaveBeenCalledWith(`/api/card/${cardId}`, {title:textValue})
		expect(result).toEqual(null);
		}
	});

})