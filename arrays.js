const numbers = [1, 2, 3, 4];

// map: Zahlen verdoppeln
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// filter: Nur gerade Zahlen
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// reduce: Summe berechnen
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

//Ein Array ist wie eine Liste oder Behälter in dem man mehrere Werte speichern kann 
//Diese Werte können Zahlen, Texte, Objekte oder sogar Arrays sein.

const names = ['Alice', 'Bob', 'Charlie']; // Liste von Namen statt Zahlen
const mixed = [42, 'Hello', true, { key: 'value' }]; // Alles geht!

//map usw. sind Werkzeuge um Arrays zu bearbeiten
//map macht etwas mit jedem Element
//filter wählt bestimmte Elemente aus
//reduce kombiniert Elemente zu einem Wert