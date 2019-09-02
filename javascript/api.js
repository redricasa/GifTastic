$(document).ready(function(){
    var APIkey = "B8y7gQpprsocHT91dIPf6DqU0dS1AQin";
    var userSearch = "cat"; // user's search word entered here
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + userSearch +"&api_key="+ APIkey
      
    $.ajax({
        url: queryUrl, 
        method: "GET"
    }).then(function(response){
        resp = response;
        console.log(response);
    });
    
    // variable to store the gif searches
    var topics = ["cats","dogs","guniea pigs"];
    function gifButtons(){
        //deletes movie buttons to prevent duplicates
        $("#gif-area").empty();
        //a loop that crates buttons with same class,attribute and text of search term and adds it to the gif-area
        for(var i=0; i< topics.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("gif");
            gifButton.attr("data-name", topics[i]);
            gifButton.text(topics[i]);
            $("#gif-area").append(gifButton);
        }
    }
    gifButtons();
    //when the submit button is clicked, an event runs
    $("#add-gif").on("click", function(event){
        event.preventDefault();
        var gifSearch = $("#gif-input").val().trim();
        topics.push(gifSearch);
        gifButtons();
    })
    gifButtons();
    //click event function to grab the object clicked and animate if still and still if animated
    $(".gif").on("click", function(){
        var state = $(this).attr("data-state");
        if (state==="still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }else{
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state","still");
        }
    });
    //create a dynamic entry of gifs that gets the animated and still gifs to attributes
    topics.forEach(function(){
        var img = $("<img>");
        img.attr("data-still", )
    })
    


});