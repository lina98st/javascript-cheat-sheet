// Aktuelles Datum
let datum = new Date();
let tag = datum.getDate();
let monat = datum.getMonth() + 1; // Monate sind 0-basiert
console.log(`Das aktuelle Datum ist: ${tag}.${monat}.`);

// Aktuelle Uhrzeit
let stunden = datum.getHours();
let minuten = datum.getMinutes();
console.log(`Es ist jetzt ${stunden} Uhr und ${minuten} Minuten.`);
