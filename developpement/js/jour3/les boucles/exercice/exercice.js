var result;
do {

 result = parseFloat(window.prompt('ecrire un nombre'));

} while (isNaN(result));

document.write(result);

/************* CORRIGE *****************/

'use strict';

var number;

do {

	number = parseFloat(window.prompt('Veuillez saisir un nombre :'));

} while (isNaN(number) == true )

document.write('<p>Merci, vous avez saisi <strong>' + number + '</strong>.</p>');

