var km = prompt('quanti km devi percorrere?');
var eta = prompt('che età hai?');

var prezzo = 0.21 * km;

if (eta < 18) {
    prezzo = prezzo - (prezzo * (20/100));
} else if (eta > 65) {
    prezzo = prezzo - (prezzo * (40/100));
}

document.getElementById('costobiglietto').innerHTML = prezzo;
