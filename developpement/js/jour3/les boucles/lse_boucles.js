var num = 0;

while (num < 5) {
	document.write('<p>hello</p>');
	num++;
}
var count; 
for ( count= 0; count < 10; count++){// dabord je defini la variable , jusqu'a quand on arrete , puis la facon de le faire

	 document.write('<p>La boucle for</p>');
}
const PA121 = ['Jean', 'Alan', 'Max', 'Younes', 'Marc', 'julien', 'Rémi', 'Saliou', 'Laurent', 'Marie', 'Camille', 'Céline', 'Pierre', 'Baptiste' ]
console.log(PA121.length);
console.log(PA121[0].length);
console.log(PA121[13].length);

document.write('Dans la PA121 il y a :');

for(var index = 0; index < PA121.length; index++) {

	document.write('<p>il y a '+PA121[index]+'</p>')

}