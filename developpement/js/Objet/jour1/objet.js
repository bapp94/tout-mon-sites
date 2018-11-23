
var Perso =  function( name,hp, db, attaque, biere){

	this.name = name,
	this.hp = hp,
	this.db = db,
	this.attaque= attaque,
    this.biere = biere

	

}

Perso.prototype.boire = function() {

	console.log(this.name + '  est ivre');
    this.hp -= 1;
    this.biere -= this.db;
}
Perso.prototype.tomber = function(){

	console.log(this.name+' est tomber au combat');
	this.hp-=2;

}
Perso.prototype.attaquer = function(perso) {

	console.log(this.name+' pête un plomb et attaque '+perso.name);

	var random = Math.random();
	console.log(random);

	if(random < 0.5) {
		console.log('Belle droite de bourré');
	perso.hp -= this.attaque;
		console.log(perso.name+ ' a '+perso.hp+ ' hp');
	} else {
		this.tomber();
	}

	console.log(this.name+' s\'excuse en pleurant');
}













var Program = function(IdDuDom) {

	this.attacker = document.querySelectorAll('#attack');
    this.defender = document.querySelectorAll('#def');
	this.mag = document.getElementById('magie');
	
	

}
