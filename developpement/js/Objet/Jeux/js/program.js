
var Program = function(IdDuDom) {
	this.gege = new Perso('Gégé', 200, 10, 7, 60);
	this.nanard = new Perso('Nanard', 180, 47, 4, 80);


	this.affichage();

	$('#attack').on('click', this.onClickAttaque.bind(this));
	$('#def').on('click', this.onClickDefense.bind(this));
	$('#magie').on('click', this.onClickSort.bind(this));;
	
}

Program.prototype.affichage = function() {

	$('#perso1').text(this.gege.name+ ' : '+this.gege.hp+' HP');
	$('#perso2').text(this.nanard.name+ ' : '+this.nanard.hp+' HP');
}


Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();
	this.gege.attaquer(this.nanard);
		this.contre();

	this.affichage();
}



Program.prototype.onClickSort = function(event) {
	event.preventDefault();
	this.gege.sort(this.nanard);
		this.contre();

	this.affichage();
}
Program.prototype.onClickDefense = function(event) {
	event.preventDefault();
	this.gege.defendre();	this.contre();


}

Program.prototype.contre = function(event) {
	var random = ranDom(1, 3);
    if (random == 1) {
		this.nanard.attaquer(this.gege);
	} else if (random == 2) {
		this.nanard.sort(this.gege);
	} else {
		this.nanard.defendre();
	}
}




















// Program.prototype.start = function()
// {
// 	this.attacker.addEventListenner('click',this.attaquer.bind(this));
// 	this.def.addEventListenner('click',this.defendre.bind(this));
// 	this.mag.addEventListenner('click',this.sort.bind(this));
// }
