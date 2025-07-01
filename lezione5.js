//Le Funzioni

//Dichiarazione

// function nomeFunzione(parametro1, parametro2, ...) {
//     Blocco di codice da eseguire (argomento)
//     return risultato;
//   }

function somma(a, b) {
  return a + b;
}

//ATTENZIONE: il nome dato ai parametri è facoltativo e non implica alcun collegamento diretto con quelli che verranno poi passati alla funzione.
//Sono, praticamente, dei placeholders e servono unicamente per far interagire dati esterni all'interno della funzione.

// Invocazione
let x = 3;
let y = 5;

somma("stringa1", "stringa 2");

let risultato = somma(x, y);
console.log(risultato); // 8
let sum = somma(7, 2);

//Modi alternativi per definire funzioni

//Funzione anonima che viene assegnata a una variabile

let moltiplica = function (x, y) {
  return x * y;
};

console.log(moltiplica(4, 5));

//DIFFERENZA: Le funzioni dichiarate con function possono essere utilizzate prima della loro dichiarazione, a differenza di quelle anonime

//Arrow Functions

let sommatoria = (z, f) => z + f;

console.log(sommatoria(3, 87));

//uguale a

function sommare(x, y) {
  return x + y;
}

//IMPORTANTE: Se la funzione ha solo un'istruzione si può omettere le parentesi graffe e return. Se la funzione ha un solo parametro si può omettere le parentesi attorno al parametro.

//MATH

// Genera un numero casuale tra 1 e 100
let numeroCasuale = Math.floor(Math.random() * 100) + 1;
Math.floor();
Math.random();

//Math.floor arrotonda -verso il basso- il numero ad intero , Math.random genera un numero casuale tra 0 e 100, poi viene sommato 1 per farlo partire da 1.

if (numeroCasuale <= 50) {
  console.log("Complimenti! Hai vinto la lotteria!");
} else {
  console.log("Peccato! Non hai vinto. Riprova!");
}
//Probabilità del 50%

//DATE
let data = new Date(); //Il costruttore Date() senza argomenti restituisce la data e l'ora correnti

let datalocale = data.toLocaleString(); //formato più leggibile

console.log(data);
console.log(datalocale);
