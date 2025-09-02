/**
 * LEZIONE 2 – Funzioni, union types e interfacce avanzate
 * --------------------------------------------------------
 */

// 1. Funzione semplice con tipi sui parametri e sul ritorno
function somma(a: number, b: number): number {
  return a + b;
}

// 2. Parametri opzionali e predefiniti
function saluta(nome: string, saluto: string = "Ciao"): string {
  return `${saluto}, ${nome}`;
}

// 3. Funzione con tipo void (non restituisce niente)
function mostraMessaggio(msg: string): void {
  console.log("Messaggio:", msg);
}

// 4. Union type: una variabile può avere più tipi
let valore: (string | number)[];
valore = ["ciao", 1, 4];

// 5. Type alias
type ID = string | number;
let userId: ID = 123;

// 6. Interfaccia con metodi
interface Animale {
  nome: string;
  verso(): string;
}

const cane: Animale = {
  nome: "Fido",
  verso: () => "Bau!",
};

console.log(cane.verso()); // Bau!

/**
 * ✅ Riepilogo teorico:
 * - Le funzioni possono avere tipi precisi per parametri e ritorni
 * - I parametri opzionali e di default permettono maggiore flessibilità
 * - I union type permettono di esprimere variabilità nei tipi accettati
 * - Le interfacce possono contenere anche metodi (non solo proprietà)
 */
