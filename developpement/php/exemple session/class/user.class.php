<?php

class User extends Database { 


	public function saveUser($firstname, $lastname, $email, $password) {
    
    	$sql = ' INSERT INTO
                Users
                (FirstName, LastName, Email, Password)
            VALUES
                (?, ?, ?, ?)';
                
        $execute = [$firstname, $lastname, $email, $password];
        $this->executeInSql($sql, $execute);
    
    }

	public function createSession($mail, $password) {
    
    	$user =  $this->selectOneInSql(
        	'SELECT
	            *
             FROM
              	Users
             WHERE Email = ?', 
        	[ $mail ]
        );
    
    	if( $user['Password'] == $password && $user != false ) {
        	$_SESSION['user']['FirstName'] = $user['FirstName'];
			$_SESSION['user']['LastName'] = $user['LastName'];
	        $_SESSION['user']['Email'] = $user['Email'];
            header('Location: index.php');
	        exit();
        
        } 
    	
    
    }
      public function logoutSession() {
    	session_destroy();

		header('Location: index.php');
		exit();
    
    }
}

?>

