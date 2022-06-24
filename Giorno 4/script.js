let nav = document.getElementById("menu")
let barra = document.getElementById("barra")

nav.addEventListener("click", function() {
    if(barra.style.display === "block"){
        nav.innerHTML = "Apri"
        barra.style.display = "none"  
    }
    else{
        nav.innerHTML = "Chiudi"
        barra.style.display = "block"
    }
})
let titolo = document.getElementById("titolo")
let rem = 30
let button = document.getElementsByClassName("touch")

button[0].addEventListener("click", function() {
    rem += 5
    titolo.style.fontSize = rem + "px"
})
button[1].addEventListener("click", function() {
    rem += -5
    titolo.style.fontSize = rem + "px"
})
button[2].addEventListener("click", function() {
    titolo.style.textTransform = "LowerCase" 
})
button[3].addEventListener("click", function() {
    titolo.style.textTransform = "uppercase" 
})
button[4].addEventListener("click", function() {
    titolo.style.display = "none"
})
button[5].addEventListener("click", function() {
    titolo.style.display = "block"
})

let active = document.getElementsByClassName("active")
//METODO PIù SEMPLICE

Array.from(active).forEach(function(element) {
    element.addEventListener("click", function() {
    element.classList.toggle("canc")
    })
}
)
//METODO UN PO MENO SEMPLICE MA CORRETTO

// Array.from(active).forEach(function(element) {
//     element.addEventListener("click", function() {
//         if(element.classList.contains("canc")){
//         element.classList.remove("canc")
//     }
//     else{ element.classList.add("canc")}
//     })
// }
// )
// METODO SBAGLIATO

// Array.from(active).forEach(function(element) {
//     element.addEventListener("click", function() {
//         playing =!playing
//         if(playing){
//         element.classList.add("canc")
//     }
//     else{ element.classList.remove("canc")}
//     })
// }
// )

