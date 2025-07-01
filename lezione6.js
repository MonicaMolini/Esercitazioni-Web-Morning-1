//Gli oggetti

let ogg = {
  nome: "Cosimo",
  eta: 31,
};

let persona = {
  nome: "Monica",
  eta: 31,
  oggetto: {
    nome: "Pippo",
  },
  lavoro: "Web Developer",
  saluta: function () {
    //una funzione attribuita come valore ad una proprietà diventa un metodo
    let saluto = "Ciao, mi chiamo " + this.oggetto.nome; //il this si riferisce all'interno dell'oggetto in cui si trova il metodo
    return saluto;
  },
};

console.log(persona.pizza); //undefined

let cibi = {
  prodotto1: {
    nome: "Pizza",
    prezzo: 50,
    sconto: 10,
  },
  prodotto2: {
    nome: "hamburger",
  },
};

console.log(persona.nome); // accedere al valore di una chiave in un oggetto
console.log(persona.saluta()); // invocare un metodo di un oggetto

//L'operatore IN
if ("prezzo" in cibi.prodotto2) {
  //particolarmente utile se utilizzato in strumenti di controllo come IF-ELSE
  console.log(cibi.prodotto2.prezzo);
} else {
  console.log("errore la proprità non esiste");
}

console.log("prezzo" in cibi.prodotto2);

//Restituisce true o false a seconda che una proprietà esista all'interno di un oggetto o meno

//Il ciclo FOR...IN mi permette di iterare le proprietà all'interno dell'oggetto
for (let b in persona) {
  console.log(`${b}: ${persona[b]}`); //oggetto[chiave] mi permette di intercettare tutti i valori delle proprietà del mio oggetto
}

//Riferimento variabili VS oggetti

let c = 10;
let c2 = c; //assegnare ad una variabile il valore di un'altra variabile...

c2 = 30; //... e poi andarlo a modificare

console.log(c); //10
console.log(c2); //30
//non modificherà anche il valore della variabile originale

let persona1 = {
  nome: "Monica",
};
let persona2 = persona1; //diversamente, fare la medesima cosa con due oggetti crea un riferimento diretto per cui...

persona2.nome = "Pippo"; // se modifico il valore della proprietà di uno dei due oggetti...

console.log(persona1.nome); //Pippo
console.log(persona2.nome); //Pippo
//li modificherò entrambi

//Come possiamo quindi duplicare un oggetto o creare un prototipo di essi?

//Il metodo costruttore: due modi per definire i prototipi

// Definizione del Prototipo

//Metodo nuovo: e Classi
class Persona {
  constructor(nome, eta) {
    this.nome = nome; // Proprietà 'nome'
    this.eta = eta; // Proprietà 'eta'
  }
  saluta() {
    console.log(`Ciao, mi chiamo ${this.nome} e ho ${this.eta} anni.`);
  } // I metodi possono essere definiti direttamente all'interno della classe senza utilizzare function
}

//Metodo "vecchio": la funzione costruttore
function PersonaVecchio(nome, eta) {
  //**IN QUESTO CASO VA SCRITTO CON L'INIZIALE MAIUSCOLA**
  this.nome = nome; // Proprietà 'nome'
  this.eta = eta; // Proprietà 'eta'
  this.saluta = function () {
    //Metodo 'saluta'
    console.log(`Ciao, mi chiamo ${this.nome} e ho ${this.eta} anni.`);
  };
}

// Creazione di istanze dell'oggetto
let person1 = new Persona("Cosimo", 31); //**L'ordine in cui gli passo i valori segue quello del prototipo!**
let person2 = new PersonaVecchio("Maria", 25);

// Utilizzo dei metodi
person1.saluta(); //Ciao, mi chiamo Cosimo e ho 31 anni.
person2.saluta(); //Ciao, mi chiamo Maria e ho 25 anni.

//Altri metodi utili degli oggetti(Object) Javascript

const obj = {
  nome: "Cosimo",
  eta: 31,
  professione: "Sviluppatore",
};

//Object.keys()

console.log(Object.keys(obj)); //restituisce un **ARRAY** con tutte le chiavi dell'oggetto passato: ['nome', 'eta', 'professione']

//Object.values();

console.log(Object.values(obj)); //restituisce un **ARRAY** con tutti i valori dell'oggetto passato: ['Cosimo', 31, 'Sviluppatore']

//Object.entries()
console.log(Object.entries(obj)); //restituisce un **ARRAY**  di coppie chiave-valore di un oggetto: [  ['nome', 'Cosimo'],  ['eta', 31],  ['professione', 'Sviluppatore']  ]
