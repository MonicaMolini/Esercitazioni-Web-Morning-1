////////////////////
// ESERCIZIO 8
// Crea una funzione 'contaFizz' che usa un ciclo `while` per contare da 5 a 15. Ogni volta che il numero è multiplo di 3, stampa "Fizz". Suggerimento: per calcolare se un numero è multiplo di 3, usa l'operatore modulo `%`, n % 3 === 0.
////////////////////

function contaFizz() {
    let num = 5;
    while (num <= 15) {
        if (num % 3 === 0){
            console.log(num);
console.log("Fizz");        }
        
        num ++;
    }
    
}
contaFizz ();