$(document).ready(function() {
        $('#accordion').on('click', '#control', function (n) {
            n.preventDefault();
            // $(this).next().slideToggle(1000);
            $('#apanel').not($(this).next()).toggleClass('active');
            $(this).next('#apanel').slideToggle(1000);
            $('#apanel').not($(this)).removeClass('active');
            console.log('please work qwq');
    });
    
});

$(document).ready(function() {
    $('#tablist').each(function() {
        let $this = $(this);                    // determines 'this' item
        let $tabbed = $this.find('li.active');  // finds the li tag that is active
        let $link = $tabbed.find('a');          // finds the link
        let $active = $($link.attr('href'));    // this grabs the active panel
        
        $this.on('click', '#controltab', (function(n) {
            n.preventDefault(); //prevents the link
            let $link = $(this); // stores the link from this
            let clicked = this.hash;

            if (clicked && !$link.parent().is('active'))
            $active.removeClass('active'); 
            $tabbed.removeClass('active'); 
            $active = $(clicked).addClass('active');
            $tab = $link.parent().addClass('active');
        }));
    });
});