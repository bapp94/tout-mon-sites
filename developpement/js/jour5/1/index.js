  'use strict'

var para1 = document.getElementById('para1');// permet de selectionner les id dans le html
var myPara = document.querySelectorAll('.my-para');//peut selectionner tout du moment que l'on met un "." ou un "#" une classe ou un id
var para2 = document.getElementById('event');

para1.style.color = "red";
para1.style.backgroundColor = "green";

// myPara.style.color = "olive";
// myPara.style.backgroundColor = "tomato";
for ( var i = 0; i < myPara.length; i++){
myPara[i].style.color = "pink";
}


para1.classList.add('blue');

para1.classList.remove('useless');



function myFunction()
{
	para2.classList.toggle('blue');
}

para2.addEventListener('click', myFunction);