<?php
	
	if(empty($_POST['a']) == false && empty($_POST['b']) == false && empty($_POST['c']) == false) {
		var_dump($_POST);
		var_dump($_POST['b']);

	} else {
		header('location: index.php');
	}
	

?>