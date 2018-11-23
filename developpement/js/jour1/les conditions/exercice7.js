var age;
var isThirtyYearsOld;
var isAdult;
var isNotCentennial;


age = parseInt(window.prompt('Quel est votre âge ?'));// affiche dans un pop up la question ()
var FirstName  = window.prompt('quel est ton nom ?');
// (age === 30);  
//(age >== 30);  
//(age > 30); 
//(age <== 30);  
//(age < 30);  
//(age !== 30);  different d'égale


isThirtyYearsOld = (age == 30);         
isAdult          = (age >= 18);         // Est-ce que l'âge est de 18 ans ou plus ?
isNotCentennial  = (age != 100);  

document.write('<p>Vous avez trente ans : ' + isThirtyYearsOld + '.</p>');
document.write('<p>Vous êtes majeur : ' + isAdult + '.</p>');
document.write("<p>Vous n'êtes pas centenaire : " + isNotCentennial + '.</p>');


if (age > 18) {

	document.write('<p>Vous êtes majeur.<p/>');
}
if(age < 20)
{
    document.write('<p>Vous avez moins de 20 ans.</p>');
}
else
{
    document.write('<p>Vous avez plus de 20 ans.</p>');
}
if (FirstName === 'paul') {
	document.write('<p>Salut Paul</p>');
}
else {
	document.write("t\'es qui ?");
}
if(FirstName == 'Elsa')
{
    document.write("<p>Vous vous appelez Elsa.</p>");
}
else if(FirstName == 'Charlotte')
{
    document.write("<p>Vous vous appelez Charlotte.</p>");
}
else
{
    document.write("<p>Vous ne vous appelez ni Elsa ni Charlotte.</p>");
}
if(FirstName == 'Tom' && age != 40) //il faut que les deux condition soit respecté ! 
{
    document.write("<p>Vous vous appelez Tom et vous n'êtes pas quadra.</p>");
}
if(FirstName == 'Tom' || age != 40) //il faut que l'une des condition seulement soit respecté!
{
    document.write("<p>Vous vous appelez et vous n'êtes pas quadra.</p>");
}
