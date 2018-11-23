var number1   = parseFloat(window.prompt('Saisissez un premier nombre :'));
var number2   = parseFloat(window.prompt('Saisissez un deuxième nombre :'));
var operation = window.prompt('Quelle opération mathématique souhaitez-vous effectuer ?');
var result;

switch(operation)
{
	case '+':
    case 'addition':
    result = number1 + number2;
    break;
    
    case '-':
    case 'soustraction':
    result = number1 - number2;
    break;
    
    case '*':
    case 'multiplication':
    result = number1 * number2;
    break;
    
    case '/':
    case 'division':
    if (number2 == 0) {
    	document.write('<p>Erreur : vous ne pouvez pas diviser un nombre par 0 !</p>');
        break;
    }
    
    result = number1 / number2;
    break;
    
    case '^':
    case 'puissance':
    result = number1 ** number2;
    break;
    
	default:
    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
    break;
}

if (isNaN(result) == true || isNaN(number1) == true) {
	document.write("<p>Vous n'avez pas saisi deux nombres !</p>");
	result = undefined;
}


if(result != undefined && result != Infinity)
{
	document.write("<p>Le résultat de l'opération est <strong>" + result + '</strong>.</p>');
}
