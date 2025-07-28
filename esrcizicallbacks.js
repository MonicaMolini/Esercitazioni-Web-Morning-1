// ==========================================
// Esercizi di riepilogo su Callback
// ==========================================

/*
**ATTENZIONE:**
In questi esercizi NON è richiesto testare le funzioni o scrivere codice di esempio.
L’obiettivo è imparare a scrivere funzioni **generiche**, che accettano comportamenti esterni (callback)
e si limitano a orchestrare il flusso dei dati senza preoccuparsi di cosa faccia esattamente la callback.

Non serve quindi sapere cosa fa la funzione ricevuta, ma solo assicurarsi che venga chiamata correttamente, con i dati giusti, nel punto giusto. Questo approccio sviluppa la capacità di lavorare **per astrazione**, scollegando struttura e comportamento.
*/

// ESERCIZIO 1
// Crea una funzione che riceve un valore e una funzione da eseguire su quel valore.
// Deve semplicemente restituire il risultato della funzione passata.
function restituisciRisultato(a, callback) {
  return callback(a);
}
function aggiungi(a) {
  return a + 2;
}
console.log(restituisciRisultato(2, aggiungi));
// ESERCIZIO 2
// Scrivi una funzione che prende una lista di numeri e una funzione modificatrice.
// Deve restituire una nuova lista dove ogni numero è stato trasformato secondo la logica della funzione ricevuta.
function numeriTrasformati(numeri, callback) {
  return numeri.map((numero) => callback(numero));
}

// ESERCIZIO 3
// Crea una funzione che riceve una lista di stringhe e una funzione di controllo.
// Deve restituire solo le stringhe che rispettano la condizione definita dalla funzione passata.
function condizioneRestituita(stringhe, callback) {
  return stringhe.filter((stringa) => callback(stringa));
}

// ESERCIZIO 4
// Scrivi una funzione che riceve una lista di numeri, una funzione di test e una funzione aggregatrice.
// La funzione deve restituire un singolo risultato numerico ottenuto filtrando e poi combinando gli elementi.
function restituisci(numeri, test, aggregatrice) {
  return numeri.filter((numero) => test(numero)).reduce(aggregatrice, 0);
}

// ESERCIZIO 5
// Crea una funzione che prende una lista di oggetti contenenti nome e stato (booleano).
// Riceve una funzione da eseguire su ogni oggetto che soddisfa una certa condizione.
// Deve applicare la funzione solo su quegli oggetti.
function applica(oggetti, callback) {
  return oggetti.forEach((oggetto) => {
    if (oggetto.stato === true) {
      callback(oggetto);
    }
  });
}

// ESERCIZIO 6
// Scrivi una funzione che riceve una lista di frasi e una funzione di analisi testuale.
// Deve restituire una struttura dati che rappresenti il risultato dell’analisi su ciascuna frase.
function risultatoAnalisi(frasi, callback) {
  return frasi.map((frase) => callback(frase));
}

// ESERCIZIO 7
// Crea una funzione che prende una lista di numeri e una funzione condizionale.
// Deve restituire una nuova lista in cui alcuni numeri sono trasformati, altri lasciati invariati, in base alla condizione.
function nuoviNumeri(numeri, callback) {
  return numeri.map((numero) => (callback(numero) ? numero * 2 : numero));
}

// ESERCIZIO 8
// Scrivi una funzione che riceve una lista di oggetti e una funzione di categorizzazione.
// Deve restituire un oggetto in cui i dati sono raggruppati per categoria, e ogni gruppo è stato elaborato secondo la funzione passata.
function elaborazione(oggetti, callback) {
  oggetti.reduce((acc, cur) => {});
}

// ESERCIZIO 9
// Crea una funzione che riceve:
// - una lista generica
// - una lista di funzioni da applicare in sequenza su ciascun elemento
// Deve restituire una nuova lista con il risultato delle trasformazioni concatenate.
function concatena(lista, funzioni) {
  return lista.map((item) => funzioni.reduce((acc, cur) => cur(acc), item));
}

// ESERCIZIO 10
// Scrivi una funzione che prende un array complesso (es. lista di oggetti con array annidati) e una funzione di estrazione personalizzata.
// Deve restituire un array semplificato che unisce, trasforma e filtra i dati secondo la logica definita dalla funzione passata.
function semplifica(array, callback) {
  return array.map((arr) => callback(arr));
}

// Esercizio 11
// Costruisci una funzione "elaboraPipeline" che riceve:
// - una lista iniziale di dati
// - una sequenza di moduli (funzioni) trasformative
// Ogni modulo elabora la lista e la passa al successivo. Alla fine restituisci la lista finale elaborata.
