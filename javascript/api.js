$(document).ready(function(){
    $.ajax({
        url: queryUrl, 
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + userSearch +"&api_key="+ APIkey+"&limit="+ limit
var APIkey = "B8y7gQpprsocHT91dIPf6DqU0dS1AQin"
var userSearch = "cat"; // user's search word entered here
var limit = 10;














})