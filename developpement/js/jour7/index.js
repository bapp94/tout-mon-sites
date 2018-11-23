var button = document.getElementById('square');
var topitop=0;
var left=0;













function myFunction(event)
{
	console.log(event.keyCode);
	if (event.keyCode === 39) //droite
	{	
		if (left <= 440) {
			left += 10;
			button.style.left = left+'px';
		}
	}
	 if (event.keyCode === 37) //gauche
	{
		if (left >= 10) {
			left -= 10;
			button.style.left = left+'px';
		}
	}
	if(event.keyCode === 38){ //haut
		if(topitop >= 10) {
			topitop -= 10;
			button.style.top = topitop+'px';
		}

	}
	if(event.keyCode == 40){ //bas
		if(topitop <= 440) {
			topitop += 10;
			button.style.top = topitop+'px';
		}
	}
}
document.addEventListener('keydown', myFunction);





// <script>

// var square = document.getElementById("square");
// var top_margin = 0;
// var left_margin = 0;
// const ARROW_LEFT = 37;
// const ARROW_UP = 38;
// const ARROW_RIGHT = 39;
// const ARROW_DOWN = 40;

// function move(event)
// {
// 	switch(event.keyCode)
//   {
// 	case ARROW_LEFT :
//     	if(left_margin >= 10) {
//     		left_margin-=10;
//         	square.style.left = left_margin +"px";
//         }
//     break;
    
//     case ARROW_RIGHT :
//     	if(left_margin <= 240) {
// 			left_margin+=10;
// 			square.style.left = left_margin +"px";
// 		}
// 	break;
//     case ARROW_UP :
//     	if(top_margin >= 10) {
// 			top_margin-=10;
// 			square.style.top = top_margin +"px";
// 		}
// 		break;
//      case ARROW_DOWN :
//     	if(top_margin <= 240) {
// 			top_margin+=10;
// 			square.style.top = top_margin +"px";
// 		}
	
//    	break;
    

//  }
// }


// document.addEventListener("keydown",move);

// </script>