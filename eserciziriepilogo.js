// // Esercizio 1: Filtra e Ordina i Prodotti
// // Hai un array di oggetti che rappresentano prodotti di un negozio, ciascuno con proprietà come name, price e category.
// //Scrivi una funzione che:
// // Accetta una categoria come argomento e ritorna tutti i prodotti di quella categoria.
// // Ordina i prodotti per prezzo, dal più basso al più alto.
// // Utilizza una template string per mostrare name e price del prodotto nel risultato.
// // Suggerimento: Usa filter per selezionare i prodotti per categoria e sort per ordinarli.

// const prodotti = [
//   {
//     nome: "Set di 12 Pennelli Professionali",
//     prezzo: 24.99,
//     categoria: "Pennelli"
//   },
//   {
//     nome: "Set di 24 Colori Acrilici",
//     prezzo: 29.90,
//     categoria: "Colori"
//   },
//   {
//     nome: "Blocco Carta per Acquerello 300g/m²",
//     prezzo: 12.50,
//     categoria: "Carta"
//   },

//   {
//     nome: "Blocco Carta",
//     prezzo: 10.50,
//     categoria: "carta"
//   },
 
// ];

// // DESTRUCTURING

// function getProdotti(prodotti, categoria) {
//     return prodotti.filter(({categoria: categoriaProdotti}) => categoriaProdotti.toUpperCase() === categoria.toUpperCase()).sort(({prezzo: prezzoA}, {prezzo:prezzoB}) => prezzoA - prezzoB).forEach(({nome, prezzo}) =>
//     console.log(`Il prodotto ${nome} ha un prezzo di ${prezzo}`));
    
// }


// // function getProdotti(prodotti, categoria) {
// //     return prodotti.filter(prodotto => prodotto.categoria.toUpperCase() === categoria.toUpperCase()).sort((a, b) => a.prezzo -b.prezzo).forEach(prodotto =>
// //     console.log(`Il prodotto ${prodotto.nome} ha un prezzo di ${prodotto.prezzo}`));
    
// // }

   
//     getProdotti(prodotti, "carta")

    




// Esercizio 2: Calcola il Totale di un Carrello
// Data una lista di prodotti (con name, price e quantity), crea una funzione che calcola il totale del carrello.
// La funzione deve accettare l’array del carrello come parametro e usare reduce per calcolare il totale.
// Il risultato finale deve essere una template string che mostri il totale in formato di valuta (ad esempio, $45.00).

// const prodotti = [
//   {
//     nome: "Smartphone XYZ Model 2025",
//     prezzo: 100,
//     quantita: 50
//   },
//   {
//     nome: "Cuffie Wireless Bluetooth",
//     prezzo: 90,
//     quantita: 120
//   },
//   {
//     nome: "Smartwatch Fitness Tracker",
//     prezzo: 50,
//     quantita: 80
//   }, 
// ];



// function calcolaTotale(prodotti) {
//     const totale = prodotti.reduce((acc, cur) => acc + cur.prezzo, 0);
//     console.log(`Il totale è ${totale}$`)
// }
// calcolaTotale(prodotti);



// Esercizio 3: Gestisci la Disponibilità dei Biglietti
// Hai un array di oggetti events, dove ogni evento ha name, date e availableTickets.
// Scrivi una funzione checkAvailability che accetti una soglia numerica (es. 10) e ritorni una lista degli eventi che hanno più di quella soglia di biglietti disponibili.
// Usa filter e map per ottenere l’elenco e formatta l’output con una template string mostrando name, date, e availableTickets.

const events = [
  {
    name: "Concerto Rock Festival",
    date: "2025-08-10",
    availableTickets: 15
  },
  {
    name: "Mostra d'Arte Contemporanea",
    date: "2025-09-05",
    availableTickets: 8
  },
  {
    name: "Festival del Cinema",
    date: "2025-09-20",
    availableTickets: 12
  },
  {
    name: "Spettacolo di Teatro Classico",
    date: "2025-07-30",
    availableTickets: 10
  },
];

function checkAvailability(soglia) {
    
  const eventoDisponibile = events.filter(({availableTickets}) => availableTickets > soglia)
  .map (({name, date, availableTickets})
       => `sono rimasti solo ${availableTickets} biglietti per l'evento ${name} in data ${date}`
)
}

