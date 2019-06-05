export function rollUp(event){
		let rollUpClass = "fas fa-angle-down";
		let targetrollUp = event.target.getAttribute('class');
			if(targetrollUp===rollUpClass){ 
				let targetColumn = +event.target.closest('[data-column]').getAttribute('data-column');W
				localStorage.setItem(`column ${targetColumn}`, )
				  };
}