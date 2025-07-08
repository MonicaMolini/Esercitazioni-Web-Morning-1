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
    constructor (nome, cognome, eta, email, telefono)
    {
        this.nome= nome;
        this.cognome= cognome;
        this.eta= eta;
        this.email= email;
        this.telefono= telefono;

    }
    presentati(){
        return `Ciao mi chiamo ${this.nome} ${this.cognome} ho ${this.eta} anni.`
    }
}
let persona1 = new Persona ("Carolina", "Palumbo", "30", "carolina@gmail.com", "+3912345560");
let persona2 = new Persona ("Tizio", "Rossi", "30", "1234@", "+3912345");
let persona3 = new Persona ("Caio", "Verdi", "30", "1234@", "+3912345");
let persona4 = new Persona ("Sempronio", "Pippo", "30", "1234@", "+3912345");
console.log(persona1.presentati());

