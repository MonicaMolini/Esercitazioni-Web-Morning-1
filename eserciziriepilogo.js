// Esercizio 1: Filtra e Ordina i Prodotti
// Hai un array di oggetti che rappresentano prodotti di un negozio, ciascuno con proprietà come name, price e category.
//Scrivi una funzione che:
// Accetta una categoria come argomento e ritorna tutti i prodotti di quella categoria.
// Ordina i prodotti per prezzo, dal più basso al più alto.
// Utilizza una template string per mostrare name e price del prodotto nel risultato.
// Suggerimento: Usa filter per selezionare i prodotti per categoria e sort per ordinarli.
const prodotti = [
  { name: "T-shirt", price: 19.99, category: "Abbigliamento" },
  { name: "Jeans", price: 49.99, category: "Abbigliamento" },
  { name: "Cuffie Bluetooth", price: 89.99, category: "Elettronica" },
  { name: "Smartphone", price: 699.99, category: "Elettronica" },
  { name: "Tazza da caffè", price: 9.99, category: "Casa" },
  { name: "Lampada da tavolo", price: 29.99, category: "Casa" },
  { name: "Libro di cucina", price: 14.99, category: "Libri" },
];

function categoria(prodotti, category) {
  return prodotti
    .filter(
      (prodotto) => prodotto.category.toUpperCase() === category.toUpperCase()
    ) // si usa toUpperCase per rendere i confronti piu fluidi, trasforma tutto il testo in maiuscolo.
    .sort((a, b) => a.price - b.price)
    .map((prodotto) => `${prodotto.name} ${prodotto.price}`);
}
console.log(categoria(prodotti, "Abbigliamento"));
console.log(categoria(prodotti, "Elettronica"));
console.log(categoria(prodotti, "Libri"));
console.log(categoria(prodotti, "Casa"));
console.log("---------------------------------");
// Esercizio 2: Calcola il Totale di un Carrello
// Data una lista di prodotti (con name, price e quantity), crea una funzione che calcola il totale del carrello.
// La funzione deve accettare l’array del carrello come parametro e usare reduce per calcolare il totale.
// Il risultato finale deve essere una template string che mostri il totale in formato di valuta (ad esempio, $45.00).
const product = [
  { name: "T-shirt", price: 19.99, quantity: 3 },
  { name: "Jeans", price: 49.99, quantity: 2 },
  { name: "Cuffie Bluetooth", price: 89.99, quantity: 1 },
];

function carrello(product) {
  const totale = product.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return `$${totale}`;
}
console.log(carrello(product));
console.log("---------------------------------");
// Esercizio 3: Gestisci la Disponibilità dei Biglietti
// Hai un array di oggetti events, dove ogni evento ha name, date e availableTickets.
// Scrivi una funzione checkAvailability che accetti una soglia numerica (es. 10) e ritorni una lista degli eventi che hanno più di quella soglia di biglietti disponibili.
// Usa filter e map per ottenere l’elenco e formatta l’output con una template string mostrando name, date, e availableTickets.
const events = [
  { name: "Concerto Coldplay", date: "2025-08-30", availableTickets: 120 },
  { name: "Mostra Van Gogh", date: "2025-09-12", availableTickets: 0 },
  { name: "Stand-up Comedy", date: "2025-07-20", availableTickets: 45 },
  { name: "Festival Jazz", date: "2025-08-10", availableTickets: 80 },
];
function checkAvailability(sogliaNumerica) {
  return events
    .filter((event) => event.availableTickets > sogliaNumerica)
    .map(
      (event) =>
        event.name + ", " + event.date + ", " + event.availableTickets + "."
    );
}
console.log(checkAvailability(46));
console.log("---------------------------------");
// Esercizio 4: Statistiche sui Dipendenti
// Hai un array di oggetti employees, dove ogni oggetto ha name, department e salary.
// Crea una funzione getDepartmentStats che accetti il nome di un dipartimento e calcoli lo stipendio medio dei dipendenti di quel dipartimento.
// Usa filter e reduce per ottenere i dipendenti del dipartimento specifico e calcolare la media.
// Ritorna il risultato in una template string: “Lo stipendio medio per il dipartimento di [dipartimento] è di [media]”.
const employees = [
  { name: "Mario Rossi", department: "IT", salary: 3000 },
  { name: "Lucia Bianchi", department: "HR", salary: 2800 },
  { name: "Giovanni Verdi", department: "IT", salary: 3200 },
  { name: "Anna Neri", department: "Vendite", salary: 2500 },
  { name: "Paolo Gialli", department: "Vendite", salary: 2700 },
];

