// Il DOM
// Il DOM è una rappresentazione "ad albero" del contenuto di una pagina web: ogni elemento HTML, attributo e contenuto del documento è rappresentato come un nodo nell'albero del DOM.

// In pratica, è ciò che ci consente di manipolare e rendere dinamica una pagina web attraverso Javascript

// Struttura: ogni elemento HTML diventa un "nodo" che può essere modificato, aggiunto, o rimosso da un file Javascript opportunamente agganciato.

// Come agganciare un file js ad uno HTML? poche semplici regole:

// Utilizzare il tag <script>

// <script src="script.js"></script>

// Può essere posizionato sia nella sezione <head> che nella sezione <body>, ma con alcune differenze importanti:

// Quando questo viene posizionato nell'head, esso viene caricato ed eseguito prima del render della pagina
// Quando viene posizionato nel body, viene caricato ed eseguito esattamente quando viene letto dal browser, ovvero sia, ricordo, in maniera consequenziale riga per riga.

// Perchè è importante?
// **Se si tenta di agganciare tramite quello script, per manipolarlo, modificarlo, rimuoverlo, un elemento che ancora non è stato renderizzato nella pagina, perchè magari scritto più in basso, questo potrebbe genererare un errore.
// Per questo motivo, è buona prassi inserire tutti gli script che interagiscono con elementi della pagina come ultimo tag nel body.

// Navigare il DOM

// Per navigare e interagire con il DOM, JavaScript offre diversi **metodi**.

// document.getElementById()

// Seleziona un elemento tramite il suo id.
const titolo = document.getElementById("titolo");
console.log(titolo);

// document.getElementsByClassName()

// Seleziona tutti gli elementi con una classe specifica.
const paragrafi = document.getElementsByClassName("paragrafo");
console.log(paragrafi);
console.log(paragrafi.length);
console.log(paragrafi[0]);
//**ATTENZIONE: restituisce un array di elementi**

// document.getElementsByTagName()

// Seleziona tutti gli elementi di un determinato tipo (come tutti i <p> o <div>).
const divs = document.getElementsByTagName("div");
console.log(divs);
//**ATTENZIONE: restituisce un array di elementi**

// document.querySelector()

// Seleziona il **primo elemento** che corrisponde a un selettore CSS.
const primoParagrafo = document.querySelector("div > p");
console.log(primoParagrafo);

// document.querySelectorAll()

// Seleziona tutti gli elementi che corrispondono a un selettore CSS.
const tuttiParagrafi = document.querySelectorAll(".paragrafo");
console.log(tuttiParagrafi);
//**ATTENZIONE: restituisce un array di elementi**

// Come manipolare, aggiungere, rimuovere elementi nel DOM

// Aggiungere e modificare un nuovo elemento:

const nuovoDiv = document.createElement("div"); //tramite il metodo createElement, creo il nuovo elemento passato come parametro
nuovoDiv.textContent = "Sono un nuovo div!"; // tramite la proprietà textContent (in alternativa innerHTML se volessi aggiungere altri tag ad esempio) aggiungo (o modifico)del contenuto testuale
document.body.appendChild(nuovoDiv); // Infine con appendChild aggiungo il nuovo div passato come parametro al div di riferimento, in questo caso al body(alla fine)

// Rimuovere un elemento:

const titoloDaRimuovere = document.getElementById("titolo");
document.body.removeChild(titoloDaRimuovere); // Tramite removeChild rimuovo l'elemento precedentemente agganciato tramide ID

// Sostituire un elemento:
const vecchioParagrafo = document.getElementById("vecchio");
console.log(vecchioParagrafo);
const nuovoParagrafo = document.createElement("p");
nuovoParagrafo.textContent = "Questo è il nuovo paragrafo!";
document.body.replaceChild(nuovoParagrafo, vecchioParagrafo); //replaceChild accetta due parametri: il primo il nuovo elemento, il secondo quello da sostituire

// NodeList, HTMLCollection e Array
// Alcuni metodi restituiscono come abbiamo visto una collezione di elementi: è il caso di querySelectorAll o getElementsByClassName: essi restituiscono rispettivamente due strutture dati simili, NodeList e HTMLCollection.Sebbene possano sembrare simili tra di loro ed alla struttura di un Array, hanno caratteristiche e comportamenti diversi:

// NodeList e HTMLCollection hanno entrambi la  proprietà length e possiamo iterare su di essi con i cicli (for).
// Tuttavia essi non hanno metodi come map, filter, forEach. Dobbiamo quindi tradurli in Array Jaqvascript per poterli usare in tal senso.

// Nonostante non siano un vero e proprio array, possono essere trattati come tale nella maggior parte dei casi.

// **IMPORTANTE**
// Una NodeList non è un elemento dinamico:
// Se un elemento nel DOM cambia, ad esempio un elemento viene rimosso, la NodeList non si aggiornerà automaticamente.
// Di contro, una HTMLCollection si.

// Gli Eventi del DOM
// Un evento è qualcosa che accade nel browser(click, submit, keydown, mouseover ecc..) e che può essere rilevato e gestito tramite JavaScript.

// Per gestire un evento nel DOM possiamo usare il metodo addEventListener() che consente di ascoltare un evento su un elemento e eseguire una funzione quando quell'evento si verifica.
// **ATTENZIONE** : controllare sempre che l'elemento agganciato sia SINGOLO e non una collection!

const button = document.getElementById("primary"); // Agganciare un elmento a cui legare un event tramite id è una buona prassi
button.addEventListener("click", function () {
  /* azione */
});

// Possiamo anche definire una funzione separata e usarla come handler:

function clickMe() {
  alert("Mi hai cliccato!");
}

button.addEventListener("click", clickMe);

// Posssiamo anche agganciare eventi multipli

button.addEventListener("click", function () {
  alert("Click 1");
});

button.addEventListener("click", function () {
  alert("Click 2");
});

// Entrambi gli alert verranno eseguiti, senza che i gestori di eventi si sovrascrivano

// Possiamo infine rimuovere un event tramite removeEventListener()

button.removeEventListener("click", clickMe);

// Prevenire comportamenti di default

// Il metodo preventDefault() è utilizzato per annullare il comportamento predefinito di un evento

// Ad esempio quando invii un form (tag <form></form>) il comportamento predefinito è che la pagina venga ricaricata. Se non vuoi che questo accada, puoi usare event.preventDefault() per evitare che venga eseguita questa azione

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  // per utilizzarlo passiamo alla funzione il parametro event
  event.preventDefault(); // Questo impedirà che la pagina venga ricaricata
  const username = document.getElementById("user").value;

  if (username === "Mario") {
    event.preventDefault(); // mi inibisce l'invio del form
  }

  // azione...
});

// **SUGGERIMENTO:** è buona prassi quando si ha a che fare con i moduli prevenire sempre il comportamento prefinito
