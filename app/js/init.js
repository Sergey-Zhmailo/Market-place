$( function() {
    // SLICK-CAROUSEL INIT
    $('.trending-products-carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
} );

//Select init
$('select,input[type="file"]').styler();