let next = document.querySelector("#Next");
let back = document.querySelector("#Back");
let c = document.getElementsByClassName("cubo");

let play = document.getElementById("play");
let playing = false;

var gradi = 0

function rotate() {
    let transformation = "rotateY(" + gradi + "deg)";
    Array.from(c).forEach((e)=>{e.style.transform = transformation})
}

next.addEventListener("click", function() {
    gradi += 90
    rotate()
})
next.addEventListener("mouseover", function() {
    gradi += 20
    rotate()
})
next.addEventListener("mouseout", function() {
    gradi += -20
    rotate()
})
back.addEventListener("click", function() {
    gradi += -90
    rotate()
})
back.addEventListener("mouseover", function() {
    gradi += -20
    rotate()
})
back.addEventListener("mouseout", function() {
    gradi += 20
    rotate()
})
let = interval;

play.addEventListener("click", () => {
    playing = !playing
    if (playing) {
        play.innerHTML = "Stop"
        interval = setInterval(() => {
            gradi += 90
            rotate()
    },1000);
}    else {
        clearInterval(interval)
        play.innerHTML = "Start"
    }
})