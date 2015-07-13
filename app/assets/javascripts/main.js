$(function() {
  

  function loadSlider() {
    $('.slider-nav, .image-slider').fadeIn('slow');
    
//      jQuery(document).ready(function($) {
        $(".image-slider").royalSlider({
          keyboardNavEnabled: true,
          autoHeight: true,
          imageAlignCenter: false,
         // imageScaleMode: 'fill',
        });  
//      });
    }

  
  
  $('.loads-slider').click(function(e) {
    e.preventDefault();
    loadSlider();
  });
  
  
  $('body').on('click', '.button-close', function (e){
      e.preventDefault();
      //$('.image-slider').royalSlider('destroy').empty();
      $('.slider-nav, .image-slider').fadeOut('slow');
  });
  
});
