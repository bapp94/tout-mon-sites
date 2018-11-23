
var table = document.querySelector('table');
var i = 0;
console.log(table);
var j=0; 
var map = [

[1,1,1,1,1],

[1,0,0,0,1],

[0,0,0,2,1],

[1,0,0,0,1],

[1,1,1,1,1]

];

console.log(map[i].length);
for (var i = 0 ; i  < map.length; i++){
	$('table').append('<tr>');
}
	for(var j = 0 ; j < map.length; j++){
			
		$('tr').append('<td> salut');
		

}
