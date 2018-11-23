<?php



class BookingModel {

	public function InsertBooking()
	{

		if(empty($_POST) == false){

		$database = new Database();

		var_dump($_POST);
		$bookDate = $_POST['bookingYear'].'-'.$_POST['bookingMonth'].'-'.$_POST['bookingDay'];
		
		$bookHour = $_POST['bookingHour'].':'.$_POST['bookingMinute'];


		$sql = ' 
		INSERT INTO Booking(
		BookingDate, 
        BookingTime, 
        NumberOfSeats, 
        User_Id,  
        CreationTimestamp)
        VAlUES
        (?,?,?,?,NOW()) ';

        $values=([$bookDate,$bookHour,$_POST['numberOfSeats'],$_SESSION['user']['id']]);

        return $database->executeSql($sql , $values);
}
	}


}
?>