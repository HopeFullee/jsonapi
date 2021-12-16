const splitCon = document.querySelector('.split-container');
const section = document.querySelectorAll('.split-container > section');
const conCon = document.querySelector('.content-container');
const content = document.querySelectorAll('.content');


splitCon.addEventListener('click', function(e){
	for(i=0; i<section.length; i++){
		if(e.target == section[i]){
			section[i].classList.add('expand');
			section[i].classList.add('fade-out');
			doSetTimeout(i);
			}
		}
	})

function doSetTimeout(i){
	setTimeout(function(){
		splitCon.classList.add('hide');
		conCon.classList.add('show');
		content[i].classList.add('show');
		content[i].classList.add('fade-in');
	},2400);
}


