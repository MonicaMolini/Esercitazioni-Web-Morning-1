// Callback in JavaScript

// In JavaScript, una callback è una funzione passata come argomento ad un'altra funzione.
// Viene invocata (chiamata) all'interno della funzione ospitante per completare una routine o un'azione.

// Esempio base di callback:
function saluta(nome) {
  console.log("Ciao, " + nome);
}

function processaUtente(callback) {
  const nome = "Monica";
  callback(nome);
}

processaUtente(saluta); // Output: Ciao, Monica

// Callback sincrone vs asincrone
// Le callback possono essere sincrone (eseguite subito) o asincrone (eseguite più tardi)

// Callback sincrona:
function esegui(callback) {
  console.log("Inizio");
  callback();
  console.log("Fine");
}

esegui(() => console.log("Callback eseguita"));
// Output: Inizio -> Callback eseguita -> Fine

// Callback asincrona:
setTimeout(() => {
  console.log("Eseguito dopo 2 secondi");
}, 2000);

//setTimeout(callback, tempodiritardo)

// Callback con array methods (es. forEach)
const numeri = [1, 2, 3];
numeri.forEach((n) => console.log("Numero:", n));

// Creare una funzione che accetta una callback
function operazione(a, b, callback) {
  return callback(a, b);
}

const somma = (x, y) => x + y;
const moltiplica = (x, y) => x * y;

console.log(operazione(2, 3, somma)); // Output: 5
console.log(operazione(2, 3, moltiplica)); // Output: 6

// Gestione errori con callback
function dividi(a, b, callback) {
  if (b === 0) {
    return callback(new Error("Divisione per zero!"), null);
  }
  return callback(null, a / b);
}

dividi(10, 2, (errore, risultato) => {
  if (errore) {
    console.error("Errore:", errore.message);
  } else {
    console.log("Risultato:", risultato);
  }
});

// Callback annidate e "callback hell"
function step1(callback) {
  console.log("Step 1");
  callback();
}

function step2(callback) {
  console.log("Step 2");
  callback();
}

function step3(callback) {
  console.log("Step 3");
  callback();
}

// Esecuzione annidata (esempio di callback hell)
step1(() => {
  step2(() => {
    step3(() => {
      console.log("Tutti gli step completati!");
    });
  });
});

// Per evitare il callback hell si usano spesso Promesse o async/await (argomento successivo).

// Quando usare le callback:
// - Quando vuoi che una funzione possa eseguire un comportamento flessibile
// - Quando gestisci azioni asincrone (es. timer, richieste API)
// - Quando lavori con eventi o metodi di array

// Best practice:
// 1. Dai nomi significativi alle callback
// 2. Gestisci gli errori nelle callback asincrone
// 3. Se il codice diventa troppo annidato, considera l'uso di Promises o async/await

// Differenza tra chiamare e passare una funzione
function saluto() {
  console.log("Hello!");
}

function chiamaCallback(callback) {
  callback();
}

chiamaCallback(saluto); // ✅ Passiamo la funzione senza parentesi
// chiamaCallback(saluto()); // ❌ Questo eseguirebbe subito la funzione, non è corretto

// Esercizio di esempio
function filtraArray(array, callback) {
  const risultato = [];
  for (let elemento of array) {
    if (callback(elemento)) {
      risultato.push(elemento);
    }
  }
  return risultato;
}

const numeriFiltrati = filtraArray([1, 2, 3, 4, 5], (n) => n % 2 === 0);
console.log("Numeri pari:", numeriFiltrati); // Output: [2, 4]
