<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT Id, contactFirstName, contactLastName FROM customers'
);

$query->execute();

$customers = $query->fetchAll(PDO::FETCH_ASSOC);





$query = $pdo->prepare
(
	'SELECT firstName, lastName FROM employees WHERE employeeNumber = 1002'
);

$query->execute();

$employee = $query->fetch(PDO::FETCH_ASSOC);


// pour ecrire Carine Shmitt

echo $customers[0]['contactFirstName'].' '.$customers[0]['contactLastName'];






include 'index.phtml';





?>