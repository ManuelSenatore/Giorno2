var budget = 1000;
var spesa = Math.floor(Math.random() * 100);
console.log(spesa);

function conteggio(){
    while(budget >= 500){
        spesa = Math.floor(Math.random() * 100);
        document.write("Ammontare della spesa: " + spesa + "<br>");
        budget = ( budget - spesa );
        document.write("Nuovo budget aggiornato: " + budget + "<br><br>");
    }
    document.write("Hai speso la metà dei soldi <br><br>");
    while(budget >= 200){
        spesa = Math.floor(Math.random() * 100);
        document.write("Ammontare della spesa: " + spesa + "<br>");
        budget = ( budget - spesa );
        document.write("Nuovo budget aggiornato: " + budget + "<br><br>");
    }
    document.write("Hai meno di 200€, ora basta stai spendendo troppo");
} 

let left = 0
setInterval(function(){

    let quadrato = document.querySelector('#bottone')

    quadrato.style.marginLeft = left + 'px'
    if(left <= 500){
         left += 5
    }
   
},60)