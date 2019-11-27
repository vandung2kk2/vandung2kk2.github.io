var autofill = ["absorb","absolute","absent","absence","accompany","acquire","beautiful","bad","bear"];
var obj = document.getElementById("search");
obj.addEventListener("keyup",autoFill);
var len=autofill.length;
var add = document.getElementById("more");
function autoFill(){
	add.innerHTML = "";
	let val = obj.value.toLowerCase();
	let number=0;
	for(let i=0;i<len;i++){
		if(autofill[i].indexOf(val) == 0 && number < 5){
			add.innerHTML += '<li class="items">'+autofill[i]+'</li>';
			number ++;
		}
	}
}
window.onload = function(){
	var ajax = new XMLHttpRequest();
	ajax.open("GET","https://vandung2kk2.github.io/Dictionary/Maps/A.txt",true);
	ajax.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			let arr = JSON.parse(ajax.responseText);
			console.log(arr)
		}
	}
	ajax.send();
}
