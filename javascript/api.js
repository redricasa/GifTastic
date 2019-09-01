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
// variable to store the gif searches
var gifs = ["cats","dogs","guniea pigs"];
function gifButtons(){
    //deletes movie buttons to prevent duplicates
    $("#gif-area").empty();
    //a loop that crates buttons with same class,attribute and text of search term and adds it to the gif-area
    for(var i=0; i< gifs.length; i++){
        var gifButton = $("<button>");
        gifButton.addClass("gif");
        gifButton.attr("data-name", gifs[i]);
        gifButton.text(gifs[i]);
        $("#gif-area").append(gifButton);
    }
}
gifButtons();
//when the submit button is clicked, an event runs
$("#add-gif").on("click", function(event){
    event.preventDefault();
    var gifSearch = $("#gif-input").val().trim();
    gifs.push(gifSearch);
    gifButtons();
})
})