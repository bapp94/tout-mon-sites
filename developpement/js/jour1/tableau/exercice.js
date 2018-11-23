var weekDay =  new Array();

weekDay[0] = 'dimanche';
weekDay[1] = 'lundi'
weekDay[2] = 'mardi';
weekDay[3] = 'mercredi';
weekDay[4] = 'jeudi';
weekDay[5] = 'vendredi';
weekDay[6] = 'samedi';
console.log(weekDay) // affiche dans la console

var month = new Array();// annonce c'est un tableau 


month = ['janvier','février','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','décembre'];

console.log(month);

var today = new Date();// donne la date du jour.

document.write('Nous sommes le ' + weekDay[today.getDay()] + ' ' +  today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear());
