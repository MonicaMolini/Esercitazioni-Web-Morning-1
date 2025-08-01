// Esercizio 1 - GESTIONE ORDINI FAST FOOD
// Obiettivo: simulare in console la gestione ordini di un fast food.

//
// CONSEGNA:
//

// 1. Crea un array vuoto chiamato `ordini` e una variabile `idCorrente` che parte da 1.

// 2. Crea una funzione `creaOrdine(nomeCliente, prodotti, callback)` che:
//    - calcola il totale dell’ordine (somma dei prezzi)
//    - crea un oggetto ordine con: `id`, `cliente`, `prodotti`, `totale`, `stato: "in preparazione"`
//    - aggiunge l’ordine all’array `ordini`
//    - stampa un messaggio in console
//    - esegue la `callback` passando l’ordine appena creato

// 3. Crea una funzione `aggiornaStatoOrdine(id, nuovoStato, callback)` che:
//    - cerca l’ordine con l’ID specificato
//    - aggiorna il suo stato
//    - stampa in console l’aggiornamento
//    - esegue la `callback` passando l’ordine aggiornato

// 4. Crea una funzione `mostraOrdini()` che:
//    - stampa in console l’elenco completo di tutti gli ordini con ID, cliente, totale, stato

// 5. Usa le funzioni per simulare:
//    - un ordine per un cliente a tua scelta
//    - un cambio di stato a “pronto”
//    - la stampa finale di tutti gli ordini

//Esercizio 2 - HR CONSOLE – GESTIONE DIPENDENTI
// Obiettivo: simulare in console la gestione di uno staff aziendale.

//
// CONSEGNA:
//

// 1. Crea un array vuoto chiamato `dipendenti` e una variabile `idDip` che parte da 1.

// 2. Crea una funzione `aggiungiDipendente(nome, ruolo, stipendio, callback)` che:
//    - crea un oggetto dipendente con `id`, `nome`, `ruolo`, `stipendio`
//    - lo aggiunge all’array `dipendenti`
//    - stampa un messaggio in console
//    - esegue la `callback` passando il nuovo dipendente

// 3. Crea una funzione `promuovi(id, nuovoRuolo, aumento, callback)` che:
//    - cerca il dipendente con l’ID specificato
//    - aggiorna il suo ruolo e stipendio (+ aumento)
//    - stampa in console i dati aggiornati
//    - esegue la `callback` passando il dipendente aggiornato

// 4. Crea una funzione `mostraStaff()` che:
//    - stampa in console l’elenco completo dei dipendenti con ID, nome, ruolo, stipendio

// 5. Crea una funzione `calcolaMediaStipendi()` che:
//    - calcola e stampa la media degli stipendi dei dipendenti attuali

// 6. Usa le funzioni per simulare:
//    - due assunzioni
//    - una promozione
//    - la stampa dello staff
//    - il calcolo della media stipendi

// Esercizio 3 - Le Promesse del Regno di Asynchronia
//
// OBIETTIVO:
// Sei un Mage of the Web incaricato di preparare una spedizione magica.
// Ogni avventuriero della tua squadra ha un incantesimo preferito da evocare,
// e un livello di coraggio che influisce sulla probabilità di successo dell’incantesimo.
// Alcuni incantesimi potrebbero fallire: se anche solo uno fallisce, la missione è annullata.
//
// CONSEGNA:
//
// 1. **Definisci una classe `Avventuriero`** con le seguenti proprietà:
//    - `nome` (stringa): il nome dell'avventuriero
//    - `preferenzaIncantesimo` (stringa): uno tra `"fuoco"`, `"ghiaccio"` o `"fulmine"`
//    - `coraggio` (numero da 1 a 10): modifica il rischio di fallimento dell’incantesimo
//    - un metodo `evocaIncantesimo()` che restituisce una `Promise`
//
// 2. **Crea una funzione generatrice di incantesimi** chiamata `creaIncantesimo(nome, basePotenza, tempo, rischioBase)`:
//    - Deve restituire una funzione che prende in input il `coraggio`
//    - La funzione restituisce una `Promise` che si risolve dopo `tempo` (in millisecondi)
//    - Il `coraggio` diminuisce la probabilità di fallimento
//    - Se l’incantesimo riesce, si risolve con una potenza calcolata in base a `basePotenza + coraggio * 2`
//    - Se fallisce, viene rigettata con un messaggio d’errore
//
// 3. **Crea una libreria di incantesimi** (oggetto `libreriaIncantesimi`) con 3 incantesimi:
//    - `fuoco`: basePotenza 50, tempo 2000ms, rischioBase 0.3
//    - `ghiaccio`: basePotenza 40, tempo 1500ms, rischioBase 0.2
//    - `fulmine`: basePotenza 60, tempo 1000ms, rischioBase 0.4
//
// 4. **Crea un array di almeno 4 avventurieri** (istanze della classe `Avventuriero`)
//    - Varia nomi, coraggio e incantesimi preferiti
//
// 5. **Evoca tutti gli incantesimi in parallelo** usando `Promise.all()`:
//    - Se tutte le promesse si risolvono, stampa un riepilogo con:
//      `"[nome] ha lanciato [tipo] con potenza [potenza]"`
//    - Se anche una sola fallisce, stampa:
//      `"Fallimento nella preparazione della spedizione"` e il messaggio d’errore
//
// 6. **Usa anche `Promise.race()`** per individuare il primo incantesimo completato con successo:
//    - Stampa: `"Primo incantesimo completato: [tipo] da [nome] con potenza [potenza]"`
//    - Se la prima promessa rigettata arriva per prima, stampa un messaggio di fallimento iniziale
//
//   BONUS OPZIONALE:
// - Estendi l’esercizio per supportare nuovi tipi di incantesimo con caratteristiche personalizzate
// - Ordina il riepilogo finale per potenza decrescente