function getDepartmentStats(department) {
  const numeroDipartimenti = employees.filter(
    (employee) => employee.department === department
  );
  const media =
    numeroDipartimenti.reduce((acc, cur) => acc + cur.salary, 0) /
    numeroDipartimenti.length;
  return (
    "Lo stipendio medio per il dipartimento di " +
    department +
    " è di " +
    media +
    "."
  );
}
console.log(getDepartmentStats("IT"));
console.log(getDepartmentStats("HR"));
console.log(getDepartmentStats("Vendite"));
console.log("---------------------------------");
// Esercizio 5: Simula un Sistema di Prenotazioni
// Hai un array di oggetti reservations che rappresenta prenotazioni in un ristorante, con proprietà name, date, time, e guests.
// Scrivi una funzione filterReservations che accetti come parametro una data (YYYY-MM-DD) e un numero di ospiti.
// La funzione deve restituire una lista di prenotazioni in quella data per almeno il numero di ospiti specificato.
// Usa filter per ottenere il risultato e usa template strings per mostrare le prenotazioni
const reservations = [
  {
    name: "Mario Rossi",
    date: "2025-07-20",
    time: "20:00",
    guests: 4,
  },
  {
    name: "Lucia Bianchi",
    date: "2025-07-21",
    time: "19:30",
    guests: 2,
  },
  {
    name: "Giovanni Verdi",
    date: "2025-07-20",
    time: "21:00",
    guests: 5,
  },
];
function filterReservations(data, ospiti) {
  if (Array.isArray(reservations)) {
    return reservations
      .filter(
        (reservation) =>
          reservation.date === data && reservation.guests >= ospiti
      )
      .map(
        (reservation) =>
          `Prenotato da: ${reservation.name}, in data: ${reservation.date}, per n° ospiti: ${reservation.guests}`
      );
  } else {
    console.error("ERRORE");
  }
}
console.log(filterReservations("2025-07-20", 2));
console.log("---------------------------------");
// Esercizio 6: Gestione dei Task di un Progetto
// Hai un array tasks, dove ogni task ha description, completed (booleano), e priority.
// Crea una funzione getTasksSummary che usi filter, map e reduce per restituire:
// Il numero totale di task.
// Il numero di task completati e da completare.
// Una lista di task prioritari (priority maggiore di 7).
// Usa una template string per mostrare il resoconto finale.
const tasks = [
  {
    description: "Comprare il latte",
    completed: false,
    priority: 7,
  },
  {
    description: "Scrivere la relazione settimanale",
    completed: true,
    priority: 9,
  },
  {
    description: "Portare fuori il cane",
    completed: false,
    priority: 5,
  },
  {
    description: "Prenotare il dentista",
    completed: false,
    priority: 8,
  },
  {
    description: "Studiare JavaScript",
    completed: true,
    priority: 10,
  },
];

function getTasksSummary(tasks) {
  const numeroTotaleTasks = tasks.length;
  const tasksComplete = tasks.reduce(
    (acc, cur) => (cur.completed ? (acc += 1) : acc),
    0
  );
  const taskIncomplete = tasks.reduce(
    (acc, cur) => (!cur.completed ? (acc += 1) : acc),
    0
  );
  const taskPrioritarie = tasks
    .filter((task) => task.priority > 7)
    .map((task) => ` ${task.description}`);
  const risultato = `il numero totale di tasks è: ${numeroTotaleTasks},
  il numero di tasks complete è: ${tasksComplete},
  il numero di tasks incomplete è: ${taskIncomplete},
  la lista delle tasks prioritare è: ${taskPrioritarie}`;
  return risultato;
}
console.log(getTasksSummary(tasks));
console.log("---------------------------------");
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
const reviews = [
  { productId: 101, rating: 4, comment: "Ottimo prodotto, molto utile!" },
  { productId: 102, rating: 5, comment: "Super soddisfatto, lo consiglio." },
  { productId: 101, rating: 3, comment: "Buono, ma potrebbe migliorare." },
  {
    productId: 103,
    rating: 2,
    comment: "Non soddisfatto, aspettative non rispettate.",
  },
  {
    productId: 102,
    rating: 4,
    comment: "Molto buono, ottimo rapporto qualità-prezzo.",
  },
  { productId: 101, rating: 5, comment: "Eccellente, supera le aspettative." },
];

