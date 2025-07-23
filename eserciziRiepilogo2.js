// Esercizio 1: Countdown Personalizzato con destructuring e setInterval
// Scrivi una funzione startCountdown che accetta un oggetto con le proprietà  start e end .
// Usa il destructuring per accedere ai valori e avvia un setInterval che stampa un numero ogni secondo,
// da start a end. Al termine, stampa "Fine conto alla rovescia" e ferma l'intervallo.
// Testa la funzione con un oggetto creato da te.
const intervallo = {
  start: 0,
  end: 5,
};
function startCountdown({ start, end }) {
  let timer = setInterval(() => {
    console.log(start);
    if (start === end) {
      clearTimeout(timer);
      console.log("Fine conto alla rovescia");
    }
    start++;
  }, 1000);
}
//startCountdown(intervallo);
//oppure farlo dichiarando current = start modificando start con current dove necessario

// Esercizio 2: Messaggio Ritardato con destructuring e setTimeout
// Crea una funzione delayedMessage che accetta un oggetto con proprietà message e delay .
// Usa il destructuring per ottenere le proprietà e stampa il messaggio dopo 'delay' millisecondi.
// Testa la funzione passando un oggetto creato da te che non contiene nessuna delle due chiavi richieste.
// Che problema nasce? Come possiamo fixare questo problema? trova le soluzioni migliori per evitare errori in fase di esecuzione.
const messaggio = {
  message: "Questo è un messaggio",
  delay: 2000,
};

const messaggio2 = {
  dicitura: "Questa è una dicitura",
  ritardo: 3000,
};

function delayedMessage({
  message = "Questo è un messaggio di default",
  delay = 1000,
}) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}
//delayedMessage(messaggio);
// Esercizio 3: Somma con rest parameter e spread operator
// Scrivi una funzione sumAll che accetta un numero indefinito di parametri numerici.
// Usa reduce per sommarli e ritorna il totale.
// Poi crea un array di numeri e usalo con lo spread operator per invocare la funzione.
// Passa anche un array misto con numeri e stringhe, e gestisci eventuali errori di tipo.
function sumAll(...numbers) {
  if (numbers.some((number) => typeof number !== "number")) {
    throw new Error("Parametri non validi");
  }
  const totale = numbers.reduce((acc, cur) => acc + cur, 0);
  return totale;
}

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const misto = [1, 2, 3, 4, "ciao", 8, "b"];

try {
  sumAll(...misto);
} catch (error) {
  console.error(error.message);
}

console.log(sumAll(1, 2, 30, 4, 54, 6));
console.log(sumAll(...numeri));

// Esercizio 4: Unione di Liste Utenti con spread e destructuring
// Hai i seguenti array di utenti, ciascuno con oggetti { name, email }.
// Uniscili in un unico array con lo spread operator e stampa ogni utente con una template string,
// usando il destructuring direttamente nei parametri della funzione di map.
// Assicurati di gestire eventuali utenti con email duplicata facendo restare solo il primo utente con quella email e restituendo gli altri con un messaggio di avviso.
let users1 = [
  { name: "Alice", email: "alice@gmail.it" },
  { name: "Bob", email: "bob@gmail.it" },
  { name: "Marco", email: "123@gmail.it" },
  { name: "Francesca", email: "fra_98@gmail.it" },
  { name: "Piero", email: "pier98@gmail.it" },
];
let users2 = [
  { name: "Vera", email: "vera@gmail.it" },
  { name: "Bobby", email: "bob@gmail.it" },
  { name: "Floriana", email: "123@gmail.it" },
];

const users3 = [...users1, ...users2];
const usersTotale = users3.map(({ name, email }) => `${name} , ${email}`);
const arrayDefinitivo = [];
users3.forEach((x) => {
  const userExist = arrayDefinitivo.some((y) => y.email === x.email);
  if (!userExist) {
    arrayDefinitivo.push(x);
  }
});
console.log(arrayDefinitivo);
// Esercizio 5: Profilo Utente Unificato
// Hai due oggetti: userInfo e userPrefs. Uniscili in un nuovo oggetto con lo spread operator.
// Usa il destructuring per estrarre le proprietà name, email e theme, e stampale in una frase con template string.
const userInfo = {
  name: "Federico",
  email: "federicocirella1997@gmail.com",
};

