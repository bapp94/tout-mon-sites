

function display()
{
    var radioChoice;
    radioChoice = $('input[name=what]:checked').val();
    if (radioChoice == 1 )
    {
        $.get('ajax.php', gestionData);

    }
    else if (radioChoice == 2 )
    {
         $.getJSON('ajax2.php', gestoinJSon);
    }
    else 
    {
        $.get('ajax3.php', gestionFilm);
    }


}

function gestionData(response)
{
    for(var i = 0 ; i< response.length;i++)
    {
        $('#target').html(response);
        console.log(response);
    }

}

function gestoinJSon(response)
{
    var list = $('<ul>');
   
    for(var i = 0 ; i< response.length;i++)
    {
        
        var li = $('<li>');
        list.append(li.append('<p>Prénom : '+response[i].firstName+'</p><p> télephone : ' + response[i].phone));
    }

    $('#target').html(list);

}

function gestionFilm(response)
{
    
    $('#target').html(response);
}





$('#run').on('click',display);

