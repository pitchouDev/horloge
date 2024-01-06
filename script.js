
let chrono = document.querySelector("#chrono p");
let isPlaying = false;
let intervalID;

let milliseconde = 0;
let seconde = 0
let minutes = 0

function play() {
    if(isPlaying) {
        chrono.setAttribute("class", "play");
        isPlaying = false;
        clearInterval(intervalID);
        if (seconde === 3 && milliseconde === 14) {
            window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=9N-LpTJyVC9P517G";   
        }

    } else {
        intervalID = setInterval(ActualiserChrono, 10)
        chrono.setAttribute("class", "pause");
        isPlaying = true;
    }
}

function ActualiserChrono() {
    milliseconde++;
    if (milliseconde > 99) {
        seconde++
        milliseconde = 0
        if(seconde > 59) {
            minutes++
            seconde = 0
        }
    }
    chrono.innerText = `${(minutes < 10) ? `0${minutes}` : `${minutes}`}:${(seconde < 10) ? `0${seconde}` : `${seconde}`}.${(milliseconde < 10) ? `0${milliseconde}` : `${milliseconde}`}`
    //oe je sais la ligne au dessus c'est du charabia, non en fait à chaque fois on met minutes ou sec ou millsec et on met un 0 avant si c'est plus petit que 10 
}