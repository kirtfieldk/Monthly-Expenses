	const UIHours = document.querySelector('#hours');
	const UIWage = document.querySelector('#wage');
	const pay = document.querySelector('#pay')
	const loadingText = document.querySelector('.loading-text');

document.getElementById('form-group').addEventListener('submit', function(e){
	document.querySelector('.load-text').style.display = 'none';
	document.querySelector('.results').style.display = 'none';
	if(UIHours.value <= 0 || UIWage.value <= 0){
	 	setMessage("Wage or Hours must be greater than 0.");
	  }else{
	  	document.querySelector('.load-text').style.display = 'block';
		setTimeout(calculatePay, 2000);
}
	e.preventDefault();
});

function calculatePay(){
	  	let netPay = parseFloat(UIHours.value) * parseFloat(UIWage.value);
	  	pay.value = (netPay).toFixed(2);
	  	document.querySelector('.load-text').style.display = 'none';
		document.querySelector('.results').style.display = 'block';
	}



function setMessage(msg){
	var newDiv = document.createElement('div');
	newDiv.className = 'to-remove card bg-danger text-center mt-5 w-75 container';
	var newContent = document.createTextNode(msg)
	newDiv.appendChild(newContent);
	var currentDiv = document.querySelector('.form-group');
	document.body.insertBefore(newDiv, currentDiv); 

	setTimeout(clear, 3000);
}


function clear(){
	document.querySelector('.to-remove').remove();

}
