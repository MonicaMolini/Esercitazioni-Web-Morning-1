// ESERCIZIO 1
// Crea una funzione 'creaProfilo()' che riceve nome e anno di nascita come parametri. Effettua un controllo che nome sia di tipo strings e anno sia di tipo number, ritorna un console error nel caso non sia così. Poi calcola l’età attuale usando new Date() e restituisci una stringa che dica "Ciao <nome>, hai <età> anni e <sei maggiorenne/non sei maggiorenne>." a seconda dell'età calcolata.
//Infine invoca la funzione e stampa il risultato in console.
// Suggerimento: per estrapolare l'anno corrente dalla data, usa new Date().getFullYear().
////////////////////
function creaProfilo(nome, anno) {
    if (typeof nome !== "string") {
        return console.error("Non è una stringa");
    } if (typeof anno !== "number") {
        return console.error ("Non è un numero");
    }
    const annoCorrente = new Date().getFullYear();
    const età = annoCorrente - anno;
    const maggiorenne = età >= 18 ? "maggiorenne" : "minorenne";
    return `Ciao ${nome}, hai ${età} e sei ${maggiorenne}`;
} 

console.log(creaProfilo("Carolina", 1995));