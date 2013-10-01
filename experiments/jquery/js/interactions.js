$(function() {
  $(".draggable").draggable();
});

// this was heavily referenced when writing the droppable function: http://jqueryui.com/droppable/
// make an element droppable
$(function() {
  $("#droppable").droppable({
    drop: function(event, ui) {
      $(this)
        .addClass("pure-red")
        .find("#drop-p")
          .html("Dropped!");
    }
  });
});

// make element resizable
$(function() {
  $("#resizable-square").resizable();
});

// make elements selectable in a list
$(function() {
  $("#selectable").selectable();
});
