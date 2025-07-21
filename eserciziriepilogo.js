// Esercizio 1: Filtra e Ordina i Prodotti
// Hai un array di oggetti che rappresentano prodotti di un negozio, ciascuno con proprietà come name, price e category.
//Scrivi una funzione che:
// Accetta una categoria come argomento e ritorna tutti i prodotti di quella categoria.
// Ordina i prodotti per prezzo, dal più basso al più alto.
// Utilizza una template string per mostrare name e price del prodotto nel risultato.
// Suggerimento: Usa filter per selezionare i prodotti per categoria e sort per ordinarli.


let prodotti = [
  { nome: "iphone", prezzo: 950, categoria: "cellulari" },
  { nome: "televisore", prezzo: 400, categoria: "elettronica" },
  { nome: "pasta", prezzo: 1, categoria: "cibo" },
  { nome: "acqua", prezzo: 2, categoria: "cibo" },
];
function esercizio(categoria) {
  let tipoProdotto = prodotti.filter(prodotti => prodotti.categoria === categoria);
  let ordineCrescente = tipoProdotto.sort((a, b) => a.prezzo - b.prezzo);
  let frase = ordineCrescente.map(prodotto => `il prodotto che hai scelto è ${prodotto.nome} e ha un prezzo di ${prodotto.prezzo}`)
  return frase
}
console.log(esercizio("elettronica"));



// Esercizio 2: Calcola il Totale di un Carrello
// Data una lista di prodotti (con name, price e quantity), crea una funzione che calcola il totale del carrello.
// La funzione deve accettare l’array del carrello come parametro e usare reduce per calcolare il totale.
// Il risultato finale deve essere una template string che mostri il totale in formato di valuta (ad esempio, $45.00).

let prodotti1 = [
  { nome: "iphone", prezzo: 950, quantita: 4 },
  { nome: "televisore", prezzo: 400, quantita: 2},
  { nome: "pasta", prezzo: 1, quantita: 10 },
  { nome: "acqua", prezzo: 2, quantita: 10 },
];

function calcola(carrello){
   let totale =  carrello.reduce((acc, num) => acc + (num.prezzo * num.quantita),0)
       return `il tuo acquisto ha un importo di ${totale} euro`

}
console.log(calcola(prodotti1))

// Esercizio 3: Gestisci la Disponibilità dei Biglietti
// Hai un array di oggetti events, dove ogni evento ha name, date e availableTickets.
// Scrivi una funzione checkAvailability che accetti una soglia numerica (es. 10) e ritorni una lista degli eventi che hanno più di quella soglia di biglietti disponibili.
// Usa filter e map per ottenere l’elenco e formatta l’output con una template string mostrando name, date, e availableTickets.
let eventi = [
  { nome: "concerto", data: "01/01/2026", bigliettiDisponibili: 100 },
  { nome: "partita calcio", data: "09/10/2026", bigliettiDisponibili: 15 },
  { nome: "teatro", data: "03/04/2029", bigliettiDisponibili: 10 },
  { nome: "Partita tennis", data: "7/09/2025", bigliettiDisponibili: 0 },
];
function acquisto(nome, nBiglietti){
  let acquisto = eventi.find(evento=> evento.nome.toLowerCase() === nome.toLowerCase() && evento.bigliettiDisponibili >= nBiglietti)
  if(acquisto){
    return `acquisto disponibile per l'evento scelto`
  }else{
    return `biglietti non disponibili`
  }
  
}
console.log(acquisto("concerto", 15))
console.log(acquisto("teatro", 30))
// function checkAvailability (soglia){
//   let acquisto = eventi.filter(biglietto => biglietto.bigliettiDisponibili > soglia)
//   let risultato = acquisto.map(evento => {
//     return (`i biglietti per il tuo evento ${evento.nome} il giorno ${evento.data} ce ne sono disponibili ${evento.bigliettiDisponibili} pezzi`)
    
//   })
//   console.log(risultato)
// }
// checkAvailability(10)

