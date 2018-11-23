var moi = new Object();

moi.nom = 'Commandé';
moi.prenom = 'Baptiste';
moi.age = 25;
moi.frere = ['Romain','Benoît'];

console.log(moi);

document.write('je m\'appelle ' + moi.nom + ' ' + moi.prenom + ', j\'ai ' + moi.age + 'ans, un de mes frères se prénomme ' + moi.frere[0] + ' et le second ' + moi.frere[1]);