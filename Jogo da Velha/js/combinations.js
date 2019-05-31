//criação do array com posições de vitória
var preWinCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 2, 0],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [3, 6, 0],
    [4, 5, 3],
    [4, 6, 2],
    [4, 7, 1],
    [4, 8, 0],
    [5, 8, 2],
    [6, 7, 8],
    [7, 8, 6],
    //Com uma casa de diferença
    [0, 2, 1],
    [0, 6, 3],
    [0, 8, 4],
    [2, 6, 4],
    [2, 8, 5],
    [6, 8, 7]
  ];
  
  //criação do array com a possibilidades para ganhar o jogo
  var winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  var cornerCombinations = [
    [0, 8],
    [6, 2],
    [2, 6],
    [8, 0]
  ];
  
  var forkCombinations = [
    [0, 8],
    [6, 2]
  ];
  
  var middleSquares = [
    [1],
    [3],
    [5],
    [7]
  ];