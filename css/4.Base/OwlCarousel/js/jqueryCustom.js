$('.owl-business').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
            loop: true
        },
        600: {
            items: 3,
            loop: true
        },
        1000: {
            items: 3,
            loop: true
        }
    }
})
var business = $('.owl-business');
$('.c-section .btn-one.prev').click(function() {
    business.trigger('next.owl.carousel');
})
$('.c-section .btn-one.next').click(function() {
    business.trigger('prev.owl.carousel', [300]);
})


$('.logos').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    responsive: {
        0: {
            items: 2,
            loop: true
        },
        600: {
            items: 3,
            loop: true
        },
        1000: {
            items: 5,
            loop: true
        }
    }
})
$('.quotes').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
            loop: true
        },
        600: {
            items: 1,
            loop: true
        },
        1000: {
            items: 2,
            loop: true
        }
    }
})

var owl = $('.quotes');
owl.owlCarousel();
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})