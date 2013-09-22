$(document).ready(function() {
  console.log("document ready");
  $(".square").click(function() {
    console.log("clicked on square");
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
