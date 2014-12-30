$(document).ready(function(){

// Audioplayer begin //////////////////////////////////////////////////
        $("#funky-music").jPlayer({
                ready: function () {
                                  /*
                        $(this).jPlayer("setMedia", {
                                mp3: "sounds/enfin.mp3",
                                oga: "sounds/time-to-go.ogg",
                                });
                                   */
                                   
                                   
                },
                ended: function (event) {
                },
                swfPath: "js",
                supplied: "mp3,oga",
                backgroundColor: "transparent",
                cssSelectorAncestor: "#jp_interface"
        })

        .bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
                        $(this).jPlayer("pauseOthers");
        });
 


});
// Audioplayer End //////////////////////////////////////////////////
    
function play_audio(file) 
{
   
    var mp3_url = file; 
//    var oga_url = "sounds/" + file + ".oga";
    $('#funky-music').jPlayer("clearMedia"); 
    $('#funky-music').jPlayer("setMedia", {mp3:mp3_url /*, oga:oga_url*/}); 
   // $('#funky-music').jPlayer("supplied", "mp3,oga"); 
    $('#funky-music').jPlayer("supplied", "mp3"); 

    $('#funky-music').jPlayer("play"); 
}
