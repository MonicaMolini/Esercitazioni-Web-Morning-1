// ESERCIZI DI RIEPILOGO JAVASCRIPT - LIVELLO INTERMEDIO
// Questi esercizi sono pensati per mettere alla prova le vostre conoscenze di JavaScript basic. Cercate di risolverli senza cercare le soluzioni (o chiedere all'AI!), ma se avete bisogno di aiuto, sentitevi liberi piuttoso di consultare la documentazione (MDN) o chiedermi chiarimenti su discord.

//BUON LAVORO!💪

////////////////////
// ESERCIZIO 1
// Crea una funzione 'creaProfilo()' che riceve nome e anno di nascita come parametri. Effettua un controllo che nome sia di tipo strings e anno sia di tipo number, ritorna un console error nel caso non sia così. Poi calcola l’età attuale usando new Date() e restituisci una stringa che dica "Ciao <nome>, hai <età> anni e <sei maggiorenne/non sei maggiorenne>." a seconda dell'età calcolata.
//Infine invoca la funzione e stampa il risultato in console.
// Suggerimento: per estrapolare l'anno corrente dalla data, usa new Date().getFullYear().
// function creaprofilo(nome, annoDiNascita) {
//   if (typeof nome === "string" && typeof annoDiNascita === "number") {
//     console.log("nome e anno di nascita corretti");
//   } else {
//     console.log("nome e anno di nascita errati");
//   }
// }

// let nome = "Simone";
// let annoDiNascita = 2000;
// creaprofilo(nome, annoDiNascita);

// function calcolaEta(dataDiNascita) {
//   let oggi = new Date();
//   let anni = oggi.getFullYear() - dataDiNascita.getFullYear();
//   let mese = oggi.getMonth() - dataDiNascita.getMonth();
//   let giorno = oggi.getDay() - dataDiNascita.getDay();
//   if (mese < 0 || (mese === 0 && giorno < 0)) {
//     anni--;
//   }
//   return anni;
// }
// let eta = calcolaEta(new Date("2010-05-05"));
// console.log("Eta:", eta);
// if (eta > 18) {
//   console.log("sei maggiorenne");
// } else {
//   console.log("sei minorenne");
// }
// let MaggMin = eta >= 18 ? "Maggiorenne" : "Minorenne";

// nome = "marco";
// console.log("Ciao " + nome + " hai " + eta + " anni " + " e sei " + MaggMin);
////////////////////

////////////////////
// ESERCIZIO 2
// Crea una funzione 'dadi()' che simula il lancio di due dadi a 6 facce. Se entrambi i numeri sono uguali, restituisci "Doppio!". Se la somma è maggiore di 8, restituisci "Hai vinto!". Altrimenti "Riprova".
// Poi invoca la funzione e stampa il risultato in console.
// function dadi() {
//   let dado1 = Math.floor(Math.random() * 6)+ 1
//   let dado2 = Math.floor(Math.random() * 6)+ 1
//   let somma = dado1 + dado2;
//   console.log(dado1)
//   console.log(dado2)
//   if(dado1 == dado2 ){
//     return "Doppio!"
//   }else if(somma > 8){
//     return "Hai vinto!"
//   }else{
//     return "Riprova!"
//   }
// }

// let risultato = dadi()
// console.log(risultato)
////////////////////

////////////////////
// ESERCIZIO 3
// Crea una funzione che accetta un array di 5 numeri e restituisce un nuovo array (senza usare metodi array!) con solo i numeri pari moltiplicati per 2.
// let array = [1,2,3,4,5];
// function nuovoArray(x){

//   let arrayMoltiplicato = []
//   for(let i = 0; i<x.length; i++ ){
//     if(x[i] % 2 == 0){
//       arrayMoltiplicato[arrayMoltiplicato.length] = x[i] * 2
//     }
//   }

//   return arrayMoltiplicato
// }
// console.log(nuovoArray(array))
////////////////////

////////////////////
// ESERCIZIO 4
// Crea una classe `Persona` che abbia `nome`, `cognome`, 'eta', `email` e `telefono`. Aggiungi un metodo `.presentati()` che stampa "Mi chiamo <nome> <cognome> e ho <eta> anni". Poi , istanzia due oggetti `Persona` e chiama per ognuno di essi il metodo.
////////////////////
// class Persona{
//   constructor(nome, cognome, eta, email, telefono){
//     this.nome = nome;
//     this.cognome = cognome;
//     this.eta = eta;
//     this.email = email;
//     this.telefono = telefono
//   }
//   Presentati(){
//     return `mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta}`
//   }
// }
// let persona1 = new Persona(
//   "Simone",
//   "Catalani",
//   "25",
//   "hcucurur@gmail.com",
//   "2728172282"
// );
// console.log(persona1.Presentati())

////////////////////
// ESERCIZIO 5
// Dato un giorno della settimana in forma stringa, scrivi una funzione 'verificaGiorno()' che usa uno switch per stampare 'Oggi si lavora' se è giorno lavorativo (lun-ven) o 'Finalmente il weekend' se weekend (sab-dom).
// Tip: utilizza in modo intelligente il break per scrivere meno codice possibile e non scordare di gestire i casi in cui il giorno non sia valido.
////////////////////
// ESERCIZIO 5
// let giorno = "sabato";
// function verificaGiorno() {
//   switch (giorno) {
//     case "lunedi":
//       console.log("Oggi si lavora ");
//       break;
//     case "martedi":
//       console.log("Oggi si lavora");
//       break;
//     case "mercoledi":
//       console.log("Oggi si lavora");
//       break;
//     case "giovedi":
//       console.log("Oggi si lavora");
//       break;
//     case "venerdi":
//       console.log("Oggi si lavora");
//       break;
//     case "sabato":
//       console.log("Finalmente il weekend");
//       break;
//     case "domenica":
//       console.log("Finalmente il weekend");
//       break;
//       default:
//         console.log("Giorno non valido")
//   }
// }
// verificaGiorno();

