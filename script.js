var obj=document.getElementsByClassName("opt");
for(var i=0; i<obj.length; i++){
	obj[i].addEventListener("click",function(){
		for(var i=0; i<obj.length; i++){
			obj[i].classList.remove("active");
		}
		this.classList.add("active");
	})
}