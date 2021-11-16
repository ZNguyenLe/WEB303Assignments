$(function () {
    $('#photo-viewer').photoViewer().show().on('click', '.photo-frame', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
        class Modal {
             $window = $(window);
             $modal = $('<div class="modal"></div>');

            constructor() {
                this.$window = $(window);
                this.$modal = $('<div class="modal"></div>');
                this.$content = $('<div class="modal-content"/>');
                this.$close = $('<button role="button" class="modal-close">close</button>');

                this.$modal.append(this.$content, this.$close);
                this.$close.on('click', (e) => {
                    e.preventDefault();
                    this.close();
                });
            }
        
        center() {
            let top = Math.max(this.$window.height() - this.$modal.outerHeight(), 0) / 2;
            let left = Math.max(this.$window.width() - this.$modal.outerHeight(), 0) / 2;
            this.$modal.css({
                top: top + this.$window.scrollTop(),
                left: left + this.$window.scrollLeft()
            });
        }

        open(settings) {
            this.$content.empty().append(settings.content);
            this.$modal.css({
                width: settings.width ?? 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');
            this.center();
            this.$window.on('resize', () => this.center());
        }
        close() {
            this.$content.empty();
            this.$modal.detach();
            this.$window.off('resize');
        }
    }
    
    //let $content = $('.photo-frame').detach(); <--- this made my code go boom
    let modal = new Modal();
    $('.photo-frame').on('click', function() {
        modal.open({
            content: $content,
            width: 800,
            height: 450
        });
    })
});
});
