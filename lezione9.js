// Gestione degli errori con try...catch

// In JavaScript gli errori possono interrompere l’esecuzione del codice e causare problemi.
// La gestione degli errori permette di intercettare questi problemi per gestirli in modo efficiente
// e garantire che il programma continui a funzionare o si fermi in modo controllato

// Normalmente, un errore blocca il codice
// Esempio senza try...catch:
const divisione = (a, b) => {
  if (b === 0) {
    // Se b è 0, generiamo un errore manualmente che blocca il codice
    throw new Error("Non puoi dividere per zero!");
    // console.error("non è possibile dividere per zero");
    // return;
  }
  if (a === 0) {
    // Se b è 0, generiamo un errore manualmente che blocca il codice
    throw new Error("Non puoi dividere per zero!");
    // console.error("non è possibile dividere per zero");
    // return;
  }
  if (b === 5) {
    // Se b è 0, generiamo un errore manualmente che blocca il codice
    throw new Error("b è 5");
    // console.error("non è possibile dividere per zero");
    // return;
  }
  if (!b) {
    // Se b è 0, generiamo un errore manualmente che blocca il codice
    throw new Error(
      "inserisci un numero diverso da zero, o un parametro valido"
    );
    // console.error("non è possibile dividere per zero");
    // return;
  }
  return a / b;
};

console.log(divisione(10, 2)); // Output: 5
// console.log(divisione(10, 0)); // Uncaught Error: Non puoi dividere per zero!

// Con try...catch possiamo gestire gli errori

try {
  // Blocco di codice che potrebbe generare errori
  console.log(divisione(10));
} catch (errore) {
  // Questo codice viene eseguito solo se c'è un errore
  console.error("Errore catturato:", errore.message);
  // Errore catturato: Non puoi dividere per zero!
}

// L’esecuzione del codice continua dopo il blocco try...catch
console.log("Esecuzione continua anche dopo l'errore");

// Possiamo anche creare errori personalizzati con throw (vedi primo esempio)
// Utilizzare throw per generare un errore specifico se una condizione non è soddisfatta

function verificaEtà(età) {
  if (età < 18) {
    throw new Error("Devi avere almeno 18 anni per accedere.");
  }
  console.log("Accesso consentito.");
}

try {
  verificaEtà(16); // Errore: "Devi avere almeno 18 anni per accedere."
} catch (errore) {
  console.error("Errore nella verifica dell'età:", errore.message);
}

// Proprietà dell'oggetto Error
// L'oggetto `Error` ha delle proprietà utili:
// - `message`: il messaggio dell'errore
// - `name`: il tipo di errore (di default "Error")
// - `stack`: la traccia dell'errore, utile per il debug

try {
  verificaEtà(16);
} catch (errore) {
  console.log(errore.message); // Output: Devi avere almeno 18 anni per accedere.
  console.log(errore.name); // Output: Error
  console.log(errore.stack); // Output: (mostra la traccia dell'errore per il debug)
} finally {
  //operazione
}

// Blocco finally
// `try...catch` può includere un blocco **opzionale** `finally`
// `finally` viene eseguito SEMPRE, sia che ci sia un errore sia che non ci sia.

function operazionePericolosa() {
  try {
    console.log("Inizio operazione pericolosa");
    //throw new Error("Qualcosa è andato storto!");
    console.log("Operazione completata con successo");
  } catch (errore) {
    console.error("Errore catturato:", errore.message);
  } finally {
    console.log("Operazione terminata, pulizia risorse"); // Questo viene eseguito sempre
  }
}

operazionePericolosa();
// Output:
// Inizio operazione pericolosa
// Errore catturato: Qualcosa è andato storto!
// Operazione terminata, pulizia risorse

// Quando utilizzare try...catch?

// - Il codice può generare errori imprevedibili, come input utente, dati esterni, ecc.
// - Vuoi validare i dati e gestire condizioni specifiche, ad esempio errori di input.
// - Vuoi evitare che l'applicazione si blocchi.

// Best practice
// 1. Usa try...catch solo dove necessario. Il codice dovrebbe essere robusto per evitare errori frequenti.
// 2. Fornisci messaggi di errore **chiari**! quando usi `throw` per creare errori personalizzati.
// 3. Non ignorare gli errori! stampare almeno un messaggio aiuta il debug.

// Differenza tra console.error e throw new Error

// console.error
// `console.error` serve a mostrare un messaggio di errore nella console senza interrompere il flusso del programma.
// Viene utilizzato per loggare o stampare un messaggio di errore: utile per il debug o per avvisare di un problema(**NB: non interrompe il programma!!**).

const verificaNumero = (numero) => {
  if (typeof numero !== "number") {
    console.error("Errore: il valore fornito non è un numero."); // Log dell'errore
    return; // Continua il programma senza interromperlo
  }
  console.log("Il numero è valido:", numero);
};

verificaNumero("test"); // Output: Errore: il valore fornito non è un numero.
verificaNumero(10); // Output: Il numero è valido: 10

// throw new Error
// `throw new Error` invece genera un errore vero e proprio, interrompendo l’esecuzione della funzione.
// È utile quando è necessario bloccare l'esecuzione del codice perché si è verificato un errore critico

const verificaNumeroConThrow = (numero) => {
  if (typeof numero !== "number") {
    throw new Error("Errore: il valore fornito non è un numero."); // Interrompe il programma con un errore
  }
  console.log("Il numero è valido:", numero);
};

try {
  verificaNumeroConThrow("test"); // Questo genererà un errore e passerà al blocco catch
} catch (errore) {
  console.error("Errore catturato:", errore.message); // Output: Errore catturato: il valore fornito non è un numero.
}

verificaNumeroConThrow(10); // Output: Il numero è valido: 10

// In sintesi:
// - `console.error`: stampa un messaggio di errore in console, non interrompe il programma.
// - `throw new Error`: genera un errore e interrompe l’esecuzione, trasferendo il controllo a `catch` se presente.

// Esempio gestione errori in una funzione che richiede dati utente:

function leggiDatiUtente(utente) {
  try {
    if (!utente.nome) {
      throw new Error("Il nome è obbligatorio.");
    }
    if (!utente.età || utente.età < 0) {
      throw new Error("Età non valida.");
    }
    console.log(`Benvenuto, ${utente.nome}! Hai ${utente.età} anni.`);
  } catch (errore) {
    console.error("Errore nei dati dell'utente:", errore.message);
  } finally {
    console.log("Verifica dei dati completata.");
  }
}

// Testing
leggiDatiUtente({ nome: "Luca", età: 25 }); // Output: Benvenuto, Luca! Hai 25 anni.
leggiDatiUtente({ nome: "", età: 25 }); // Output: Errore nei dati dell'utente: Il nome è obbligatorio.
leggiDatiUtente({ nome: "Marco", età: -5 }); // Output: Errore nei dati dell'utente: Età non valida.
