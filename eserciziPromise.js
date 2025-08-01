// Esercizi sulle Promises

// 1. Crea una Promise che si risolve dopo 2 secondi con il messaggio "Operazione completata". Esegui la promise e stampa in console il risultato.
const operazione = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operazione completata");
  }, 2000);
});
//METODO1
operazione
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
//METODO2
async function eseguiOperazione() {
  try {
    const dato = await operazione;
    console.log(dato);
  } catch (error) {
    console.error(error);
  }
}
eseguiOperazione();
// 2. Crea una funzione `isEven(num)` che ritorna una Promise:
//    - se `num` è pari, si risolve con `"Numero pari"`;
//    - altrimenti si rigetta con `"Numero dispari"`.
function isEven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Numero pari");
    } else {
      reject("Numero dispari");
    }
  });
}
//METODO1
// isEven(10)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Operazione conclusa"));
//METODO2
async function eseguiIsEven() {
  try {
    const numero = await ritornoNumero();
    const dato = await isEven(numero);
    console.log(dato);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Operazione conclusa");
  }
}

function ritornoNumero() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 20));
    }, 2000);
  });
}

eseguiIsEven();
// 3. Simula una chiamata API
// Scrivi una promise che si risolve e restituisce un oggetto utente { id: 1, name: "Alice" , cognome: "Rossi", eta: 18} dopo 3 secondi.
// Scrivi un'altra promise che usa il risultato della prima e con un ritardo di 3 secondi si risolve con una stringa `Alice Rossi ha 18 anni`; **i dati devono essere presi dalla prima promise**.
const utente = { id: 1, name: "Alice", cognome: "Rossi", eta: 18 };
function simulazione() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(utente);
    }, 3000);
  });
}

function simulazione2(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${user.name} ${user.cognome} ha ${user.eta} anni`);
    }, 3000);
  });
}
//METODO 1
simulazione()
  .then((result) => simulazione2(result))
  .then((result) => console.log(result));
//METODO 2
async function avviaMessaggio() {
  const user = await simulazione();
  const messaggio = await simulazione2(user);
  console.log(messaggio);
}
avviaMessaggio();
// 4. Crea due Promises con tempi diversi (ad esempio 1s e 2s) e usale con `Promise.all` per stampare entrambi i risultati insieme.
function first() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("PRIMA");
    }, 1000);
  });
}
function second() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("SECONDA");
    }, 2000);
  });
}
//METODO 1
Promise.all([first(), second()])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
//METODO 2
async function tuttiEDue() {
  const [prima, seconda] = await Promise.all([first(), second()]);
  console.log(prima, seconda);
}
tuttiEDue();
// 5. Crea tre Promises che si risolvono in tempi differenti, utilizza Math random per creare una probabilità randomica del 50% di resolve e reject per ciascun; usa `Promise.all` per stampare solo l'ultimo risultato, oppure, l'errore intercettato.
const prima = new Promise((resolve, reject) => {
  setTimeout(() => {
    const variabile = Math.random();
    if (variabile >= 0.5) {
      resolve(variabile);
    } else {
      reject("Numero troppo basso");
    }
  }, 1000);
});
const seconda = new Promise((resolve, reject) => {
  setTimeout(() => {
    const variabile = Math.random();
    if (variabile >= 0.5) {
      resolve(variabile);
    } else {
      reject("Numero troppo basso");
    }
  }, 2000);
});
const terza = new Promise((resolve, reject) => {
  setTimeout(() => {
    const variabile = Math.random();
    if (variabile >= 0.5) {
      resolve(variabile);
    } else {
      reject("Numero troppo basso");
    }
  }, 3000);
});
//METODO 1
Promise.all([prima, seconda, terza])
  .then((result) =>
    console.log("Ultimo risultato: ", result[result.length - 1])
  )
  .catch((error) => console.log(error));
//METODO 2
async function tutteETre() {
  try {
    const [uno, due, tre] = await Promise.all([prima, seconda, terza]);
    console.log("Ultimo risultato: ", tre);
  } catch (error) {
    console.error(error);
  }
}
tutteETre();
// 7. Gestisci un errore lanciato da una Promise con `.catch` e stampa un messaggio personalizzato, tipo `"Errore gestito: …"`.

function gestione() {
  return new Promise((resolve, reject) => {
    const numero = Math.random();
    if (numero > 1) {
      resolve(numero);
    } else {
      reject("Qualcosa è andato storto");
    }
  });
}
//METODO 1
gestione()
  .then((result) => console.log(result))
  .catch((error) => console.error("Errore gestito: ", error));
//METODO 2
async function prova() {
  try {
    const dato = await gestione();
    console.log(dato);
  } catch (error) {
    console.error("Errore gestito: ", error);
  }
}
prova();
// 8. Crea una funzione `failingPromise()` che ritorna una Promise che dopo 2 secondi **si rigetta** con un messaggio di errore.
function failingPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("O, mi sa che hai sbagliato");
    }, 2000);
  });
}
//METODO 1
failingPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
//METODO 2
async function esempio() {
  try {
    const dato = await failingPromise();
    console.log(dato);
  } catch (error) {
    console.error("Errore gestito: ", error);
  }
}
esempio();
// 9. Utilizza `.then()` concatenati per trasformare il risultato di una Promise:
//    - parte da un numero,
//    - moltiplicalo per 3,
//    - aggiungi 5,
//    - poi stampa il risultato.
function primo(n) {
  return new Promise((resolve, reject) => {
    resolve(n * 3);
  });
}
function secondo(result) {
  return new Promise((resolve, reject) => {
    resolve(result + 5);
  });
}
//METODO 1
primo(5)
  .then((result) => secondo(result))
  .then((finalResult) => console.log(finalResult))
  .catch((error) => console.error(error));
//METODO 2
async function operazion() {
  try {
    const primaOperazione = await primo(10);
    const secondaOperazione = await secondo(primaOperazione);
    console.log(secondaOperazione);
  } catch (error) {
    console.error(error);
  }
}
operazion();
//BONUS
// 10. Crea un array di Promises che comprendono risoluzioni e rigetti a tempi diversi e usa:
//  `Promise.allSettled` per sapere quali hanno avuto successo e quali no
//  `Promise.race` per sapere quale Promise si risolve per prima
const promises = [
  new Promise((resolve, reject) => setTimeout(() => resolve("A")), 500),
  new Promise((resolve, reject) => setTimeout(() => resolve("B")), 1000),
  new Promise((resolve, reject) => setTimeout(() => reject("Error A")), 1500),
  new Promise((resolve, reject) => setTimeout(() => resolve("c")), 2000),
  new Promise((resolve, reject) => setTimeout(() => reject("Error B")), 2500),
  new Promise((resolve, reject) => setTimeout(() => resolve("d")), 3000),
  new Promise((resolve, reject) => setTimeout(() => reject("Error C")), 3500),
];
//METODO 1
Promise.allSettled(promises).then((result) => console.log(result));

Promise.race(promises)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
//METODO 2
async function funzione() {
  const prima = await Promise.allSettled(promises);
  console.log(prima);
}
funzione();

async function funzione2() {
  try {
    const prima = await Promise.race(promises);
    console.log(prima);
  } catch (error) {
    console.error(error);
  }
}
funzione2();
