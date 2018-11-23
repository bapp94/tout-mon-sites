var button = document.getElementById('add-contact');
var form = document.getElementById('contact-form');
var select = document.getElementById('title');
var phone = document.getElementById('phone');
var firstName = document.getElementById('firstName');
var lastName  = document.getElementById('lastName');
var contacts = loadData();
var affiche = document.getElementById('list-address-book');
var buttonSave = document.getElementById('save-contact');
var supprim = document.getElementById('clear-address-book');
var deleteOne= document.getElementById('deleteOne');
var contactDetail = document.getElementById('contact-details');
var a = document.querySelector('#contact-details a');

display();



///////////////////////////////////////////////////////////////////////////////////////////////////////FUNCTION////////////////////////////////////////////////////////////////////////////////////////////////

function hiden()
{
	form.classList.toggle('hide');
	
}

function save()
{
	var contact = {
		civility: select.value,
		lastName: lastName.value,
		firstName: firstName.value,
		phone: phone.value
		};

	contacts.push(contact);

	console.log('contacts', contacts);

	var tabstring=JSON.stringify(contacts);

	window.localStorage.setItem('salop',tabstring);

	form.reset;
	form.classList.add('hide');
	contactDetail.classList.add('hide'); 
	display();
	form.reset;

}

function loadData() {
	var contacts = window.localStorage.getItem('salop');
	if (contacts == null) {
		return [];
	} else {
		return JSON.parse(contacts);
	}
}

function display ()
	{
		affiche.innerHTML = "";
		var list = document.createElement('ul');

		/*
		var x = window.localStorage.getItem('salop');
		x = JSON.parse(x);
		var li = document.createElement("li");
	*/
		for (var i = 0; i < contacts.length; i++)
		{
			var li = document.createElement('li');
			li.dataset.index = i;
			li.append(contacts[i]['civility']+'   '+ contacts[i]['lastName']+ ' ' +contacts[i]['firstName']);
			list.append(li);
		}


		affiche.append(list);

		var contactList = document.querySelectorAll('#list-address-book li');

		for(var j = 0; j < contactList.length; j++) {
			contactList[j].addEventListener('click', displayContactDetail);  
		}

	}







function displayContactDetail() {
	var index = this.dataset.index;
	
	var h3 = document.querySelector('#contact-details h3');
	var p = document.querySelector('#contact-details p');
	
	h3.textContent = contacts[index].civility+' '+contacts[index].firstName+' '+contacts[index].lastName;
	p.textContent = contacts[index].phone;
	a.dataset.index = index;
	contactDetail.classList.remove('hide'); 


}


function supprimLocalStorage()
{
	window.localStorage.clear();
	contacts = loadData();
	affiche.innerHTML='<ul id="list-address-book"></ul>';
}




button.addEventListener('click', hiden);
buttonSave.addEventListener('click', save);
supprim.addEventListener('click',supprimLocalStorage);
a.addEventListener('click',save);


function editContact() {
	$('#contact-form').data('state', 'edit');

}

// <!DOCTYPE html>
// <html lang="fr">
// <head>
//     <meta charset="utf-8">
//     <title>JavaScript</title>
//     <link rel="stylesheet" href="css/normalize.css">
//     <link rel="stylesheet" href="css/font-awesome.min.css">
//     <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans">
//     <link rel="stylesheet" href="css/address-book.css">

//     <!-- Librairie jQuery -->
//     <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>

   
// </head>
// <body>
//     <section>
//         <h1><i class="fa fa-book"></i> Carnet d'Adresses</h1>

//         <!-- Contenu du carnet d'adresses (liste de contacts) -->
//         <section id="address-book"></section>

//         <!-- Détails d'un contact particulier du carnet d'adresses -->
//         <aside id="contact-details" class="hide">
//             <h3></h3>
//             <p></p>
//             <a href="#">Editer ce contact</a>
//         </aside>

//         <nav>
//             <ul class="menu">
//                 <li><button id="add-contact" title="Ajouter un contact"><i class="fa fa-plus"></i></button></li>
//                 <li><button id="clear-address-book" title="Effacer le carnet d'adresses"><i class="fa fa-trash-o"></i></button></li>
//             </ul>
//         </nav>
//     </section>

