//Enable DarkMode in Menu.
const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

// Get the modal
var infModal = document.getElementById("infModal");
var optModal = document.getElementById("optModal");
// Get the button that opens the modal
var infBtn = document.getElementById("infBtn");
var optBtn = document.getElementById("optBtn");
// Get the <span> element that closes the modal
var infClose = document.getElementById("infClose");
var optClose = document.getElementById("optClose");

load();

// When the user clicks the button, open the modal 
infBtn.onclick = function () {
    infModal.style.display = "block";
}
optBtn.onclick = function () {
    optModal.style.display = "block";
}

// When the user clicks on (x), close the modal
infClose.onclick = function () {
    infModal.style.display = "none";
}
optClose.onclick = function () {
    optModal.style.display = "none";
    changeName();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == infModal) {
        infModal.style.display = "none";
    }
    if (event.target == optModal) {
        optModal.style.display = "none";
    }
}

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
    document.getElementById("banner").style.backgroundColor = "gray";
    var x = document.getElementsByClassName("modalContent");
    // var y = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "white";
    } // for
    /* for (i = 0; i < y.length; i++) {
         y[i].style.backgroundColor = "gray";
     } // for*/
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
    document.getElementById("banner").style.backgroundColor = "rgb(66, 66, 66)";
    var x = document.getElementsByClassName("modalContent");
    //var y = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(66, 66, 66)";
    } // for
    /* for (i = 0; i < y.length; i++) {
         y[i].style.backgroundColor = "rgb(66, 66, 66)";
     } // for*/
    console.log("night");
}

function storeName() {
    var name = document.getElementById('userImput').value;
    sessionStorage.setItem('user', name);
}


function changeName() {
    var name = document.getElementById('userImput').value;
    if (!name) {
        document.getElementById('userName').textContent = "Not Logged in";
    } else {
        document.getElementById('userName').textContent = name;
    }
    storeName();
}

window.addEventListener('load', function () {
    let name = sessionStorage.getItem('user');
    if (name) {
        document.getElementById('userName').textContent = name;
    } else {
        document.getElementById('userName').textContent = "Not Logged in";
    }
});