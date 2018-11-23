'use strict';   // Mode strict du JavaScript


var button = document.getElementById('toogle-bar');
var barreOutil = document.querySelector('.button');
var img = document.getElementById('img');
var next = document.getElementById('slider-next');
var previous = document.getElementById('slider-previous');
var toggle = document.getElementById('slider-toggle');
var play = document.querySelector('.play');
var pause;
var random = document.getElementById('slider-random');
var tabImg = [ 'images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg', ]
var index = 0;
var x;
var j;


function hidden()
{
	barreOutil.classList.toggle('afficher');

}
 
function nextImages()
{	
	if (index < tabImg.length-1) 
	{
		index++;
	}
	 else 
	{
		index = 0;
	}
	
	img.src = tabImg[index];
}

function previousImages()
{
	if (index > 0) 
	{
		index--;
	} 
	else 
	{
		index = 5;
	}
	
	img.src = tabImg[index];

}
 
function playSlider()
{
	

	if(toggle.classList.contains('play')) {
		x = window.setInterval(nextImages,1000);
	} else {
		x = window.clearInterval(x);
	}

	toggle.classList.toggle('play');
	document.querySelector('#playpause').classList.toggle('fa-play');
	toggle.classList.toggle('pause');
	document.querySelector('#playpause').classList.toggle('fa-pause');
	
}





function randomImages()
{
	var randomNumber;
	
	do
	{
		randomNumber = randomUtil(0, 5);
	}
	while ( randomNumber == index);

	index = randomNumber;

	img.src = tabImg[index];

}


function myFunction(event)
{
	console.log(event.keyCode);
	if (event.keyCode === 39)
	{
		nextImages();
	}
	 if (event.keyCode === 37)
	{
		previousImages();
	}
	if(event.keyCode === 38){
		randomImages();
	}
	if(event.keyCode == 32){
		playSlider();
	}


}

document.addEventListener('DOMContentLoaded', function()
{

    toolbarToggle.addEventListener('click', displayToolbar);
    next.addEventListener('click', onClickNext);
    prev.addEventListener('click', onClickPrev);
    random.addEventListener('click', onClickRandom);
	diapo.addEventListener('click', lectureDiapo());
    document.addEventListener('keyup', keyBoardEvent);
});




