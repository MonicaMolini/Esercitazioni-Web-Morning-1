// Esercizio 1: Countdown Personalizzato con destructuring e setInterval
// Scrivi una funzione startCountdown che accetta un oggetto con le proprietà  start e end .
// Usa il destructuring per accedere ai valori e avvia un setInterval che stampa un numero ogni secondo,
// da start a end. Al termine, stampa "Fine conto alla rovescia" e ferma l'intervallo.
// Testa la funzione con un oggetto creato da te.

// function startCountdown({start, end}){
//   let inizio = start
//   let contatore = setInterval(() =>{
//     console.log(inizio)
//     if(end > inizio){
//       clearInterval(contatore)
//     }
//    if(inizio === end){
//     clearInterval(contatore)
//     console.log("Fine conto alla rovescia")
//    }
//    inizio--
//   }
//     ,1000)
// }
// startCountdown({start: 10, end:0})

// function startCountdown({start, end}){
//   let inizio = start
//   let fine = end
//   let conta = setInterval(() =>{
//     console.log(inizio)
//     if(inizio < fine){
//       inizio++
//     }if(inizio === fine){
//       console.log("fine conto alla rovescia")
//       clearInterval(conta)
//     }
    
//   },1000)
// }
// startCountdown({start: 1,end: 5})


// Esercizio 2: Messaggio Ritardato con destructuring e setTimeout
// Crea una funzione delayedMessage che accetta un oggetto con proprietà message e delay .
// Usa il destructuring per ottenere le proprietà e stampa il messaggio dopo 'delay' millisecondi.
// Testa la funzione passando un oggetto creato da te che non contiene nessuna delle due chiavi richieste.
// Che problema nasce? Come possiamo fixare questo problema? trova le soluzioni migliori per evitare errori in fase di esecuzione.
let messaggio = {
  message: "prova messaggio", delay: 2000
}
let messaggio2 = {
  message2: "prova messaggio 2", delay: 3000
}
function delayedMessage({message = "questo è un messaggio", delay = 1000}){
  setTimeout(() =>{
    console.log(message)
  },delay)
}
delayedMessage(messaggio)
delayedMessage(messaggio2)

// function delayedMessage({message, delay}){
//   setTimeout(() => {
//    console.log (message)
//   }, delay)
// }
// delayedMessage({message: "prova esercizio 2 di Monica", delay: 2000 })

// Esercizio 3: Somma con rest parameter e spread operator
// Scrivi una funzione sumAll che accetta un numero indefinito di parametri numerici.
// Usa reduce per sommarli e ritorna il totale.
// Poi crea un array di numeri e usalo con lo spread operator per invocare la funzione.
// Passa anche un array misto con numeri e stringhe, e gestisci eventuali errori di tipo.

// let numeri = [10,20,30,40,50]
// function sumAll(...rest){
//   if(!rest.every(x => typeof x === "number")){
//  throw new Error("errore ")
//   }
//   let somma = rest.reduce((acc, cur) => acc + cur, 0)
//   return somma
// } 

// console.log(sumAll(...numeri))



let numeri = [10, 20, 30, 40, 50];
function sumAll(...rest) {
  if (!rest.every(x => typeof x === "number")) {
    throw new Error(" gli argomenti devono essere numeri");
  }
  return rest.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumAll(...numeri));
let numeroStringa = [5,"60",61,40];

try {
  console.log(sumAll(...numeroStringa));
} catch (e) {
  console.error(e.message);
}



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
// let user = [...users1, ...users2];
// let stampa = user.map(({name, email}) => `${name}, ${email}`)
// console.log(stampa)
// let arrayDefinitivo = []
// user.forEach((x) => {
//   let utenteEsistente = arrayDefinitivo.some((y) => y.email === x.email)
//   if(!utenteEsistente){
//     arrayDefinitivo.push(x)
//   }else{
//     console.log(`utente ${x.email} già esistente`)
//   }
// })
// console.log(arrayDefinitivo)

// Esercizio 5: Profilo Utente Unificato
// Hai due oggetti: userInfo e userPrefs. Uniscili in un nuovo oggetto con lo spread operator.
// Usa il destructuring per estrarre le proprietà name, email e theme, e stampale in una frase con template string.

