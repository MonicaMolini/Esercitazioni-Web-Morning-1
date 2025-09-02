# 📘 Teoria e Best Practices – TypeScript

## 📌 Cos'è TypeScript?

TypeScript è un superset di JavaScript che aggiunge il **sistema di tipi statici**. È progettato per aiutare gli sviluppatori a scrivere codice più robusto e leggibile, individuando errori **a tempo di compilazione** invece che in esecuzione.

---

## Vantaggi principali

- ✅ Autocompletamento più accurato
- ✅ Errori evitati grazie ai controlli di tipo
- ✅ Migliore manutenibilità del codice
- ✅ Struttura più chiara in progetti complessi
- ✅ Perfetta integrazione con gli editor (es. VS Code)

---

## Tipi di base

```ts
let nome: string;
let età: number;
let attivo: boolean;
let linguaggi: string[] = ["HTML", "CSS", "JS"];
```

---

## Interfacce e Tipi

```ts
interface Persona {
  nome: string;
  anni: number;
  saluta(): string;
}

type ID = number | string;
```

---

## Funzioni

- Tipizzazione dei parametri e del ritorno
- Parametri opzionali e con valori di default

```ts
function saluta(nome: string, titolo?: string): string {
  return `Ciao ${titolo ?? ""} ${nome}`;
}
```

---

## Best Practices

### 1. Tipizza sempre lo stato (`useState`)

```ts
const [contatore, setContatore] = useState<number>(0);
```

### 2. Usa interfacce per tipizzare `props` nei componenti

```ts
interface Props {
  messaggio: string;
}

const Componente: React.FC<Props> = ({ messaggio }) => <p>{messaggio}</p>;
```

### 3. Evita `any` a meno che non sia strettamente necessario

```ts
// Evita
let dato: any;

// Preferisci
let dato: string | number;
```

### 4. Organizza i tipi in un file `types.ts`

Questo aiuta a mantenere il codice più pulito e riutilizzabile.

### 5. Usa `type guard` per discriminare i tipi nelle union

```ts
function isErrore(risposta: Risposta): risposta is Errore {
  return risposta.tipo === "errore";
}
```

---

## ⚙️ Setup e Compilazione

### 🔹 Installazione TypeScript globalmente

```bash
npm install -g typescript
```

### 🔹 Compilare un file `.ts`

```bash
tsc file.ts
```

---

## 📌 Consiglio finale

**Pensa ai tipi come a una forma di documentazione e protezione.** Non solo ti aiutano a evitare errori, ma rendono il codice più leggibile e collaborativo.

---

## 🔗 Risorse utili

- (https://www.typescriptlang.org/docs/)
