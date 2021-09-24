// WEB303 Assignment 2
// Nguyen Le

$(document).ready(function() {
    $("a#vprospect").click(function(){
        $("div").load("prospect.html");// loaded prospect.html onto index.html with ajax
        $("div").slideToggle();        // animated using Jquery
    });
});

$(document).ready(function() {
    $("a#vconvert").click(function(){
        $("div").load("convert.html");  // loaded convert.html onto index.html with ajax
         $("div").animate({             // animated using the animate function with Jquery
             height: 'toggle'
         })
    });
});

$(document).ready(function() {
    $("a#vretain").click(function(){ 
        $("div").load("retain.html");   // loaded retain.html onto index.html with ajax
         $("div").animate({             // animated using the animate function with Jquery
             height: 'toggle'
         })
    });
});

