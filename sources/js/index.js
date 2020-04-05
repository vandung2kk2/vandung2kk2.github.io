var aja = new XMLHttpRequest();
aja.open("GET","https://script.google.com/macros/s/AKfycbwsNYzALTk0L7TYHfzUBjApUDNcTzoaHVA84pDcwm8ENwc8z8Va/exec");
aja.onreadystatechange = function(){
	if(this.readyState == 4){
		console.log(this.responseText)
	}
}
aja.send("Dung");
