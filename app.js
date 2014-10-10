var current= 1;
var imgs = [];


// this function will find the image that correspond to the index current 
// and show it and hide the rest
function showPic() {
	var total = imgs.length;

	if(current>=total){
		current=0;
	}
	if(current<0){
		current=total-1;
	}
	for (var i = 0; i < total; i++) { 
		
    	if(i === current){
    		imgs[i].style.visibility = 'visible';
    	}else{
    		imgs[i].style.visibility = 'hidden';
    	}
	}
}

// Do this after the page loaded
document.addEventListener("DOMContentLoaded", function(event) { 
	imgs = document.querySelectorAll('.caroussel img');
	showPic(); // current equals zero here


	// queryselector find a dom[html] element 
	// addeventlistener adds an event listener
	document.querySelector('.next').addEventListener('click', function(){
		current += 1;
		showPic();
		console.log(current);
	});

	document.querySelector('.hi').addEventListener('click', function(){
		current -= 1;
		showPic();
		console.log(current);
	});

});

