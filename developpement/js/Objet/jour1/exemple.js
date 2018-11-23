var gege = new Perso('Gege',5, 120, 2, 1800);

console.log(gege.hp);

console.log(gege.biere);

gege.boire();

console.log(gege.hp);

console.log(gege.biere);

gege.tomber();

var bernard = new Perso( 'Bebere',20, 95, 1, 2000);

bernard.boire();

console.log(bernard.hp);

bernard.tomber();

console.log(bernard.hp);

gege.attaquer(bernard);