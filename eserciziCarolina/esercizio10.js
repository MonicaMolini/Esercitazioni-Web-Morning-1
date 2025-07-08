////////////////////
// ESERCIZIO 10
// Dato il seguente array di oggetti `prodotti`, ognuno con proprietà `nome` e `prezzo`, scrivi una funzione 'calcolaTotale()' che calcola la somma totale dei prezzi usando un ciclo (no metodi degli array!).
// Output richiesto: "Totale: 125€"
////////////////////

const prodotti = [
  { nome: "T-shirt", prezzo: 15 },
  { nome: "Jeans", prezzo: 40 },
  { nome: "Cappello", prezzo: 10 },
  { nome: "Scarpe", prezzo: 60 },
];

let totale = 0
function calcolaTotale(){
    for (const prodotto of prodotti) {
        totale += prodotto.prezzo;
    }
return totale;
}

console.log(calcolaTotale(totale))