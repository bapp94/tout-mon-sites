<?php
session_start();
var_dump($_SESSION);
if (empty($_SESSION)== true){
	$template = 'noluck';
}else{

$id=$_GET['id'];
var_dump($_GET);
include 'application/bdd_connection.php';



if(empty($_POST) == false){

	var_dump($_POST);
$query = $pdo->prepare
(
	'UPDATE
		Post
	SET
		Title=?,
		Content=?

	WHERE id = ?
      '

);

$query->execute([$_POST['title'],$_POST['contents'],$id]);

$EdiTArticle = $query->fetchAll(PDO::FETCH_ASSOC);

header('location: admin.php');
exit();
} else {

$query = $pdo->prepare
(
	'SELECT 
		id,
		Title,
		Content
	FROM Post
	WHERE id = ?
      '

);

$query->execute([$id]);

$EditArticle = $query->fetchAll(PDO::FETCH_ASSOC);

var_dump($EditArticle);

}










}

$template = 'edit_post';
include 'layout.phtml';
?>