$(document).ready(function(){
    // variable to store the gif searches
    var topics = ["cats","dogs","guniea pigs"];
    //when the submit button is clicked, an event runs
    $("#add-gif").on("click", function(event){
        event.preventDefault();
        var gifSearch = $("#gif-input").val().trim();
        topics.push(gifSearch);
        gifButtons();
    })
    
    function gifButtons(){
        //deletes movie buttons to prevent duplicates
        $("#gif-area").empty();
        //a loop that crates buttons with same class,attribute and text of search term and adds it to the gif-area
        topics.forEach(function(data){
            var gifButton = $("<button>");
            gifButton.addClass("gif-topic");
            gifButton.attr("data-name", data);
            gifButton.text(data);
            $("#gif-area").append(gifButton);
        })
    }
    //add a function that takes entry and equals it to userSearch
    gifButtons();
    $("#gif-area").on("click",".gif-topic", function(){   
        var limit = 10;
        var APIkey = "B8y7gQpprsocHT91dIPf6DqU0dS1AQin";
        var userSearch = $(this).attr("data-name"); // user's search word entered here
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + userSearch +"&api_key="+ APIkey+"&limit="+limit;
        // var gifSearch = $(this).attr("data-gif");
        $("#gif-display-area").empty();
        $.ajax({
            url: queryUrl, 
            method: "GET"
        }).then(function(response){
            var resp= response.data;
            console.log(resp);
            //create a dynamic entry of gifs that gets the animated and still gifs to attribute
            resp.forEach(function(data){
                var img = $("<img>");
                img.attr("data-still", data.images.fixed_height_still.url);
                img.attr("data-animate", data.images.fixed_height.url);
                img.addClass("gif");
                img.attr("src", data.images.fixed_height_still.url);
                img.attr("data-state", "still");
                $("#gif-display-area").append(img);
            });
            console.log(response);
        });
    });
    //click event function to grab the object clicked and animate if still and still if animated
    $("#gif-display-area").on("click",".gif", function(){
        var state = $(this).attr("data-state");
        if (state==="still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }else{
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state","still");
        }
    });   
});