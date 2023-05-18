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

/**
 * EventListener for when clicked the element.
 */
bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    let value = body.classList.contains('darkmode');
    store(value);
    if (!value) {
        setLightMode();
    } else if (value) {
        setDarkmode();
    } // if / else
})

/**
 * Function that loads when the page is refreshed or entered.
 */
function load() {
    const darkmode = localStorage.getItem('darkmode');
    if (!darkmode) {
        store('false');
    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
        setDarkmode();
    } else if (darkmode) {
        setLightMode();
    } // if / else
}

/**
 * Funtion that stores the value (boolean) of "darkmode" in localStorage.
 * @param {*} value Boolean value of "darkmode".
 */
function store(value) {
    localStorage.setItem('darkmode', value);
}

/**
 * Funtion that changes to Light mode. (changes image).
 */
function setLightMode() {
    let iconoDia = document.getElementById("day").style.display = "block";
    let iconoNoche = document.getElementById("night").style.display = "none";
    document.getElementById("imgDay").style.display = "flex";
    document.getElementById("imgNight").style.display = "none";
    console.log("day");
}

/**
 * Funtion that changes to Dark mode. (changes image).
 */
function setDarkmode() {
    let iconoDia = document.getElementById("day").style.display = "none";
    let iconoNoche = document.getElementById("night").style.display = "block";
    document.getElementById("imgDay").style.display = "none";
    document.getElementById("imgNight").style.display = "flex";
    console.log("night");
}

