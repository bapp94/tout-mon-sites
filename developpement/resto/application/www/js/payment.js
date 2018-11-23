var StoreMeal = loadDataFromDomStorage('panier');

console.log(StoreMeal);

function display(){
	
	var recap = $('#recap');
	var thead = $('<thead><tr><th>quantité</th><th class="number">Produit</th><th class="number">prix unitaire</th><th class="number">Prix Total</th><th></th>');

	recap.html(thead);
	var tbody = $('<tbody>');
	recap.append(tbody);
	
	var total = 0;
	for (var i =  0 ; i < StoreMeal.length ; i++) {

		total += (StoreMeal[i]['quantity']*StoreMeal[i]['salePrice']);
		console.log(total);
		console.log(StoreMeal[i]['quantity']*StoreMeal[i]['salePrice']);

		var tr = $('<tr><td>'+ StoreMeal[i]['name'] +'</td><td class="number">'+StoreMeal[i]['quantity'] +'</td><td class="number">'+StoreMeal[i]['salePrice'].toFixed(2)+' €</td><td class=number>'+(StoreMeal[i]['quantity']*StoreMeal[i]['salePrice']).toFixed(2) +' €</td>');
		tbody.append(tr);
	}

	var tfoot = $('<tfoot><tr><td colspan="3">Total ht</td><td>'+ total.toFixed(2) +' €</td></tr><tr><td colspan = "3">TVA (20 %)</td><td>'+(total * 0.2).toFixed(2) +' €</td></tr><tr><td colspan="3" class="colorful">Total TTC </td><td class="colorful">' + (total + (total*0.2)).toFixed(2) +' €</td></tr></tfoot>');

	recap.append(tfoot);

}

function deliver(){
	var Json = JSON.stringify(StoreMeal);
	console.log(Json);
	$('#envoie').val(Json);
}


deliver();
display();