'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/


function random(min, max) {

	var random = Math.floor(Math.random() * (max - min +1) + min );
	return random;
}

// var test = random(1,2);
// console.log(test);
	
function requestInterger(message, min , max)
{
	var value
	do{
		value = parseInt(window.prompt(message));
	}
	while ( isNaN(value) == true || value > max || value < min );

	return value
}
