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
  indirizzo: { citta, paese: paeseDiNascita, cap = 90147 },
} = persona;

// const {citta, paese} = persona.indirizzo

console.log(persona.indirizzo.citta);
console.log(citta); // Palermo
console.log(paeseDiNascita); //italia
console.log(cap); //90147

//Destrutturizzazione anche come parametro delle funzioni

function print({ nome, eta, paese = "italia" }) {
  console.log(`Nome: ${nome} eta: ${eta} paese: ${paese}`);
}

// function print(ogg) {
//   console.log(`Nome: ${ogg.nome} eta: ${ogg.eta}`);
// }

const personaFunc = { nome: "Monica", eta: 31 };

print(personaFunc);

function printArray([first, second, third = 4]) {
  console.log(
    `primo numero: ${first} secondo numero: ${second} terzo numero : ${third}`
  );
}

printArray([34, 67]);
