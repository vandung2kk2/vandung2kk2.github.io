var aj = new XMLHttpRequest();
aj.open("POST","https://script.google.com/macros/s/AKfycbwWpzghQmjWaZ3LWJRrPdKiL0IQCeogoKDc50vXBogAMv22Dyc/exec", true);
aj.onreadystatechange = function(){
	if(this.readyState == 4){
		console.log(this.responseText)
	}
}
aj.send("Dung");