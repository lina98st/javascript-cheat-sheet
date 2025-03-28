function downloadFile(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simuliere Erfolg oder Fehler
      const success = Math.random() > 0.2;

      if (success) {
        resolve("Datei heruntergeladen von: " + url);
      } else {
        reject("Download fehlgeschlagen!");
      }
    }, 2000); // 2 Sekunden warten
  });
}

console.log("Starte Download...");

downloadFile("https://example.com/file.zip")
  .then(result => {
    console.log("✅ Erfolg:", result);
  })
  .catch(error => {
    console.error("❌ Fehler:", error);
  });
