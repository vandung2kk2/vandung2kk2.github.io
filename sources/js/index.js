var aja = new XMLHttpRequest();
aja.open("POST","https://script.google.com/macros/s/AKfycbwWpzghQmjWaZ3LWJRrPdKiL0IQCeogoKDc50vXBogAMv22Dyc/exec", true);
aja.onreadystatechange = function(){
	if(this.readyState == 4){
		console.log(this.responseText)
	}
}
aja.send("Dung");
