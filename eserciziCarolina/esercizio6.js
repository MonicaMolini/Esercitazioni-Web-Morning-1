////////////////////
// ESERCIZIO 6
// Crea una funzione 'checkUser()' che riceve un oggetto `utente` con proprietà `username`, `attivo` (boolean), e `tentativi`. Usa if-else per restituire dei messaggi diversi in base allo stato. Esempio: "utente disattivato", "numero tentativi superato" oppure "benvenuto <nome>".
////////////////////

let utente = {
    username: "Pippo",
    attivo: false,
    tentativi: 5,
}
function checkUser(utente){
    let {username, attivo, tentativi} = utente;
    if (!username){
        return "utente non valido";

    } else if (!attivo){
        return "utente disattivato"
    } else if (tentativi > 5) {
        return "troppi tentativi";
    } else {
        return `benvenuto ${username}`
    }
}
console.log(checkUser(utente));