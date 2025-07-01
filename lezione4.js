// I Cicli (Loop)

//Ciclo for

// for (inizializzazione; condizione; incremento) {
//     Blocco di codice da eseguire
//   }

// inizializzazione: viene eseguita una volta all'inizio del ciclo
// condizione: la condizione viene valutata prima di ogni iterazione. Se è true il ciclo continua, mentre se è false il ciclo termina
// incremento: viene eseguito dopo ogni iterazione per aggiornare la variabile

for (let i = 0; i < 5; i++) {
  console.log("Iterazione " + i);
}

//BREAK
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("ciclo terminato");
    break; // Interrompe il ciclo quando i è uguale a 5
  }
  console.log(i);
}

//CONTINUE
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Salta il resto del codice quando i è uguale a 2
  }
  console.log(i);
}

//Ciclo while

// while (condizione) {
//     Blocco di codice da eseguire
//   }

let w = 0;
while (w < 5) {
  console.log("Iterazione " + w);
  w++;
}
//Il ciclo continua fino a quando w diventa uguale o maggiore di 5

//Ciclo do...while

// do {
//     Blocco di codice da eseguire
//   } while (condizione);

//simile al ciclo while, ma con una differenza fondamentale: il blocco di codice viene eseguito almeno una volta
//perché la condizione viene controllata dopo l'esecuzione del codice

let d = 0;
do {
  console.log("Iterazione " + d);
  d++;
} while (d < 5);

//Ciclo for...in/for...of

// for (chiave in oggetto) {
//      Blocco di codice da eseguire
//   }

//viene utilizzato per iterare sulle proprietà di un oggetto(for...in)...

let persona = { nome: "Mario", eta: 25, lavoro: "developer" };
for (let chiave in persona) {
  console.log(chiave + ": " + persona[chiave]);
}

//...o sugli indici di un array(for...of)

let frutta = ["mela", "pera", "kiwi", "banana", "fragola"];

for (let frutto of frutta) {
  console.log(frutto);
}

//ESEMPIO

let numero = 5;
let somma = 0;

//Ciclo for per calcolare la somma dei numeri da 1 al numero inserito
for (let i = 1; i <= numero; i++) {
  somma += i; // += serve per aggiornare il valore di una variabile aggiungendole un nuovo valore: vs abbreviata di somma = somma - i
}
// somma = somma + i
// somma = 0 + 1 → somma = 1
// somma = 1 + 2 → somma = 3
// somma = 3 + 3 → somma = 6
// somma = 6 + 4 → somma = 10
// somma = 10 + 5 → somma = 15

console.log("La somma dei numeri da 1 a " + numero + " è: " + somma);

//Ciclo infinito
// for(let i = 1; i <= numero; i++){
//     numero = numero + i
//     console.log(numero)
// }

numero = 0;

while (numero % 2 === 0) {
  console.log("Il doppio di " + numero + " è " + numero * 2);
  numero = numero + 2;

  if (numero === 22) {
    break; // Interrompe il ciclo
  }
}

console.log("Numero 20 raggiunto. Programma terminato.");
