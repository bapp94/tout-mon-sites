<?php

class BookingController {

    public function httpGetMethod(Http $http, array $queryFields)
    {
    	
     


    }

    public function httpPostMethod(Http $http, array $formFields)
    {

        try{
    $booking = new BookingModel();

    $book = $booking-> InsertBooking();

    $http->redirectTo('/');
        }
         catch(DomainException $exception) {
                echo 'la requête pdo a merdé';
            
            }
    }
}
?>