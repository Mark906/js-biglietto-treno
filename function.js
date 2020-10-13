

var km = prompt('quanti km devi percorrere?');
var eta = prompt('che età hai?');
var prezzo = 0.21 * km;
var sconto = 0;

if (eta < 18) {
    sconto = prezzo * (20/100);
} else if (eta > 65) {
    sconto = prezzo * (40/100);
}



document.getElementById('costobiglietto').innerHTML = prezzo;
document.getElementById('sconto').innerHTML = sconto;
document.getElementById('totale').innerHTML = prezzo - sconto;
