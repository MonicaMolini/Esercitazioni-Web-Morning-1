// // Esercizi sulle Promises

// // 1. Crea una Promise che si risolve dopo 2 secondi con il messaggio "Operazione completata". Esegui la promise e stampa in console il risultato.

let operazione = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("operazione comoletata")
    },2000)
})

async function eseguiOperazione(){
    try{
        let dato = await operazione
        console.log(dato)
    }catch (error){
        console.error(error)
    }
}
eseguiOperazione()
// // 2. Crea una funzione `isEven(num)` che ritorna una Promise:
// //    - se `num` è pari, si risolve con `"Numero pari"`;
// //    - altrimenti si rigetta con `"Numero dispari"`.

function isEven(numero){
    return new Promise((resolve, reject) =>{
        if(numero % 2 === 0){
            resolve("numero pari")
        }else{
            reject("numero dispari")
        }
    })
}

async function eseguiIsEven(){
    try{
        let numero = await ritornaNumero()
        let dato = await isEven(numero)
        console.log(dato)
    }catch(error){
        console.error(error)
    }finally{
        console.log("operazione")
    }
}

function ritornaNumero(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 20))
        },2000)
    })
}

eseguiIsEven()
// isEven(10)
// .then((result) => 
//     console.log(result)
// )
// .catch((error) => 
//     console.error(error)
// )
// .finally(() => 
//     console.log("operazione conclusa")
// )

// // 3. Simula una chiamata API
// // Scrivi una promise che si risolve e restituisce un oggetto utente { id: 1, name: "Alice" , cognome: "Rossi", eta: 18} dopo 3 secondi.
// // Scrivi un'altra promise che usa il risultato della prima e con un ritardo di 3 secondi si risolve con una stringa `Alice Rossi ha 18 anni`; **i dati devono essere presi dalla prima promise**.
// // let user = { id: 1, name: "Alice" , cognome: "Rossi", eta: 18}
// // function simulazione(){
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve(user)
// //         }, 3000)
// //     })
// // }
// // let dati = user
// // function simulazione2(user){
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve(`${user.name} ${user.cognome} ha ${user.eta} anni`)
// //         },3000)
// //     })
// // }

// // simulazione().then(result => simulazione2(result))
// // .then((result) => console.log(result))
// // .catch((error) => console.error(error))

// // 4. Crea due Promises con tempi diversi (ad esempio 1s e 2s) e usale con `Promise.all` per stampare entrambi i risultati insieme.

// function eta (num){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(num >= 18){
//                 resolve("utente maggiorenne")
//             }else{
//                 reject("utente minorenne")
//             }
//         }, 2000)
//     })
// }

// function moltiplica(a,b){
//     return new Promise((resolve, reject) => {
//         let totale = a * b
//         setTimeout(() => {
//             if(b !== 0){
//                 resolve(totale)
//             }else{
//                 reject("B non puo essere 0")
//             }
//         }, 4000)
//     })
// }

// Promise.all([eta(20), moltiplica(2, 5)])
// .then((result) => {console.log(result)})
// .catch((error) => {console.error(error)})


// // 5. Crea tre Promises che si risolvono in tempi differenti, utilizza Math random per creare una probabilità randomica del 50% di resolve e reject per ciascun; usa `Promise.all` per stampare solo l'ultimo risultato, oppure, l'errore intercettato.

function numeroUno(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.9){
                resolve("andata bene")
            }else{
                reject("andata male")
            }
        }, 2000)
    })
}

function somma(a, b){
    return new Promise((resolve, reject) => {
        let totale = (a + b) 

        setTimeout(() => {
               if(Math.random() < 0.9){
            resolve("probabilità maggiore di 50% allora la somma è: " + totale)
        }else{
            reject("probabilità minore di 50% non è possibile visualizzare somma")
        }

        }, 4000)
    })
}

function moltiplicazione (a, b){
    return new Promise((resolve, reject) => {
        let prodotto = a * b
        setTimeout(() => {
               if(Math.random() < 0.5){
            resolve("hai vinto probabilita piu di 50%:  " + prodotto)
        }else{
            reject("hai perso probabilità minore di 50% ")
        }

        }, 5000)
    })
}
    Promise.all([numeroUno(), somma(2,3), moltiplicazione(3,4)])
    .then((result) => {
        console.log(result(result.length - 1))
    })
    .catch((error) => {
        console.error(error)
    })
// // 7. Gestisci un errore lanciato da una Promise con `.catch` e stampa un messaggio personalizzato, tipo `"Errore gestito: …"`.

// function controllaAltezza(num){
//     return new Promise((resolve, reject) => {
//         if(num > 180){
//             resolve("altezza ok")
//         }else{
//             reject("errore altezza non rispettata")
//         }
//     })
// }
// controllaAltezza(170)
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.error("errore controllato" + error)
// })

// // 8. Crea una funzione `failingPromise()` che ritorna una Promise che dopo 2 secondi **si rigetta** con un messaggio di errore.

// function failingPromise(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("non andata a buon fine")
//         }, 2000)

//     })
// }
// failingPromise()
// .catch((error) => {
//     console.error(error)
// })


// // 9. Utilizza `.then()` concatenati per trasformare il risultato di una Promise:
// //    - parte da un numero,
// //    - moltiplicalo per 3,
// //    - aggiungi 5,
// //    - poi stampa il risultato.
// function stampaNumero(numero){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if(numero !== 0){
//                 resolve(numero)
//             }else{
//                 reject("numero non può essere uguale a 0")
//             }
//         }, 1000)
//     })
// }

// function moltiplica(numero){
//   return new Promise((resolve) => {
//     resolve(numero * 3)
//   })
// }


// function aggiungiCinque(numero){
//     return new Promise((resolve) => {
//         resolve(numero + 5)
//     })
// }



// // stampaNumero(5)
// // .then(moltiplica)
// // .then(aggiungiCinque)
// // .then(result => {console.log(result)})
// // .catch((error) => {
// //     console.error(error)
// // })

// stampaNumero(5)
// .then((result1) => moltiplica(result1))
// .then((result2) => aggiungiCinque(result2))
// .then((risultatoFinale) => {
//     console.log(risultatoFinale)
// })

// .catch((error) => {
//     console.error(error)
// })
// //BONUS
// // 10. Crea un array di Promises che comprendono risoluzioni e rigetti a tempi diversi e usa:
// //  `Promise.allSettled` per sapere quali hanno avuto successo e quali no
// //  `Promise.race` per sapere quale Promise si risolve per prima


// function divisione(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a === 0) {
//                 reject("A non può essere 0");
//             } else {
//                 resolve(a / b);
//             }
//         }, 1000);  
//     });
// }

// function nome(str) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof str === "string") {
//                 resolve(str);
//             } else {
//                 reject("str deve essere una stringa");
//             }
//         }, 2000);  
//     });
// }

// let statoRisultato = [
// divisione(4,5 ),
// divisione(0,2 ),
// nome("simone"),
// nome(123)
// ]

// Promise.allSettled(statoRisultato)
// .then(result => {
//     result.forEach((tot, x) => {
//         if(tot.status === "fulfilled") {
//             console.log(tot.value)
//         }else{
//             console.log(tot.reason)
//         }
//     })
// })

// Promise.race(statoRisultato)
// .then(result => console.log(result))
// .catch(error => console.error(error))




