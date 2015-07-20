$( document ).ready(function(e) {

  /////////////show slider//////////////
  //show slider
  $('body').on('click', '.slider-link', function (e){
    e.preventDefault();
    $('#slider-wrapper, .slider-nav').fadeIn();
    slideNum = $(this).index();
    //console.log(slideNum)
  });
  // close sliders
  function destroyCaption() {
    $(".rsGCaption").remove();
  }
  $('body').on('click', '.button-close', function (e){
      e.preventDefault();
      $('.slider-nav, #slider-wrapper').fadeOut('slow');
      destroyCaption();
      si.destroy()
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

///////////////// init slider ///////////////////

function initSlider() {
  
  si = $('.royalSlider').royalSlider({
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
  $('.rsGCaption').appendTo('.slider-nav');
}

initSlider();

