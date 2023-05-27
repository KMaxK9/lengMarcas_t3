//Enable DarkMode in Menu.
const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');
// Gets the previus color.
var previousColor = sessionStorage.getItem('color');

load();

/**
 * Function that loads when the page is refreshed or entered.
 */
function load() {
    // Darkmode
    const darkmode = localStorage.getItem('darkmode');
    if (!darkmode) {
        store('false');
    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
        setDarkmode();
    } else if (darkmode) {
        setLightMode();
    } // if / else

    // User name
    let name = sessionStorage.getItem('user');
    if (name) {
        document.getElementById('userName').textContent = name;
    } else {
        document.getElementById('userName').textContent = "Not Logged in";
    }
    // Color
    let color = sessionStorage.getItem('color');
    if (color) {
        changeColor(2);
    } else {
        changeColor(0);
    }
}

/**
 * Funtion that stores the value (boolean) of "darkmode" in localStorage.
 * @param {*} value Boolean value of "darkmode".
 */
function store(value) {
    localStorage.setItem('darkmode', value);
}

/**
 * Funtion that changes to Light mode).
 */
function setLightMode() {
    console.log("day");
}

/**
 * Funtion that changes to Dark mode.
 */
function setDarkmode() {
    console.log("night");
}

/**
 * Function that stores the color in sessionStorage.
 * @param {} color The given color by he color imput.
 */
function storeColor(color) {
    sessionStorage.setItem('color', color);
}

/**
 * Function that changes the color dependeding on what action the user has taken.
 * @param {*} x Numeric value (0,1,2) 1 changes color on given value. 0 sets it to default. 2 sets it to the one given in sessionStorage.
 */
function changeColor(x) {
    var color = document.getElementById('userColor');
    document.getElementById("user").style.backgroundColor = previousColor;
    color = previousColor;
    storeColor(color);
}