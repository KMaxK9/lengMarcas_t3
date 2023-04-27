'use strict'
// código de alumno: Maximilian Kögler || fecha: 27 Abril 2023.

const board = new Array([0,0,0],[0,0,0],[0,0,0]);
var winSquare = false;
var winCircle = false;

function enter(id) {
    let elem = document.getElementById(id);
    elem.style.backgroundColor = "rgb(200, 200, 200)";
} // enter

function leave(id) {
    let elem = document.getElementById(id);
    elem.style.backgroundColor = "rgba(255, 255, 255, 0)";
} // leave

function markCircle(id,x,y) {
    let elem = document.getElementById(id);
    elem.innerHTML = "<div style='border-style: solid; border-color:lime; border-radius: 50%; height: 10vh; width: 10vw;'></div>";
    board(x,y) = 1;
} // circle

function markSquare(id,x,y) {
    let elem = document.getElementById(id);
    elem.innerHTML = "<div style='border-style: solid; border-color:red; height: 10vh; width: 10vw;'></div>";
    board(x,y) = 2;
} // square

function check() {
    var points1 = 0;
    var points2 = 0;
    for(let x = 0 ; x < board.length ; x++) {
        for(let y = 0 ; y < board(x).length ; y ++) {
            if (board(x,y) == 1) {
                points1++;
            } // if
            if(points1 <= 3) {
                winCircle = true;
            }
        } // for
        if (winCircle || winSquare) {
            throw new Error("Has ganado!");
        } // if
        points1 = 0;
        points2 = 0;
    } // for
} // comp

check();