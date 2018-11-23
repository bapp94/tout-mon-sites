<?php

session_start();
include 'class/dtb.class.php';
include 'class/user.class.php';


if(empty($_POST) == false ) {
	var_dump($_POST);
 
	$user = new User();

    $user->createSession($_POST['email'], $_POST['password']);
}


?>


<a href="index.php">index</a>

<?php if (array_key_exists('FirstName', $_SESSION)==false) {?>

<form class="" id="login-form" action="login.php" method="POST">
	<label>Email</label>
	<input type="text" name="email" />
    
    <label>Password</label>
	<input type="password" name="password" />

	<input type="submit" value="envoyer" />
</form>

<?php } else {?>

<p>Vous êtes connecté</p>
<a href="logout.php">logout</a>

<?php } ?>

