<?php
session_start();
var_dump($_SESSION);


include 'application/bdd_connection.php';

$query = $pdo->prepare
(
	'SELECT 
		Post.Id,
		Title,
		Content,
		CreationTimesTamp,
		FirstName,
		LastName
		FROM Post
	INNER JOIN Author ON Author.Id = Post.Author_id'
);

$query->execute();

$display = $query->fetchAll(PDO::FETCH_ASSOC);

$template = 'index';
include'layout.phtml';
?>