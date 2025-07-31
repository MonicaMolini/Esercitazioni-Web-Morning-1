// Esercizi sulle Promises

// 1. Crea una Promise che si risolve dopo 2 secondi con il messaggio "Operazione completata". Esegui la promise e stampa in console il risultato.

const operazione = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("operazione completata");
    }, 2000)
})
operazione.then((result)=> {
    console.log(result)
}).catch ((error)=>{
    console.error(error);
})
2. Crea una funzione `isEven(num)` che ritorna una Promise:
   - se `num` è pari, si risolve con `"Numero pari"`;
   - altrimenti si rigetta con `"Numero dispari"`.
function isEven(num) {
    return new Promise((resolve, reject) => {
        if (num  % 2 === 0){
            resolve("Numero pari")
        } else {reject ("Numero dispari")}
    })
}

isEven(10).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.error(error)
}).finally(()=> console.log("operazione conclusa"))

// 3. Simula una chiamata API
// Scrivi una promise che si risolve e restituisce un oggetto utente { id: 1, name: "Alice" , cognome: "Rossi", eta: 18} dopo 3 secondi.
// Scrivi un'altra promise che usa il risultato della prima e con un ritardo di 3 secondi si risolve con una stringa `Alice Rossi ha 18 anni`; **i dati devono essere presi dalla prima promise**.

function simulazione() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const utente = { id: 1, name: "Alice", cognome: "Rossi", eta: 18 }
            resolve(utente)
        }, 3000);
    });
}
function simulazione2(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${user.name} ${user.cognome} ha ${user.eta}`)
        }, 3000)
    })
}
simulazione().then((result) => 
    simulazione2(result)
).then((result) => console.log(result)).catch((error) => console.error(error))
// 4. Crea due Promises con tempi diversi (ad esempio 1s e 2s) e usale con `Promise.all` per stampare entrambi i risultati insieme.

Promise.all([simulazione, simulazione2({id: 1, name: "Alice", cognome: "Rossi", eta: 18})])
.then((result) => console.log(result[result.length -1])).catch((error) => console.error(error))

// 5. Crea tre Promises che si risolvono in tempi differenti, utilizza Math random per creare una probabilità randomica del 50% di resolve e reject per ciascun; usa `Promise.all` per stampare solo l'ultimo risultato, oppure, l'errore intercettato.

// 7. Gestisci un errore lanciato da una Promise con `.catch` e stampa un messaggio personalizzato, tipo `"Errore gestito: …"`.

// 8. Crea una funzione `failingPromise()` che ritorna una Promise che dopo 2 secondi **si rigetta** con un messaggio di errore.

// 9. Utilizza `.then()` concatenati per trasformare il risultato di una Promise:
//    - parte da un numero,
//    - moltiplicalo per 3,
//    - aggiungi 5,
//    - poi stampa il risultato.

//BONUS
// 10. Crea un array di Promises che comprendono risoluzioni e rigetti a tempi diversi e usa:
//  `Promise.allSettled` per sapere quali hanno avuto successo e quali no
//  `Promise.race` per sapere quale Promise si risolve per prima