const userPrefs = {
  theme: "Dark-mode",
};

const user = { ...userInfo, ...userPrefs };
const { name, email, theme } = user;
console.log(
  `L'user ${name}, con email: ${email}, preferisce la modalità ${theme}`
);

// Esercizio 6: Stampa di Lettere Ritardata
// Scrivi una funzione countLetters che accetta una stringa.
// Per ogni lettera della stringa, usa setTimeout (con moltiplicatore dell'indice) per stamparla con il suo indice,
// usando Object.entries() e destructuring per accedere a [indice, lettera].
const parola = "ciao";
function countLetters(parola) {
  const lettere = parola.split("");
  Object.entries(lettere).forEach(([indice, lettera]) => {
    const ritardo = Number(indice) * 1000;
    setTimeout(() => console.log(lettera), ritardo);
  });
}
countLetters("ciao");
// Esercizio 7: Timer con Etichetta e Countdown
// Crea una funzione startTimer che accetta un oggetto con proprietà seconds e label .
// Ogni secondo stampa "label: X secondi rimasti".
// Usa destructuring, setInterval e interrompi il timer quando seconds arriva a 0.
// gestisci il caso in cui l'oggetto non contiene le chiavi richieste, evitando errori di esecuzione.
const timer = {
  seconds: 30,
  label: "Timer di 30 secondi",
};
function startTimer({ seconds, label }) {
  if (typeof seconds !== "number" || typeof label !== "string") {
    throw new Error("Metti il giusto parametro");
  }
  const id = setInterval(() => {
    if (seconds === 0) {
      clearInterval(id);
    }
    console.log(`${label}: ${seconds} secondi rimasti`);
    seconds--;
  }, 1000);
}
try {
  startTimer(timer);
} catch (error) {
  console.error(error.message);
}

// Esercizio 8: Totale Prodotto da Oggetti Unificati
// Hai due oggetti: uno con { id, name } e uno con { price, quantity }.
// Uniscili con lo spread operator e usa il destructuring per calcolare e stampare il totale (price * quantity).
// assegna un prezzo di default di 10 e una quantità di default di 1 se non presenti nell'oggetto.
const productInfo = { id: 1, name: "Penna" };
const productStock = { price: 1.5, quantity: 100 };

const productStats = {
  ...productInfo,
  ...productStock,
};
const { price = 10, quantity = 1 } = productStats;
const totale = price * quantity;

console.log(totale);
// Esercizio 9: Statistiche da Array con destructuring e rest
// Scrivi una funzione quickStats che accetta un oggetto { scores }.
// Estrai il primo punteggio e il resto usando destructuring e rest parameter.
// Calcola la somma totale e stampa tutto con una template string.
const datiGiocatore = {
  scores: [90, 85, 78, 92, 88],
};

function quickStats({ scores }) {
  const [primo, ...rest] = scores;
  const totale = scores.reduce((acc, cur) => acc + cur, 0);
  console.log(`Questo è il primo punteggio: ${primo}`);
  console.log(`Questo è il resto dei punteggi: ${rest}`);
  console.log(`Questo è il totale: ${totale}`);
}
quickStats(datiGiocatore);
// Esercizio 10: Estrai Numeri Validi da un Array Misto
// Scrivi una funzione filterNumbers che accetta un array contenente elementi misti (numeri, stringhe, boolean, null, ecc).
// Usa filter per selezionare solo i numeri validi (typeof === 'number').
// Se l'array passato non è un array, ritorna un errore bloccante.
// Alla fine, stampa quanti numeri sono stati trovati e mostra i primi due con il destructuring.
// Infine invoca la funzione gestendo eventuali errori con try...catch e stampa un messaggio chiaro.
