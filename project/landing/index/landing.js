const menuCon = document.querySelector('.menu-container');
const menu = document.querySelectorAll('.menu');
const mTitle = document.querySelectorAll('.menu-title');
const conCon = document.querySelector('.content-container');
const content = document.querySelectorAll('.content');



menuCon.addEventListener('click', menuHandler);	

function menuHandler(e) {
	elem = e.target;
	while(!elem.classList.contains('menu')){
		elem = elem.parentNode;
		if(elem.nodeName == "BODY") {
			elem = null;
			return;
		}
	}
	for(i=0; i<menu.length; i++) {
		mTitle[i].classList.add('hide');
		if(elem.dataset.value == (i+1)) {
			mTitle[i].classList.remove('hide');
			mTitle[i].style.fontSize = "160px"
			menu[i].classList.add('expand');
			menu[i].classList.add('fade-out');
			doSetTimeout(i);
		}
	}
}

function doSetTimeout(i){
	setTimeout(function(){
		menuCon.classList.add('hide');
		content[i].classList.add('flex');
		content[i].classList.add('fade-in');
	},2400);
}


