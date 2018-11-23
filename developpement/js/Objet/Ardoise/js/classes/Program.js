var Program = function(idDuDom) {

	this.colorPalette = new ColorPalette();
	this.pen = new Pen('black', 1);
	this.slate = new Slate(idDuDom, this.pen);
	$('.pen-color').on('click', this.onClickChangeColor.bind(this));
	$('.size').on('click',this.onClickChangeSize.bind(this));
	$('#eraser').on('click',this.clear.bind(this));
	$('#write').on('click',this.onClickColorPicker.bind(this));
	$(document).on('magical-slate:pick-color', this.onPickColor.bind(this));
}

Program.prototype.onClickColorPicker = function()
{
    $('#color-palette').removeClass('hide');
};


Program.prototype.onClickChangeColor = function(event) {
	var div =  event.currentTarget;
	var color = div.dataset.color;
	console.log(color);
	this.pen.setColor(color);
}

Program.prototype.onClickChangeSize = function(event){
	var div = event.currentTarget;
	var size = div.dataset.size;
	console.log(size);
	this.pen.setSize(size);
}

Program.prototype.clear = function()
{
    this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, 
    this.canvas.canvas.height);
}


Program.prototype.onPickColor = function() {
	var color =  this.colorPalette.getPickedColor();
	this.pen.setColorAsRgb(color.red, color.green, color.blue);
	console.log(color);
    $('#color-palette').addClass('hide');
}

