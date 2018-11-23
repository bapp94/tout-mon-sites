<?php

class LoginController {

    public function httpGetMethod(Http $http, array $queryFields)
    {
    	
     


    }

    public function httpPostMethod(Http $http, array $formFields)
    {

          try
            {
    	$loginUser = new LoginModel();
        $login = $loginUser-> Login();
        var_dump($login);
         $http->redirectTo('/');
    }
        catch(DomainException $exception) {
             echo 'la requête pdo a merdé';
            
            }
    }


}

?>