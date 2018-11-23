<?php

header('access-control-allow-origin: *');
header('Content-Type: application/json');

include 'classes/Database.class.php';

if (array_key_exists('keyword', $_GET) == false &&array_key_exists('api_key', $_GET) == false && $_GET['api_key'] != 'xyz' ) {

	echo 'pas de paramètre';
    exit();

}

$database = new Database();

$sql = 'SELECT * FROM customers WHERE customerName LIKE "%"?"%"';

$execute = [$_GET['name']];
$customer = $database->selectAllInSql($sql, $execute);

if ($customer != false){

echo json_encode($customer);
exit();

} else {
	echo 'erreur 404 pas de customer avec cet id ';
}

?>
