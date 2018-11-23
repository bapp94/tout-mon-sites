
function sayHello()
{
    document.write('<p>Bonjour à toutes et à tous !</p>');
}


sayHello();
sayHello();
sayHello();
sayHello();
sayHello();


function sayHello2(firstName, lastName)
{
    document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');
}


sayHello2('Marie', 'MAYERS');

sayHello('Ailton', 'CHRISTIAN');



function sayHello3()
{
    return 'Bonjour à toutes et à tous !';
}



var message = sayHello3();

document.write(message);


var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // renvoi 1
console.log(beasts.indexOf('camel')); // renvoi 2

console.log(beasts.indexOf('bison', 2)); // renvoi 4

console.log(beasts.indexOf('giraffe')); // renvoi -1

beasts.splice(3, 2); // 

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf

