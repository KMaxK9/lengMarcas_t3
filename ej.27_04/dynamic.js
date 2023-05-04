'use strict'
// código de alumno: Maximilian Kögler || fecha: 27 Abril 2023.

let clicked = [];
let boardBlocked = false;
let current_player = "X";
let board = ['', '', '', '', '', '', '', '', ''];

// Función responsable de cambiar el color al mover el ratón por encima de una casilla.
function enter(id) {
  let elem = document.getElementById(id);
  elem.style.backgroundColor = "rgb(200, 200, 200)";
} // enter

// Función responsable de cambiar el color al quitar el ratón de encima de una casilla.
function leave(id) {
  let elem = document.getElementById(id);
  elem.style.backgroundColor = "rgba(255, 255, 255, 0)";
} // leave

// mark(id), nos sirve para "marcar" las casillas a la que pinchamos.
function mark(ident) {
  document.getElementById(ident).innerHTML = (current_player);

  // Marcamos la casilla con el símbolo del jugador actual
  var casilla = ident.substring(1, 2) - 1;
  board[casilla] = current_player;

  // Verificar si hay un ganador
  const winner = checkWinner();
  if (winner) {
    alert("¡" + winner + " ha ganado!");
    document.getElementById("ganador").innerHTML = ("¡Ha ganado " + winner + "!");
    return;
  } // if
  // Cambia de jugador.
  current_player = current_player == 'X' ? 'O' : 'X';
} // mark

// Función que comprueba si un jugador ha ganado.
function checkWinner() {
  // Combinaciones posibles para ganar.
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // Bucle que recorre las combinaciones posibles en el array (board).
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] == board[b] && board[b] == board[c] && board[a] != '') {
      return board[a];
    } // if
  } // for
  return null;
} // checkWinner



