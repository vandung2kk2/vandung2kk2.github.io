window.onload = function(){
	var tabs=document.getElementsByClassName("tab-title");
	var tabsLen = tabs.length;
	for(let i=0;i<tabsLen;i++){
		tabs[i].addEventListener("click",function(){
			for(let j =0;j<tabsLen;j++){
				tabs[j].classList.remove("actived-tab");
			}
			tabs[i].classList.add("actived-tab")
		})
	}
}
