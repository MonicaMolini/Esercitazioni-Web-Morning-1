//Gli Array

//Sono esenzialmente una collezione di valori che possono essere dati di vari tipi: numeri, stringhe, oggetti e persino altri array

//Creare un Array

const numeri = [15, 63, 34, 43, 5];

const nomi = ["Mario", "Giulia", "Luca"];

//oppure con il metodo costruttore

const numeriCostruttore = new Array(1, 2, 3, 4, 5);

//Caratteristiche

//Indicizzazione: Gli elementi all'interno di un array hanno assegnato un indice che stabilisce la loro posizione all'interno della collezione
//**ATTENZIONE:** L'indicizzazione parte da ZERO, ciò significa che il primo elemento ha un indice di 0, il secondo un indice di 1 e così via

//Per accedere ad un valore dell'array absterà richiamare l'array stesso e passargli, tra le parentesi quadre il suo indice: Array[indx]
console.log(numeri[2]); // INDICIZZAZIONE ZERO: stamperà 34

//Tipi misti: gli array possono contenere elementi di tipi diversi. Ad esempio, puoi avere un array che contiene numeri e stringhe:

const mixed = [1, "due", 3, "quattro"];

//Dinamismo: gli array possono crescere e ridursi dinamicamente, è possibile modificare, aggiungere o rimuovere elementi in qualsiasi momento

mixed[0] = "uno"; //cambierò il valore dell'elemento posto all'indice 0

//.length
//ci restituisce sotto forma di numero quanti elementi contiene un array
console.log(`Il mio array contiene ${mixed.length} elementi`);
let str = "ciao";
let arr = ["c", "i", "a", "o"];
console.log(str.length); // 4

//I metodi base per manipolare un Array

//.join()
console.log(mixed.join("-")); //stamperà tutti gli elementi del mio array separati dal trattino 1due3quattro

//.push()
//aggiunge elementi alla fine
mixed.push(5); // mixed diventerà ["uno", "due", 3, "quattro", 5];

console.log(mixed);

//.pop()
//rimuove l'ultimo elemento
mixed.pop(); // mixed diventerà [1, "due", 3, "quattro"];

console.log(mixed);

//.shift()
//rimuove il primo elemento
mixed.shift(); //  mixed diventerà ["due", 3, "quattro"];

console.log(mixed);

//.unshift()
//aggiunge al primo posto un elemento

mixed.unshift("Pippo");
console.log(mixed);

//I metodi degli Array per ordinare e ricercare

//.sort()
// Ordina gli elementi di un array in base a una funzione di confronto.

console.log(numeri.sort((a, b) => a - b)); //ordina gli elementi in ordine crescente
console.log(nomi.sort((a, b) => a.length - b.length)); //nel caso di array di stringhe, in combinazione con length, in ordine di lunghezza

//.find() & .includes()
//Restituisce il primo elemento che soddisfa la condizione specificata dalla funzione di callback
console.log(numeri.find((num) => num > 20)); //restituisce il primo numero che soddisfa la condizione num > 20 (ovviamente si riferisce all'array ordinato alla riga 69)
console.log(numeri.includes(34)); //true
console.log(nomi.find((str) => str.includes("L"))); //il metodo find in combinazione con .includes() mi permette di farmi restituire il primo elemento che contiene il valore passato al metodo includes
//**ATTENZIONE** il metodo includes restituisce sempre un valore o true o false e mi permette di verificare se esiste un dato elemento all'interno di un array es:
console.log(nomi.includes("Luca"));
console.log(nomi.includes("Pippo"));

//.indexOf()
//Restituisce il primo indice dell'elemento specificato nell'array, o -1 se non trovato.

console.log(numeri.indexOf(4)); //restituisce la posizione 3 di un array

//.findIndex()
//Serve per trovare l'indice del primo elemento di un array che soddisfa una condizione specifica

console.log(numeri.findIndex((n) => n % 2 === 0)); //trova l'INDICE del primo numero pari dell'array passato

//Metodi per iterare e filtrare

//.filter()
//Il metodo filter **crea un NUOVO array** con tutti gli elementi che soddisfano una condizione specificata nella funzione di callback

const newNumeri = numeri.filter((num) => num % 2 !== 0); //crea un nuovo array con i numeri dispari presi dall'array originale
console.log(newNumeri);

//.map()
//Il metodo map crea **un nuovo array** con i risultati della chiamata a una funzione fornita su ogni elemento dell'array originale

const newNumeriMap = numeri.map((num) => num * 3); //moltiplica tutti i numeri all'interno di un array e restituisce uno nuovo
console.log(newNumeriMap);

//.forEach()
//.forEach() esegue una funzione su ogni elemento dell'array. A differenza di map, forEach non restituisce un nuovo array, ma esegue una funzione su ogni elemento.

nomi.forEach((nome, index) => console.log(`${nome}${index + 1}`)); //esegue un ciclo sull'array ed esegue la funzione data tante volte quanti sono gli elementi. Può accettare parametri come l'elemento dell'array e il suo indice o nessuno:
nomi.forEach((x, y) => console.log(x));

//.reduce()
//Il metodo .reduce() esegue una funzione su ogni elemento dell'array, accumulando un valore finale del quale restituisce il valore. È utile per operazioni di aggregazione, come sommare numeri o concatenare stringhe.

//Sintassi:
// Array.reduce((accumulatore, valoreCorrente)=> accumulatore + valoreCorrente, valoreIniziale)

const somma = numeri.reduce((acc, cur) => acc + cur, 0);
//1 acc=0 + cur=1
//2 acc=1 + cur=2
//3 acc=3 + cur=3
// ecc....
console.log(somma); // 15

//accumulatore: il valore accumulato finora ovvero il risultato della precedente chiamata alla funzione di callback
//valoreCorrente:l'elemento corrente dell'array su cui viene eseguita di volta in volta la funzione
//valoreIniziale: è opzionale, rappresenta il valore da utilizzare come primo argomento per la prima chiamata della funzione di callback

const concat = nomi.reduce(
  (acc, cur, n) => acc + "-" + cur + (93 + n + 1), //n è l'indice dell'elelemento su cui stiamo iterando
  "Paolo93"
);
const concat2 = nomi.reduce((acc, cur) => acc + cur);
console.log(concat2); //LucaGiuliaMario
console.log(concat); //Paolo93-Luca94-Mario95-Giulia96

//**Il metodo reduce è uno dei più potenti e versatili in JavaScript**
//Utilizzo avanzato: ad esempio può essere utilizzato per conteggiare quante volte viene ripetuto un elemento all'interno dell'array

const frutti = ["mela", "banana", "mela", "arancia", "banana"];
const conteggioOccorrenze = frutti.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {}); // All'inizio, acc è un oggetto vuoto {}, ad ogni interazione viene aggiunto una chiave che corrisponde al frutto presente nell'array, e come valore quante volte viene ripetuto(partendo da zero e incrementando ad ogni interazione il valore di 1).
console.log(conteggioOccorrenze);

//Ancora associato ad array di oggetti:

const prodotti = [
  { nome: "T-shirt", prezzo: 15 },
  { nome: "Jeans", prezzo: 40 },
  { nome: "Cappello", prezzo: 10 },
];
const totale = prodotti.reduce((acc, cur) => acc + cur.prezzo, 0); //reduce ritorna sempre il valore di acc

console.log(`Totale prodotti: ${totale}€`);
