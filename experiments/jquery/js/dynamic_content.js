
$(function(){
    $(".tool").click(controller);
    $("#new-rect-btn").click(prepend_controller).button();
    $(".word").click(word_controller);
    $("input").keyup(function() {
      var value = $(this).val();
      $("#val-box").text(value.toUpperCase());
    }).keyup();
    $("#clone-btn").click(clone_controller).button();
});
var HTML = {
    "make-square-btn" : "<div class='square'></div>",
    "make-circle-btn" : "<div class='circle'></div>",
};
function controller(event) {
    var link = $(event.currentTarget);
    var shape = link.attr("id");
    
    var html = $(HTML[shape]);
    html
        .css({"position" : "absolute", "top" : "300px", "left" : "100px"})
        .draggable({"grid" : [10,10]});
    $("#append-section").append(html);
}

function prepend_controller(event) {
  var link = $(event.currentTarget);
  var id = link.attr("id");
  


  var html = "<div class='rectangle' style='background-color:" + "#" + hex() + ";'></div>"
  $("#prepend-section").prepend(html);
}

function word_controller(event) {
  var link = $(event.currentTarget);
  var word = link.html();
  
  $("#word").html(word);
}

function clone_controller(event) {
  var link = $(event.currentTarget);
  var $clone = $($(".square-1").clone().first());
  
  // change clone colors
  $("#clone-section").prepend($clone);
  $clone.css("background-color", "#" + hex());
  $clone.find(".square-2").css("background-color", "#" + hex());
}

// the random hex number generator code is from 
// http://stackoverflow.com/questions/13833463/how-do-i-generate-a-random-hex-code-that-of-a-lighter-color-in-javascript
function hex() {
    return ((Math.floor((Math.random()*222)+33).toString(16))+(Math.floor((Math.random()*222)+33).toString(16))+(Math.floor((Math.random()*222)+33).toString(16)).toString(16));
}

