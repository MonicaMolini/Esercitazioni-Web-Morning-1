// ESERCIZIO 2
// Crea una funzione 'dadi()' che simula il lancio di due dadi a 6 facce. Se entrambi i numeri sono uguali, restituisci "Doppio!". Se la somma è maggiore di 8, restituisci "Hai vinto!". Altrimenti "Riprova".
// Poi invoca la funzione e stampa il risultato in console.
////////////////////

function dadi() {
    let dado1 = Math.floor (Math.random()* 6)+1;
    let dado2 = Math.floor (Math.random()* 6)+1;
    let somma = dado1 + dado2;


    if (dado1 === dado2 ) {
        return "Doppio!"
    } else if ((dado1 + dado2) >= 8) {
        return "Hai vinto!"
    } else {
        return "Riprova"
    }
}
let risultato = dadi()
console.log(risultato)