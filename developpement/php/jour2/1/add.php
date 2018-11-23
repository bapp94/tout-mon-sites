<?php  


include 'utilities.php';


if(empty($_POST['title']) == false) {
	$description = $_POST['tache'];
    $date        = $_POST['annee'].'-'.$_POST['mois'].'-'.$_POST['jour'];
    $priority    = $_POST['priority'];
    $title       = $_POST['title'];
	
	addTask($title, $description, $date , $priority);
}

header('location: index.php');

function addTask($title, $description, $date , $priority) {

	if(empty($description) == true)
    {
        $description = 'Tâche sans description';
    }


	$taskData =
	[
		$title,
		$description,
		$date,
		$priority
	];
    
    saveTask($taskData);

}




?>