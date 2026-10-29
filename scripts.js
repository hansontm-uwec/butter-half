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
		document.querySelector('.cart').classList.add('remove');
	});
    document.querySelector('.cart input[type=submit]').addEventListener('click', function(){
		document.querySelector('.cart dialog').classList.add('success');
	});
});