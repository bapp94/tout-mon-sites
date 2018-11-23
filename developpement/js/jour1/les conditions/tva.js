'use strict';

var montantHT = parseFloat(window.prompt('taper votre montant HT ! '));
var remise = window.prompt('souhaitez-vous une remise ? taper oui ou non ');
var TVA = 1.2;

if ( remise == 'oui' || remise == 'yes' ) {
	 var pourcentage = parseFloat(window.prompt('le % ?'));
	 console.log(pourcentage);
	 var montantRemise = (pourcentage / 100) * montantHT ;
	 console.log(montantRemise);
	 var montantTTC = (montantHT - montantRemise) * TVA;
	 document.write('Votre montant ttc est de ' + montantTTC + '€ d\'un pourcentage de ' + pourcentage + '% d\'un montantHT de ' + montantHT + '€' ); 


}
else 
 {
 	montantTTC = montantHT * TVA
	document.write('Aucune remise n\'a été appliquée donc votre montantTTC est de  ' + montantTTC + 'e');

}
