const UIincome = document.querySelector('#weekly-income'),
	  UIexpense = document.querySelector('#expense-type'),
	  UIexpenseAmount = document.querySelector('#amount'),
	  totalExpense = document.querySelector('.expense-value'),
	  totalIncome = document.querySelector('.income-value'),
	  finalSubmit = document.querySelector('#final-submit'),
	  modal = document.querySelector('.model'),
	  span = document.getElementsByClassName("close")[0];
let expenseArr = [];
let incomeArr = [];
/////////////////////////////////////////////////////////////////////////////////
document.getElementById('final-submit').addEventListener('click', function(e){
const ui = new Ui();
 if(ui.insertValue(expenseArr) < ui.insertValue(incomeArr)){
 	document.querySelector('.container').style.display = 'none';
 	document.querySelector('.summery').style.display = "grid";
 	totalIncome.innerHTML = ui.insertValue(incomeArr);
 	totalExpense.innerHTML = ui.insertValue(expenseArr);
 	document.querySelector('.ni').style.color = 'green';
 	document.querySelector('.net-value').innerHTML = ui.insertValue(incomeArr) - ui.insertValue(expenseArr);
 	document.querySelector('.net-value').style.color = 'green';
 	document.querySelector('.grid-header').style.color = 'green';
 } else if(ui.insertValue(expenseArr) > ui.insertValue(incomeArr)){
 	document.querySelector('.container').style.display = 'none';
 	document.querySelector('.summery').style.display = "grid";
 	totalIncome.innerHTML = ui.insertValue(incomeArr);
 	totalExpense.innerHTML = ui.insertValue(expenseArr);
 	document.querySelector('.ni').style.color = 'red';
 	document.querySelector('.net-value').innerHTML = ui.insertValue(expenseArr) - ui.insertValue(incomeArr);
 	document.querySelector('.net-value').style.color = 'red';
 	document.querySelector('.grid-header').style.color = 'red';
 	}else if (ui.insertValue(expenseArr) == ui.insertValue(incomeArr)){
 	document.querySelector('.container').style.display = 'none';
 	document.querySelector('.summery').style.display = "grid";
 	totalIncome.innerHTML = ui.insertValue(incomeArr);
 	totalExpense.innerHTML = ui.insertValue(expenseArr);
 	document.querySelector('.ni').style.color = 'grey';
 	document.querySelector('.net-value').innerHTML = ui.insertValue(expenseArr) - ui.insertValue(incomeArr);
 	document.querySelector('.net-value').style.color = 'grey';
 	document.querySelector('.grid-header').style.color = 'grey';
 	}
 	e.preventDefault();
 })
////////////////////////////////////////////////////////////////////////
document.querySelector('#go-back').addEventListener('click', function(e){
	document.querySelector('.container').style.display = 'block';
 	document.querySelector('.summery').style.display = "none";
 	e.preventDefault();
})
////////////////////////////////////////////////////////////////////////
document.getElementById('change').addEventListener('click', function(e){
	const ui = new Ui();
	const income = new Income(UIincome.value);
	ui.addToArr(incomeArr, income);		
	ui.setMessage("Added!", 'success');
	e.preventDefault();
});
////////////////////////////////////////////////////////////////////////
document.getElementById('add-on').addEventListener('click', function(e){
	const ui = new Ui();
	//Validate the expense
	if(UIexpenseAmount.value > 0){	
	const expense = new Expense(UIexpense.value, UIexpenseAmount.value);
	ui.addToArr(expenseArr, expense);
	ui.setMessage("Added!", 'failure');
	ui.addToList(expense);
	}if(UIexpenseAmount.price < 0){
	const income = new Income(UIexpenseAmount.value);
	ui.addToArr(incomeArr, income);	

	
}
	e.preventDefault();
})
//////////////////////////////////////////////////////////////////////////////
document.querySelector('#expense-list').addEventListener('click', function(e){
  // Instantiate UI
  const ui = new Ui();

  // Delete book
  ui.deleteBook(e.target);

  // Show message
  //ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
})
///////////////////////////////////////////////////////////////////////////////
//income obj
class Income{
	constructor(price){
		this.price = price;
	}
}
///////////////////////////////////////////////////////////////////////////////
//Expense Obj
class Expense{
	constructor(names, price){
		this.names = names;
		this.price = price;
	}
}
////////////////////////////////////////////////////////////////////////////////
//UI obj
class Ui{
	constructor(){}
	
	//Adds income to Array
addToArr(arr, obj){
	 arr.push(obj);
	}
addToList(obj){
  const list = document.getElementById('expense-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${obj.names}</td>
    <td>${obj.price}</td>
    <td>${this.runningTotal(expenseArr)}</td>
    <td><a href="#" class="delete">Remove<a></td>
  `;

  list.appendChild(row);
}	
runningTotal(arr){
	let total = 0;
	for(let i = 0; i < arr.length; i++){
		total = total + parseFloat(arr[i].price);
	}
	return total;
}
deleteBook(target){
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }

}

insertIncomeValue(obj){
	return obj.price;
}
insertValue(arr){
	return this.runningTotal(arr);
}

setMessage(msg, objClass){
		const div = document.createElement('div');
	div.className = `alert ${objClass} u-full-width`;
	div.appendChild(document.createTextNode(msg));
	const container = document.querySelector('.container');
	//referenceNode.after(div);
  	// Get form
  	const form = document.querySelector('.form');
  	// Insert alert
  	container.insertBefore(div, form);
  	setTimeout(function(){
    	document.querySelector('.alert').remove();
  	}, 3000);
}


// message(msg, class){
// 	const div = document.createElement('div');
// 	div.className = `alert ${class}`;
// 	div.appendChild(document.createTextNode(msg));
// 	const referenceNode = document.querySelector('#change');
// 	referenceNode.after(div);
  	// // Get form
  	// const form = document.querySelector('.form');
  	// // Insert alert
  	// container.insertBefore(div, form);

  	// Timeout after 3 sec
//   	setTimeout(function(){
//     	document.querySelector('.alert').remove();
//   	}, 3000);
 }