// Esercizio 4: Statistiche sui Dipendenti
// Hai un array di oggetti employees, dove ogni oggetto ha name, department e salary.
// Crea una funzione getDepartmentStats che accetti il nome di un dipartimento e calcoli lo stipendio medio dei dipendenti di quel dipartimento.
// Usa filter e reduce per ottenere i dipendenti del dipartimento specifico e calcolare la media.
// Ritorna il risultato in una template string: “Lo stipendio medio per il dipartimento di [dipartimento] è di [media]”.
let employees = [
  { nome: "Marco", department: "magazzino", salary: 2200 },
  { nome: "Sara", department: "amministrazione", salary: 2000 },
  { nome: "Roberto", department: "risorse umane", salary: 2400 },
];
function getDepartmentStats(ruolo) {
    if(ruolo === ""){
        return `selezionare un department esistente`
    }
let lavoratori = employees.filter(employes => employes.department === ruolo)

let totaleStipendi = lavoratori.reduce((acc, salary)=> acc + salary.salary,0)
let media = totaleStipendi / lavoratori.length
return `lo stipendio medio per il dipartimento ${ruolo} è di ${media}`

}
console.log(getDepartmentStats("amministrazione"))


// Esercizio 5: Simula un Sistema di Prenotazioni
// Hai un array di oggetti reservations che rappresenta prenotazioni in un ristorante, con proprietà name, date, time, e guests.
// Scrivi una funzione filterReservations che accetti come parametro una data (YYYY-MM-DD) e un numero di ospiti.
// La funzione deve restituire una lista di prenotazioni in quella data per almeno il numero di ospiti specificato.
// Usa filter per ottenere il risultato e usa template strings per mostrare le prenotazioni


let prenotazioni = [
  {nome: "simone", data: "10-10-2025", ora: "20.30", guest: 4},
  {nome: "marco", data: "20-1-2025", ora: "20.00", guest: 7},
  {nome: "roberto", data: "5-2-2025", ora:"19.30", guest: 2},
  {nome: "luca", data: "12-3-2025", ora: "21.00", guest: 5}
]
function filterReservations(data, ospiti){
  if(typeof data !== "string" || data.length === 0 ){
    return "inserire un valore valido (data)"
  }
  if(typeof ospiti !== "number" || ospiti <= 0){
    return "inserire valore valido (ospiti)"
  }
  let ospitiPrenotati = prenotazioni.filter(prenotazione=> prenotazione.data === data && prenotazione.guest >= ospiti )
  return ospitiPrenotati
  }
  console.log(filterReservations("12-3-2025", 2))

// Esercizio 6: Gestione dei Task di un Progetto
// Hai un array tasks, dove ogni task ha description, completed (booleano), e priority.
// Crea una funzione getTasksSummary che usi filter, map e reduce per restituire:
// Il numero totale di task.
// Il numero di task completati e da completare.
// Una lista di task prioritari (priority maggiore di 7).
// Usa una template string per mostrare il resoconto finale.


// Esercizio 7: Analizza Recensioni dei Prodotti
// Un sito ha un array reviews di oggetti, dove ogni recensione ha productId, rating e comment.
// Crea una funzione averageRating che accetti un productId e calcoli la valutazione media per quel prodotto.
// Usa filter per selezionare le recensioni del prodotto e reduce per calcolare la media dei rating.
// Ritorna la media in una template string: “La valutazione media per il prodotto [productId] è di [rating medio] stelle”.

// Esercizio 8: Ordina e Classifica le Vendite
// Hai un array di oggetti sales che rappresentano vendite effettuate, con product, quantity, e amount.
// Crea una funzione topSales che:
// Ordina le vendite per amount in ordine decrescente.
// Ritorna i primi 5 prodotti in una lista formattata come: “[product]: [amount] €”.
// Usa sort per l’ordinamento e slice per ottenere le prime 5 vendite.

// Esercizio 9: Gestisci un Portfolio di Investimenti
// Un portfolio contiene un array investments con oggetti che hanno stockSymbol, shares, pricePerShare, e date.
// Scrivi una funzione portfolioSummary che calcoli il valore totale di ogni investimento (shares * pricePerShare) e restituisca un resoconto con:
// Simbolo e valore di ogni investimento.
// Valore totale del portfolio.
// Usa map per calcolare i valori individuali e reduce per il totale del portfolio. Format il risultato con template strings.

// Esercizio 10: Sistema di Recensioni per un Ristorante
// Un ristorante ha un array dishes con oggetti che rappresentano i piatti e le recensioni associate, ognuno con name, price, e un array reviews con rating e comment.
// Scrivi una funzione getDishRating che accetti il nome di un piatto e calcoli la valutazione media.
// Seleziona il piatto giusto con find, e poi usa map e reduce per ottenere la media delle recensioni.
// Ritorna il risultato in una template string: “La valutazione media per [name] è [media] stelle.”
