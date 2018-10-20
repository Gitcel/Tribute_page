var element_achievements = document.getElementById("achievements-id");
var element_links = document.getElementById("links-id");
var element_creator = document.getElementsByClassName("creator-container");

$(document).ready(function() {

    $("#button-id").click(function() {

        var buttonText = $("#button-id").text();
        
        $("#links-id").fadeToggle(6000);
        
        $("#achievements-id").animate({
            height: "toggle",
            opacity: "toggle"                      
        }, 2000);       

        if (buttonText == "Read more.") {

            $("#button-id").text("Read less.");            

        }
        
        else if (buttonText == "Read less.") {

            $("#button-id").text("Read more.");           

        }

    });

    $("#MJ-1").click(function() {
        window.open("https://www.michaeljackson.com/");
    });

    $("#MJ-2").click(function() {
        window.open("https://www.thejacksons.com/michael-jackson/");
    });

    $("#MJ-3").click(function() {
        window.open("https://www.biography.com/people/michael-jackson-38211");
    });

});

console.log("The script file loaded.");