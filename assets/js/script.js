
// BANNER


$(document).ready(function () {
    $("#banner").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText:[
            '<span id="right-arrow" class="arrow right"><i class="fa fa-thin fa-arrow-left fa-2x"></i></span>',
            '<span id="left-arrow" class="arrow left "> <i class="fa fa-thin fa-arrow-right fa-2x"></i></span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
                nav: false,
            }
        }
    });
});



// TESTIMONIAL

$(document).ready(function () {
    $("#testimonial").owlCarousel({
        loop: true,
        // autoplay:true,
        margin: 10,
        nav: true,
        navText: [
            '<i class="fa fa-thin fa-arrow-left fa-2x"></i>',
            '<i class="fa fa-thin fa-arrow-right fa-2x"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 2
            }
        }
    });
});


