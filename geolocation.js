if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const koordinaten = position.coords; // "coords" ersetzt durch "koordinaten"
            const zeitstempel = position.timestamp; // "timestamp" ersetzt durch "zeitstempel"

            // Alle relevanten Werte abrufen
            const latitude = koordinaten.latitude;
            const longitude = koordinaten.longitude;
            const altitude = koordinaten.altitude;
            const accuracy = koordinaten.accuracy;
            const altitudeAccuracy = koordinaten.altitudeAccuracy; 
            const heading = koordinaten.heading;
            const speed = koordinaten.speed;

            alert(`Geodaten:
Breitengrad: ${latitude}
Längengrad: ${longitude}
Höhe: ${altitude}
Exaktheit: ${accuracy} 
Exaktheit Höhe: ${altitudeAccuracy} 
Richtung: ${heading}
Geschwindigkeit: ${speed}
Zeitstempel: ${new Date(zeitstempel).toLocaleString()}`);
        },
        (error) => {
            alert(`Fehler: ${error.message}`);
        }
    );
} else {
    alert("Geolocation wird von diesem Browser nicht unterstützt.");
}
