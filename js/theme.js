$('.openNav').on('click', function() {
  //$('#myNav').css("left", "0%");
  $('#myNav').css("visibility", "visible");
  $('#myNav').css("opacity", "1");
});

$('#closeNav').on('click', function() {
  //$('#myNav').css("left", "100%");
  $('#myNav').css("opacity", "0");
  $('#myNav').css("visibility", "hidden");
});

$(window).scroll(function(){
  if($(document).scrollTop() > 110) {
    $('.back-icon').css('top',-55);
  } else {
    $('.back-icon').css('top',-$(document).scrollTop()/2);
  }
});
