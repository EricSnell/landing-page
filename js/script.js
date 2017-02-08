$(document).ready(function() {

  $('#owl-demo').owlCarousel({
    items: 1,
    mouseDrag: true,
    autoplay: true,
    loop: true,
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

});
