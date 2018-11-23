// var coucou = document.querySelectorAll('.coucou');
// console.log(coucou);

// for (var i = 0; i < coucou.length; i++) {
// 	coucou[i].addEventListener('click', sayPara);
// }

// function sayPara() {
// 	console.log(this.textContent);
// }
/*
$('.coucou').on('click', sayPara);

function sayPara() {
	console.log($(this).text());
}
*/

//////////// REFAIRE UN SLIDER////////////////


var tabImg = ['1.jpeg','2.jpeg','3.jpeg','4.jpeg'];
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var img = document.querySelector('img');

console.log(img);

var i = 0;
next.addEventListener('click',nextImg);
prev.addEventListener('click',prevImg);
function nextImg (e)
{
	e.preventDefault()
	if( i < tabImg.length -1){
		i++;

	} else {
		i =0;
	}
	img.src = 'img/'+tabImg[i];


}
function prevImg (e)
{
	e.preventDefault();
	if( i > 0){
		i--;

	} else {
		i = tab.length - 1;
	}
	img.src = 'img/'+tabImg[i];


}
// heritage multiple en php 5 (non);
// requete ajax = requete http class = xmlhttpRequest
// php json encode = js json.stringify
// php json decode = js json.parse
// svg canvas =  faire des animation graphique 
// json = format de stockage
// structure  de controle = boucle condition