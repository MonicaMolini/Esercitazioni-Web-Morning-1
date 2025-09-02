/**
 * LEZIONE 1 – Fondamenti di TypeScript
 * --------------------------------------------------

/**
 * 📦 COME INSTALLARE E COMPILARE TYPESCRIPT
 * -----------------------------------------
 * 1. Installare TypeScript globalmente sul sistema:
 *    npm install -g typescript
 *
 * 2. Verificare che TypeScript sia installato:
 *    tsc -v
 *
 * 3. Creare un file TypeScript, es: esempio.ts
 *
 * 4. Compilare il file in JavaScript:
 *    tsc esempio.ts
 *    Verrà generato un file: esempio.js
 *
 * 5. Eseguire il file compilato con Node.js:
 *    node esempio.js
 *
 * ✅ Suggerimento: per compilare automaticamente più file, puoi inizializzare un progetto TS:
 *    tsc --init
 *    (crea un file tsconfig.json con le opzioni di compilazione)
 */

// Tipi primitivi
// Questi sono i tipi fondamentali in TypeScript per rappresentare valori base.
let nome: string = "Monica"; // stringa
let eta: number = 31; // numero
let attiva: boolean = true; // booleano (vero/falso)

// Array e Tuple
// Gli array possono essere tipizzati con la notazione tipo[]
let tag: string[] = ["typescript", "lezione"]; // array di stringhe

// Le tuple permettono di definire array con un numero fisso di elementi e tipi precisi
let coppia: [string, number] = ["capitolo", 1];

// Enum
// Gli enum sono utili per definire insiemi di valori costanti nominati
enum Ruolo {
  Admin = "Admin",
  Developer = "Developer",
  Guest = "Guest",
}
let ruoloUtente: Ruolo = Ruolo.Developer; // Assegna un valore dell'enum

// Interfaccia di esempio
// Le interfacce permettono di definire la struttura di un oggetto
interface Utente {
  id: number; // obbligatorio
  nome: string; // obbligatorio
  ruolo?: Ruolo; // opzionale (può non essere presente)
}

const utente1: Utente = { id: 2, nome: "Luca", ruolo: Ruolo.Admin };

// Funzione che utilizza tipi personalizzati
// Tipizziamo i parametri in ingresso e il valore di ritorno
const generaMessaggio = (utente: Utente): string => {
  // Operatore nullish coalescing (??) restituisce 'utente' se ruolo è undefined/null
  const ruolo = utente.ruolo ?? "utente";
  return `Ciao, ${utente.nome}! Sei una fantastica ${ruolo}!`;
};

// Il tipo void indica che la funzione non restituisce un valore
// particolarmente utile per funzioni che stampano in console o modificano lo stato
// oppure per funzioni che non hanno un valore ma eseguono un'azione, una funzione, un errore, ecc.

// Esempio d'uso dell'interfaccia e della funzione
const utente: Utente = {
  id: 1,
  nome: "Monica4",
  ruolo: Ruolo.Developer,
};

// Output nel terminale
console.log(generaMessaggio(utente));

/**
 * ✅ Riepilogo teorico:
 * - TypeScript aggiunge tipi statici a JavaScript
 * - I tipi aiutano a prevenire errori e facilitano l’autocomplete
 * - Le tuple ed enum sono strumenti specifici utili in vari contesti
 */
