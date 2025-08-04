// I JSON

// Il JSON (JavaScript Object Notation -  .json) è un formato di dati leggero e facile da leggere ed usato comunemente per lo scambio di dati tra client e server

//La sua struttura è molto simile a quella di un oggetto Javascript con la differenza che anche le chiavi (Key) sono scritte sottoforma di stringa (ovvero con le " " - **ATTENZIONE**: supporta solo le doppie virgolete non gli apostrofi '', nè i backtick ``):

// {
//     "nome": "Monica",
//     "età": 31,
//     "interessi": ["storia", "web", "design", "pittura"]
//  }

// Il JSON è sostanzialmente una stringa di testo, quindi deve essere convertito in un oggetto JavaScript per poter essere manipolato, vediamo come:

// PARSE()
// Converte una stringa, un file, un dato salvato in JSON in un oggetto Javascript

const jsonString = '{"nome": "Monica", "età": 31}';

const obj = JSON.parse(jsonString); // Conversione in oggetto

// obj {nome: "Monica", età: 31}

//STRINGIFY()

// Di contro, converte un oggetto Javascript in formato JSON

const user = {
  nome: "Monica",
  età: 31,
};

const jsonStringify = JSON.stringify(user);

console.log(jsonStringify); // '{"nome":"Monica","età":31}'

// La Fetch API

// La funzione fetch() è una funzione JavaScript nativa per effettuare richieste HTTP in modo asincrono

const url = "https://jsonplaceholder.typicode.com/todos/3";

const options = {
  method: "GET", // Il metodo HTTP per recuperare dati
  headers: {
    "Content-Type": "application/json", // Il tipo di dato atteso
  },
};

async function recuperoDati(x) {
  try {
    const dati = await fetch(`https://jsonplaceholder.typicode.com/todos/${x}`); // utilizziamo i backtick per interpolare la variabile x nell'URL e rendere dinamica la richiesta
    const result = await dati.json(); // Converte la risposta in formato JSON, utilizzando il metodo .json() che restituisce una Promise invece che il metodo JSON.parse() che è sincrono e non può essere utilizzato con fetch()
    const id = result.id;
    const title = result.title;

    return `${id}: ${title}`;
  } catch (error) {
    console.error(error);
  }
}

const numero = Math.floor(Math.random() * 8);
recuperoDati(numero).then((dato) => console.log(dato));

console.log(recuperoDati(3)); // Promise {<pending>}
// Restituisce una Promise in attesa di essere risolta poichè recuperoDati è una funzione asincrona quindi è necessario attendere il suo completamento per ottenere il risultato e gestirlo correttamente con then() o await

//nel caso in cui non si utilizzi async/await, si può utilizzare la funzione fetch() in modo tradizionale:
fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Errore:", error));

// url: Stringa che specifica l'URL della risorsa da recuperare;
// options: Oggetto opzionale che configura il tipo di richiesta (metodo, intestazioni, corpo, ecc...)

//Fetch() resittuisce SEMPRE una Promise
