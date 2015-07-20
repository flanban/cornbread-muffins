$( document ).ready(function(e) {

  /////////////show slider//////////////
  //show slider
  $('body').on('click', '.slider-link', function (e){
    e.preventDefault();
    $('.slider-nav').fadeIn('slow');
    $('.royalSlider, #slider-wrapper').fadeIn();
    slideNum = $(this).index();
    //console.log(slideNum)
  });
  // close sliders
  $('body').on('click', '.button-close', function (e){
      e.preventDefault();
      $('.slider-nav, .image-slider, #slider-wrapper').fadeOut('slow');
  });
  
  ///////////// slide descrition flyout //////////////
  
  function setDescription() {
    $(".descriptive-text").empty().append(description)
  }
  function showDescription() {
    $(".descriptive-flyout").css("margin-right","420px")
  }
  function closeDescription() {
    $(".descriptive-flyout").css("margin-right","0px")
  }
  
  $('body').on('click', '.button-descriptive-flyout', function (e){
    e.preventDefault();
    description = $('.rsActiveSlide > .rsImg').data('description');
    setDescription();
    showDescription();
  });
  $('body').on('click', '.button-close-description', function (e){
    e.preventDefault();
    closeDescription();
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
    addActiveClass:true,
    startSlideId:slideNum, 
  }).data('royalSlider');
}

initSlider();

