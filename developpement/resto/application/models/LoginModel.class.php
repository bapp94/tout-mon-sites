<?php



class LoginModel {

	public function Login(){
		if(empty($_POST) == false )
			
			$database = new Database();
			$sql = 'SELECT * FROM User WHERE Email= ?';
			$values = ([$_POST['email']]);
			
			
			$user = $database->queryOne($sql , $values);
			

			var_dump($user['Password']);
		


		if( $this->verifyPassword($_POST['password'], $user['Password'])) {

			$_SESSION['user']['FirstName'] = $user['FirstName'];
			$_SESSION['user']['LastName'] = $user['LastName'];
			$_SESSION['user']['Email'] = $user['Email'];
			$_SESSION['user']['id'] = $user['Id'];
			$_SESSION['user']['Zipcode'] = $user['ZipCode'];
			$_SESSION['user']['Address'] = $user['Address'];
			$_SESSION['user']['City'] = $user['City'];
	       var_dump($_SESSION);

	       
    		}
		}
			
	private function verifyPassword($password, $hashedPassword)
	{	
        // Si le mot de passe en clair est le même que la version hachée alors renvoie true.
        return crypt($password, $hashedPassword) == $hashedPassword;
	}	

}
?>