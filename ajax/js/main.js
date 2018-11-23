///////////// tout offices///////////////////////
// function callback(response) {

// 	console.log(response);

// }

// function clic (e){
// 	e.preventDefault();
// 	var salut = $('#mot').val();
// 	console.log(salut);
// 	$.getJSON('http://localhost/api/recupOffice.php?api_key=xyz', callback);
// }

// function callback(response) {

// 	console.log(response);

// }



// $('#search').click(clic);

//////////// office par pays ///////////////////////

// function callback(response) {

// 	console.log(response);

// }

// function clic (e){
// 	e.preventDefault();
// 	var selectChoice = $('#country option:selected').val();
// 	console.log(selectChoice);
// 	$.getJSON('http://localhost/api/recupOfficeCountry.php?api_key=xyz&country='+selectChoice, callback);
// }

// function callback(response) {

// 	console.log(response);

// }



// $('#country').click(clic);


//////////////////offices par id////////////////////////


function callback(response) {

	console.log(response);

}

function clic (e){
	e.preventDefault();
	var salut = $('#OffId').val();
	
	$.getJSON('http://devman.fr/api/recupOneCustomer.php'+salut, callback);
}

$.getJSON('http://devman.fr/api/recupOneCustomer.php?id=103',callback);

function callback(response) {

	console.log(response);

}



$('#Off').click(clic);
//////////////////////////////employe/////////