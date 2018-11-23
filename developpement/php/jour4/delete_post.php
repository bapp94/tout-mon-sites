<?php

// if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id'])) regarde si il y a un truc incscrit ou si il y a un chiffre
// {
	var_dump($_GET['id']);
	include 'application/bdd_connection.php';
$query = $pdo->prepare
(
	'DELETE FROM `Post` WHERE Id = ?'

);

$query->execute([$_GET['id']]);

$Suppr = $query->fetchAll(PDO::FETCH_ASSOC);

header('location: admin.php');
exit();





?>