// $(document).ready(function() {
//     $.getJSON("team.json", function(team) { 
//         $.each(team.teammembers, function() {
//             $("#team").append("<h3>"+this['name']+"</h3><h4>"
//                                     +this['title']+ "</h4><p>"
//                                     +this['bio']+"</p>");
//             console.log('it work');   
//         });
//     });
// });

$.ajax({
    url: 'team.json',
    method: 'GET',
    dataType: 'json',
    beforeSend: function(){
        $('#team').append('<h2 id="load">Loading...</h2>').show();
   
    },
    complete: function(){
        $('#load').hide(2000);
        $('#team').hide(2000);
    },
    success: function(teammembers) {
        $.getJSON('team.json', function(team) {
            $.each(team.teammembers, function() {
                $('#team').append("<h3>" +this['name']+ "</h3><h4>"
                                        +this['title']+ "</h4><p>"
                                        +this['bio']+"</p>").show(3000);    
            });
            console.log(teammembers);
           
        })
        
        setTimeout(function() {
            alert('Data has Loaded from team.json');
        }, 5000);
    },
});

