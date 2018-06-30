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
  if ((sideOne === sideTwo) || (sideTwo === sideThree) || (sideThree === sideOne)) {
    return true;
  } else {
    return false;
  }
}

var equilateralTriangle = function(sideOne, sideTwo, sideThree) {
  if ((sideOne === sideTwo) && (sideTwo === sideThree) && (sideThree === sideOne)) {
    return true;
  } else {
    return false;
  }
}
