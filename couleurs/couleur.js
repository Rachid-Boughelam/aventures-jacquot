// Dossier des images (chemin relatif depuis couleur.html)
const imgPath = "images/";

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

const buttonsDiv = document.getElementById("buttons");
const imgJacquot = document.getElementById("jacquot");
const actionText = document.getElementById("action");

// Crée un bouton pour chaque couleur
for (const [nom, data] of Object.entries(couleurs)) {
  const btn = document.createElement("button");
  btn.textContent = nom.toUpperCase();
  btn.className = "color-btn";
  btn.style.backgroundColor = data.bg;
  btn.addEventListener("click", () => {
    imgJacquot.src = imgPath + data.fichier;
    imgJacquot.alt = "Jacquot " + nom;
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    actionText.textContent = randomAction;
  });
  buttonsDiv.appendChild(btn);
}
