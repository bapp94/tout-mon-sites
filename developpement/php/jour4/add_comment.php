<?php
session_start();
var_dump($_SESSION);


if(empty($_POST == false)){
var_dump($_POST);

include 'application/bdd_connection.php';

	$query = $pdo->prepare
	(
		'INSERT INTO comment (NickName, Content ,CreationTimesTamp, Post_Id) VALUES (?,?,NOW(),?)'
	);

	$query->execute( [$_POST['nickName'],$_POST['contents'],$_POST['postId']] );

	$AddComment = $query->fetchAll(PDO::FETCH_ASSOC);

	header('location: show_post.php?id='.$_POST['postId']);
}






?>