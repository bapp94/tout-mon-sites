<?php


class MealModel {

	public function listAll() {
		$meals = new Database();

		$sql = 'SELECT * FROM Meal';

		return $meals->query($sql);
	}

	public function recupId($mealsid){

		$meals = new Database();

		$sql = 'SELECT * From Meal WHERE Id = ?';

		$values = [$mealsid];

		return $meals->queryOne($sql , $values);
	}



}



?>