'use strict'

var numberUser = parseInt(window.prompt('taille de la table'));
	
	document.write('<table>')

for( var num1 = 1; num1 <= numberUser; num1++ ){
		document.write('<tr>');
	for ( var num2= 1; num2 <= numberUser; num2++){
		if (num1 == num2){
			document.write( '<td class="td">' + num1 * num2 + '</td>');
		}
		else{
				document.write('<td>' + num1 * num2 + '</td>');
		}
		
	}

	document.write('</tr>');
}
 document.write('</table');
/********************   	CORRIGE		*****************/
// <script>
// 'use strict';

// var size = parseInt(window.prompt('Taille de la table de multiplications ?'));


// document.write('<table>');

// 	for (var row = 1; row <= size; row ++) {
    
//     	document.write('<tr>');
        
//         for(var column = 1; column <= size; column++) {
        
//         	var result = row * column;
            
//             if (row == column) {
            
//             	document.write('<td class="same">'+ result +'</td>');
            
//             } else {
            
//             	document.write('<td>'+ result +'</td>');
            
//             }
        
        	  
//         }
        
//         document.write('</tr>');
    
//     }


// document.write('</table>');


// </script>

// <style>

// td {
// 	border: 1px solid purple;

// }

// .same {
// 	background-color: pink;

// }

// </style>