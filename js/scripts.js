$(document).ready(function() {
  $("#submit").click(function(event) {

    var gender = $("#gender").val();
    var hairpref = $("#hairPref").val();
    var humor = $("#humor").val();

      event.preventDefault();

    if (gender === "female") {
      alert(gender);
      $("#george").toggle();
      if (hairpref === "blonde"){
        alert("chris");
      }
      if (hairpref === "brunette"){
        alert("george");

      }




      $("#winner").empty().append(quote);
      $("#quote").show();


    }


  });
});
