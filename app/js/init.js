$( function() {
    // SLICK-CAROUSEL INIT
    $('.trending-products-carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
});

// Select init
$('select').styler();



// Switch product items view
$('.grid-thumbs').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
    $('.sort-controls .grid-thumbs').addClass('active');
    $('.sort-controls .grid-list').removeClass('active');
});

$('.grid-list').on('click', function(){
    // Find cards and add class row-card
    $('.all-items-container .card').addClass('row-card');
    $('.all-items-container .col-4').addClass('col-12');
    $('.sort-controls .grid-thumbs').removeClass('active');
    $('.sort-controls .grid-list').addClass('active');
});

