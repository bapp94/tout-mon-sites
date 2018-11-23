<?php
session_start();
var_dump($_SESSION);

$id=$_GET['id'];


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
	INNER JOIN Author ON Author.Id = Post.Author_id
	WHERE Post.Id = ?'
);

$query->execute([$id]);

$ShowPost = $query->fetchAll(PDO::FETCH_ASSOC);



include 'application/bdd_connection.php';

$query = $pdo->prepare
(
	'SELECT 
		*
	FROM comment
	WHERE Post_Id = ?'

);

$query->execute([$id]);

$ShowComment = $query->fetchAll(PDO::FETCH_ASSOC);







$template = 'show_post';
include'layout.phtml';
?>