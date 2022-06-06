$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const animal = $("input#animal").val();
    const color = $("input#color").val();
    const number = $("input#number").val();
    const hobby = $("input#hobby").val();
    const sport = $("input#sport").val();

    const favThings = [animal, color, number, hobby, sport];
  

    let listFavThings = "";
    for(i=0; i<favThings.length; i++){
        listFavThings +="<li>"+favThings[i]+"</li>";
        }
    $("#output").append(listFavThings);
    
    // /*
    //   let favLen = allMyFavThings.length
    //   for (let i = 0; i < favLen; i++) {
    //     listFavThings += "<li>" + allMyFavThings[i] + "</li>";
    //   }
    //   */
    // let listFavThings = "";
    // allMyFavThings.forEach(favFunction);
    // 

    // function favFunction(value){
    //   listFavThings += "<li>" + value + "</li>";
    // }

    //  // $("#output").text(listFavThings);

    //   $('output').html(listFavThings); 	
  })
});