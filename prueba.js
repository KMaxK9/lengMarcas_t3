// Función para cambiar el fondo al entrar del div
function entrar(id) {
    let elem=document.getElementById(id)
    elem.style.background="orange";
}

// Función para cambiar el fondo al salir del div
function salir(id) {
    let elem=document.getElementById(id);
    elem.style.background="white";
}

function asterisco(id) {
    let elem = document.getElementById(id);
    elem.innerHTML = "<p style='color:blue;'><b>0</b></p>";
}

function cero(id) {
    let elem = document.getElementById(id);
    elem.innerHTML = "<p style='color:red;'><b>*</b></p>";
}
// Paso 1: Arreglo de seguimiento de jugadas
let jugador = 'asterisco';
let jugadas = {
  asterisco: [],
  cero: []
}

// Paso 2: Función de verificación de combinación ganadora
function verificarGanador(jugadorActual) {
  const combinacionesGanadoras = [    ['c1', 'c2', 'c3'],
    ['c4', 'c5', 'c6'],
    ['c7', 'c8', 'c9'],
    ['c1', 'c4', 'c7'],
    ['c2', 'c5', 'c8'],
    ['c3', 'c6', 'c9'],
    ['c1', 'c5', 'c9'],
    ['c3', 'c5', 'c7']
  ];

  // Obtener las jugadas del jugador actual
  const jugadasActuales = jugadas[jugadorActual];

  // Verificar si alguna combinación ganadora se ha completado
  for (let i = 0; i < combinacionesGanadoras.length; i++) {
    const [a, b, c] = combinacionesGanadoras[i];
    if (jugadasActuales.includes(a) && jugadasActuales.includes(b) && jugadasActuales.includes(c)) {
      return true;
    }
  }

  return false;
}

// Paso 3: Función de juego y alerta de ganador
function asterisco(id) {
  const cuadrito = document.getElementById(id);

  // Verificar si el cuadrito ya ha sido seleccionado
  if (cuadrito.classList.contains('seleccionado')) {
    return;
  }

  // Añadir la jugada al arreglo de seguimiento del jugador
  jugadas.asterisco.push(id);

  // Actualizar la clase del cuadrito para mostrar la jugada del jugador
  cuadrito.classList.add('seleccionado');
  cuadrito.classList.add('asterisco');

  // Verificar si el jugador actual ha ganado
  if (verificarGanador('asterisco')) {
    alert('¡Felicidades! El jugador con asterisco ha ganado.');
    // Desactivar los eventos de click y doble click en los cuadritos
    const cuadritos = document.getElementsByClassName('cuadrito');
    for (let i = 0; i < cuadritos.length; i++) {
      cuadritos[i].removeAttribute('onclick');
      cuadritos[i].removeAttribute('ondblclick');
    }
    return;
  }
}