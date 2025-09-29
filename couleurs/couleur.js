// Dossier des images
const imgPath = "images/";

// Définition des couleurs avec image et couleur de fond
const couleurs = {
  rouge:   {fichier: "jacquot-rouge.png",  bg: "#e74c3c"},
  noir:    {fichier: "jacquot-noir.png",   bg: "#2c3e50"},
  jaune:   {fichier: "jacquot-jaune.png",  bg: "#f1c40f"},
  bleu:    {fichier: "jacquot-bleu.png",   bg: "#3498db"},
  vert:    {fichier: "jacquot-vert.png",   bg: "#27ae60"},
  orange:  {fichier: "jacquot-orange.png", bg: "#e67e22"},
  gris:    {fichier: "jacquot-gris.png",   bg: "#7f8c8d"},
  blanc:   {fichier: "jacquot-blanc.png",  bg: "#bdc3c7"}
};

// Liste des actions
const actions = [
  "ASSIS TOI !",
  "DEBOUT !",
  "DANSE !",
  "SAUTE !",
  "SOIT TRISTE !",
  "SOIT HEUREUX !",
  "RIGOLE !",
  "PLEURE !"
];

// Association des actions avec les images
const imagesActions = {
  "ASSIS TOI !": "assis-toi.jpg",
  "DEBOUT !": "debout.jpg",
  "DANSE !": "danse.jpg",
  "SAUTE !": "saute.jpg",
  "SOIT TRISTE !": "triste.jpg",
  "SOIT HEUREUX !": "heureux.jpg",
  "PLEURE !": "pleure.jpg",
  "RIGOLE !": "heureux.jpg" // si tu veux utiliser "heureux.jpg" pour rigole
};

// Récupération des éléments du DOM
const buttonsDiv = document.getElementById("buttons");
const imgJacquot = document.getElementById("jacquot");
const actionText = document.getElementById("action");

// Élément pour afficher l'image de l'action
const actionImg = document.createElement("img");
actionImg.id = "action-img";
actionImg.style.width = "150px";
actionImg.style.height = "150px";
actionImg.style.marginLeft = "20px";

// **Image par défaut au démarrage**
actionImg.src = "images/img.png"; // chemin relatif
actionImg.alt = "Image par défaut";

imgJacquot.insertAdjacentElement("afterend", actionImg);

// Création du compteur dans le DOM
let countdownDiv = document.createElement("p");
countdownDiv.id = "countdown";
countdownDiv.style.fontWeight = "bold";
countdownDiv.style.fontSize = "1.5em";
actionText.insertAdjacentElement("afterend", countdownDiv);

// Fonction pour lire la couleur en voix enfantine
function lireCouleur(couleur) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(couleur);
  utterance.lang = "fr-FR";
  utterance.pitch = 2;   // voix aiguë = effet enfant
  utterance.rate = 1.2;  // un peu plus rapide
  synth.speak(utterance);
}

// Fonction pour lancer le compte à rebours
function startCountdown() {
  let count = 5;
  countdownDiv.textContent = count;
  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownDiv.textContent = count;
    } else {
      countdownDiv.textContent = "STOP !";
      clearInterval(interval);
    }
  }, 1000);
}

// Fonction pour afficher une action et son image
function afficherAction() {
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  actionText.textContent = randomAction;

  const imgFile = imagesActions[randomAction];
  if (imgFile) {
    actionImg.src = imgPath + imgFile;
    actionImg.alt = randomAction;
  } else {
    actionImg.src = "";
    actionImg.alt = "";
  }
}

// Création des boutons pour chaque couleur
for (const [nom, data] of Object.entries(couleurs)) {
  const btn = document.createElement("button");
  btn.textContent = nom.toUpperCase();
  btn.className = "color-btn";
  btn.style.backgroundColor = data.bg;

  btn.addEventListener("click", () => {
    // Changement de l'image de Jacquot
    imgJacquot.src = imgPath + data.fichier;
    imgJacquot.alt = "Jacquot " + nom;

    // Affichage d'une action et de son image
    afficherAction();

    // Lecture vocale de la couleur avec voix enfant
    lireCouleur(nom);

    // Lancement du compte à rebours
    startCountdown();
  });

  buttonsDiv.appendChild(btn);
}
