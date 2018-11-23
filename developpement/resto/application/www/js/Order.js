'use strict';
var StoreMeal = loadData();
console.log(StoreMeal);
ajaxMeal();
	
$('#meal').change(ajaxMeal);

function ajaxMeal() {
	var selectChoice = $('#meal option:selected').val();

	console.log(selectChoice);



	$.getJSON(getRequestUrl()+'/meal?id='+selectChoice, recupMeal);

}

function recupMeal(response) {
	
	console.log(response);

	var article = $('#meal-details p');
	var img = $('#meal-details img');
	var prix = $('#meal-details span strong');
	

      article.html('<p class="name">'+response.Name+'</p>'+'<p class="description">'+response.Description+'</p>');
      img.attr("src", getWwwUrl()+'/images/meals/'+response.Photo);
   
      prix.text(response.SalePrice +' €');
   	 


}


 $('#ajouter').on('click', saveMeal);




function saveMeal(e)
{
	e.preventDefault();// permet de pas rafraichir
  	var mealId = $('#meal').val();
  	var name = $('.name').text();
  	var quantity = parseInt($('#quantity').val());
  	var price = parseFloat($('#meal-details span strong').text());
  


  	for(var i = 0; i < StoreMeal.length; i++) {
  		if(StoreMeal[i].mealId == mealId) {
  			StoreMeal[i].quantity += quantity;
  			saveDataToDomStorage('panier', StoreMeal);
			display();
  			return;
  		}
  	}
  		
  	StoreMeal.push({
	mealId: mealId,
	name : name,
	salePrice : price,
	quantity : quantity

	});
  	// for (var i =0; i < StoreMeal.length; i++) {
  	
//   			if (mealId = StoreMeal[i]['mealId']){
//   				StoreMeal.push({
//   					quantity : quantity += StoreMeal[i]['quantity'] 
//   				})
//   			}
  		
//   		else 
//   			StoreMeal.push({
// 				mealId: mealId,
// 				name : name,
// 				salePrice : price,
// 				quantity : quantity

// 	});
  		
// }
	saveDataToDomStorage('panier', StoreMeal);
	display();
}



function loadData() {
	 StoreMeal = loadDataFromDomStorage('panier');
	
	if (StoreMeal == null) {
		return [];

	} else {
		display();
		return StoreMeal;
			}
}



function display(){
 	
	var thead = $('<thead><tr><th class="number">quantité</th><th>Produit</th><th class="number">prix unitaire</th><th class="number">Prix Total</th><th></th>');
	$('.generic-table').html(thead);
	
	var tbody = $('<tbody>');
	$('.generic-table').append(tbody);
	
	
	for (var i = 0; i < StoreMeal.length; i++)
	{
		


		
		var tr = $('<tr><td class ="number"">'+ StoreMeal[i]['quantity'] +'</td><td>'+StoreMeal[i]['name'] +'</td><td class="number">'+StoreMeal[i]['salePrice'] +' €</td><td class=number>'+(StoreMeal[i]['quantity']*StoreMeal[i]['salePrice']) +' €</td><td><button class="button button-cancel small" title="Supprimer l\'article" data-meal-id="'+StoreMeal[i].mealId+'"><i class="fas fa-trash-alt"></i></button></td>');
		
	

		$('.generic-table').append(tr);



	}
	document.getElementById("validate-order").disabled = false;
	

}

function deleteOneItem(e) {

	e.preventDefault();

	var index = $(this).data('meal-id');

	console.log(index);

	for(var j = 0; j < StoreMeal.length; j++) {

		if (StoreMeal[j].mealId == index) {
			StoreMeal.splice(j, 1);

		    console.log(StoreMeal);
		    
		    saveDataToDomStorage('panier', StoreMeal);
		    
			display();
		}
	}
	
    
}

 $(document).on('click', '.button-cancel', deleteOneItem);