//     <!-- Le formulaire de saisie de contact ne s'affiche pas au démarrage -->
//     <form id="contact-form" class="hide standard-form" data-mode="add">
//         <hr>
//         <ul>
//             <li>
//                 <label for="title">Civilité :</label>
//                 <select id="title" name="title">
//                     <option value="Madame">Madame</option>
//                     <option value="Madamoiselle">Mademoiselle</option>
//                     <option value="Monsieur">Monsieur</option>
//                 </select>
//             </li>
//             <li>
//                 <label for="lastName">Nom :</label>
//                 <input id="lastName" type="text" name="lastName">
//             </li>
//             <li>
//                 <label for="firstName">Prénom :</label>
//                 <input id="firstName" type="text" name="firstName">
//             </li>
//             <li>
//                 <label for="phone">Téléphone :</label>
//                 <input id="phone" type="text" name="phone" maxlength="10">
//             </li>
//             <li>
//                 <input type="button" id="save-contact" value="Enregistrer">
//             </li>
//         </ul>
//     </form>
    
//      <!-- Fonctions utilitaires -->
//     <script src="js/utilities.js"></script>

//     <!-- Fonctions du carnet d'adresses -->
//     <script src="js/address-book.js"></script>
   
// </body>
// </html>


// <script>


// //utilities.js


// function saveDataToDomStorage(key, data)
// {
//     var jsonData;

//     jsonData = JSON.stringify(data);

//     window.localStorage.setItem(key, jsonData);
// }

// function loadDataFromDomStorage(key)
// {
//     var jsonData;

//     jsonData = window.localStorage.getItem(key);

//     return JSON.parse(jsonData);
// }
// //address-book.js

// var contacts = loadData();


// function onClickAddContact()
// {
// 	$('#contact-form').toggleClass('hide');
//     $('#contact-form').data('mode', 'add');

// }


// function onClickSaveContact() {

// 	var contact = {
//     	civility: $('#title').val(), // document.getElementById('title').value;
//         lastname: $('#lastName').val(), // document.getElementById('lastName').value;
//         firstname: $('#firstName').val(),  
//     	phone: $('#phone').val()
//     };
    
    
//     if($('#contact-form').data('mode') == 'add') {
    
//     	contacts.push(contact);
        
//     } else {
    
//     	var index = $('contact-details a').data('index');
        
//         contacts[index] = contact;
    
//     }
    
    
    
    
//     saveDataToDomStorage('addressBook', contacts);
    
//     var form = document.getElementById('contact-form');
    
//     form.reset();

// }

// function loadData() {

// 	var data = loadDataFromDomStorage('addressBook');
    
//     if (data == null) {
    
//     	return []; 
    
    
//     } else {
    
//     	return data;
    
//     }
    

// }

// function displayContact() {

// 	var list = $('<ul>');
    
//     for (var i = 0; i < contacts.length; i++){
    	
//         list.append('<li data-index="'+i+'">'+contacts[i].civility+' '+contacts[i].firstname+' '+contacts[i].firstname+' <a href="#" data-index="'+i+'"></a>Supprimer contact</li>');
    
//     }
    
//     $('#address-book').html(list);

// }

// function displayOneContactDetail() {

// 	var index = $(this).data('index');
    
//     $('#contact-details h3').text(contacts[index].civility+' '+contacts[index].firstname+' '+contacts[index].firstname+);
//     $('#contact-details p').text(contacts[index].phone);
//     $('#contact-details a').data('index', index);
//     $('#contact-details').removeClass('hide');

// }

// function editContact() {
// 	$('#contact-form').data('mode', 'edit');
//     var index = $('#contact-details a').data('index');
    
    
//     $('#title').val(contacts[index].civility);
//     $('#lastName').val(contacts[index].lastname);
//     $('#firstName').val(contacts[index].firstname) 
//     $('#phone').val(contacts[index].phone);
    
	
// }

// function deleteOneContact() {

// 	var index = $(this).data('index');
	
//     contacts.splice(index, 1);
    
//     saveDataToDomStorage('addressBook', contacts);
    
// 	displayContact();
// }




//  $('#add-contact').on('click', onClickAddContact);
//  $('#save-contact').on('click', onClickSaveContact);
//  $(document).on('click', '#address-book li',displayOneContactDetail);
//  $('#contact-details a').on('click', editContact);
//  $(document).on('click', '#address-book li a', deleteOneContact);


// </script>