$(document).ready(function(){
    $('.menu-carousel').slick({     
        autoplay: true,
        autoplaySpeed: 2000, 
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1350,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1000,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 700,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 550,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});