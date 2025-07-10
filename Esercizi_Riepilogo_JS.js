// ESERCIZI DI RIEPILOGO JAVASCRIPT - LIVELLO INTERMEDIO
// Questi esercizi sono pensati per mettere alla prova le vostre conoscenze di JavaScript basic. Cercate di risolverli senza cercare le soluzioni (o chiedere all'AI!), ma se avete bisogno di aiuto, sentitevi liberi piuttoso di consultare la documentazione (MDN) o chiedermi chiarimenti su discord.

//BUON LAVORO!💪

////////////////////
// ESERCIZIO 1
// Crea una funzione 'creaProfilo()' che riceve nome e anno di nascita come parametri. Effettua un controllo che nome sia di tipo strings e anno sia di tipo number, ritorna un console error nel caso non sia così. Poi calcola l’età attuale usando new Date() e restituisci una stringa che dica "Ciao <nome>, hai <età> anni e <sei maggiorenne/non sei maggiorenne>." a seconda dell'età calcolata.
//Infine invoca la funzione e stampa il risultato in console.
// Suggerimento: per estrapolare l'anno corrente dalla data, usa new Date().getFullYear().
////////////////////

////////////////////
// ESERCIZIO 2
// Crea una funzione 'dadi()' che simula il lancio di due dadi a 6 facce. Se entrambi i numeri sono uguali, restituisci "Doppio!". Se la somma è maggiore di 8, restituisci "Hai vinto!". Altrimenti "Riprova".
// Poi invoca la funzione e stampa il risultato in console.
////////////////////

////////////////////
// ESERCIZIO 3
// Crea una funzione che accetta un array di 5 numeri e restituisce un nuovo array (senza usare metodi array!) con solo i numeri pari moltiplicati per 2.
// function filtraPariMoltiplicati(arr) {
//   var nuovoArray = [];
//   var indice = 0;

//   for (var i = 0; i < 5; i++) {
//     if (arr[i] % 2 === 0) {
//       nuovoArray[indice] = arr[i] * 2;
//       indice++;
//     }
//   }

//   return nuovoArray;
// }
////////////////////

////////////////////
// ESERCIZIO 4
// Crea una classe `Persona` che abbia `nome`, `cognome`, 'eta', `email` e `telefono`. Aggiungi un metodo `.presentati()` che stampa "Mi chiamo <nome> <cognome> e ho <eta> anni". Poi , istanzia due oggetti `Persona` e chiama per ognuno di essi il metodo.

class Persona {
  constructor(nome, cognome, eta, email, telefono) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.email = email;
    this.telefono = telefono;
  }
  presentati() {
    return `Mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta} anni`;
  }
}
let persona1 = new Persona(
  "sasi",
  "cirella",
  "23",
  "salvatore@gmail.com",
  "333333333"
);
let persona2 = new Persona(
  "fede",
  "cirella",
  "220",
  "fedeeee@gmail.com",
  "2222222"
);

console.log(persona1.presentati());
console.log(persona2.presentati());
////////////////////

////////////////////
// ESERCIZIO 5
// Dato un giorno della settimana in forma stringa, scrivi una funzione 'verificaGiorno()' che usa uno switch per stampare 'Oggi si lavora' se è giorno lavorativo (lun-ven) o 'Finalmente il weekend' se weekend (sab-dom).
// Tip: utilizza in modo intelligente il break per scrivere meno codice possibile e non scordare di gestire i casi in cui il giorno non sia valido.
////////////////////
let giorno = "mercoledi";
function verificaGiorno() {
  switch (giorno) {
    case "lunedi":
    case "martedi":
    case "mercoledi":
    case "giovedi":
    case "venerdi":
      return "oggi si lavora";
      break;
    case "sabato":
    case "domenica":
      return "finalmente il weekend";
      break;
    default:
      return "giorno non valido";
  }
}
console.log(verificaGiorno());
////////////////////
// ESERCIZIO 6
// Crea una funzione 'checkUser()' che riceve un oggetto `utente` con proprietà `username`, `attivo` (boolean), e `tentativi`. Usa if-else per restituire dei messaggi diversi in base allo stato. Esempio: "utente disattivato", "numero tentativi superato" oppure "benvenuto <nome>".
////////////////////

