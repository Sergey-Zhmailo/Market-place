$( function() {
    // SLICK-CAROUSEL INIT
    $('.trending-products-carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    });
});

// Switch product items view
$('.grid-thumbs').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-xl-4').removeClass('col-xl-12');
    $('.sort-controls .grid-thumbs').addClass('active');
    $('.sort-controls .grid-list').removeClass('active');
});

$('.grid-list').on('click', function(){
    // Find cards and add class row-card
    $('.all-items-container .card').addClass('row-card');
    $('.all-items-container .col-xl-4').addClass('col-xl-12');
    $('.sort-controls .grid-thumbs').removeClass('active');
    $('.sort-controls .grid-list').addClass('active');
});

//Select init
$('select,input[type="file"]').styler();

