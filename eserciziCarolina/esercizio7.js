////////////////////
// ESERCIZIO 7
// Scrivi una funzione 'asterischi()' che accetti come parametro un numero e che tramite un ciclo `for` costuisca una stringa composta un totale di asterischi uguale al numero passato come parametr. Invoca la funzione stampando il risulato in console. **Attenzione: non usare il console.log() all'interno della funzione! la funzione deve ritornare la stringa**
////////////////////

function asterischi(num) {
    let risultato = "";
    for (let i = 0; i < num; i++){
        (risultato += "*")
    }
    return risultato
}

console.log(asterischi(3));