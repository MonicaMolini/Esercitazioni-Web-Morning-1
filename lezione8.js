//La destrutturizzazione(destructuring)

//Normalmente dovremmo fare così
const numbers = [1, 2, 3];
const firstNormal = numbers[0];
const secondNormal = numbers[1];
const thirdNormal = numbers[2];

//con la destrutturizzazione
//dichiarazione delle variabili [first, second, third] = numbers

const [first, second, third, four = 4] = numbers;
// const first = numbers[0]
console.log(first); // 1
console.log(second); // 2
console.log(four); // 4 Prende il valore di default
console.log(third); // 3
console.log(numbers);

//Vale anche per gli oggetti
const person = { nome: "Monica", age: 31 };
const { nome, age } = person;
// const nome = person.nome
console.log(nome); // Monica
console.log(age); // 31

const persons = [
  {
    nome: "Monica",
  },
  {
    nome: "Valentina",
  },
];

const [persona1, persona2] = persons;
const { nome6 } = persona1;

console.log(nome6); //Monica

//Possiamo rinominare le variabili
const person2 = { name: "Monica", age: 31 };
const { name: userName, age: userAge } = person2;
console.log(userName); // Monica
console.log(userAge); // 31

//Impostare valori di default
const person3 = { nome2: "Monica" };
const { nome2, age2 = 25 } = person3;
console.log(nome2); // Monica
console.log(age2); // 25 (valore di default perché "age2" non è presente nell'oggetto)

//destrutturizzare anche oggetti annidati
const persona = {
  nome: "Monica",
  indirizzo: {
    citta: "Palermo",
    paese: "italia",
  },
};

const {
  nome: nome10,
  indirizzo: { citta, paese: paeseDiNascita, cap = 90147 },
} = persona;

// const {citta, paese} = persona.indirizzo

console.log(persona.indirizzo.citta);
console.log(citta); // Palermo
console.log(paeseDiNascita); //italia
console.log(cap); //90147

//Destrutturizzazione anche come parametro delle funzioni

function print({ nome = "anonimo", eta = 18, paese = "italia" }) {
  console.log(`Nome: ${nome} eta: ${eta} paese: ${paese}`);
}

// function print(ogg) {
//   ogg.nome = ogg.nome || "anonimo"
//   console.log(`Nome: ${ogg.nome} eta: ${ogg.eta}`);
// }

const personaFunc = { nome: "Monica", eta: 31 };

print(personaFunc);

function printArray([first, second, third = 4]) {
  console.log(
    `primo numero: ${first} secondo numero: ${second} terzo numero : ${third}`
  );
}

printArray([34, 67]); // primo numero: 34 secondo numero: 67 terzo numero : 4

//Rest parameter
function sum(a, b, ...numbers) {
  //Ovviamente possiamo usare anche la destrutturizzazione dal momento che il rest parameter raccoglie tutti gli argomenti in un array
  // const [first = 30, second]= numbers
  const somma = a + b; //primo e secondo parametro sono espliciti quindi non sono parte del rest parameter

  //dal momento che il rest parameter raccoglie tutti gli argomenti in un array, possiamo usare i metodi degli array come filter, map, reduce, etc. sia per fare operazioni su di essi che per controllare il tipo degli argomenti passati
  const controllo = numbers.every((num) => typeof num === "number");
  //every restituisce true se tutti gli elementi dell'array soddisfano la condizione, altrimenti false
  //in questo caso controlla se tutti gli elementi dell'array - e quindi i parametri- sono numeri
  if (!controllo) {
    console.log("Tutti i parametri devono essere numeri");
    return;
  }
  //possiamo quindi filtrare i parametri passati per tipo e dividere i numeri dalle stringhe
  //in questo caso se ci sono stringhe, le ignoreremo e stamperemo
  const numbersString = numbers.filter((num) => typeof num === "string");
  const numbersFiltered = numbers.filter((num) => typeof num === "number");
  if (numbersString.length > 0) {
    console.log(
      "Sono stati passati dei parametri di tipo stringa, verranno ignorati"
    );
  }
  return numbersFiltered.reduce((acc, num) => acc + num, somma);
}
// Rest parameter raccoglie tutti gli argomenti in un array

console.log(sum(1, 2, 3, 4, 5, "30", 86)); //101 perché 1+2+3+4+5+86=101 e 30 viene ignorato perché non è un numero
sum("ciao", "mondo");

//utile per funzioni che accettano un numero variabile di argomenti che non sappiamo in anticipo
//si scrive con tre puntini "..." prima del nome della variabile e come ultimo parametro della funzione se ci sono altri parametri espliciti

//Rest parameter può essere usato anche con la destrutturizzazione
function printRestParameter({ nome, ...rest }) {
  console.log(`Nome: ${nome}`);
  console.log("Altri parametri:", rest);
}
//in questo caso il rest parameter raccoglie tutti gli altri parametri in un oggetto
const personaRest = {
  nome: "Monica",
  eta: 31,
  paese: "Italia",
  citta: "Palermo",
};
printRestParameter(...personaRest);
// Nome: Monica
// Altri parametri: { eta: 31, paese: 'Italia', citta: 'Palermo' }

//Lo spread operator
//Lo spread operator è simile al rest parameter ma viene utilizzato per espandere un array o un oggetto in un altro array o oggetto
const numbersArray = [1, 2, 3];
const newArray = [...numbersArray, 4, 5, 6]; // Espande l'array e aggiunge nuovi elementi
console.log(newArray); // [1, 2, 3, 4, 5, 6]

// Può essere usato anche per unire due array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2]; // Unisce i due array
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
// Può essere usato anche per copiare un array
const copiedArray = [...numbersArray]; // Crea una copia dell'array
//
console.log(copiedArray); // [1, 2, 3]

// Può essere usato anche per unire due oggetti
const personFirst = { nome: "Monica", eta: 31 };
const personSecond = { nome: "francesca", paese: "Italia", citta: "Palermo" };
const mergedPerson = { ...personFirst, ...personSecond }; // Unisce i due oggetti
console.log(mergedPerson); // { nome: 'Monica', eta: 31, paese: 'Italia', citta: 'Palermo' }
// Può essere usato anche per copiare un oggetto
const copiedPerson = { ...personFirst }; // Crea una copia dell'oggetto cosa che non è possibile fare con l'assegnazione diretta
copiedPerson.nome = "Francesca"; // Modifica la copia senza influenzare l'originale
copiedPerson.eta = 31; // Modifica la copia senza influenzare l'originale
console.log(copiedPerson); // { nome: 'Monica', eta: 31 }
