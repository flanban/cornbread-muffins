// when I click on a list item I want the corrosponding copy to show up and replace whatever is there.
$(function() {
  $( ".copy-pages li" ).on( "click", function() {
    var str = $(this).index();
    $(".copy-text li").hide();
    $(".copy-text li:nth-child(" + (str + 1) + ")").show();
    $( ".copy-pages li" ).css('color','rgba(0,0,0,.3)')
    $(this).css('color','rgba(0,0,0,.6)')
    
  });
  
});
