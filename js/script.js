$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrows-left.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrows-right.png"</button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false,
              }
            }
        ]
    });
});
      