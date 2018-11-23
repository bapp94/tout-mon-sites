var button = document.getElementById('toggle-rectangle');
var blueRectangle = document.querySelector('.rectangle');




function hidden()
{
	blueRectangle.classList.toggle('hidden');
}


function mouse()
{
	blueRectangle.classList.add('important');
}


function doubleclick ()
{
	blueRectangle.classList.toggle('good');
}
function mouseout ()
{
	blueRectangle.classList.remove('important');
	blueRectangle.classList.remove('good');
}




button.addEventListener('click', hidden);
blueRectangle.addEventListener('mouseover', mouse);
blueRectangle.addEventListener('mouseout', mouseout);
blueRectangle.addEventListener('dblclick', doubleclick);