// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function(){
	$('.flexsearch-input').keyup(function(e){
     		var input = $('.flexsearch-input').val();
     		input = input.toLowerCase();
     		$('.autocomplete').html("");
     		getResults(string);
     	});
 
     function getResults(input) {
     	googleLink = "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=";
     	$.getJSON("http://www.mattbowytz.com/simple_api.json?data=all", function(data){
 		 	for (var i in data){
   				for (var j in data[i]){
   					var results = data[i][j];
   					for( var k in results){
   						var curr = results[k];
   						curr = curr.toLowerCase();
   						if(curr.startsWith(input) && input.length > 0 && curr.length > 1) {
                 			$('.autocomplete').append('<a target="_blank" href=' + googleLink + curr.replace(' ', '%20') + '>' + curr + '</a><br>');
 		 				}
 		 			}
 		 		}
 			}		
 		});
 	}
 });