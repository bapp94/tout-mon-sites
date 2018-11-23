<?php
class ValidateModel {

	public function  rec(){
		
			$json = json_decode($_POST['hidden']);
		
		var_dump($json);

			$totalAmount = 0;
			
			for ($i=0; $i < count($json) ; $i++) { 
	    		$mealsModel = new MealModel();
	    		$meal = $mealsModel -> recupId($json[$i]->mealId);
	    			if ($meal['Id'] == $json[$i]->mealId) {
	    				$json[$i] -> securePrice = $meal['SalePrice'];
	    		}
    			
    		}
    		for ($i=0; $i < count($json) ; $i++) { 
    			
    			$var[$i] = $json[$i]->mealId;
				$totalAmount += ($json[$i]->securePrice*$json[$i]->quantity);
			}




			$taxAmount = $totalAmount*0.2;
			$tva = 20;
			if(empty($_POST) == false){

			$database = new Database();

			
			$user = $_SESSION['user']['id'];

    	
    	}
    	
			$sql = ' 
			INSERT INTO `Order`(
			User_Id, 
	        TotalAmount, 
	        TaxRate, 
	        TaxAmount,  
	        CreationTimestamp,
	        CompleteTimestamp,
	        Statut)
	        VAlUES
	        (?,?,?,?,NOW(),NOW(), "not payed") ';

	        $values=([$user,$tva,$totalAmount,$taxAmount]);

	       $database->executeSql($sql , $values);



	       $sql = '
	       SELECT
	        * 
	       FROM `Order` 
	       WHERE User_Id = ?
	       ORDER BY Id DESC LIMIT 1';
			$values = ([$user]);
			
			
			$userId = $database->queryOne($sql , $values);
			
			var_dump($userId);

			for ($j=0; $j < count($json) ; $j++) { 
					$sql = '
					INSERT INTO `OrderLine`(
					QuantityOrdered,
					Meal_Id,
					Order_Id,
					PriceEach
					)
					VALUES (?,?,?,?)';

					$values=([
						$json[$j]->quantity,
						$json[$j]->mealId,
						$userId['Id'],
						$json[$j] ->securePrice]);
					

					$database->executeSql($sql , $values);

			}
	      
			
	}





}	
	
?>