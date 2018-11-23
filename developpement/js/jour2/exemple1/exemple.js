var name = window.prompt('votre nom ?');

if (name == 'Paul') {

	document.write('Vous êtes Paul');
    
} else if (name == 'Pierre') {

	document.write('Vous êtes Paul');

} else if (name == 'Jacque') {

	document.write('Vous êtes Jacque');

} else if (name == 'Ginette') {

	document.write('Vous êtes Ginette');

} else {

	document.write('Je ne vous connais pas');
}


switch(name) {
	case 'Paul': 
    document.write('Vous êtes Paul');
    break;//arrete le code 
    
    case 'Pierre': //commence le code
    document.write('Vous êtes Pierre');
    break;

	case 'Jacque': 
    document.write('Vous êtes Jacque');
    break;

	case 'Ginette': 
    document.write('Vous êtes Ginette');
    break;
}

