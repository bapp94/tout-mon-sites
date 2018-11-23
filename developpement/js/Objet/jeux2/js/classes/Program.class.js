var Program = function(monPerso , computer)
{
	this.monperso =  monPerso;
	this.computer = computer;

	this.affichage();
	$('#attaquer').on('click',this.onClickAttack.bind(this));
	$('#sort').on('click', this.onClickSort.bind(this));
	$('#defendre').on('click', this.onClickDefense.bind(this));
}


Program.prototype.affichage = function()
{


	if ( this.monperso.hp > 0 && this.computer.hp > 0){
	$('#perso1').text(this.monperso.name+' : '+ this.monperso.hp + ' hp ');
	$('#perso2').text(this.computer.name+' : '+this.computer.hp + ' hp ');
	} else if ( this.monperso.hp <= 0){
	$('#perso1').text('vous etes mort');
	$('#perso2').text('');
	} else {
	$('#perso1').text('vous avez gagné');
	$('#perso2').text('');
	}
	
	


}
Program.prototype.onClickAttack = function(event)
{
	event.preventDefault();
	this.monperso.attaquer(this.computer);
	this.contre();
	this.affichage();
}
Program.prototype.onClickSort = function(event)
{
	event.preventDefault();
	console.log(this);
	this.monperso.sort(this.computer);
	this.contre();
	this.affichage();

}
Program.prototype.onClickDefense = function(event)
{
	event.preventDefault();
	this.monperso.defendre();
	this.contre();
	this.affichage();

}

Program.prototype.contre = function()
{
	var random = getRandomInteger(1,3);
	if(random == 1 )
	{
		this.computer.attaquer(this.monperso);
	} else if ( random == 2 ){
		this.computer.sort(this.monperso);

	} else {
	this.computer.defendre();
}
	
}