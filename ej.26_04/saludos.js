'use strict'
// código de alumno: Maximilian Kögler || fecha: 26 Abril 2023.

// variable que se usa para los saludos.
var colorFuente = "white";
// Defino un array con colores (const).
const colores = new Array("lime", "blue", "orange", "magenta", "brown");
// const colores = ["lime","lightblue","pink","magenta","brown"];   o   colores[0] = "blue"; ...
// colores.push("beige"); // Para añadir un elemento del array predefinido.

// Función que cambia el texto dentro de los cuadritos.
function saludar(identificator) {

    let elem = document.getElementById(identificator);
    elem.style.color = colorFuente;
    elem.innerHTML = "Hi there";
    colorFuente = getComputedStyle(elem).backgroundColor;

} // saludar

function pintar() {
    // Para elementos a elegir.

    for (let x = 0; x < colores.length; x++) {

        let ident = "c" + (x + 1);
        let cf = colores[x];
        rellenar(ident, cf);

    } // for 
} // pintar

function rellenar(identificator, colorFondo) {
    // Para pintar un cuadro con su color establecido.
    let elem = document.getElementById(identificator);
    elem.style.backgroundColor = colorFondo;
} // rellenarç

pintar();