document.addEventListener('DOMContentLoaded', function()
{

button.addEventListener('click', hidden);
next.addEventListener('click', nextImages);
previous.addEventListener('click', previousImages);
toggle.addEventListener('click', playSlider);
random.addEventListener('click', randomImages)
document.addEventListener('keyup',myFunction);
};

// <!DOCTYPE html>
// <html lang="fr">
// <!-- index.html -->

// <head>
//     <meta charset="utf-8">
//     <title>JavaScript</title>
//     <link rel="stylesheet" href="css/normalize.min.css">
//     <link rel="stylesheet" href="css/font-awesome.min.css">
//     <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans">
//     <link rel="stylesheet" href="css/slider.css">

//     <!-- Fonctions utilitaires -->
//     <script src="js/utilities.js"></script>
// </head>
// <body>
//     <header>
//         <h1>Sliders, les mondes parallèles ;-)</h1>
//         <nav class="toolbar">
//             <a id="toolbar-toggle" href="#"><i class="fa fa-arrow-right"></i> Barre d'outils</a>
//             <ul class="hide">
//                 <li><button id="slider-previous" title="Image précédente"><i class="fa fa-backward"></i></button></li>
//                 <li><button id="slider-toggle" class="play" title="Démarrer le carrousel"><i class="fa fa-play"></i></button></li>
//                 <li><button id="slider-next" title="Image suivante"><i class="fa fa-forward"></i></button></li>
//                 <li><button id="slider-random" title="Sélectionner une image aléatoire"><i class="fa fa-random"></i></button></li>
//             </ul>
//         </nav>
//     </header>

//     <main>
//         <figure id="slider" class="slider">
//             <img src="" alt="Photo du carrousel">
//             <figcaption></figcaption>
//         </figure>
//     </main>

//     <!-- Code principal du carrousel -->
//     <script src="js/slider.js"></script>
// </body>
// </html>

// <style>
// *
// {
//     box-sizing: border-box;
// }

// a
// {
//     color: #2A8782;
//     text-decoration: none;
//     transition: text-shadow 0.25s;
// }
// a:hover
// {
//     text-shadow: 0 0 4px grey;
// }

// body
// {
//     /* structure */
//     margin: 0 auto;
//     overflow-y: scroll;
//     width: 80%;

//     /* presentation */
//     background: url('../images/concrete_seamless.png') repeat;
// }
// body, button
// {
//     font-family: 'Open Sans', sans-serif;
// }

// h1
// {
//     color: #015770;
//     letter-spacing: 0.1em;
// }

// header
// {
//     padding-bottom: 2em;
// }


// .hide
// {
//     display: none;
// }

// .slider
// {
//     -webkit-backface-visibility: hidden; /* obligatoire pour éviter l'effet de crénelage sous Chrome */

//     text-align: center;
//     transform: rotate(-3deg);
//     transform-origin: 50% 50%;
// }
// .slider figcaption
// {
//     color: #2A8782;
//     font-size: 2em;
//     font-weight: bold;
//     text-shadow: 0 0 4px grey;
// }
// .slider img
// {
//     background-color: white;
//     padding: 1em;
//     border-radius: 6px;
//     box-shadow: 0 0 8px black;
// }

// .toolbar ul
// {
//     /* structure */
//     padding-left: 0;

//     /* presentation */
//     list-style-type: none;
//     text-align: center;
// }
// .toolbar ul li
// {
//     display: inline-block;
// }
// .toolbar ul li + li
// {
//     margin-left: 1em;
// }

// </style>


// <script>

// // slider.js

// var toolbarToggle = document.getElementById('toolbar-toggle');

// var toolbar = document.querySelector('#toolbar ul'); // mettre le . ou # car attend selecteur css

// var prev = document.getElementById('slider-previous');
// var next = document.getElementById('slider-next');
// var diapo = document.getElementById('slider-toggle');
// var random = document.getElementById('slider-random');
// var image = document.querySelector('#slider img');
// var fig = document.querySelector('#slider figcaptation');

// var slides =
// [
//     { image: 'images/1.jpg', legend: 'Street Art'          },
//     { image: 'images/2.jpg', legend: 'Fast Lane'           },
//     { image: 'images/3.jpg', legend: 'Colorful Building'   },
//     { image: 'images/4.jpg', legend: 'Skyscrapers'         },
//     { image: 'images/5.jpg', legend: 'City by night'       },
//     { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
// ];

// var index = 0;
// var timer;


// function displayToolbar() {

// 	toolbar.classList.toggle('hide');

// }

// function onClickNext() {

// 	if (index < slides.length-1) {
    
//     	index++;
        
//     } else {
    
//     	index = 0;
        
//     }
    
//     image.src = slides[index].image;
//     fig.textContent = slides[index].legend;

// }




// function onClickPrev() {

// 	if (index <= 0) {
    
//     	index = slides.length-1;
        
//     } else {
    
//     	index--;
        
//     }
    
//     image.src = slides[index].image;
//     fig.textContent = slides[index].legend;

// }

// function onClickRandom() {
	
    
//     var randomNumber
    
//     do {
	
// 		randomNumber = getRandomInteger(0, 5);
    
//     } while (randomNumber == index);
    
//     index = randomNumber;
    
//     image.src = slides[index].image;
//     fig.textContent = slides[index].legend;

// }



// function getRandomInteger(min, max)
// {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// function lectureDiapo() {

// 	if (diapo.classList.conatins('play') == true) {
    
//     	timer = window.setInterval(onClickNext, 1000);
        
//     } else {
    
//     	window.clearInterval(timer);
        
//     }
    
// 	diapo.classList.toggle('play');
//     diapo.classList.toggle('pause');
//     document.querySelector('#slider-toggle i').classList.toggle('fa-play');
//     document.querySelector('#slider-toggle i').classList.toggle('fa-pause');
// }


// function keyBoardEvent(event) {

// 	console.log(event.keyCode);
    
//     switch(event.keyCode) {
    
//         case 37:
//             onClickPrev();
//         break;

//         case 39:
//             onClickNext();
//         break;
        
//         case 32:
//         	lectureDiapo();
//         break;
        
//         case 82:
//         	onClickRandom()
//         break;
        
//         default:
//         	console.log('pas d\'event associé à cette touche');
//         break;
    
    
//     }

// }



// document.addEventListener('DOMContentLoaded', function()
// {

//     toolbarToggle.addEventListener('click', displayToolbar);
//     next.addEventListener('click', onClickNext);
//     prev.addEventListener('click', onClickPrev);
//     random.addEventListener('click', onClickRandom);
// 	diapo.addEventListener('click', lectureDiapo());
//     document.addEventListener('keyup', keyBoardEvent);
// });


// </script>