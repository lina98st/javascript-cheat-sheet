/* 
  HINWEIS: Um diese Lightbox-Funktion zu nutzen, benötigst du folgendes HTML und CSS:

  HTML:
  - Ein Container mit der ID "bild-container", der die Bilder umschließt.
  - Jedes Bild sollte sich in einem Element mit der Klasse "bild-wrapper" befinden.
  - Ein Lightbox-Div mit der ID "lightbox", das für die Anzeige des ausgewählten Bildes genutzt wird.

  Beispiel:
  <div id="bild-container">
      <div class="bild-wrapper">
          <img src="image1.jpg" alt="Bild 1">
      </div>
      <div class="bild-wrapper">
          <img src="image2.jpg" alt="Bild 2">
      </div>
  </div>
  <div id="lightbox"></div>

  CSS:
  - Der Lightbox-Div sollte standardmäßig unsichtbar sein und sichtbar werden, wenn die Klasse "zeigen" hinzugefügt wird.
  - Empfohlenes Styling für die Lightbox:
      #lightbox {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          align-items: center;
          justify-content: center;
          z-index: 1000;
      }
      #lightbox.zeigen {
          display: flex;
      }
      .schliessen {
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          font-size: 24px;
          color: white;
      }

  Tipp:
  - Nutze `console.log`-Ausgaben, um den Status der Lightbox zu überprüfen (z. B. Klicks und Inhalte).
  - Achte darauf, dass alle benötigten IDs und Klassen in deinem HTML vorhanden sind.
*/


// Select the main container for the images and the lightbox
let bildContainer = document.getElementById("bild-container");
let lightbox = document.getElementById("lightbox");

// Add an event listener for clicks on the image container
bildContainer.addEventListener("click", function(evt) {
    console.log("Image container clicked."); // Debugging output

    // Find the closest element with the class 'bild-wrapper'
    let bildWrapper = evt.target.closest(".bild-wrapper");
    console.log("Found bild-wrapper:", bildWrapper);

    if (bildWrapper) {
        // Get the image element inside the wrapper
        let bild = bildWrapper.querySelector("img");
        console.log("Found image:", bild);

        if (bild) {
            // Add the clicked image to the lightbox
            lightbox.innerHTML = `<div class="schliessen">X</div> ${bild.outerHTML}`;
            lightbox.classList.add("zeigen");
            console.log("Lightbox content set and shown.");
        }
    }
});

// Add an event listener for clicks on the lightbox
lightbox.addEventListener("click", function(evt) {
    console.log("Lightbox clicked."); // Debugging output

    // Close the lightbox if the click is outside the image
    if (!evt.target.hasAttribute("src")) {
        lightbox.classList.remove("zeigen");
        console.log("Lightbox hidden.");
    }
});
