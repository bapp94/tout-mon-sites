var weekDay;

weekDay = new Array(); // weekDays = []; même ecriture !

weekDay[0] = 'lundi';
weekDay[1] = 'mardi'
weekDay[2] = 'mercredi';
weekDay[3] = 'jeudi';
weekDay[4] = 'vendredi';
weekDay[5] = 'samedi';
weekDay[6] = 'dimanche';

// autre écriture 

//weekDays = [ 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

console.log(weekDay);

document.write(weekDay[5]);

// fonctionnalité de date
var today = new Date();

document.write(today);