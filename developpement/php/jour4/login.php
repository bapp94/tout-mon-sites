<?php
session_start();
include 'application/lib.php';




if(empty($_POST) == false ) {
	var_dump($_POST);
    
        include 'application/bdd_connection.php';


    $query = $pdo->prepare
		(
		    'SELECT
	            *
             FROM
              	Users
             WHERE Email = ?'
		);

	$query->execute([ $_POST['email'] ]);


	$user = $query->fetch(PDO::FETCH_ASSOC);
    
    var_dump($user);
    
    if( verifyPassword($_POST['password'], $user['Password']) && $user != false ) {

		$_SESSION['user']['FirstName'] = $user['FirstName'];
		$_SESSION['user']['LastName'] = $user['LastName'];
		$_SESSION['user']['Email'] = $user['Email'];

         echo 'Connecté';
        
        var_dump($_SESSION);

         header('Location: index.php');
        exit();
    }
}
$template = 'login';
include'layout.phtml';
?>