// ESERCIZIO 5 COMPATTO
// let giorno = "domenica";
// function verificaGiorno() {
//   switch (giorno) {
//     case "lunedi":
//     case "martedi":
//     case "mercoledi":
//     case "giovedi":
//     case "venerdi":
//       console.log("Oggi si lavora");
//       break;
//     case "sabato":
//     case "domenica":
//       console.log("Finalmente il weekend");
//       break;
//       default:
//         console.log("Giorno non valido")
//   }
// }
// verificaGiorno();

////////////////////
// ESERCIZIO 6
// Crea una funzione 'checkUser()' che riceve un oggetto `utente` con proprietà `username`, `attivo` (boolean), e `tentativi`. Usa if-else per restituire dei messaggi diversi in base allo stato. Esempio: "utente disattivato", "numero tentativi superato" oppure "benvenuto <nome>".
////////////////////
// function checkUser(utente) {
//   if (utente.attivo == false) {
//     return "Utente non attivo";
//   } else if (utente.tentativi > 3) {
//     return "Numero tentativi superato";
//   } else {
//     return "accesso ok " + utente.username;
//   }
// }

// let utente1 = {
//   username: "marco",
//   attivo: true,
//   tentativi: 2,
// };
// console.log(checkUser(utente1))
////////////////////
// ESERCIZIO 7
// Scrivi una funzione 'asterischi()' che accetti come parametro un numero e che tramite un ciclo `for` costuisca una stringa composta un totale di asterischi uguale al numero passato come parametr. Invoca la funzione stampando il risulato in console. **Attenzione: non usare il console.log() all'interno della funzione! la funzione deve ritornare la stringa**
function asterischi(num) {
  let risultato = "";
  for (let i = 0; i < num; i++) {
    risultato += "*";
  }
  return risultato;
}
console.log(asterischi(3));
////////////////////

////////////////////
// ESERCIZIO 8
// Crea una funzione 'contaFizz' che usa un ciclo `while` per contare da 5 a 15. Ogni volta che il numero è multiplo di 3, stampa "Fizz". Suggerimento: per calcolare se un numero è multiplo di 3, usa l'operatore modulo `%`, n % 3 === 0.
////////////////////
function contaFizz() {
  let n = 5;
  while (n <= 15) {
    if (n % 3 === 0) {
      console.log(n);
      console.log("fizz");
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
function saluto(nome, genere) {
  return genere === "M"
    ? " caro signore " + nome + ", benvenuto nel nostro sistema"
    : genere === "F"
    ? "gentile signora" + nome + ", benvenuta nel nostro sistema"
    : "genere non valido?";
}
console.log(saluto("Simone", "M"));
////////////////////

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

let totale = 0;
function calcolaTotale() {
  for (const prodotto of prodotti) {
    totale += prodotto.prezzo;
  }
  return totale;
}
console.log(calcolaTotale());

// ESERCIZIO 10 CON FOR NORMALE
function calcolaTotale() {
  let totale = 0;
  for (let i = 0; i < prodotti.length; i++) {
    totale += prodotti[i].prezzo;
  }
  return totale;
}
console.log(calcolaTotale());
// ESERCIZIO 11
// Istanzia 4 oggetti `Persona` dell'esercizio 4.
// Inseriscili in un array 'persone'
// Crea una funzione 'checkPerson' che accetta un oggetto persona come parametro. La funzione deve effettuare diversi controlli:
// - Se l'email non contiene "@" o ".", stampa "Email non valida".
// - Se l'età è inferiore a 18, stampa "Utente minorenne".
// - Se il telefono non inizia con "+", stampa "Numero di telefono non valido".
// - Altrimenti, stampa "Utente registrato: Nome Cognome".

// Invoca la funzione passandogli uno degli oggetti all'interno dell'array 'persone' selezionato in modo randomico (math.random) **Attenzione alla propritetà length dell'array! ricordate che l'indice parte da 0!**.

class Persona {
  constructor(nome, cognome, eta, email, telefono) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.email = email;
    this.telefono = telefono;
  }

  presentati() {
    console.log(
      "Mi chiamo " +
        this.nome +
        " " +
        this.cognome +
        " e ho " +
        this.eta +
        " anni"
    );
  }
}

let persona1 = new Persona(
  "Mario",
  "Rossi",
  10,
  "mario@gmail.com",
  "+111111111"
);
let persona2 = new Persona(
  "Anna",
  "Rossi",
  20,
  "anna@egmail.com",
  "+222222222"
);
let persona3 = new Persona("Luca", "Rossi", 30, "luca@gmail.com", "+333333333");
let persona4 = new Persona("Sara", "Rossi", 40, "sara@gmail.com", "+444444444");

let persone = [persona1, persona2, persona3, persona4];

function checkPerson(persona) {
  let controlloEmail = false;

  for (let i = 0; i < persona.email.length; i++) {
    if (persona.email[i] === "@") {
      controlloEmail = true;
    }
  }

  if (!controlloEmail) {
    console.log("Email non valida");
  } else if (persona.eta < 18) {
    console.log("Utente minorenne");
  } else if (persona.telefono[0] !== "+") {
    console.log("Numero di telefono non valido");
  } else {
    console.log("Utente registrato: " + persona.nome + " " + persona.cognome);
  }
}

let indiceCasuale = Math.floor(Math.random() * persone.length);
let personaCasuale = persone[indiceCasuale];

checkPerson(personaCasuale);
