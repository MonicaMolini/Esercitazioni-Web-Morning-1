// Gli operatori logici

//Operatore AND
let a = true;
let b = false;
//L'operatore logico AND restituisce true solo se entrambe le espressioni sono vere

console.log(a && b); // false, perché b è false
console.log(a && true); // true, entrambi sono true

//Operatore OR
let x = true;
let y = false;
//L'operatore logico OR restituisce true se almeno una delle due espressioni è vera.

console.log(x || y); // true, perché almeno uno è true
console.log(false || y); // false, entrambi sono false

//Operatore NOT
let z = true;
//L'operatore logico NOT inverte il valore di un'espressione

console.log(!z); // false, inverte il valore di z

// Il Costrutto if-else

// if(condizione){
//    argomento
//  }

//Il costrutto if controlla una condizione e se è true esegue il blocco di codice inserito nell'argomento.

let eta = 20;
if (eta >= 18 && eta <= 30) {
  console.log("Sei maggiorenne");
}

console.log("sei minorenne");
//Stamperà la stringa in console sole se la condizione è vera

//if-else
//Possiamo eseguire determinate operazioni se la condizione data non è true, inserendole nell'argomento dell'else

eta = 16;
if (eta >= 18) {
  console.log("Sei maggiorenne");
} else {
  console.log("Sei minorenne"); //verrà eseguita questa perchè la condizione data è false
}

//Possiamo anche concatenare condizioni diverse

let voto = 85;
if (voto >= 90) {
  console.log("Ottimo");
} else if (voto >= 70) {
  console.log("Buono");
} else {
  console.log("Insufficiente");
}

// Nidificazione

//Possiamo anchi nidificare un'if dentro un'altra if per gestire operazioni più complesse
eta = 22;
let isStudente = 30;

if (eta >= 18) {
  if (isStudente) {
    console.log("Sconto per studenti");
  } else {
    console.log("Nessuno sconto");
  }
}

//Prima verrà verificata la condizione del primo if, quello più esterno, se è true entreremo nell'argomento e verrà verificato il secondo if
