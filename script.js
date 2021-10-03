// Coded by: Nguyen Le 0620096
// Using the $.getJSON() Method
$(document).ready(function() {      
    $.getJSON("team.json", function(team) {                     //calling the function to grab the data from the team.json file
        $.each(team.teammembers, function() {                   //calling the array name teammembers
            $("#team").append("<h3>"+this['name']+"</h3><h4>"   //Grabbing the data from the JSON file and listing them on the page with 'this'
                                    +this['title']+ "</h4><p>"
                                    +this['bio']+"</p>");
            console.log('it work');                             // Left it there to know if the above function will work
        });
    });
});
// Using the $.ajax() Method
$.ajax({
    url: 'team.json',                                           //specifies the url name of the file
    method: 'GET',                                              //using the HTTP method to recieve "get" type
    dataType: 'json',                                           //the type of file extension
    beforeSend: function(){                                     //Loads the page before executing the code
        $('#team').append('<h2 id="load">Loading...</h2>').show();  //Display the Loading... text before the Data from the json file
    },                                                              // ^ created a new <h2> element with the id of load
    complete: function(){                                           //complete the action by hiding the
    $('#load').hide(2000);                                          //hide the loading text within 2 seconds
        $('#team').hide(2000);                                      //the id for the team to stay hidden before showing the json database
    },
    success: function(teammembers) {                                //if successful, page will display content.
        $.getJSON('team.json', function(team) {                     //function to grab the data from json file
            $.each(team.teammembers, function() {                   //calling the array name teammembers inside the team id in html
                $('#team').append("<h3>" +this['name']+ "</h3><h4>" //Grabbing the data from the JSON file and listing them on the page with 'this'
                                         +this['title']+ "</h4><p>"
                                         +this['bio']+"</p>").show(3000);   //show the content within 3 seconds with .show() 
            });
            console.log(teammembers);
           
        })
        
        setTimeout(function() { //set timer as an error callback
            alert('Data has Loaded from team.json');    // an error message to notify user as a popup window
        }, 5000);   // will execute after the 5 second mark when application first loads
    },
});

