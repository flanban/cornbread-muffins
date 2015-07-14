$(function() {
  

  $('.royalSlider').royalSlider({
    // optionally other options
    //slides: '<a class="rsImg" href="/img/image1.jpg">1<span class="rsTmb">thumbnail text 1</span></a><a class="rsImg"    href="/img/image2.jpg">2<span class="rsTmb">thumbnail text 2</span></a>'
  });

  
  

  $('body').on('click', '.slider-link', function (e){
    
    $('.slider-nav').fadeIn('slow');
    
    var pageSlides = $(this).attr('data-page-name')
  

    e.preventDefault();
    $('.royalSlider').fadeIn();
    $('.royalSlider').royalSlider('destroy').empty().royalSlider({
      slides: pageSlides,
      // other options... for example:
      imageScaleMode: 'false',
    });
  });


  $('body').on('click', '.button-close', function (e){
      e.preventDefault();
      //$('.image-slider').royalSlider('destroy').empty();
      $('.slider-nav, .image-slider').fadeOut('slow');
  });
  
});
