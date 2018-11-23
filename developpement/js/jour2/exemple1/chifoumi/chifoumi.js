'use strict'
var choixUtilisateur = window.prompt('Votre choix') 
	choixUtilisateur =  choixUtilisateur.toLowerCase();
console.log(choixUtilisateur);

var choixOrdinateur = Math.random();
console.log(choixOrdinateur);

var result;


switch(choixUtilisateur) {
	case 'pierre':
	if (choixOrdinateur <= 0.33 ){ 
		choixOrdinateur = 'pierre';
		result='égalité';
	}
	else if (choixOrdinateur >= 0.34 && choixOrdinateur <= 0.67){
		choixOrdinateur = 'feuille';
		result='perdu' ;
	}
	else {
		choixOrdinateur = 'ciseaux';
		result ='gagné';

	}
	break;

	case 'feuille':
	if (choixOrdinateur <= 0.33 ){ 
		choixOrdinateur = 'pierre';
		result='gagné';
	}
	else if (choixOrdinateur >= 0.34 && choixOrdinateur <= 0.67){
		choixOrdinateur = 'feuille';
		result='égalité';
	}
	else {
		choixOrdinateur = 'ciseaux';
		result ='perdu';
	}
	break;
	
	case 'ciseaux':
	if (choixOrdinateur <= 0.33 ){ 
		choixOrdinateur = 'pierre';
		result='perdu';
	}
	else if (choixOrdinateur >= 0.34 && choixOrdinateur <= 0.67){
		choixOrdinateur = 'feuille';
		result='gagné';
	}
	else {
		choixOrdinateur = 'ciseaux';
		result ='égalité';
	}
	break;

	default:
		document.write('vous avez rentré de mauvaise valeur');
	break;
	
}
if (result != undefined )
{
	document.write('<p>ton choix : ' + choixUtilisateur + '</p>' + '<p> celui de l\'ordinateur : ' + choixOrdinateur + '</p>' + ' donc le resultat est : ' + result);

}
/*********************	corrigé	***************************/
/*
'use strict';  

var computer;
var player;
var random;

player window.prompt('Choissez : Pierre, Feuille, Ciseau');

player = player.toLowerCase();

random = Math.random();

if(random < (1/3)) {
	computer = 'pierre';
}
else if(random < 2 / 3)     // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
{
    computer = 'feuille';
}
else                        // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
{
    computer = 'ciseau';
}

if (computer == player) {

	document.write('<p>Vous avez choisi la même chose : égalité !</p>');
    
} else {

	switch(computer) {
    	
        case 'ciseau':
        if(player == 'pierre')
        {
            document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
        }
        else // player == 'feuille'
        {
            document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
        }
        break;

    	case 'feuille':
        if(player == 'pierre')
        {
            document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
        }
        else // player == 'ciseau'
        {
            document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
        }
        break;
        
        case 'pierre':
        if(player == 'feuille')
        {
            document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
        }
        else // player == 'ciseau'
        {
            document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
        }
        break;
        
        default: 
        document.write('le puit n\'existe pas en chifoumi'); 
        break;
    
    }
}
*/