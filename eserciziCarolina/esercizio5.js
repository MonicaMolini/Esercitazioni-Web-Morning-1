// ESERCIZIO 5
// Dato un giorno della settimana in forma stringa, scrivi una funzione 'verificaGiorno()' che usa uno switch per stampare 'Oggi si lavora' se è giorno lavorativo (lun-ven) o 'Finalmente il weekend' se weekend (sab-dom).
// Tip: utilizza in modo intelligente il break per scrivere meno codice possibile e non scordare di gestire i casi in cui il giorno non sia valido.
///////////////////

let giorno = "lunedi"
function verificaGiorno() {
    switch (giorno){
        case "lunedi": 
        case "martedi":
        case "mercoledi":
        case "giovedi":
        case "venerdi":
            return "Oggi si lavora";
            break;
            case "sabato":
                case "domenica":
                    return "E' weekend";
                    break ;
                    default: 
                    return "Non valido"

    }
}

console.log(verificaGiorno());