$(window).load(function() {
    if ( $('#foo2')[0] ){ 
               var carousel = $("#foo2");
                carousel.carouFredSel({
                    width: "100%",
                    height: "auto",
                    pagination: ".pager2",
                    mousewheel: true,
                    responsive: true,
                    circular: false,
                    auto: false,
                    items: {
                    visible: 1,
                    },
                    swipe: {
                        onMouse: true,
                        onTouch: true
                    },
                    scroll: {
                        fx: 'directscroll'
                    },
                    onCreate: function () {
                    $(window).on('resize', function () {
                      carousel.parent().add(carousel).height(carousel.children().first().height());
                    }).trigger('resize');
                    
                     $('#foo2 img.slide ').css('visibility', 'visible');
                    }
                });

        }     
});



