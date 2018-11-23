const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';
var form=document.getElementById('search');


// $.getJSON('https://api.themoviedb.org/3/movie/597?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', recupFilm);

function recupFilm() 
{
	value = form.value;
	console.log(value);
	getMovie(value);
}

function getMovie(keyword){
	$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query='+keyword, function(response) {
			console.log(response);
			var list = $('<ul>');
		   
		    for(var i = 0 ; i< response.results.length ;i++)
		    {
		        
		        var li = $('<li>');
		        list.append(li.append('<p data-id="'+response.results[i].id+'">titre : '+response.results[i].original_title+'</p>'));
		       
		    }
		    console.log('list', list);

		    $('#affiche').html(list);
	});
}

function displayDetailMovie(event)
{
	event.preventDefault();
	var index = $(this).data('id');
	console.log(index);
	$.getJSON('https://api.themoviedb.org/3/movie/'+index+'?api_key='+API_KEY,function(response){
			
				console.log(response);
				var result = $('<div>');
			    var img = $('<img>').attr('src', url_img+response.poster_path).css('width', '250px');
			    var title = $('<h1>').append(response.title);
			    var year = $('<h2>').append(response.release_date);
				var desc = $('<p>').append( response.overview );
				var note = $('<p>').append( response.vote_average);
			    
			    result.append(img).append(title).append(year).append(desc).append(note);
			    $('#display').html(result);

    
}

		       
		    

	
	)};






$(document).on('click','#affiche ul li p',displayDetailMovie);
$('#button').on('click',recupFilm);




// <!DOCTYPE html> 
// <html>
// <head>
// 	<title>Movie</title>
// 	<meta charset="utf-8">
// 	<link rel="stylesheet" type="text/css" href="css/style.css">
// </head>
// <body>
// 	<header>

// 	</header>
// 	<h1>Moteur de recherche de film</h1>
// 	<div class="form">
// 		<h2>Trouver un film :<h2>
// 		<form>
// 			<input type="text" name="search" id="search">
// 			<input type="submit" name="send" id="send">
// 		</form>
// 	</div>
// 	<div class="info">
// 		<div id="list" class="hide">
			
// 		</div>
// 		<div id="result" class="hide">
// 			<p>hello</p>
// 		</div>
// 	</div>
// 	<script
//   src="https://code.jquery.com/jquery-3.2.1.min.js"
//   integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
//   crossorigin="anonymous"></script>
//   <script type="text/javascript" src="js/api.js"></script>
//   <script type="text/javascript" src="js/events.js"></script>
// </body>
// </html>

// <script>

// //api.js


// const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';
// const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

// function getMovies(keyWord) {
	
//     $.getJSON('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+keyWord, displayMoviesList);

// }

// function displayMoviesList(response) {
	
//     console.log(response);
    
//     var data = response.results;
    
//     var list = $('<ul>');
    
    
//     for (var i= 0; i < data.length; i ++ ) {
    	
//         var li = $('<li data-id="'+data[i].id+'">')
    	
//         list.append(li.append(data[i].title));
//     }
    
    
//     $("#list").html(list);
// 	$("#list").removeClass('hide');
// }

// function showOneMovie(id) {

// 	$.getJSON('https://api.themoviedb.org/3/movie/'+id+'?api_key='+API_KEY, displayDetails);

// }


// function displayDetails(response) {
// 	console.log(response);
// 	var result = $('<div>');
//     var img = $('<img>').attr('src', url_img+response.poster_path).css('width', '250px');
//     var title = $('<h1>').append(response.title);
//     var year = $('<h2>').append(response.release_date);
// 	var desc = $('<p>').append( response.overview );
// 	var note = $('<p>').append( response.vote_average);
    
//     result.append(img).append(title).append(year).append(desc).append(note);
//     $('#result').html(result);
//     $('#result').removeClass('hide');
    
// }






// //events.js

// function onClickSearchMovie(e) {
// 	e.preventDefault();
//     var movies = $('input[name=search]').val();
//     getMovies(movies);

// }

// function onClickShowOneMovie() {
// 	var id = $(this).data('id');
//     showOneMovie(id);
// }


// $('#send').on('click', onClickSearchMovie);

// $(document).on('click', '#list li' , onClickShowOneMovie);


// </script>