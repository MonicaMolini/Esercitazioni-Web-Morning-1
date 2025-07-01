//Operatore Ternario

//condizione ? argomento1 : argomento2;

let eta = 20;
let stato = eta >= 18 ? "Maggiorenne" : eta < 10 ? "Bambino" : "Minorenne";
console.log(stato); // "Maggiorenne"

// let stato;
// if(eta >= 18){
//     stato = "maggiorenne"
// } else if(eta < 10) {
//     stato = "Bambino"
// } else {
// stato= "Minorenne"}

// Il Costrutto switch
// switch (espressione) {
//     case valore1:
//       // Codice da eseguire se l'espressione è uguale a valore1
//       break;
//     case valore2:
//       // Codice da eseguire se l'espressione è uguale a valore2
//       break;
//     default:
//       // Codice da eseguire se nessuno dei casi corrisponde
//   }

let giorno = 3;

switch (giorno) {
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Giorno non valido");
}

//Se non utilizziamo il break, l'esecuzione del switch continua anche nei casi successivi.