// let userInfo = {name: `Antonio`, email: "123gmail.com"}
// let userPrefs = {theme: `dark mode`}

// let userFinale = {...userInfo, ...userPrefs}
// let {name, email, theme} = userFinale
// console.log(`utente: ${name}, email: ${email}, theme: ${theme}`)

// // Esercizio 6: Stampa di Lettere Ritardata
// // Scrivi una funzione countLetters che accetta una stringa.
// // Per ogni lettera della stringa, usa setTimeout (con moltiplicatore dell'indice) per stamparla con il suo indice,
// // usando Object.entries() e destructuring per accedere a [indice, lettera].

// let parola = "ciao"
// function contaLettere(x){
//   let lettere = parola.split("")
//   Object.entries(lettere).forEach(([indice, lettera]) => {
//     let ritardo = Number(indice) * 1000
//     setTimeout(() => console.log(lettera), ritardo)
//   })
// }

// contaLettere("ciao")


// Esercizio 7: Timer con Etichetta e Countdown
// Crea una funzione startTimer che accetta un oggetto con proprietà seconds e label .
// Ogni secondo stampa "label: X secondi rimasti".
// Usa destructuring, setInterval e interrompi il timer quando seconds arriva a 0.
// gestisci il caso in cui l'oggetto non contiene le chiavi richieste, evitando errori di esecuzione.

function startTimer({ seconds, label}){
  if(typeof seconds != "number"){
    console.log("inserire secondi")
    return
  }

  if(label.trim()  === ""){
    console.log("label non può essere vuota")
    return
  }
let tempo = setInterval(() => {
  console.log(`${label} ${seconds} secondi rimasti`)
  seconds --
  if(seconds < 0){
  clearInterval(tempo)
}
}, 1000)

}

startTimer({seconds: 5, label: ""})


// Esercizio 8: Totale Prodotto da Oggetti Unificati
// Hai due oggetti: uno con { id, name } e uno con { price, quantity }.
// Uniscili con lo spread operator e usa il destructuring per calcolare e stampare il totale (price * quantity).
// assegna un prezzo di default di 10 e una quantità di default di 1 se non presenti nell'oggetto.

let oggetto1 = {id: 10, name: "iphone"}
let oggetto2 = {price: 1000, quantity: 1}

let oggettiUniti = {...oggetto1, ...oggetto2}
let {price = 10, quantity = 1} = oggettiUniti
let totale = price * quantity
console.log(totale)
// Esercizio 9: Statistiche da Array con destructuring e rest
// Scrivi una funzione quickStats che accetta un oggetto { scores }.
// Estrai il primo punteggio e il resto usando destructuring e rest parameter.
// Calcola la somma totale e stampa tutto con una template string.


function quickStats({scores}){
  let [primo, ...resto] = scores
  let Punteggio1 = resto.reduce((a, b) => a + b, 0)
  let totale = primo + Punteggio1
  console.log(`il punteggio totale è: ${totale}`)
 
}
 quickStats({scores :[10,20,30,40]})

// Esercizio 10: Estrai Numeri Validi da un Array Misto
// Scrivi una funzione filterNumbers che accetta un array contenente elementi misti (numeri, stringhe, boolean, null, ecc).
// Usa filter per selezionare solo i numeri validi (typeof === 'number').
// Se l'array passato non è un array, ritorna un errore bloccante.
// Alla fine, stampa quanti numeri sono stati trovati e mostra i primi due con il destructuring.
// Infine invoca la funzione gestendo eventuali errori con try...catch e stampa un messaggio chiaro.


let misto = [1,2,3, "ciao", "simone", true, false, null]
function filterNumbers(misto){
  //   if(elementi != Array){
  //   throw new Error("l'array passato non è un array")
  // }
  let filtrato = misto.filter(elemento => typeof elemento === 'number')
  return filtrato
}

try{
   let numeriFiltrati = filterNumbers(misto)
   let [primo, secondo] = numeriFiltrati
   
   console.log(primo)
   console.log(secondo)
}catch(error){
  console.log("errore: " + error.message)
}

