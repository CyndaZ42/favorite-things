$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const animal = $("input#animal").val();
    const color = $("input#color").val();
    const number = $("input#number").val();

    const favThings = [animal, color, number];
      $("#output").text(favThings);

  })
});