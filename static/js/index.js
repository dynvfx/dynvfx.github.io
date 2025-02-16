//window.HELP_IMPROVE_VIDEOJS = false;
//
//
//$(document).ready(function() {
//    // Check for click events on the navbar burger icon
//
//    var options = {
//			slidesToScroll: 1,
//			slidesToShow: 1,
//			loop: true,
//			infinite: true,
//			autoplay: true,
//			autoplaySpeed: 5000,
//    }
//
//		// Initialize all div with carousel class
//    var carousels = bulmaCarousel.attach('.carousel', options);
//
//    bulmaSlider.attach();
//
//})


// bootstrap 4 breakpoints
const breakpoint = {
  // small screen / phone
  sm: 576,
  // medium screen / tablet
  md: 768,
  // large screen / desktop
  lg: 992,
  // extra large screen / wide desktop
  xl: 1200
};

// bootstrap 4 responsive multi column slick carousel
$(document).ready(function(){
$('#slick').slick({
  autoplay: true,
  autoplaySpeed: 6000,
  draggable: true,
  pauseOnHover: false,
  infinite: true,
  dots: false,
  arrows: true,
  speed: 1000,
  adaptiveHeight: false,
  useTransform: false, // fix for safari

  mobileFirst: true,

  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [{
      breakpoint: breakpoint.sm,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: breakpoint.md,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: breakpoint.lg,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: breakpoint.xl,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});