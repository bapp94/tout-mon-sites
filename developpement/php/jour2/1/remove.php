<?php

include 'utilities.php';


if(array_key_exists('indexes', $_POST) == true)
{
	var_dump($_POST);
    
    
    $allTasks = loadTasks();
    
    $tasks = removeTasks($allTasks, $_POST['indexes']);
    
    saveTasks($tasks);


}

function removeTasks(array $allTasks, array $indexes)
{
	$tasks = array();
    
    foreach($allTasks as $index => $taskData)
    {
    	if(in_array($index, $indexes) == false)
        {
        
        	array_push($tasks, $taskData);
        }

    
    }

	return $tasks;
}


?>