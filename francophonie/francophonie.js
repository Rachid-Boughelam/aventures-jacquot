const paysFrancophonie = [
  // Afrique
  { nom: "Maroc", population: 36192000, pourcent: 35, continent: "Afrique" },
  { nom: "Tunisie", population: 11659000, pourcent: 52, continent: "Afrique" },
  { nom: "Mauritanie", population: 4540000, pourcent: 13, continent: "Afrique" },
  { nom: "Égypte", population: 99376000, pourcent: 3, continent: "Afrique" },
  { nom: "Émirats arabes unis", population: 9542000, pourcent: 3, continent: "Asie" },
  { nom: "Liban", population: 6094000, pourcent: 38, continent: "Asie" },
  { nom: "Qatar", population: 2695000, pourcent: 4.3, continent: "Asie" },
  { nom: "Bénin", population: 11486000, pourcent: 33.3, continent: "Afrique" },
  { nom: "Burkina Faso", population: 19752000, pourcent: 24, continent: "Afrique" },
  { nom: "Burundi", population: 11216000, pourcent: 8.4, continent: "Afrique" },
  { nom: "Cameroun", population: 24678000, pourcent: 40.5, continent: "Afrique" },
  { nom: "Cap-Vert", population: 553000, pourcent: 10.9, continent: "Afrique" },
  { nom: "République centrafricaine", population: 4737000, pourcent: 28.3, continent: "Afrique" },
  { nom: "République du Congo", population: 5400000, pourcent: 58.9, continent: "Afrique" },
  { nom: "République démocratique du Congo", population: 84005000, pourcent: 50.6, continent: "Afrique" },
  { nom: "Côte d’Ivoire", population: 24906000, pourcent: 33.2, continent: "Afrique" },
  { nom: "Djibouti", population: 971000, pourcent: 50, continent: "Afrique" },
  { nom: "Gabon", population: 2068000, pourcent: 66.1, continent: "Afrique" },
  { nom: "Ghana", population: 29464000, pourcent: 0.8, continent: "Afrique" },
  { nom: "Guinée", population: 13053000, pourcent: 25.4, continent: "Afrique" },
  { nom: "Guinée-Bissau", population: 1907000, pourcent: 15.3, continent: "Afrique" },
  { nom: "Guinée équatoriale", population: 1314000, pourcent: 28.9, continent: "Afrique" },
  { nom: "Mali", population: 19108000, pourcent: 16.9, continent: "Afrique" },
  { nom: "Mozambique", population: 30529000, pourcent: 0.3, continent: "Afrique" },
  { nom: "Niger", population: 22311000, pourcent: 12.8, continent: "Afrique" },
  { nom: "Rwanda", population: 12501000, pourcent: 5.8, continent: "Afrique" },
  { nom: "Sao Tomé-et-Principe", population: 209000, pourcent: 20.1, continent: "Afrique" },
  { nom: "Sénégal", population: 16294000, pourcent: 26, continent: "Afrique" },
  { nom: "Tchad", population: 15353000, pourcent: 12.7, continent: "Afrique" },
  { nom: "Togo", population: 7991000, pourcent: 40, continent: "Afrique" },
  { nom: "Comores", population: 832000, pourcent: 25.9, continent: "Afrique" },
  { nom: "Madagascar", population: 26263000, pourcent: 20, continent: "Afrique" },
  { nom: "Maurice", population: 1268000, pourcent: 72.6, continent: "Afrique" },
  { nom: "Seychelles", population: 95000, pourcent: 52.6, continent: "Afrique" },

  // Amériques
  { nom: "Canada", population: 37265000, pourcent: 29.4, continent: "Amériques" },
  { nom: "Québec", population: 8394000, pourcent: 93.3, continent: "Amériques" },
  { nom: "Nouveau-Brunswick", population: 779000, pourcent: 41.8, continent: "Amériques" },
  { nom: "Ontario", population: 16653000, pourcent: 10, continent: "Amériques" },
  { nom: "Haïti", population: 11113000, pourcent: 42, continent: "Amériques" },
  { nom: "République dominicaine", population: 10883000, pourcent: 1.4, continent: "Amériques" },
  { nom: "Dominique", population: 74000, pourcent: 9.4, continent: "Amériques" },
  { nom: "Sainte-Lucie", population: 180000, pourcent: 1.7, continent: "Amériques" },
  { nom: "Uruguay", population: 3470000, pourcent: 0.14, continent: "Amériques" },
  { nom: "Louisiane (USA)", population: 4600000, pourcent: 2, continent: "Amériques" },

  // Asie-Pacifique
  { nom: "Arménie", population: 2934000, pourcent: 0.34, continent: "Asie" },
  { nom: "Géorgie", population: 3907000, pourcent: 0.41, continent: "Asie" },
  { nom: "Cambodge", population: 16246000, pourcent: 2.7, continent: "Asie" },
  { nom: "Laos", population: 6961000, pourcent: 2.7, continent: "Asie" },
  { nom: "Thaïlande", population: 69183000, pourcent: 0.82, continent: "Asie" },
  { nom: "Vietnam", population: 96491000, pourcent: 0.7, continent: "Asie" },
  { nom: "Vanuatu", population: 282000, pourcent: 31.5, continent: "Océanie" },

  // Europe
  { nom: "Albanie", population: 2934000, pourcent: 2, continent: "Europe" },
  { nom: "Bosnie-Herzégovine", population: 3504000, pourcent: 0.8, continent: "Europe" },
  { nom: "Bulgarie", population: 7037000, pourcent: 2.3, continent: "Europe" },
  { nom: "Croatie", population: 4165000, pourcent: 2.3, continent: "Europe" },
  { nom: "Estonie", population: 1307000, pourcent: 1.4, continent: "Europe" },
  { nom: "Macédoine du Nord", population: 2085000, pourcent: 2, continent: "Europe" },
  { nom: "Hongrie", population: 9689000, pourcent: 1.1, continent: "Europe" },
  { nom: "Lettonie", population: 1930000, pourcent: 1.1, continent: "Europe" },
  { nom: "Lituanie", population: 2876000, pourcent: 2.3, continent: "Europe" },
  { nom: "Moldavie", population: 4041000, pourcent: 1.3, continent: "Europe" },
  { nom: "Monténégro", population: 629000, pourcent: 2, continent: "Europe" },
  { nom: "Pologne", population: 38105000, pourcent: 2.5, continent: "Europe" },
  { nom: "République tchèque", population: 10625000, pourcent: 2.2, continent: "Europe" },
  { nom: "Roumanie", population: 19581000, pourcent: 11.9, continent: "Europe" },
  { nom: "Serbie", population: 6971000, pourcent: 3.6, continent: "Europe" },
  { nom: "Slovaquie", population: 5450000, pourcent: 2.1, continent: "Europe" },
  { nom: "Slovénie", population: 2081000, pourcent: 2.4, continent: "Europe" },
  { nom: "Ukraine", population: 44009000, pourcent: 0.12, continent: "Europe" },
  { nom: "Andorre", population: 77000, pourcent: 70.1, continent: "Europe" },
  { nom: "Belgique", population: 11499000, pourcent: 75.5, continent: "Europe" },
  { nom: "France", population: 68392000, pourcent: 96.5, continent: "Europe" },
  { nom: "Luxembourg", population: 590000, pourcent: 92, continent: "Europe" },
  { nom: "Monaco", population: 39000, pourcent: 97, continent: "Europe" },
  { nom: "Suisse", population: 8544000, pourcent: 67.1, continent: "Europe" },
  { nom: "Chypre", population: 1189000, pourcent: 6.6, continent: "Europe" },
  { nom: "Grèce", population: 11142000, pourcent: 7.2, continent: "Europe" },
  { nom: "Nouvelle-Calédonie", population: 280000, pourcent: 98.9, continent: "Océanie" },
  { nom: "Kosovo", population: 1791000, pourcent: 1.4, continent: "Europe" },
  { nom: "Autriche", population: 8752000, pourcent: 13, continent: "Europe" },

  // Observateurs divers
  { nom: "Mexique", population: 130759000, pourcent: 0.2, continent: "Amériques" },
  { nom: "Costa Rica", population: 4953000, pourcent: 0.1, continent: "Amériques" },
  { nom: "Corée du Sud", population: 51164000, pourcent: 0.1, continent: "Asie" },
];



const tbody = document.querySelector("#liste-pays tbody");

// Fonction pour remplir le tableau
function renderTable(data) {
  tbody.innerHTML = "";
  data.forEach(p => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${p.continent}</td>
      <td>${p.nom}</td>
      <td>${p.population.toLocaleString()}</td>
      <td>${p.pourcent}%</td>
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
  if (col === "nom" || col === "continent") {
    return currentSort.asc
      ? a[col].localeCompare(b[col])
      : b[col].localeCompare(a[col]);
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
