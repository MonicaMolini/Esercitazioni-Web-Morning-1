// Async/await

// Un nuovo modo (relativamente recente, 2017) di scrivere codice asicrono...come se fosse sincrono!

// Se le promise rendono il codice più leggibile rispetto alle callback, async/await lo rende ancora più leggibile mantenendo una struttura più simile al codice sincrono

// Quando una funzione è dichiarata con la parola chiave async essa restituisce **sempre** una Promise

const funzioneDaChiamare = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Operazione completata con successo!");
  }, 2000);
});

async function fetchData() {
  try {
    const result = await funzioneDaChiamare;
    // await può essere usato solo all'interno di una funzione dichiarata come async. Await blocca temporaneamente l'esecuzione della funzione fino a quando la Promise non è risolta o rigettata
    console.log(result); // Stampa "Operazione completata con successo!" dopo 2 secondi
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// Quindi..

// async è usato per definire una funzione asincrona. Questa funzione restituisce implicitamente una Promise.

// await mette in pausa l'esecuzione della funzione async e aspetta che la Promise sia risolta o rigettata.

//Più operazioni?
//Se hai bisogno di effettuare più chiamate asincrone, puoi utilizzare await in sequenza, ma evita di utilizzare await su operazioni non necessarie (ad esempio quelle il cui risultato non blocca il codice)

//IMPORTANTE: ricorda sempre di utilizzarlo in combnazione con try... catch per una gestione degli errori efficace
