// API: una API (Application Programming Interface) è un insieme di regole e protocolli che permette a diverse applicazioni di comunicare tra loro. Nel contesto del web, le API sono spesso utilizzate per consentire l'interazione tra client e server, permettendo di recuperare o inviare dati in modo strutturato, come nel caso della Fetch API.
//Esistono anche altre API del browser: localStorage e sessionStorage

// Il localStorage e il sessionStorage sono due API del browser che permettono di memorizzare dati in modo persistente o temporaneo.

// localStorage: Memorizza i dati senza scadenza, anche dopo la chiusura del browser.
// sessionStorage: Memorizza i dati solo per la durata della sessione del browser, ovvero fino alla chiusura della scheda o del browser.

// Entrambi utilizzano una struttura chiave-valore simile agli oggetti JavaScript.

// Esempio di utilizzo:

// Salvataggio di un dato
localStorage.setItem("nome", "Monica"); // localStorage.setItem(nome della chiave in formato stringa, valore da salvare)
sessionStorage.setItem("nome", "Monica");
//**Attenzione:** qualora intendessimo salvare un oggetto, dovremmo prima convertirlo in JSON con JSON.stringify() poichè qualsiasi dato salvato in localStorage e sessionStorage deve essere una stringa e soprattutto ritorna una stringa quando viene recuperato, quindi è necessario fare il contrario con JSON.parse() per convertirlo nuovamente in un oggetto JavaScript.

// Recupero di un dato
const nomeLocal = localStorage.getItem("nome");
const nomeSession = sessionStorage.getItem("nome");

console.log(nomeLocal); // "Monica"
console.log(nomeSession); // "Monica"

// Rimozione di un dato
localStorage.removeItem("nome");
sessionStorage.removeItem("nome");

// Cancellazione di tutti i dati
localStorage.clear();
sessionStorage.clear();

// Nota: I dati memorizzati in localStorage e sessionStorage sono accessibili solo dallo stesso dominio e protocollo, garantendo la sicurezza dei dati.
