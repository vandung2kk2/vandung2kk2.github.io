window.onscroll = function(){
	if(window.scrollY >= 90){
		document.getElementById("menu").classList.remove("first");
		document.getElementById("menu").classList.add("active");
	} else{
		document.getElementById("menu").classList.remove("active")
		document.getElementById("menu").classList.add("first")
	}
}
