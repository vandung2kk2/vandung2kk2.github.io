var words = document.getElementById("words"),
	meanings = document.getElementById("meanings");
document.write("hehe");
var dictionary = new XMLHttpRequest();
window.onload = function(){
	let wordsList = [];
	let pos = 0;
	let status = false;
	function wordsCreator(list){
		let res = [];
		let len = list.length;
		for(let i=0;i<len;i++){
			res[i] = list[Math.floor(Math.random()*len)];
		}
		return res;
	}
	dictionary.open("GET","https://vandung2kk2.github.io/sources/dictionary/flashcards.txt");
	dictionary.onreadystatechange = function(){
		if(this.readyState == 4){
			wordsList = wordsCreator(JSON.parse(this.responseText).words);
			status = true;
			showWord();
			document.addEventListener("click",showWord)
		}
	}
	dictionary.send();
	function showWord(k){
		if(status){
			words.innerText = wordsList[pos];
		}
	}
}


/*function sequenceElement(a, n) {
    n %= 4686
    while(n-- - 4 > 0){
        var [b,c,d,e,f] = a 
        a = [c,d,e,f,(b+c+d+e+f)%10]
    }
    return a[n+1]
}
console.log(sequenceElement([8, 2, 6, 5, 0],531931716));*/
