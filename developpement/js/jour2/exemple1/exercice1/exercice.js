var numberA = parseFloat(window.prompt('taper un chiffre'));
var numberB = parseFloat(window.prompt('taper un chiffre'));
console.log(numberB);
console.log(numberA);
var operation = window.prompt('quel opération');
var result;

switch(operation) {
    case 'addition':
    case '+':
    result = numberA + numberB;
    break;

    case 'soustraction':
    case '-':
    result = numberA - numberB;
    break;

    case 'multiplication':
    case '*':
    result = numberA * numberB;
    break;

    case 'division':
    case '/':
    if ( numberB == 0 ){
       result = 'vous etes con';
    }
    else {
     result = numberA / numberB;
    }
    break;

    case 'puissance':
    case '^':
    result = numberA ** numberB;
    break;

    default:
    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
    break;
}

if (isNaN(result) == true) {
    document.write("<p>Vous n'avez pas saisi deux nombres !</p>");
    result = undefined;
}


if(result != undefined)
{
    document.write("<p>Le résultat de l'opération est <strong>" + result + '</strong>.</p>');
}


