//variável de controle gameOver inicializando com false
var gameOver = false;
//variável de controle positions para saber quantas posições foram ocupadas
var positions = 9;
//variável para identificar o jogador, sendo X ou O
var player = 'X';
//variável de controle hasWin indicando que no começo não existe um ganhador
var hasWin = false;

var lastModify;

//criação do array
var squares = new Array(9);

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
//função utilizada para o momento do clique nos botões do jogador
function squareClick(square){

  //variável para obter o valor da região ou ID clicado
  var idElement = document.getElementById(square).value;
  //uso da função nativa substring para obter a parte inteira de sqr7 (obter o 4 elemento da variável do tipo String)
  var parseSquare = parseInt(square.substring(3, 4));
  //fazer o controle de deixar preencher com o valor X ou 0 se estiver vazio
  if(idElement == "") {

    setSquare(parseSquare ,player);

    macRound();

  }

}

function macRound(){

  //verificar se houve um ganhador sempre
  checkForWinner(player);

  //alterar o jogador
  player == 'O'?player = 'X':player = 'O';

}

function setSquare(square, player){
  document.getElementById("sqr"+square).value = player;
  lastModify = square;
  squares[square] = player;
}

//função usada para zerar as variáveis e possibilitar o novo jogo
function playAgain() {
  //varrer todas as posições
  for (var i = 0; i < squares.length; i++) {
    var htmlButton = "sqr" + i;
    //colocar em todos os botões o valor vazio
    document.getElementById(htmlButton).value = '';
  }
  //resetar o array
  squares = [];
  //voltar com as 9 posições
  positions = 9;
  //voltar com o valor false para a variável gameOver
  gameOver = false;
  //voltar com o valor false para a variável hasWin
  hasWin = false;
  //ocultar o botão JOGAR DE NOVO
  document.getElementById("btn").style.display = 'none';
}

//função que verifica se existe um ganhador
function checkForWinner(value) {
  //verificar dentro de todas as combinações se tem os valores de X ou de O
  for(var i = 0; i < winCombinations.length; i++) {
    //se todas forem preenchidas com X ou todas forem preenchidas com O temos um ganhardor
    if(squares[winCombinations[i][0]] == value && squares[winCombinations[i][1]] == value && squares[winCombinations[i][2]] == value) {

      //uso de alert para mostrar o ganhador
      alert(value + " GANHOU O JOGO!");

      //colocar a variável de controle gameOver com o valor true
      gameOver = true;

      //mostrar o botão JOGAR DE NOVO
      document.getElementById("btn").style.display = 'block';

      //agora temos um ganhador, portanto hasWin=1
      hasWin = true;

      break;
    }

  }
  //depois de verificar se houve ou não um ganhador diminuir a variável positions indicando uma posição ocupada
  positions--;
  console.log(positions);
  console.log(hasWin);
  //se o valor de positions for 0 e não houver um ganhador ainda, deu empate
  if(positions == 0 && !hasWin) {
    alert("NINGUÉM GANHOU!");
    gameOver = true;
    document.getElementById("btn").style.display = 'block';
  }
}
