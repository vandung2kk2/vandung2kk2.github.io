window.onload = function(){
	var autofill;
	var obj = document.getElementById("search");
	var add = document.getElementById("more");
	function getWords(){
		var ajax = new XMLHttpRequest();
		ajax.open("GET","https://vandung2kk2.github.io/Dictionary/Maps/A.txt",true);
		ajax.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				autofill = JSON.parse(ajax.responseText);
			}
		}
		ajax.send();
	}
	obj.addEventListener("keyup",autoFill);
	function autoFill(){
		if(!autofill) getWords();
		var len=autofill.length;
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
}