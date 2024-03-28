const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    items: 5,
});

$('.slider-btn-next').click(function () {
    owl.trigger('next.owl.carousel');
});

$('.slider-btn-prew').click(function () {
    owl.trigger('prev.owl.carousel');
});

// $(function () {
   
//     $('.carousel__inner').slick({
//      dots: false,
//      slidesToShow: 3,
//      prevArrow: '<button class="slick-btn slick-prev"><img src="/img/left.png" alt="prev"></button>',
//      nextArrow: '<button class="slick-btn slick-next"><img src="/img/right.png" alt="next"></button>',
//     });
   
//    });

