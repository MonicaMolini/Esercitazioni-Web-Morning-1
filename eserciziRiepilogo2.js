// Esercizio 1: Countdown Personalizzato con destructuring e setInterval
// Scrivi una funzione startCountdown che accetta un oggetto con le proprietà  start e end .
// Usa il destructuring per accedere ai valori e avvia un setInterval che stampa un numero ogni secondo,
// da start a end. Al termine, stampa "Fine conto alla rovescia" e ferma l'intervallo.
// Testa la funzione con un oggetto creato da te.

// Esercizio 2: Messaggio Ritardato con destructuring e setTimeout
// Crea una funzione delayedMessage che accetta un oggetto con proprietà message e delay .
// Usa il destructuring per ottenere le proprietà e stampa il messaggio dopo 'delay' millisecondi.
// Testa la funzione passando un oggetto creato da te che non contiene nessuna delle due chiavi richieste.
// Che problema nasce? Come possiamo fixare questo problema? trova le soluzioni migliori per evitare errori in fase di esecuzione.

// Esercizio 3: Somma con rest parameter e spread operator
// Scrivi una funzione sumAll che accetta un numero indefinito di parametri numerici.
// Usa reduce per sommarli e ritorna il totale.
// Poi crea un array di numeri e usalo con lo spread operator per invocare la funzione.
// Passa anche un array misto con numeri e stringhe, e gestisci eventuali errori di tipo.

// Esercizio 4: Unione di Liste Utenti con spread e destructuring
// Hai i seguenti array di utenti, ciascuno con oggetti { name, email }.
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
// Uniscili in un unico array con lo spread operator e stampa ogni utente con una template string,
// usando il destructuring direttamente nei parametri della funzione di map.
// Assicurati di gestire eventuali utenti con email duplicata facendo restare solo il primo utente con quella email e restituendo gli altri con un messaggio di avviso.

// Esercizio 5: Profilo Utente Unificato
// Hai due oggetti: userInfo e userPrefs. Uniscili in un nuovo oggetto con lo spread operator.
// Usa il destructuring per estrarre le proprietà name, email e theme, e stampale in una frase con template string.

// Esercizio 6: Stampa di Lettere Ritardata
// Scrivi una funzione countLetters che accetta una stringa.
// Per ogni lettera della stringa, usa setTimeout (con moltiplicatore dell'indice) per stamparla con il suo indice,
// usando Object.entries() e destructuring per accedere a [indice, lettera].

// Esercizio 7: Timer con Etichetta e Countdown
// Crea una funzione startTimer che accetta un oggetto con proprietà seconds e label .
// Ogni secondo stampa "label: X secondi rimasti".
// Usa destructuring, setInterval e interrompi il timer quando seconds arriva a 0.
// gestisci il caso in cui l'oggetto non contiene le chiavi richieste, evitando errori di esecuzione.

// Esercizio 8: Totale Prodotto da Oggetti Unificati
// Hai due oggetti: uno con { id, name } e uno con { price, quantity }.
// Uniscili con lo spread operator e usa il destructuring per calcolare e stampare il totale (price * quantity).
// assegna un prezzo di default di 10 e una quantità di default di 1 se non presenti nell'oggetto.

// Esercizio 9: Statistiche da Array con destructuring e rest
// Scrivi una funzione quickStats che accetta un oggetto { scores }.
// Estrai il primo punteggio e il resto usando destructuring e rest parameter.
// Calcola la somma totale e stampa tutto con una template string.

// Esercizio 10: Estrai Numeri Validi da un Array Misto
// Scrivi una funzione filterNumbers che accetta un array contenente elementi misti (numeri, stringhe, boolean, null, ecc).
// Usa filter per selezionare solo i numeri validi (typeof === 'number').
// Se l'array passato non è un array, ritorna un errore bloccante.
// Alla fine, stampa quanti numeri sono stati trovati e mostra i primi due con il destructuring.
// Infine invoca la funzione gestendo eventuali errori con try...catch e stampa un messaggio chiaro.
