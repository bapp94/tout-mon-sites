<?php 
session_start();
var_dump($_SESSION);

if (empty($_SESSION)== true){
	$template = 'noluck';
}
else{

include 'application/bdd_connection.php';

$query = $pdo->prepare
(
	'SELECT 
		Post.id,
		Title,
		Content,
		FirstName,
		LastName,
		Name
	FROM Post
	INNER JOIN Author On Author.Id = Post.Author_id
	INNER JOIN Category on Category.Id =  Post.Categorie_id      '

);

$query->execute();

$ShowArticle = $query->fetchAll(PDO::FETCH_ASSOC);








$template='admin';
}
include'layout.phtml';
?>