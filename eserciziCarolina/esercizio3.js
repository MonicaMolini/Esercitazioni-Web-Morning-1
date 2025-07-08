// ESERCIZIO 3
// Crea una funzione che accetta un array di 5 numeri e restituisce un nuovo array (senza usare metodi array!) con solo i numeri pari moltiplicati per 2.
////////////////////

const array = [1, 2, 3, 4, 5];
function nuovoArray (x) {
    let arrayMoltiplicato = []

    for (let i = 0; i < x.length; i ++) {
        if (x[i] % 2 === 0) {
            arrayMoltiplicato[arrayMoltiplicato.length]= x[i] * 2
        } 
    }
    
    return arrayMoltiplicato
}

console.log(nuovoArray (array));