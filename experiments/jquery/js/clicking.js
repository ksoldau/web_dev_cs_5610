$(document).ready(function() {
  $(".square").click(function() {
    if (!($(this).hasClass("selected"))) {
      $(this).addClass("selected");
      $(this).prevAll().addClass("selected");
    }
    else {
      $(this).nextAll().removeClass("selected");
    }
   });
   $(".clear-ratings").click(function() {
    $(this).prevAll().removeClass("selected");
   });
});
