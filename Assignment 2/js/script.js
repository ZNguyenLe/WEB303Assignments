// WEB303 Assignment 2
// Nguyen Le

$(document).ready(function() {
    $("a#vprospect").click(function(){
        $("div").load("prospect.html");
        $("div").slideToggle();
    });
});

$(document).ready(function() {
    $("a#vconvert").click(function(){
        $("div").load("convert.html");
         $("div").animate({
             height: 'toggle'
         })
    });
});

$(document).ready(function() {
    $("a#vretain").click(function(){
        $("div").load("retain.html");
         $("div").animate({
             height: 'toggle'
         })
    });
});

