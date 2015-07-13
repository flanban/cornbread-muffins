$(function() {
  

  function loadSlider() {
    $('.slider-nav, .image-slider').fadeIn('slow');      
    var sliderInstance = $('.image-slider').royalSlider({
      keyboardNavEnabled: true,
      autoHeight: true,
      imageAlignCenter: false,
    }).data('royalSlider');

    // populate slider
    sliderInstance.appendSlide('<div>Some another slide content...</div>');

  }
  function emptySlider() {
    $('.image-slider').royalSlider('destroy').empty()
  }
  
  $('.slider-link').click(function(e) {
    e.preventDefault();
    loadSlider();
  });
  
  
  $('body').on('click', '.button-close', function (e){
      e.preventDefault();
      emptySlider();
      //$('.image-slider').royalSlider('destroy').empty();
      $('.slider-nav, .image-slider').fadeOut('slow');
  });
  
});