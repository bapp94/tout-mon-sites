<?php
class OrderModel {

	public function find($orderId) {
		$database = new Database();

		$sql = 'SELECT * 
				FROM `Order` 
				WHERE Id=?';

		return $database->queryOne($sql, [$orderId]);
	}
	public function payed($orderId) {

    	$database = new Database();

    	$sql = 'UPDATE `Order`
				SET 
					Statut = "payed"
				WHERE Id = ?';

		$database->executeSql
        (
            $sql,
            [$orderId]
        );

    }

}

?>