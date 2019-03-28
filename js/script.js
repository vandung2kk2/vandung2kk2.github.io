var menu = document.getElementById('menu');
var search = document.getElementById('search');
var openMenu = document.getElementById('openMenu');
var hiddenMenu = document.getElementById('hiddenMenu');
var closeMenu = document.getElementById('close');
window.onscroll = function(){
	if(window.scrollY >= 147){
		menu.classList.add('active');
		search.style.display='none';
		openMenu.style.display='inline-block'
	} else{
		menu.classList.remove('active');
		search.style.display='inline-block';
		openMenu.style.display='none';
	}
}
openMenu.onclick = function(){
	hiddenMenu.style.animation = 'hiddenMenu .2s forwards';
	hiddenMenu.style.display='block';
}
closeMenu.onclick = function(){
	hiddenMenu.style.animation = 'closeHiddenMenu .2s forwards';
	setTimeout(function(){
		hiddenMenu.style.display ='none';
	},200)
}

var text = document.getElementById('text');
var str=['Thiết kế website','Lập trình','Thủ thuật máy tính','Vandung2kk2.github.io'];
var curStr=0;
var time=0;
function printText(){
	var s=str[curStr%4];
	let lenOfStr = s.length;
	for(let i=0;i<lenOfStr; i++){
		setTimeout(function(){
			text.innerHTML += s[i];
		},i*130+200)
	}
	for(let i=0;i<lenOfStr; i++){
		setTimeout(function(){
			text.innerHTML = s.slice(0,lenOfStr - i - 1);
		},i*60+lenOfStr*130+800)
	}
	curStr++;
	time = lenOfStr*190 + 1000;
}
function inra(){
	text.innerHTML = '';
	printText();
	setTimeout(printText,4040);
	setTimeout(printText,6750);
	setTimeout(printText,11170);
}
setTimeout(inra,1000);
setInterval(inra,18000);
function closeNotice(){
	var x=document.getElementById('notifications');
	x.style.opacity = 0;
	setTimeout(function(){
		x.stle.display = 'none';
	},200)
}
