<?php


function saveTask(array $taskData)
{
	$file = fopen('file.csv', 'a');

	fputcsv($file,$taskData);

	fclose($file);
}

function loadTask()
{
	$file = fopen('files.csv','a+');
	$task = array();

	  while(true) {
    
    	$taskData = fgetcsv($file);
        
    	if($taskData == false)
		{
        	break;
        
        }
    	array_push($tasks, $taskData);
    
    }

	fclose($file);
	return $task;
}

function saveTasks(array $tasks)
{
	$file = fopen('tasks.csv', 'w');
    
    foreach($tasks as $taskData)
	{
		
		fputcsv($file, $taskData);
	}
	
    fclose($file);
}








?>