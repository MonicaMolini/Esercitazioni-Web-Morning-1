////////////////////
// ESERCIZIO 9
// Scrivi una funzione 'saluto()' che accetta nome e genere ("M" o "F") come parametro e restituisce una frase di saluto appropriato per il gener. **Usa per fare ciò l'operatore ternario**.
// Invoca la funzione con un nome e un genere a tua scelta.
// Output richiesto: "Gentile Signora Maria, benvenuta nel nostro sistema." oppure "Caro Signore Marco, benvenuto nel nostro sistema."
////////////////////

function saluto(nome, genere) {
   return genere === "M" ? "Caro Signore " + nome + ", benvenuto nel nostro sistema" : genere === "F" ? "Gentile Signora " + nome + ", benvenuta nel nostro sistema." : "Che genere sei?"
}

console.log(saluto("Carolina", "F"));
