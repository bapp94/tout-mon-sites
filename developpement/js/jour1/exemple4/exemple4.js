/*var name = 'Baptiste';

document.write('je m\'appelle ' + name + ' je suis de la PA 121' );// concatenation de je m'appelle + la var name;

var age1 = 30 + ' ans';

var age2 = 40 + ' ans';

var result = age1 + age2; // pas  de concatenation entre string

console.log(result);*/

var number1;
var number2;
number1 = window.prompt('Veuillez entre un nombre');// boite de dialogue pour interagir avec utilisateur , declare forcement un string!
number2 = window.prompt('Veuillez entre un nombre');

number1 = parseInt(number1);// seulement en number entier( le premier)

number2 = parseFloat(number2);// number  avec decimal
/*

seconde méthode
number1 = parseInt(window.prompt('Veuillez entrez un nombre'));
number2 = parseInt(window.prompt('Veuillez entrez un nombre'));

*/

var result = number1 + number2;

document.write(result);
