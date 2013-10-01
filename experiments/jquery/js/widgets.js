 $(function() {
    // buttons
    $( "input[type=submit], button" ).button()
    // dialog
    $("#dialog").dialog();
    $("#click-dialog").dialog({autoOpen: false});
    // clicked on something to get the dialog
    $(".click-here").click(function() {
      $("#click-dialog").dialog('open');
    });

    // tooltip
    $(document).tooltip();
});

