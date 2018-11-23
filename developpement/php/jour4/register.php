<?php
session_start();
var_dump($_SESSION);
include 'application/lib.php';


if(empty($_POST) == false) {
    
        $hashPassword = hashPassword($_POST['Password']);

    
    include 'application/bdd_connection.php';
    

    $query = $pdo->prepare
		(
		    ' INSERT INTO
                Users
                (FirstName, LastName, Email, Password)
            VALUES
                (?, ?, ?, ?)'
		);

		$query->execute([$_POST['FirstName'], $_POST['LastName'], $_POST['Email'],$hashPassword]);
    
 		    header('Location: index.php');
   			 exit();
}






$template = 'register';
include 'layout.phtml';

?>