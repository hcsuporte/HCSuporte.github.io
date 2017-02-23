/*$(document).ready(function(){
	$("#particles-js").css({"height":$(window).height() + "px"});
});*/

/*
function Scroll(){
var top = document.getElementById('header');
var ypos = window.pageYOffset;
if(ypos < 587) {
	top.style.position = "fixed";
}
else{
	top.style.position = "relative";
	}
}
	window.addEventListener("scroll",Scroll);*/

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