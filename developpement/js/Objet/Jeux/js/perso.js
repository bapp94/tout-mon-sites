var Perso = function(name, hp, attack, defense, magie) {

	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.defense = defense;
	this.magie = magie;


}

Perso.prototype.attaquer = function(perso) {

	var degats = this.attack - perso.defense
	console.log(this.name +' Attaque, il enlève '+ degats + ' hp a '+ perso.name )
	perso.hp -= degats
	console.log(perso.name +' a  '+ perso.hp+ ' hp' );

}


Perso.prototype.sort = function(perso) {
	if (this.magie > 0) {
    	var degats = ranDom(1, this.magie);
		console.log(this.name +  ' jete un sort,il enlève '+ degats + ' hp a '+ perso.name);
		perso.hp -= degats;
    	this.magie -=  degats;
		console.log(perso.name +' a  '+ perso.hp+ ' hp' );
    } else {
		console.log('Vous n avez plus de point de magie....')
	}

}
    
Perso.prototype.defendre = function() {
	var ratio =  Math.round(this.defense * Math.random());
	console.log(this.name+' augmente sa defense de '+ ratio + ' point ');
	this.defense += ratio;
	console.log(this.name +'a une defense à :'+ this.defense);
}



var Program = function(IdDuDom) {

	this.attacker = document.querySelectorAll('#attack');
    this.defender = document.querySelectorAll('#def');
	this.mag = document.getElementById('magie');
	
}
Program.prototype.start = function()
{
	this.attacker.addEventListenner('click',this.attaquer.bind(this));
	this.def.addEventListenner('click',this.defendre.bind(this));
	this.mag.addEventListenner('click',this.sort.bind(this));
}
