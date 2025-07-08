// ESERCIZIO 4
// Crea una classe `Persona` che abbia `nome`, `cognome`, 'eta', `email` e `telefono`. Aggiungi un metodo `.presentati()` che stampa "Mi chiamo <nome> <cognome> e ho <eta> anni". Poi , istanzia due oggetti `Persona` e chiama per ognuno di essi il metodo.
////////////////////

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
let persona1 = new Persona ("Carolina", "Palumbo", "30", "1234@", "+3912345");
console.log(persona1.presentati());