var car = new Object() // var car ={} objet vide 

car['brand'] = 'Alfa Roméo';
// car.brand = 'alfa roméo';
car['color'] = 'rouge';
car.year = '2020';
car.passengers = ['gérard','jean','alan','céline'];

console.log(car['brand']);
console.log(car.year);
console.log(car.passengers[1]);// recupere le nom dans le tableau a l'intérieur de l'objets.

document.write('Voici une : ' + car.brand + ' ' + car.color + ' de ' + car.year);

