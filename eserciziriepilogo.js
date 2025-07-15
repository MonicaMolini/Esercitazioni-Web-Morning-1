// Esercizio 1: Filtra e Ordina i Prodotti
// Hai un array di oggetti che rappresentano prodotti di un negozio, ciascuno con proprietà come name, price e category.
//Scrivi una funzione che:
// Accetta una categoria come argomento e ritorna tutti i prodotti di quella categoria.
// Ordina i prodotti per prezzo, dal più basso al più alto.
// Utilizza una template string per mostrare name e price del prodotto nel risultato.
// Suggerimento: Usa filter per selezionare i prodotti per categoria e sort per ordinarli.

// Esercizio 2: Calcola il Totale di un Carrello
// Data una lista di prodotti (con name, price e quantity), crea una funzione che calcola il totale del carrello.
// La funzione deve accettare l’array del carrello come parametro e usare reduce per calcolare il totale.
// Il risultato finale deve essere una template string che mostri il totale in formato di valuta (ad esempio, $45.00).

// Esercizio 3: Gestisci la Disponibilità dei Biglietti
// Hai un array di oggetti events, dove ogni evento ha name, date e availableTickets.
// Scrivi una funzione checkAvailability che accetti una soglia numerica (es. 10) e ritorni una lista degli eventi che hanno più di quella soglia di biglietti disponibili.
// Usa filter e map per ottenere l’elenco e formatta l’output con una template string mostrando name, date, e availableTickets.

// Esercizio 4: Statistiche sui Dipendenti
// Hai un array di oggetti employees, dove ogni oggetto ha name, department e salary.
// Crea una funzione getDepartmentStats che accetti il nome di un dipartimento e calcoli lo stipendio medio dei dipendenti di quel dipartimento.
// Usa filter e reduce per ottenere i dipendenti del dipartimento specifico e calcolare la media.
// Ritorna il risultato in una template string: “Lo stipendio medio per il dipartimento di [dipartimento] è di [media]”.

// Esercizio 5: Simula un Sistema di Prenotazioni
// Hai un array di oggetti reservations che rappresenta prenotazioni in un ristorante, con proprietà name, date, time, e guests.
// Scrivi una funzione filterReservations che accetti come parametro una data (YYYY-MM-DD) e un numero di ospiti.
// La funzione deve restituire una lista di prenotazioni in quella data per almeno il numero di ospiti specificato.
// Usa filter per ottenere il risultato e usa template strings per mostrare le prenotazioni

// Esercizio 6: Gestione dei Task di un Progetto
// Hai un array tasks, dove ogni task ha description, completed (booleano), e priority.
// Crea una funzione getTasksSummary che usi filter, map e reduce per restituire:
// Il numero totale di task.
// Il numero di task completati e da completare.
// Una lista di task prioritari (priority maggiore di 7).
// Usa una template string per mostrare il resoconto finale.

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
