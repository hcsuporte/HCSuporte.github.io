	/*$(document).ready(function(){
		$("#particles-js").css({"height":$(window).height() + "px"});
	});*/


	function Scroll(){ 
	var ypos = window.pageYOffset;
	var anima1 = document.getElementById('anima1');
	var anima2 = document.getElementById('anima2');
	var anima3 = document.getElementById('anima3');
	var flip = document.getElementsByClassName("flipa");
		
		anima1.classList.toggle("slideInLeft", ypos > 300 );	
		anima2.classList.toggle("slideInUp", ypos > 300	 );	
		anima3.classList.toggle("slideInRight", ypos > 300 );
	 	for (var i = 0; i < flip.length; i++) {      
	    	flip[i].classList.toggle("wobble", ypos > 1000 );  
	    }
	    console.log(ypos);
		
	}
		window.addEventListener("scroll",Scroll);

	var marginY = 0;
	var destination = 0;
	var scroller = null;


	function initScroll(elementId){
		destination = document.getElementById(elementId).offsetTop-124;	

		scroller = setTimeout(function(){
			initScroll(elementId);
		}, 1);

		marginY = destination

		if(marginY >= destination){
			clearTimeout(scroller);
		}

		window.scroll(0, marginY);
		
	}

	function Retorno(elementId){
		destination = document.getElementById(elementId).offsetTop-124;

		scroller = setTimeout(function(){
			Retorno(elementId);
		}, 1);

		marginY = destination

		if(marginY <= destination){
			clearTimeout(scroller);
		}	

		window.scroll(0, marginY);
		
	};

	function scrollpage(elementId) {
		destination = document.getElementById(elementId).offsetTop;
		if(destination>marginY){
			initScroll(elementId);
		}else{
			Retorno(elementId);
		}
	};