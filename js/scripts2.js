//Business logic

var determinTringle = function(sideOne, sideTwo, sideThree) {
  var TriangleType = "";
  if ((sideOne + sideTwo <= sideThree) || (sideTwo + sideThree <= sideOne) || (sideThree + sideOne <= sideTwo)) {
    TriangleType = "Not a Triangle";
  } else if ((sideOne === sideTwo) && (sideOne === sideThree) && (sideTwo === sideThree)) {
    TriangleType = "Equilateral Triangle";
  } else if ((sideOne === sideTwo)  || (sideOne === sideThree) || (sideTwo === sideThree)) {
    TriangleType = "Isosceles Triangle";
  } else {
    TriangleType = "Scalene Triangle";
  }
  return TriangleType;
}

//User interface logic


$(document).ready(function() {
  $("form#Triangle-Tracker").submit(function(event) {
    event.preventDefault();
    var sideA = parseInt($("input#side1").val());
    var sideB = parseInt($("input#side2").val());
    var sideC = parseInt($("input#side3").val());

    $(".triangle").text(determinTringle(sideA, sideB, sideC));
    $(".result").show();

    $("input#side1").val("");
    $("input#side2").val("");
    $("input#side3").val("");

  });
});
