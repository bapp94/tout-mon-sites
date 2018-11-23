var montantHT = window.prompt('entre le montant hors taxe');

montantHT = parseFloat(montantHT);

var TVA = 1.2;

var montantTTC = montantHT * TVA ;

document.write(' votre montantHT est de ' + montantHT + ' et votre montantTTC est de ' + montantTTC + ' avec une TVA de 20%');

/*
const TAUX_DE_TVA = 20;

var montantHT;
var montantTTC;
var montantTVA;


montantHT = window.prompt('Quel est le montant HT');
montantHT = parseFloat(montantHT);

montantTVA = montantHT * (TAUX_DE_TVA / 100);
montantTTC = montantHT + montantTVA;


document.write
(
    '<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>'
);
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');

*/
