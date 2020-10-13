var km = prompt('quanti km devi percorrere?');
//var eta = prompt('quanti anni hai?');

//questa è una versione di codice che rispecchia l'ottica -
//del risparmio delle variabili in quanto fondamentale in ambienti piu complessi -
//dove un grande numero di variabili superflue comportano rallentamenti nei caricamenti dei contenuti.
var prezzo = 0.21 * km;

if (prompt('quanti anni hai?') < 18) {
    prezzo = prezzo - (prezzo * (20/100));
} else if (prompt('quanti anni hai?') > 65) {
    prezzo = prezzo - (prezzo * (40/100));
}

document.getElementById('costobiglietto').innerHTML = prezzo;