// function checkAvailability(soglia) {
//     let acquisto = events.filter(ticket => ticket.availableTickets > soglia)
//     let risultato = acquisto.map (evento => {
//         return (`sono rimasti solo ${evento.availableTickets} biglietti per l'evento ${evento.name} in data ${evento.date}`)
//     })
//     console.log(risultato)
// }

console.log(soglia)

// // Esercizio 4: Statistiche sui Dipendenti
// // Hai un array di oggetti employees, dove ogni oggetto ha name, department e salary.
// // Crea una funzione getDepartmentStats che accetti il nome di un dipartimento e calcoli lo stipendio medio dei dipendenti di quel dipartimento.
// // Usa filter e reduce per ottenere i dipendenti del dipartimento specifico e calcolare la media.
// // Ritorna il risultato in una template string: “Lo stipendio medio per il dipartimento di [dipartimento] è di [media]”.

// // const employees = [
// //   { name: "Alice", department: "Engineering", salary: 45000 },
// //   { name: "Bob", department: "Marketing", salary: 40000 },
// //   { name: "Charlie", department: "Sales", salary: 42000 },
// //   { name: "Diana", department: "Engineering", salary: 47000 },
// //   { name: "Eve", department: "Marketing", salary: 43000 }
// // ];
// //  function getDepartmentStats(calcolo){
// //     const dipartimento = employees.filter(dipartimento => dipartimento.department.toUpperCase() === calcolo).reduce((acc, cur) => acc + cur.salary, 0)/dipartimento.length;
// //     return `Lo stipendio medio per il dipartimento di ${calcolo} è di ${dipartimento}`
// //  }
// //  totale = Math.round(getDepartmentStats)

// //  console.log(employees, "Engineering")

// // Esercizio 5: Simula un Sistema di Prenotazioni
// // Hai un array di oggetti reservations che rappresenta prenotazioni in un ristorante, con proprietà name, date, time, e guests.
// // Scrivi una funzione filterReservations che accetti come parametro una data (YYYY-MM-DD) e un numero di ospiti.
// // La funzione deve restituire una lista di prenotazioni in quella data per almeno il numero di ospiti specificato.
// // Usa filter per ottenere il risultato e usa template strings per mostrare le prenotazioni

// // let reservations = [
// //   { name: 'Mario Rossi', date: '2025-07-20', time: '20:00', guests: 4 },
// //   { name: 'Luca Bianchi', date: '2025-07-20', time: '21:00', guests: 2 },
// //   { name: 'Anna Verdi', date: '2025-07-21', time: '19:30', guests: 3 }
// // ];

// // function filterReservations(data, ospiti){
// //    const prenotazione = reservations.filter((reservation) => reservation.date === data && reservation.guests >= ospiti);

// //    if( prenotazione.length === 0){
// //     return `nessuna prenotazione per la data ${date}`
// //    } 

// //    return prenotazione
// // }

// // console.log(filterReservations("2025-07-21", 2));

// // Esercizio 6: Gestione dei Task di un Progetto
// // Hai un array tasks, dove ogni task ha description, completed (booleano), e priority.
// // Crea una funzione getTasksSummary che usi filter, map e reduce per restituire:
// // Il numero totale di task.
// // Il numero di task completati e da completare.
// // Una lista di task prioritari (priority maggiore di 7).
// // Usa una template string per mostrare il resoconto finale.

// // const tasks = [
// //   { description: 'Fare la spesa', completed: false, priority: 'alta' },
// //   { description: 'Pulire la casa', completed: true, priority: 'media' },
// //   { description: 'Studiare JavaScript', completed: false, priority: 'alta' },
// //   { description: 'Pagare le bollette', completed: true, priority: 'bassa' },
// //   { description: 'Portare fuori il cane', completed: false, priority: 'media' }
// // ];

// // function getTasksSummary(tasks) {
// //   const totale = tasks.length;}

// //   console.log(task)



// // Esercizio 7: Analizza Recensioni dei Prodotti
// // Un sito ha un array reviews di oggetti, dove ogni recensione ha productId, rating e comment.
// // Crea una funzione averageRating che accetti un productId e calcoli la valutazione media per quel prodotto.
// // Usa filter per selezionare le recensioni del prodotto e reduce per calcolare la media dei rating.
// // Ritorna la media in una template string: “La valutazione media per il prodotto [productId] è di [rating medio] stelle”.

