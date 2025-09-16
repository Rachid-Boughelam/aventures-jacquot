const paysFrancophonie = [
  // Afrique
  { nom: "Maroc", population: 36192000, pourcent: 35 },
  { nom: "Tunisie", population: 11659000, pourcent: 52 },
  { nom: "Mauritanie", population: 4540000, pourcent: 13 },
  { nom: "Égypte", population: 99376000, pourcent: 3 },
  { nom: "Émirats arabes unis", population: 9542000, pourcent: 3 },
  { nom: "Liban", population: 6094000, pourcent: 38 },
  { nom: "Qatar", population: 2695000, pourcent: 4.3 },
  { nom: "Bénin", population: 11486000, pourcent: 33.3 },
  { nom: "Burkina Faso", population: 19752000, pourcent: 24 },
  { nom: "Burundi", population: 11216000, pourcent: 8.4 },
  { nom: "Cameroun", population: 24678000, pourcent: 40.5 },
  { nom: "Cap-Vert", population: 553000, pourcent: 10.9 },
  { nom: "République centrafricaine", population: 4737000, pourcent: 28.3 },
  { nom: "République du Congo", population: 5400000, pourcent: 58.9 },
  { nom: "République démocratique du Congo", population: 84005000, pourcent: 50.6 },
  { nom: "Côte d’Ivoire", population: 24906000, pourcent: 33.2 },
  { nom: "Djibouti", population: 971000, pourcent: 50 },
  { nom: "Gabon", population: 2068000, pourcent: 66.1 },
  { nom: "Ghana", population: 29464000, pourcent: 0.8 },
  { nom: "Guinée", population: 13053000, pourcent: 25.4 },
  { nom: "Guinée-Bissau", population: 1907000, pourcent: 15.3 },
  { nom: "Guinée équatoriale", population: 1314000, pourcent: 28.9 },
  { nom: "Mali", population: 19108000, pourcent: 16.9 },
  { nom: "Mozambique", population: 30529000, pourcent: 0.3 },
  { nom: "Niger", population: 22311000, pourcent: 12.8 },
  { nom: "Rwanda", population: 12501000, pourcent: 5.8 },
  { nom: "Sao Tomé-et-Principe", population: 209000, pourcent: 20.1 },
  { nom: "Sénégal", population: 16294000, pourcent: 26 },
  { nom: "Tchad", population: 15353000, pourcent: 12.7 },
  { nom: "Togo", population: 7991000, pourcent: 40 },
  { nom: "Comores", population: 832000, pourcent: 25.9 },
  { nom: "Madagascar", population: 26263000, pourcent: 20 },
  { nom: "Maurice", population: 1268000, pourcent: 72.6 },
  { nom: "Seychelles", population: 95000, pourcent: 52.6 },

  // Amériques
  { nom: "Canada", population: 37265000, pourcent: 29.4 },
  { nom: "Québec", population: 8394000, pourcent: 93.3 },
  { nom: "Nouveau-Brunswick", population: 779000, pourcent: 41.8 },
  { nom: "Ontario", population: 16653000, pourcent: 10 },
  { nom: "Haïti", population: 11113000, pourcent: 42 },
  { nom: "République dominicaine", population: 10883000, pourcent: 1.4 },
  { nom: "Dominique", population: 74000, pourcent: 9.4 },
  { nom: "Sainte-Lucie", population: 180000, pourcent: 1.7 },
  { nom: "Uruguay", population: 3470000, pourcent: 0.14 },
  { nom: "Louisiane (USA)", population: 4600000, pourcent: 2 }, // estimation symbolique

  // Asie-Pacifique
  { nom: "Arménie", population: 2934000, pourcent: 0.34 },
  { nom: "Géorgie", population: 3907000, pourcent: 0.41 },
  { nom: "Cambodge", population: 16246000, pourcent: 2.7 },
  { nom: "Laos", population: 6961000, pourcent: 2.7 },
  { nom: "Thaïlande", population: 69183000, pourcent: 0.82 },
  { nom: "Vietnam", population: 96491000, pourcent: 0.7 },
  { nom: "Vanuatu", population: 282000, pourcent: 31.5 },

  // Europe
  { nom: "Albanie", population: 2934000, pourcent: 2 },
  { nom: "Bosnie-Herzégovine", population: 3504000, pourcent: 0.8 },
  { nom: "Bulgarie", population: 7037000, pourcent: 2.3 },
  { nom: "Croatie", population: 4165000, pourcent: 2.3 },
  { nom: "Estonie", population: 1307000, pourcent: 1.4 },
  { nom: "Macédoine du Nord", population: 2085000, pourcent: 2 },
  { nom: "Hongrie", population: 9689000, pourcent: 1.1 },
  { nom: "Lettonie", population: 1930000, pourcent: 1.1 },
  { nom: "Lituanie", population: 2876000, pourcent: 2.3 },
  { nom: "Moldavie", population: 4041000, pourcent: 1.3 },
  { nom: "Monténégro", population: 629000, pourcent: 2 },
  { nom: "Pologne", population: 38105000, pourcent: 2.5 },
  { nom: "République tchèque", population: 10625000, pourcent: 2.2 },
  { nom: "Roumanie", population: 19581000, pourcent: 11.9 },
  { nom: "Serbie", population: 6971000, pourcent: 3.6 },
  { nom: "Slovaquie", population: 5450000, pourcent: 2.1 },
  { nom: "Slovénie", population: 2081000, pourcent: 2.4 },
  { nom: "Ukraine", population: 44009000, pourcent: 0.12 },
  { nom: "Andorre", population: 77000, pourcent: 70.1 },
  { nom: "Belgique", population: 11499000, pourcent: 75.5 },
  { nom: "France", population: 68392000, pourcent: 96.5 },
  { nom: "Luxembourg", population: 590000, pourcent: 92 },
  { nom: "Monaco", population: 39000, pourcent: 97 },
  { nom: "Suisse", population: 8544000, pourcent: 67.1 },
  { nom: "Chypre", population: 1189000, pourcent: 6.6 },
  { nom: "Grèce", population: 11142000, pourcent: 7.2 },
  { nom: "Nouvelle-Calédonie", population: 280000, pourcent: 98.9 },
  { nom: "Kosovo", population: 1791000, pourcent: 1.4 },
  { nom: "Autriche", population: 8752000, pourcent: 13 },

  // Observateurs divers (exemples)
  { nom: "Mexique", population: 130759000, pourcent: 0.2 },
  { nom: "Costa Rica", population: 4953000, pourcent: 0.1 },
  { nom: "Corée du Sud", population: 51164000, pourcent: 0.1 },
];


const tbody = document.querySelector("#liste-pays tbody");

// Fonction pour remplir le tableau
function renderTable(data) {
  tbody.innerHTML = "";
  data.forEach(p => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${p.nom}</td>
      <td>${p.population.toLocaleString('fr-FR')}</td>
      <td>${p.pourcent} %</td>
    `;
    tbody.appendChild(row);
  });
}

// Tri générique
let currentSort = { col: null, asc: true };

function sortBy(col) {
  if (currentSort.col === col) {
    currentSort.asc = !currentSort.asc; // inverse l'ordre
  } else {
    currentSort.col = col;
    currentSort.asc = true;
  }

  const sorted = [...paysFrancophonie].sort((a, b) => {
    if (col === "nom") {
      return currentSort.asc
        ? a.nom.localeCompare(b.nom)
        : b.nom.localeCompare(a.nom);
    } else {
      return currentSort.asc
        ? a[col] - b[col]
        : b[col] - a[col];
    }
  });

  renderTable(sorted);
}

// Écouteurs sur les entêtes
document.querySelectorAll("#liste-pays thead th").forEach(th => {
  th.addEventListener("click", () => sortBy(th.dataset.col));
});

// Premier rendu par nom
sortBy("nom");
