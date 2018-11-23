<?php

include 'class/dtb.class.php';
include 'class/user.class.php';

if(empty($_POST) == false) {

    $user = new User();

    $user->saveUser($_POST['FirstName'], $_POST['LastName'], $_POST['Email'], $_POST['Password']);

    header('Location: login.php');
    exit();
}






?>

<form id="register-form" action="register.php" method="POST">
	<label>Nom</label>
    <input type="text" name="LastName"/>
    <label>Prénom</label>
    <input type="text" name="FirstName"/>
    <label>Email</label>
    <input type="text" name="Email"/>
    <label>Password</label>
    <input type="Password" name="Password"/>


    	<input type="submit" value="envoyer"/>
</form>