// // const reviews = [
// //   { productId: 1, rating: 5, comment: 'Ottimo prodotto!' },
// //   { productId: 2, rating: 4, comment: 'Buona qualità.' },
// //   { productId: 1, rating: 3, comment: 'Soddisfacente, ma migliorabile.' },
// //   { productId: 3, rating: 5, comment: 'Eccellente, consigliato!' },
// //   { productId: 2, rating: 2, comment: 'Non come mi aspettavo.' },
// //   { productId: 1, rating: 4, comment: 'Funziona bene!' }
// // ];
// //  function averageRating(productId){
// //    return recensioni =  reviews.filter 

// //  }

// // Esercizio 8: Ordina e Classifica le Vendite
// // Hai un array di oggetti sales che rappresentano vendite effettuate, con product, quantity, e amount.
// // Crea una funzione topSales che:
// // Ordina le vendite per amount in ordine decrescente.
// // Ritorna i primi 5 prodotti in una lista formattata come: “[product]: [amount] €”.
// // Usa sort per l’ordinamento e slice per ottenere le prime 5 vendite.

// // Esercizio 9: Gestisci un Portfolio di Investimenti
// // Un portfolio contiene un array investments con oggetti che hanno stockSymbol, shares, pricePerShare, e date.
// // Scrivi una funzione portfolioSummary che calcoli il valore totale di ogni investimento (shares * pricePerShare) e restituisca un resoconto con:
// // Simbolo e valore di ogni investimento.
// // Valore totale del portfolio.
// // Usa map per calcolare i valori individuali e reduce per il totale del portfolio. Format il risultato con template strings.

// const investments = [
//   { stockSymbol: 'AAPL', shares: 50, pricePerShare: 150, date: '2024-01-15' },
//   { stockSymbol: 'GOOGL', shares: 10, pricePerShare: 2800, date: '2023-12-10' },
//   { stockSymbol: 'TSLA', shares: 20, pricePerShare: 700, date: '2024-02-05' },
//   { stockSymbol: 'MSFT', shares: 30, pricePerShare: 300, date: '2024-01-20' },
//   { stockSymbol: 'AAPL', shares: 25, pricePerShare: 155, date: '2024-03-01' }
// ];

// function portfolioSummary(investments) {
//   const totale = investments.reduce((acc, cur) => acc + cur.pricePerShare * cur.shares, 0)
//   const singoliInvestimenti = investments.map((investment) => `Simbolo: ${investment.stockSymbol}, investimento: ${investment.shares * investment.pricePerShare}`)
//   singoliInvestimenti.forEach((investment) => console.log(investment))
//   return `Totale investimenti: ${totale}`
// }

// console.log(portfolioSummary(investments))







// // Esercizio 10: Sistema di Recensioni per un Ristorante
// // Un ristorante ha un array dishes con oggetti che rappresentano i piatti e le recensioni associate, ognuno con name, price, e un array reviews con rating e comment.
// // Scrivi una funzione getDishRating che accetti il nome di un piatto e calcoli la valutazione media.
// // Seleziona il piatto giusto con find, e poi usa map e reduce per ottenere la media delle recensioni.
// // Ritorna il risultato in una template string: “La valutazione media per [name] è [media] stelle.”

// const dishes = [
//   {
//     name: 'Pizza Margherita',
//     price: 8.5,
//     reviews: [
//       { rating: 5, comment: 'Deliziosa!' },
//       { rating: 4, comment: 'Buona ma un po\' troppo cotta.' }
//     ]
//   },
//   {
//     name: 'Lasagna',
//     price: 12,
//     reviews: [
//       { rating: 5, comment: 'Perfetta!' },
//       { rating: 5, comment: 'Eccezionale!' },
//       { rating: 4, comment: 'Molto buona!' }
//     ]
//   },
//   {
//     name: 'Insalata Caprese',
//     price: 7,
//     reviews: [
//       { rating: 3, comment: 'Troppo semplice.' },
//       { rating: 4, comment: 'Fresca e gustosa.' }
//     ]
//   }
// ];

// function getDishRating(dish){
//     const piatto = dishes.find((piatto) => piatto.name.toLowerCase() === dish.toLowerCase());
//     const media = piatto.reviews.reduce((acc, cur) => acc + cur.rating, 0 ) / piatto.reviews.length;
//     return media

// }
// console.log(getDishRating ('lasagna'))

// // la funzione non deve accettare solo il nome del piatto ma anche l'array di piatti, usando destructoring e rest 