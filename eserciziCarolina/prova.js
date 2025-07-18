// Dato un oggetto person con le proprietà nome ed età, 
// utilizza la destrutturazione dell'oggetto per creare variabili nome ed età 
// che contengano i valori dell'oggetto.


const person = { name: "Alice", age: 30 };

const {name: userName, age: userAge} = person

console.log(userAge, userName)

// Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti, utilizza la destrutturazione dell'oggetto per creare variabili nome, età e voto che contengano i valori dell'oggetto nidificato.

const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 }
};

const { 
    info: {name: nome, age: eta},
    grades: {math:votoMatematica, science: votoScienze}} = student

    console.log(`Nome studente: ${nome}, anni: ${eta}, voto matematica: ${votoMatematica}, voto scienze: ${votoScienze}`)

// Dato un array di colori con tre elementi, utilizza la destrutturazione dell'array per creare variabili firstColor, secondColor e ThirdColor che contengono i valori dell'array.

const colors = ["red", "green", "blue"];

const [firstColor, secondColor, thirdColor] = colors

console.log(firstColor, secondColor, thirdColor)

// Date due variabili a e b, scambia i loro valori usando la destrutturazione.

let a = 5;
let b = 10;

[a, b] = [b, a]

console.log(a, b)

// Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

function somma(...numeri){
    return numeri.reduce((totale, numero) => totale + numero, 0)
}

console.log(somma(1, 2, 3, 4, 5));

function somma(...valori){
    return valori.reduce((totale, valore) => totale + valore > 15)
}

console.log(somma(10, 15, 8, 37, 49, 3, 14, 16, 20))

// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

function filterOutOdds(...numbers) {
   return numbers.filter(number => number % 2 === 0)
}

console.log(filterOutOdds(1, 2, 3, 4, 5));