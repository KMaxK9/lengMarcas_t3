/**
 * Calls an Alert with the information of the student.
 */
function callAlert() {
    alert("Jesssyl Maximilian Kögler.\n1º DAM.\nTema: Parque Bicicleta + Merch Shop.\nTema Alternativo: Aún por pensar.");
} // function

/**
 * Enable DarkMode in Menu.
 */
const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

load();

bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    let value = body.classList.contains('darkmode');
    store(value);

    if (!value) {
        let iconoDia = document.getElementById("dia").style.display = "block";
        let iconoNoche = document.getElementById("noche").style.display = "none";
        console.log("dia");
    } else if (value) {
        let iconoDia = document.getElementById("dia").style.display = "none";
        let iconoNoche = document.getElementById("noche").style.display = "block";
        console.log("noche");
    }
})

function load() {
    const darkmode = localStorage.getItem('darkmode');
    if (!darkmode) {
        store('false');
    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
        let iconoDia = document.getElementById("dia").style.display = "none";
        let iconoNoche = document.getElementById("noche").style.display = "block";
    } else if (darkmode) {
        let iconoDia = document.getElementById("dia").style.display = "block";
        let iconoNoche = document.getElementById("noche").style.display = "none";
    } // if / else
}

function store(value) {
    localStorage.setItem('darkmode', value);
}

