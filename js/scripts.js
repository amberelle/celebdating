$(document).ready(function() {
  $("#submit").click(function(event) {

    var gender = $("#gender").val();
    var hairpref = $("#hairPref").val();
    var humor = $("#humor").val();

      event.preventDefault();

    if (gender === "female") {
      // $("#george").toggle();
      if (hairpref === "blonde") {
          if (humor === "funny"){
            $("#winner").text("Steve Buscemi");
            $("#img1").show();
          }
          if (humor === "serious")
          $("#winner").text("Chris Hemsworth");
          }
      if (hairpref === "brunette") {
        if (humor === "funny"){
          $("#winner").text("Chris Prat");
        }
        if (humor === "serious")
        $("#winner").text("Robert Patinson");
        }

      }
      if (gender === "male") {
        // $("#george").toggle();
        if (hairpref === "blonde") {
            if (humor === "funny"){
              $("#winner").text("Kristen Wigg");
            }
            if (humor === "serious")
            $("#winner").text("Scarlet Johanssen");
            }
        if (hairpref === "brunette") {
          if (humor === "funny"){
            $("#winner").text("Olivia Munn");
          }
          if (humor === "serious")
          $("#winner").text("Megan Fox");
          }

        }



    $("#quote").show();

  });
});
