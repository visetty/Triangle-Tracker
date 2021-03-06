//Business-logic

var trueTriangle = function(sideOne, sideTwo, sideThree) {
  if ((sideOne + sideTwo > sideThree) && (sideTwo + sideThree > sideOne) && (sideThree + sideOne > sideTwo)) {
    return true;
  } else {
    return false;
  }
}

var scaleneTriangle = function(sideOne, sideTwo, sideThree) {
  if ((sideOne !== sideTwo) && (sideTwo !== sideThree) && (sideThree !== sideOne)) {
    return true;
  } else {
    return false;
  }
}

var isoscelesTriangle = function(sideOne, sideTwo, sideThree) {
  if ((sideOne === sideTwo) && (sideTwo !== sideThree) && (sideThree !== sideOne)) {
    return true;
  } else if ((sideOne !== sideTwo) && (sideTwo === sideThree) && (sideThree !== sideOne)) {
    return true;
  } else if ((sideOne !== sideTwo) && (sideTwo !== sideThree) && (sideThree === sideOne)) {
    return true;
  } else {
    return false;
  }
}
/*
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
*/



var equilateralTriangle = function(sideOne, sideTwo, sideThree) {
  if ((sideOne === sideTwo) && (sideTwo === sideThree) && (sideThree === sideOne)) {
    return true;
  } else {
    return false;
  }
}

//User-interface logic

$(document).ready(function() {
  $("form#Triangle-Tracker").submit(function(event) {
    event.preventDefault();
    var sideA = parseInt($("input#side1").val());
    var sideB = parseInt($("input#side2").val());
    var sideC = parseInt($("input#side3").val());

    if (trueTriangle(sideA, sideB, sideC)) {
      if (scaleneTriangle(sideA, sideB, sideC)) {
        $(".triangle").text("scaleneTriangle!");
        $(".result").show();
      } else if (isoscelesTriangle(sideA, sideB, sideC)) {
        $(".triangle").text("isoscelesTriangle!");
        $(".result").show();
      } else if (equilateralTriangle(sideA, sideB, sideC)) {
        $(".triangle").text("equilateralTriangle!");
        $(".result").show();
      }
    } else {
        $(".triangle").text("Not a triangle!");
        $(".result").show();
    }

/*
    $(".triangle").text(determinTringle(sideA, sideB, sideC));
    $(".result").show();

*/

    $("input#side1").val("");
    $("input#side2").val("");
    $("input#side3").val("");



  });
});
