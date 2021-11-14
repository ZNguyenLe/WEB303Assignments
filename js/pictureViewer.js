$(window).on('load', function() {
    $('#loader').css("padding-left","220px").fadeOut(3000);
    $('#photo-viewer').css({"display": "block", 
                            "padding-left": "100px"
                        });
});

$(document).ready(function() {
    let request;    // last image request
    let $current;   // current image
    let cache = {   // caching image
        
    };
    let $frame = $('.photo-frame');     // both containers
    let $thumbs = $('.thumb');

    $(document).on('click', '.thumb', function(e) {
        let $img;
        let src = this.href;
        let request = src;
    
        e.preventDefault();
        $thumbs.removeClass('active');
        $(this).addClass('active');
        
        if(cache.hasOwnProperty(src)) {
            if(cache[src].isLoading === false) {
                crossfade(cache[src].$img);
            }
        } else {
            $img = $('<img/>');
            cache[src] = {
                $img: $img,
                isLoading: true
            };
        }
        $img.on('load', function() {
           $(this).hide();
           
           $frame.removeClass('is-loading').append($img);
    
           cache[src].isLoading = false;
    
           if (request === src) {
               crossfade($(this));
           }
        });
        $frame.addClass('is-loading');
        $img.attr({
            'src': src,
            'alt': this.title || ''
        });
    });
    
    function crossfade($img) {
        if($current) {
            $current.stop().fadeOut('slow');
        }

        $img.css({
            marginLeft: -$img.width() / 2,
            marginTop: -$img.height() / 2,
        });
        $img.stop().fadeTo('slow', 1);
        $current = $img;
    }
});