let utente = {
  username: "Pippo",
  attivo: true,
  tentativi: 5,
};
function checkUser(utente) {
  let { username, attivo, tentativi } = utente;
  if (!username) {
    return "username non inserito";
  } else if (!attivo) {
    return "utente non attivo";
  } else if (tentativi > 5) {
    return "numero di tentativi superato";
  } else {
    return `benvenuto ${username}`;
  }
}
console.log(checkUser(utente));

////////////////////
// ESERCIZIO 7
// Scrivi una funzione 'asterischi()' che accetti come parametro un numero e che tramite un ciclo `for` costuisca una stringa composta un totale di asterischi uguale al numero passato come parametr. Invoca la funzione stampando il risulato in console. **Attenzione: non usare il console.log() all'interno della funzione! la funzione deve ritornare la stringa**
////////////////////
function asterischi(numero) {
  let risultato = "";
  for (i = 0; i < numero; i++) {
    risultato += "*";
  }
  return risultato;
}
console.log(asterischi(30));

////////////////////
// ESERCIZIO 8
// Crea una funzione 'contaFizz' che usa un ciclo `while` per contare da 5 a 15. Ogni volta che il numero è multiplo di 3, stampa "Fizz". Suggerimento: per calcolare se un numero è multiplo di 3, usa l'operatore modulo `%`, n % 3 === 0.
////////////////////
function contaFizz() {
  let n = 5;
  while (n <= 15) {
    if (n % 3 === 0) {
      console.log(n);
      console.log("Fizz");
    }
    n++;
  }
}
contaFizz();
////////////////////
// ESERCIZIO 9
// Scrivi una funzione 'saluto()' che accetta nome e genere ("M" o "F") come parametro e restituisce una frase di saluto appropriato per il gener. **Usa per fare ciò l'operatore ternario**.
// Invoca la funzione con un nome e un genere a tua scelta.
// Output richiesto: "Gentile Signora Maria, benvenuta nel nostro sistema." oppure "Caro Signore Marco, benvenuto nel nostro sistema."
////////////////////
function saluto(nome, genere) {
  return genere === "M"
    ? `Gentile Signor ${nome}, benvenuto nel nostro sistema.`
    : `caro signor ${nome},benvenuta nel nostro sistema.`;
}
console.log(saluto("Valeria", "F"));
console.log(saluto("Marco", "M"));
////////////////////
// ESERCIZIO 10
// Dato il seguente array di oggetti `prodotti`, ognuno con proprietà `nome` e `prezzo`, scrivi una funzione 'calcolaTotale()' che calcola la somma totale dei prezzi usando un ciclo (no metodi degli array!).
// Output richiesto: "Totale: 135€"
////////////////////

const prodotti = [
  { nome: "T-shirt", prezzo: 15 },
  { nome: "Jeans", prezzo: 40 },
  { nome: "Cappello", prezzo: 10 },
  { nome: "Scarpe", prezzo: 60 },
];

// ESERCIZIO 11
// Istanzia 4 oggetti `Persona` dell'esercizio 4.
// Inseriscili in un array 'persone'
// Crea una funzione 'checkPerson' che accetta un oggetto persona come parametro. La funzione deve effettuare diversi controlli:
// - Se l'email non contiene "@" o ".", stampa "Email non valida".
// - Se l'età è inferiore a 18, stampa "Utente minorenne".
// - Se il telefono non inizia con "+", stampa "Numero di telefono non valido".
// - Altrimenti, stampa "Utente registrato: Nome Cognome".

// Invoca la funzione passandogli uno degli oggetti all'interno dell'array 'persone' selezionato in modo randomico (math.random) **Attenzione alla propritetà length dell'array! ricordate che l'indice parte da 0!**.
