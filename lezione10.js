/*
  L' ASINCRONICITÀ IN PROGRAMMAZIONE

  COSA SIGNIFICA "ASINCRONO"?
  In JavaScript, il codice viene eseguito in modo "sincrono" per default, cioè riga per riga, una dopo l'altra.
  Tuttavia, alcune operazioni (come il caricamento di dati, timer, richieste HTTP) impiegano tempo.
  Per evitare che il programma si blocchi in attesa, queste operazioni vengono gestite in modo "asincrono".

  L'ESECUZIONE ASINCRONA
  JavaScript delega certe operazioni (es. setTimeout, fetch...) all'ambiente esterno (browser o Node.js),
  che le esegue e poi, quando sono pronte, le "rimette in coda" per essere gestite.

  EVENT LOOP E CALLBACK QUEUE
  Quando un'operazione asincrona è completata, la funzione collegata (callback) viene inserita nella "callback queue".
  L'Event Loop controlla quando la call stack è libera e prende una funzione dalla coda per eseguirla.

  CALLBACK
  Una callback è una funzione passata come argomento ad un’altra funzione, che verrà eseguita al momento giusto.
  È il meccanismo più comune per gestire operazioni asincrone prima dell’introduzione delle Promises e async/await.
 
  CALLBACK HELL
  Quando le callback vengono annidate troppo (es. una dentro l’altra), il codice diventa difficile da leggere e mantenere.
  Questo fenomeno è chiamato "callback hell" o "pyramid of doom".

  SOLUZIONE MODERNA
  Per evitare il callback hell si usano Promise o async/await, che rendono il codice asincrono più lineare e leggibile.
*/

// setTimeout – ritarda l'esecuzione di una funzion

console.log("Inizio");
function print() {
  console.log("Esecuzione dopo 2 secondi");
}
setTimeout(print, 2000);

console.log("Fine");

// Output:
// Inizio
// Fine
// Dopo 2 secondi

// setInterval – esegue una funzione ogni tot millisecondi

let contatore = 1;

const intervallo = setInterval(() => {
  console.log(`Contatore: ${contatore}`);
  contatore++;

  if (contatore > 200) {
    clearInterval(intervallo); // Ferma il setInterval
  }
}, 1000);

setTimeout(() => {
  clearInterval(intervallo);
}, 2000);

// setInterval(() => {
//   console.log("operazione infinita");
// }, 1000);

// Output:
// Contatore: 1
// Contatore: 2
// Contatore: 3 (poi si ferma)

// Callback – funzione passata come parametro

function saluta(nome, callback) {
  console.log(`Ciao, ${nome}`);
  callback();
}

function fineSaluto() {
  console.log("Saluto completato.");
}

saluta("Monica", fineSaluto);

// Output:
// Ciao, Monica
// Saluto completato.

// Callback Hell – esempio di annidamento

setTimeout(() => {
  console.log("Operazione 1 completata");

  setTimeout(() => {
    console.log("Operazione 2 completata");

    setTimeout(() => {
      console.log("Operazione 3 completata");

      setTimeout(() => {
        console.log("Operazione 4 completata");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Output dopo 4 secondi:
// Operazione 1 completata
// Operazione 2 completata
// Operazione 3 completata
// Operazione 4 completata

// Funzione asincrona riutilizzabile con callback

function operazioneAsincrona(messaggio, tempo, callback) {
  setTimeout(() => {
    console.log(messaggio);
    if (callback) callback();
  }, tempo);
}

operazioneAsincrona("Step 1", 1000, () => {
  operazioneAsincrona("Step 2", 1000, () => {
    operazioneAsincrona("Step 3", 1000);
  });
});

// setTimeout(() => console.log("step 1"), 1000);
// setTimeout(() => console.log("step 2"), 2000);
// setTimeout(() => console.log("step 3"), 3000);

// const stop = setInterval(() => console.log("loop"), 1000);

// setTimeout(() => clearInterval(stop), 5000);

// Output:
// Step 1
// Step 2
// Step 3
