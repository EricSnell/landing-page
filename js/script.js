$(document).ready(function() {

  new WOW().init();

  $('#owl-demo').owlCarousel({
    items: 1,
    mouseDrag: true,
    autoplay: true,
    loop: true,
  });

  $('.counter').counterUp({
    delay: 3,
    time: 1000
  });

});
