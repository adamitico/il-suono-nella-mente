import { useState } from "react";

export default function Home() {
  const [showExcerpt, setShowExcerpt] = useState(false);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Il Suono nella Mente</h1>
      <p>
        Scopri il potere nascosto del suono sulla mente e sulle emozioni. Un
        viaggio tra psicoacustica, consapevolezza e benessere interiore.
      </p>
      <button onClick={() => setShowExcerpt(!showExcerpt)}>
        {showExcerpt ? "Nascondi estratto" : "Leggi un estratto"}
      </button>
      {showExcerpt && (
        <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
          “Il suono ti ha formato. Ora puoi usarlo per trasformarti.”
        </p>
      )}

      <h2 style={{ marginTop: "3rem" }}>Acquista ora</h2>
      <ul>
        <li>
          <a
            href="https://www.amazon.it/dp/B0CXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acquista su Amazon
          </a>
        </li>
        <li>
          <a
            href="https://soluzionifonoisolanti.com/shop/it/home/60-il-suono-nella-mente.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acquista con autografo
          </a>
        </li>
      </ul>
    </div>
  );
}
