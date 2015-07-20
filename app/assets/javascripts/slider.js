

$( document ).ready(function(e) {

  $('body').on('click', '.slider-link', function (e){
    e.preventDefault();
    $('.slider-nav').fadeIn('slow');
    $('.royalSlider, #slider-wrapper').fadeIn();
    slideNum = $(this).index();
    //console.log(slideNum)
  });
  

  
  $('body').on('click', '.button-close', function (e){
      e.preventDefault();
      //$('.image-slider').royalSlider('destroy').empty();
      $('.slider-nav, .image-slider, #slider-wrapper').fadeOut('slow');
  });    
});

  
  function initSlider() {
    var si = $('.royalSlider').royalSlider({
      controlNavigation:'none',
      imageScaleMode:'none',
      imageScalePadding:6,
      imageAlignCenter:false,
      slidesSpacing:0,
      globalCaption:true,
      arrowNav:false,
      loop:false,
      usePreloader: true,
      startSlideId:slideNum, 
    }).data('royalSlider');
  }
  
  
  initSlider();

