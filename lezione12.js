// Le Promise
// Cos'è? è un oggetto che rappresenta un’operazione asincrona che permette di gestire meglio il codice asincrono rispetto alle callback tradizionali migliorando la leggibilità

// può trovarsi in tre stati:

// Pending - lo stato iniziale: l'operazione è in corso e non ha ancora un risultato

// Fulfilled - nel caso in cui l'operazione è completata con successo e la Promise ha restituito un valore

// Rejected - quando l'operazione è fallita e la Promise ha restituito l’errore

//Creare una Promise
// usiamo il costruttore new Promise, che accetta una arrow function come argomento la quale ha due parametri, resolve e reject, che sono a loro volta funzioni:

// resolve(value): Indica che la Promise è completata con successo e passa il value come risultato.

// reject(): Indica che la Promise è stata rifiutata per qualche motivo: spesso gli viene passato il motivo dell'errore

let getData = new Promise((resolve, reject) => {
  // In questo caso setTimeout ci serve unicamente per simulare il ritardo
  setTimeout(() => {
    let success = false; // una variabile per simulare una casistica di errore
    if (success) {
      resolve("Operazione completata con successo!"); // in caso venga risolta
    } else {
      reject("Errore durante l'operazione.."); // in caso venga rifiutata
    }
  }, 2000);
});

//Una questione di leggibilita: .then(), .catch(), e .finally()
// Come nel try..catch, per gestire i risultati di una Promise, utilizziamo tre metodi principali:

// .then(): al quale passiamo il risultato dell'operazione completata con successo

// .catch(): È usato per gestire gli errori (stato "rejected") di una Promise

// .finally(): È eseguito indipendentemente dal risultato

getData
  .then((result) => {
    //oppure, di solito, viene passato 'data'
    console.log("Successo:", result); // Viene eseguito se la Promise è risolta
  })
  .catch((error) => {
    console.error("Errore:", error); // Viene eseguito se la Promise è rifiutata
  })
  .finally(() => {
    console.log("Operazione conclusa"); // Viene sempre eseguito
  });

// Concatenare Promise
// Uno dei vantaggi principali delle Promise è la possibilità di concatenare più operazioni asincrone senza creare callback annidate

// Supponiamo di avere tre step consequenziali:

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Passo 1 completato");
      resolve("Risultato del passo 1");
    }, 1000);
  });
}

function step2(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Passo 2 completato con:", previousResult);
      resolve("Risultato del passo 2");
    }, 1000);
  });
}

function step3(previousResult) {
  return new Promise((resolve, reject) => {
    let contatore = 0;
    setTimeout(() => {
      console.log("Passo 3 completato con:", previousResult);
      resolve("Risultato finale");
    }, 1000);
    let int = setInterval(() => contatore++, 1000);
    if (contatore === 10) {
      clearInterval(int);
      reject("promise non risolta in tempo");
    }
  });
}

// Invocazione della catena di Promise
step1()
  .then((result1) => step2(result1))
  .then((result2) => step3(result2))
  .then((finalResult) => {
    console.log("Tutti i passaggi completati con:", finalResult);
  })
  .catch((error) => {
    console.error("Errore nella catena:", error);
  });

// // Promise.all
// // Esistono altri metodi per gestire più Promise in parallelo

// // Promise.all: Aspetta che tutte le Promise siano risolte. Se una delle Promise è rifiutata, Promise.all rifiuta immediatamente tutte.

let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("risultato1"), 1000)
);
let promise2 = new Promise((resolve) =>
  setTimeout(resolve, 2000, "Risultato 2")
);
let promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 1500, "Errore 3")
);

Promise.all([promise1, promise2, promise3]) //in questo caso Promise.all verrà rifiutata a causa dell'errore di promise3, e l’errore verrà gestito nel .catch().
  .then((results) => {
    console.log("Tutti i risultati:", results);
  })
  .catch((error) => {
    console.error("Una delle promesse è fallita:", error);
  });
