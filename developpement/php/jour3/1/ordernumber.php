<?php 

$orderNumber = $_GET['id'];



$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT orderdetails.productCode, quantityOrdered, priceEach, orderLineNumber,productName,orderNumber, (priceEach *quantityOrdered) AS total
 FROM orderdetails
 INNER JOIN products ON orderdetails.productCode = products.productCode WHERE orderNumber= ?'
);

$query->execute( [$orderNumber]);

$orderdetails = $query->fetchAll(PDO::FETCH_ASSOC);

//**************************************************************************************************************************************************************************************************************************************

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT customerName, contactLastName, contactFirstName, addressLine1, city FROM customers   INNER JOIN orders ON orders.customerNumber = customers.customerNumber WHERE orderNumber= ?'
);

$query->execute([$orderNumber]);

$client = $query->fetchAll(PDO::FETCH_ASSOC);
var_dump($client);



//**************************************************************************************************************************************************************************************************************************************










//**************************************************************************************************************************************************************************************************************************************

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT orderdetails.productCode, quantityOrdered, priceEach, orderLineNumber,productName,orders.orderNumber, (priceEach *quantityOrdered) AS total, customerName, contactLastName, contactFirstName, addressLine1, city FROM orderdetails INNER JOIN products ON orderdetails.productCode = products.productCode INNER JOIN orders ON orders.orderNumber = orderdetails.orderNumber INNER JOIN customers ON customers.customerNumber = orders.customerNumber WHERE 
		orders.orderNumber= orderNumber'
);


$query->execute( [$orderNumber]);

$ordery = $query->fetchAll(PDO::FETCH_ASSOC);



$somme=0;
$somme1=0;
foreach ($ordery as $key => $somme) {
	$somme=(float)$somme['total'];
	$somme1=$somme1+$somme;
}


	include 'ordernumber.phtml';
?>