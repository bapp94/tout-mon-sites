
var img = document.querySelectorAll('#photo-list li');
console.log(img);
var total = document.getElementById('total');
console.log(total);
function selectPict()
{

	this.classList.toggle('selected');
	var selected = document.querySelectorAll('.selected');
	total.textContent =  'Vous avez selectione '+ selected.length+' photo(s)'
}

for (var i= 0; i < img.length; i++) {
	img[i].addEventListener('click', selectPict);
	// img[i].addEventListener('click', selectedImg);
}

// function selectedImg() {
// var selected = document.querySelectorAll('.selected');

// for (var i = 0; i < selected.length; i++) {
//  total.textContent = 'Vous avez selectione '+ selected.length + ' photo(s)'
// }
// console.log(total);
// }

// <!DOCTYPE html>
// <html lang="fr">
// <head>
//     <meta charset="utf-8">
//     <title>JavaScript</title>
//     <link rel="stylesheet" href="css/main.css">
// </head>
// <body>
//     <header>
//         <h1>Sélecteur de Photos</h1>
//     </header>

//     <main>
//         <ul class="photo-list">
//             <li><img src="images/1.jpg"></li>
//             <li><img src="images/2.jpg"></li>
//             <li><img src="images/3.jpg"></li>
//             <li><img src="images/4.jpg"></li>
//             <li><img src="images/5.jpg"></li>
//             <li><img src="images/6.jpg"></li>
//             <li><img src="images/7.jpg"></li>
//             <li><img src="images/8.jpg"></li>
//             <li><img src="images/9.jpg"></li>
//             <li><img src="images/10.jpg"></li>
//         </ul>

//         <p id="total">Vous avez sélectionné <em>0</em> photo(s)</p>
//     </main>

//     <script src="js/main.js"></script>
// </body>
// </html>


// <style>

// body
// {
//     margin: 0 auto;
//     width: 90%;
// }

// em
// {
//     color: red;
//     font-weight: bold;
// }


// .photo-list
// {
//     /* structure */
//     padding-left: 0;
//     width: 800px;

//     /* presentation */
//     list-style-type: none;
// }
// .photo-list li
// {
//     /* structure */
//     display: inline-block;
//     margin: 1em;
//     padding: 0.5em;

//     /* presentation */
//     border-radius: 8px;
//     transition: background-color 0.5s;
// }
// .photo-list li:hover
// {
//     background-color: silver;
// }
// .photo-list li.selected
// {
//     background-color: forestgreen;
// }

// </style>


// <script>

// var photos = document.querySelectorAll('.photo-list li');
// var total  = document.querySelector('#total em');


// function onClickSelected() {
	
//     this.classList.toggle('selected');
//     var selectedPhotos = document.querySelectorAll('.photo-list li.selected');
//     console.log(selectedPhotos.length);
// 	total.textContent = selectedPhotos.length;
// }


// for (var i = 0; i < photos.length; i++) {
	
//     photos[i].addEventListener('click', onClickSelected)


// }





// </script>



























