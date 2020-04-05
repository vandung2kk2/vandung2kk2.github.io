var aja = new XMLHttpRequest();
aja.open("POST","https://script.googleusercontent.com/macros/echo?user_content_key=LcXP_AtxGx3kgwWq31QeEuTc_OOjt3yAAVlKhG8rF9m5PJQDKziP5437KdStwncMTWPu6sUsixMHns0OU0tE2fF1-IGliLqXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPo1C42WDGiWZuKW5xzBTnnFd4djMLu3p7_Ec0k_RmbB7-1FzPm2z4erYG2EvMsJOnSYAsOF9TGv&lib=MZ9wRLiXdXrjy3YVV5JoEGqKO1ydNR7V1");
aja.onreadystatechange = function(){
	if(this.readyState == 4){
		console.log(this.responseText)
	}
}
aja.send("Dung");
