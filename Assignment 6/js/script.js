//Script by Nguyen Le

$(document).ready(function() {
        $('#accordion').on('click', '#control', function () {
            $(this).next().addClass('active3').slideDown(1000); //add class and slide down and show content
            $('.active3').not($(this).next()).removeClass('active3').slideUp(1000); // remove class and slide up and hide content
            $(this).next('#apanel').show(); // if another panel is clicked, repeat lines 3 and 4
            console.log('please work qwq'); // crying for this code to work. 
    });
        $('#accordion2').on('click', '#control2', function () {
            $(this).next().addClass('active2').slideDown(1000); //add class and slide down and show content
            $('.active2').not($(this).next()).removeClass('active2').slideUp(1000); // remove class and slide up and hide content
            $(this).next('#apanel2').show(); // if another panel is clicked, repeat lines 3 and 4
            console.log('please work qwq on acc2'); // crying for this code to work. 
    });
});

$(document).ready(function() {

        let $this = $(this);                    // determines 'this' item
        let $li = $this.find('li.active');  // finds the li tag that is active
        let $link = $li.find('a');          // finds the link
        let $active = $($link.attr('href'));    // this grabs the active panel
        
        $this.on('click', '#controltab', (function(n) {
            n.preventDefault(); //prevents the link
            let $link = $(this); // stores the link from this
            let clicked = this.hash;

            if (clicked && !$link.parent().is('active'))
            $active.removeClass('active'); 
            $li.removeClass('active'); 
            $active = $(clicked).addClass('active');
            $tab = $link.parent().addClass('active');
        }));
     });
