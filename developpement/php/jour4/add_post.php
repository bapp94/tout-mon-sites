<?php
session_start();
var_dump($_SESSION);
if (empty($_SESSION)== true){
	$template = 'noluck';
}
else{

 $template = 'add_post';


////////////////PREMIERE DEMANDE//////////////////////////////


include 'application/bdd_connection.php';

$query = $pdo->prepare
(
	'SELECT Id, FirstName ,  LastName FROM Author'
);

$query->execute();

$authors = $query->fetchAll(PDO::FETCH_ASSOC);




///////////////// DEUXIEME DEMANDE///////////////////////////

include 'application/bdd_connection.php';
$query = $pdo->prepare
(
	'SELECT Id, Name FROM Category'
);

$query->execute();

$category = $query->fetchAll(PDO::FETCH_ASSOC);


///////////////////RECUP ELLEMENT FORM///////////////////////
var_dump($_POST);
if(empty($_POST['title']) == false) {
	$title = $_POST['title'];
	$content = $_POST['contents'];
	$author = $_POST['author'];
	$category = $_POST['category'];

	pushDtb($title, $content,$author,$category);
}

function pushDtb($title, $content,$author,$category){

include 'application/bdd_connection.php';

	$query = $pdo->prepare
	(
		'INSERT INTO Post (title, Content ,CreationTimesTamp,  Author_id ,Categorie_id) VALUES (?,?,NOW(),?,?)'
	);

	$query->execute( [$title,$content,$author,$category] );

	$authors = $query->fetchAll(PDO::FETCH_ASSOC);

	header('location: index.php');
}






}
include'layout.phtml';
	
?>