function averageRating(reviews, productId) {
  const productFilter = reviews.filter(
    (review) => review.productId === productId
  );
  if (productFilter.length === 0) {
    return `Nessuna recensione trovata per il prodotto ${productId}`;
  }
  const media =
    productFilter.reduce((acc, cur) => acc + cur.rating, 0) /
    productFilter.length;
  return `La valutazione media per il prodotto ${productId} è di ${media} stelle.`;
}
console.log(averageRating(reviews, 102));
console.log(averageRating(reviews, 101));
console.log(averageRating(reviews, 103));
console.log(averageRating(reviews, 99));
console.log("---------------------------------");
// Esercizio 8: Ordina e Classifica le Vendite
// Hai un array di oggetti sales che rappresentano vendite effettuate, con product, quantity, e amount.
// Crea una funzione topSales che:
// Ordina le vendite per amount in ordine decrescente.
// Ritorna i primi 5 prodotti in una lista formattata come: “[product]: [amount] €”.
// Usa sort per l’ordinamento e slice per ottenere le prime 5 vendite.
const sales = [
  { product: "Laptop", quantity: 2, amount: 1500 },
  { product: "Smartphone", quantity: 5, amount: 2500 },
  { product: "Tablet", quantity: 3, amount: 900 },
  { product: "Laptop", quantity: 1, amount: 750 },
  { product: "Smartphone", quantity: 2, amount: 1000 },
  { product: "Monitor", quantity: 4, amount: 800 },
  { product: "Keyboard", quantity: 7, amount: 350 },
  { product: "Mouse", quantity: 10, amount: 200 },
  { product: "Headphones", quantity: 3, amount: 450 },
  { product: "Webcam", quantity: 5, amount: 500 },
];
function topSales(sales) {
  return sales
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5)
    .map((sale) => `${sale.product}: ${sale.amount}€`);
}
console.log(topSales(sales));
console.log("---------------------------------");
// Esercizio 9: Gestisci un Portfolio di Investimenti
// Un portfolio contiene un array investments con oggetti che hanno stockSymbol, shares, pricePerShare, e date.
// Scrivi una funzione portfolioSummary che calcoli il valore totale di ogni investimento (shares * pricePerShare) e restituisca un resoconto con:
// Simbolo e valore di ogni investimento.
// Valore totale del portfolio.
// Usa map per calcolare i valori individuali e reduce per il totale del portfolio. Format il risultato con template strings.
const investments = [
  { stockSymbol: "AAPL", shares: 10, pricePerShare: 170, date: "2025-01-15" },
  { stockSymbol: "GOOGL", shares: 5, pricePerShare: 2800, date: "2025-02-20" },
  { stockSymbol: "TSLA", shares: 8, pricePerShare: 700, date: "2025-03-10" },
  { stockSymbol: "AMZN", shares: 3, pricePerShare: 3400, date: "2025-04-01" },
  { stockSymbol: "NFLX", shares: 6, pricePerShare: 500, date: "2025-05-25" },
  { stockSymbol: "MSFT", shares: 12, pricePerShare: 310, date: "2025-06-10" },
  { stockSymbol: "NVDA", shares: 4, pricePerShare: 950, date: "2025-06-18" },
  { stockSymbol: "META", shares: 7, pricePerShare: 380, date: "2025-06-22" },
  { stockSymbol: "DIS", shares: 15, pricePerShare: 120, date: "2025-07-01" },
  { stockSymbol: "INTC", shares: 20, pricePerShare: 34, date: "2025-07-10" },
];

function portfolioSummary(investments) {
  // prettier-ignore
  const totale = investments.reduce(
    (acc, cur) => acc + cur.pricePerShare * cur.shares, 0);
  const singoliInvestimenti = investments.map(
    (investment) => `Simbolo: ${
      investment.stockSymbol
    } - Investimento Singolo: ${investment.shares * investment.pricePerShare}
  ---`
  );
  singoliInvestimenti.forEach((investment) => console.log(investment));
  return `totale investimento: ${totale}`;
}
console.log(portfolioSummary(investments));
console.log("---------------------------------");
// Esercizio 10: Sistema di Recensioni per un Ristorante
// Un ristorante ha un array dishes con oggetti che rappresentano i piatti e le recensioni associate, ognuno con name, price, e un array reviews con rating e comment.
// Scrivi una funzione getDishRating che accetti il nome di un piatto e calcoli la valutazione media.
// Seleziona il piatto giusto con find, e poi usa map e reduce per ottenere la media delle recensioni.
// Ritorna il risultato in una template string: “La valutazione media per [name] è [media] stelle.”

console.log("\u001b[1;31m Messaggio rosso");

console.log("\u001b[1;31m Messaggio rosso");

console.log("\u001b[1;32m Messaggio verde");

console.log("\u001b[1;33m Messaggio giallo");

console.log("\u001b[1;34m Messaggio blu");

console.log("\u001b[1;35m Messaggio viola");

console.log("\u001b[1;36m Messaggio ciano");
