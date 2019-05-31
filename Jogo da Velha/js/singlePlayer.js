function loopSinglePlayer() {

  macRound();

  if (victoriousMovement()) {

  } else if (losingMovement()) {

  } else if (centerNull()) {

  } else if (forkTentative()) {

  } else if (cornerNull()) {

  } else if (cornerFilled()) {

  } else {
    fillsNext()
  }

  macRound();

}

function victoriousMovement() {
  var victoriousMovement = false;

  for (var i = 0; i < preWinCombinations.length; i++) {
    if (squares[preWinCombinations[i][0]] == "O" && squares[preWinCombinations[i][1]] == "O") {
      if (document.getElementById("sqr" + preWinCombinations[i][2]).value == "") {
        setSquare(preWinCombinations[i][2], 'O');
        victoriousMovement = true;
        break;
      }
    }
  }

  return victoriousMovement;
}

function losingMovement() {
  var losingMovement = false;

  for (var i = 0; i < preWinCombinations.length; i++) {
    if (squares[preWinCombinations[i][0]] == "X" && squares[preWinCombinations[i][1]] == "X") {
      if (document.getElementById("sqr" + preWinCombinations[i][2]).value == "") {
        setSquare(preWinCombinations[i][2], 'O');
        losingMovement = true;
        break;
      }
    }
  }

  return losingMovement;
}

function centerNull() {
  var centerNull = false;

  if (squares[4] == null) {
    if (document.getElementById("sqr4").value == "") {
      setSquare(4, 'O');
      centerNull = true;
    }
  }

  return centerNull;
}

function cornerFilled() {
  var cornerFilled = false;

  for (var i = 0; i < cornerCombinations.length; i++) {
    if (cornerCombinations[i][0] == lastModify) {
      if (document.getElementById("sqr" + cornerCombinations[i][1]).value == "") {
        setSquare(cornerCombinations[i][1], 'O');
        cornerFilled = true;
        break;
      }
    }
  }

  return cornerFilled;
}

function cornerNull() {
  var cornerNull = false;

  for (var i = 0; i < cornerCombinations.length; i++) {
    if (squares[cornerCombinations[i][0]] == null) {
      if (document.getElementById("sqr" + cornerCombinations[i][0]).value == "") {
        setSquare(cornerCombinations[i][0], 'O');
        cornerNull = true;
        break;
      }
    }
  }

  return cornerNull;
}

function middleNull() {
  var middleNull = false;

  for (var i = 0; i < middleSquares.length; i++) {
    if (squares[middleSquares[i]] == null) {
      if (document.getElementById("sqr" + middleSquares[i]).value == "") {
        setSquare(middleSquares[i], 'O');
        middleNull = true;
        break;
      }
    }
  }

  return middleNull;
}

function fillsNext() {
  for (var i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      if (document.getElementById("sqr" + i).value == "") {
        setSquare(i, 'O');
        break;
      }
    }
  }
}

function forkTentative() {
  var forkTentative = false;

  for (var i = 0; i < forkCombinations.length; i++) {
    if (squares[forkCombinations[i][0]] == "X" && squares[forkCombinations[i][1]] == "X") {
      middleNull();
      forkTentative = true;
      break;
    }
  }

  return forkTentative;
}
