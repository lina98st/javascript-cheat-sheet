let startZeit;
let stopZeit;

// Stoppuhr starten
function start() {
    startZeit = new Date();
    console.log("Stoppuhr gestartet!");
}

// Stoppuhr stoppen
function stop() {
    if (!startZeit) {
        console.log("Bitte zuerst die Stoppuhr starten!");
        return;
    }
    stopZeit = new Date();
    let differenz = stopZeit - startZeit; // Differenz in Millisekunden
    let sekunden = Math.floor(differenz / 1000); // In Sekunden umwandeln
    console.log(`Stoppuhr gestoppt! Zeit: ${sekunden} Sekunden`);
}

// Beispiel: Nutze diese Funktionen in der Konsole
// start();  // Stoppuhr starten
// stop();   // Nach ein paar Sekunden stoppen
