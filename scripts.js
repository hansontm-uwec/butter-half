function toggleNav() {
    let elements = document.getElementsByClassName('toggle-nav');
    for(let i = 0; i < elements.length; i++){
    elements[i].classList.toggle('show');
    }
}

//Chat Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.chat .exit').addEventListener('click', function(){
		document.querySelector('.chat>div').classList.add('hide');
		document.querySelector('.chat>button>span').classList.add('rotate');
	});
	document.querySelector('.chat>button').addEventListener('click', function(){
		document.querySelector('.chat>div').classList.remove('hide');
		document.querySelector('.chat>button>span').classList.remove('rotate');
	});
    document.querySelector('.chat input[type=submit]').addEventListener('click', function(){
		document.querySelector('.chat dialog').classList.add('get-back');
	});
    document.querySelector('.chat .button').addEventListener('click', function(){
		document.querySelector('.chat dialog').classList.remove('get-back');
	});
});

//OHNO Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.oh-no>a').addEventListener('click', function(){
		document.querySelector('.oh-no').classList.add('remove');
	});
});

//Cart Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.cart .exit').addEventListener('click', function(){
		document.querySelector('.cart').classList.remove('add');
	});
    document.querySelector('.cart input[type=submit]').addEventListener('click', function(){
		document.querySelector('.cart dialog').classList.add('success');
	});
	let cartItems = document.querySelector('.cart-items')
	document.querySelectorAll('.order button').forEach(button => {
		button.addEventListener('click', event => {
			let treatContainer = event.target.closest('div')
			let treatName = treatContainer.querySelector('h3').innerText
			let treatQuantity = treatContainer.querySelector('input').value
			let itemName = document.createElement('h4')
			itemName.innerText = treatName
			let itemQuantity = document.createElement('p')
			itemQuantity.innerText = "QTY. " + treatQuantity
			let itemAddLabel = document.createElement('label')
			itemAddLabel.innerText = "Keep Item"
			let itemAddCheck = document.createElement('input')
			itemAddCheck.type = 'checkbox'
			itemAddLabel.appendChild(itemAddCheck)
			let itemRemoveLabel = document.createElement('label')
			itemRemoveLabel.innerText = "Remove Item"
			let itemRemoveCheck = document.createElement('input')
			itemRemoveCheck.type = 'checkbox'
			itemRemoveLabel.appendChild(itemRemoveCheck)

			let item = document.createElement('div')
			item.appendChild(itemName)
			item.appendChild(itemQuantity)
			item.appendChild(itemAddLabel)
			item.appendChild(itemRemoveLabel)
			cartItems.appendChild(item)

			document.querySelector('.cart').classList.add('add')
		})
	})
});


