<?php 
	 $dictionary =
    [
        'cat'    => 'chat',
        'dog'    => 'chien',
        'monkey' => 'singe',
        'sea'    => 'mer',
        'sun'    => 'soleil'
    ];

$result = null;

if (array_key_exists('word', $_POST) == true) 
{
		
		$result = translate($dictionary);
		$word = strtolower($_POST['word']);
		$direction = $_POST['direction'];
		var_dump($result);
}

function translate($dico)
{
	if($_POST['direction'] == 'toFrench') {

		if(array_key_exists($_POST['word'] ,$dico)) {

			return $dico[$_POST['word']]; // $dico['cat']


		} else {
			return 'Attention mot inconnu';
		}


	} else {

		if(in_array($_POST['word'], $dico) == true)
		{
			return array_search($_POST['word'], $dico);
		}
		else
		{
			return 'attention mot inconnu';
		}
	}

}



include 'index.phtml';
 ?>