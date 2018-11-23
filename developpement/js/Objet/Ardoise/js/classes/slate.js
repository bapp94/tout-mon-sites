
var Slate = function(idDuDom, pen)
{
	this.canvas          = document.getElementById(idDuDom);    
    this.context         = this.canvas.getContext('2d');
    this.currentLocation =  null;          
    this.isDrawing       = false;  
    this.stylo = pen;
    
    
    this.canvas.addEventListener('mousedown' , this.onMouseDown.bind(this));
    this.canvas.addEventListener('mousemove' , this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup'   , this.onMouseUp.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));


}


Slate.prototype.getMouseLocation = function(event)
{
	var location;
    var rectangle;
    
    rectangle = this.canvas.getBoundingClientRect();
    
    location =
    {
    	x: event.clientX - rectangle.left,
    	y: event.clientY - rectangle.top
    }
    
    return location;

};

Slate.prototype.onMouseMove = function(event)
{

	if(this.isDrawing == true){
	var location = this.getMouseLocation(event);
    console.log(location);
    
    this.context.beginPath();

	this.stylo.configure(this.context);
    //this.context.strokeStyle = this.stylo.color; //black
   // this.context.lineWidth   = this.stylo.size; //1
   	this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
    this.context.lineTo(location.x, location.y);
    
    this.context.closePath();
    
   	this.context.stroke();
    
    this.currentLocation = location;
}
}

Slate.prototype.onMouseDown = function(event) {
	this.isDrawing = true;
	this.currentLocation = this.getMouseLocation(event);

}
Slate.prototype.onMouseLeave = function()
{

	this.isDrawing = false;
};

Slate.prototype.onMouseUp = function()
{
    this.isDrawing = false;
};
