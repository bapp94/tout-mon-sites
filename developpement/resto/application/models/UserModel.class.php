<?php


class UserModel {

	public function InsertUser() {
		
		if(empty($_POST) == false){
		
		$user = new Database();
		$password = $this->hashPassword($_POST['password']);
		$BirthDate = $_POST['birthYear'].'-'.$_POST['birthMonth'].'-'.$_POST['birthDay'];

		$sql = ' INSERT INTO
                User (
                FirstName, 
                LastName, 
                Email, 
                Password, 
                BirthDate, 
                Address, 
                City, 
                ZipCode, 
                Country, 
                Phone, 
                CreationTimestamp,
                LastLoginTimestamp)
            VALUES
                (
                ?, 
                ?, 
                ?, 
                ?, 
                ?, 
                ?, 
                ?, 
                ?, 
                ?, 
                ?,
                NOW(),
                NULL )';

        $values = 
        	([
        	$_POST['firstName'],
        	$_POST['lastName'],
        	$_POST['email'],
        	$password,
        	$BirthDate ,
        	$_POST['address'],
        	$_POST['city'],
        	$_POST['zipCode'],
        	$_POST['country'],
        	$_POST['phone']
        	]);

		return $user->executeSql($sql , $values);
	}
	}
	private function hashPassword($password)
    {
       
        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        // Voir la documentation de crypt() : http://devdocs.io/php/function.crypt
        return crypt($password, $salt);
    }
}


?>