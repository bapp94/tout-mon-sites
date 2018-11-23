<?php


class UserController {

    public function httpGetMethod(Http $http, array $queryFields)
    {
    	
     


    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	
        try
            {
        
    $CreateUserModel = new UserModel();

    $user = $CreateUserModel-> InsertUser();

    $http->redirectTo('/');
    }
        catch(DomainException $exception) {
             echo 'la requête pdo a merdé';
            
            }


}

}

?>