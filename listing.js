const tuotteet = [
  { nimi: "Perunat", hinta: 2.5, varasto: 20 },
  { nimi: "Juurekset", hinta: 3, varasto: 10 },
  { nimi: "Kaali", hinta: 2, varasto: 0 },
  { nimi: "Kananmunat", hinta: 4, varasto: 11 },
  { nimi: "Marjat", hinta: 6, varasto: 6 }
];

const haku = document.getElementById("haku");
const lajittelu = document.getElementById("lajittelu");
const lista = document.getElementById("lista");
const tila = document.getElementById("tila");

function nayta() {
  const teksti = haku.value.toLowerCase();

  const tulos = tuotteet
    .filter(t => t.nimi.toLowerCase().includes(teksti)
    .sort((a, b) =>
      lajittelu.value === "hinta" ? a.hinta - b.hinta : a.nimi.localeCompare(b.nimi)
    );

  lista.innerHTML = "";
  tulos.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.nimi + "," + t.hinta + "€, " + {t.varasto > 0 ? "varastossa" : "loppu"};
    lista.appendChild(li);
  });

  tila.textContent = "Näytetään" + tulos.length + "/" + tuotteet.length + "tuotetta";
}

haku.addEventListener("input", nayta);
lajittelu.addEventListener("change", nayta);
nayta();
