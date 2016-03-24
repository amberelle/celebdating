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

      // var quote = (100 - age) * 3;
      // if (gender === 'male' && age < 26) {
      //   quote += 50;


      $("#celeb").empty().append(quote);
      $("#quote").show();
    } else {

    }


  });
});
