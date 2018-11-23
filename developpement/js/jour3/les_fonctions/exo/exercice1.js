'use strict'
var table = new Array();

table = ['eau','viande','fruits','légumes',];

console.log(table);

var firstAjout = window.prompt('ajouter un aliment');
var firstSupprim = window.prompt('supprimer un élement');


function ajout(firstAjout){
	table.push(firstAjout);
}

ajout(firstAjout);
console.log(table);

function supprim(firstSupprim){
	var i = table.indexOf(firstSupprim);
	 table.splice(i,1);
	 if (index == -1) {
    	console.log("ERREUR : le produit " + item + " n'existe dans la liste de courses");

    } else {
    
    	shoppingList.splice(index,1);
    
    }

	
}
supprim(firstSupprim);

console.log(table);

function AllSupprim() {
	table = [];
}
console.log(table);

function affichage() {
	for(var i=0; i < table.length; i++) {
		document.write('<p>'+table[i]+'</p>');
	}
}

affichage();

/********************* CORRIGE*********************************/