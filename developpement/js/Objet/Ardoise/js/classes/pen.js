var Pen = function(color,size)
{
    this.color = color;
    this.size  = size;
};


Pen.prototype.configure = function(context)
{
	context.strokeStyle = this.color;
    context.lineWidth   = this.size;

}

Pen.prototype.setColor= function(color) {
	this.color = color;
}

Pen.prototype.setSize = function(size) {
	this.size = size;
}
Pen.prototype.setColorAsRgb = function(red, green, blue)
{
    // Stockage de la couleur au format RGB (comme la fonction CSS)
    this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
};
