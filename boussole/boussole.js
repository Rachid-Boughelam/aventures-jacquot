// --------- Données du jeu ---------
const scenes = {
  start: {
    text: "Bonjour et bienvenue ! Merci d’avoir choisi cet épisode, te voici devant ton école favori, allons chercher Jacquot, il a une mission pour toi !",
    character: "cscsc1",
    choices: [
      { text: "Aller devant l’entrée de l’école", next: "cscsc2" }
    ]
  },
  cscsc2: {
    text: "Te voici devant l’entrée de l’école, que veux-tu faire ?",
    character: "cscsc2",
    choices: [
      { text: "Rentrer pour rencontrer Jacquot", next: "jacquotMission" }
    ]
  },
  jacquotMission: {
    text: "Jacquot est ici, il t’attendait. Il a une mission à te confier, veux-tu savoir de quoi il s’agit ?",
    character: "jacquot-neutre",
    choices: [
      { text: "Oui, bien sûr !", next: "jacquotTriste" }
    ]
  },
  jacquotTriste: {
    text: "Jacquot est triste. Il a perdu la boussole de Samuel de Champlain, le célèbre explorateur dont l’école porte le nom. Mais attends, sais-tu qui était Samuel de Champlain ?",
    character: "jacquot-triste",
    choices: [
      { text: "Non, c’était qui Samuel de Champlain ?", next: "samuelIntro" },
      { text: "Oui, je sais déjà et je veux aider Jacquot", next: "boussoleIntro" }
    ]
  },
  samuelIntro: {
    text: "Samuel de Champlain était un explorateur français, il y a plus de 400 ans. Il a voyagé jusqu’au Canada et a fondé la ville de Québec. Il y a une statue de lui à l'entrée ! Veux-tu voir sa boussole de plus près ?",
    character: "samuel-boussole",
    choices: [
      { text: "Oui, montre-moi la boussole !", next: "boussoleImage" }
    ]
  },
  boussoleImage: {
    text: "La voici ! Il faut absolument qu’on la retrouve, aide-moi s’il te plaît !",
    character: "boussole",
    choices: [
      { text: "Bien sûr que je vais t’aider Jacquot", next: "boussoleIntro" }
    ]
  },
  boussoleIntro: {
    text: "Après une journée à l’école, Jacquot ne se souvient pas où il a laissé la boussole. Il se rappelle avoir joué au soccer, au terrain de jeux, mangé à la cafétéria, lu un livre à la bibliothèque, joué au gymnase et dansé dans la salle de danse. Par où commencer ?",
    character: "jacquot-reflechis",
    choices: [
      { text: "Aller au gymnase", next: "gymnase" },
      { text: "Aller à la cafétéria", next: "cafeteria" }
    ]
  },
  gymnase: {
    text: "Oh non, rien ici dans le gymnase.",
    character: "grand-gymnase",
    choices: [
      { text: "Aller à la cafétéria", next: "cafeteria" },
      { text: "Retourner dans le hall", next: "hall" }
    ]
  },
  cafeteria: {
    text: "Aucune trace de la boussole ici.",
    character: "cafeteria",
    choices: [
      { text: "Aller au gymnase", next: "gymnase" },
      { text: "Retourner dans le hall", next: "hall" }
    ]
  },
  hall: {
    text: "Nous sommes dans le hall, où aller ?",
    character: "jacquot-pleure",
    choices: [
      { text: "Allons à la cafétéria", next: "cafeteria" },
      { text: "Allons au gymnase", next: "gymnase" },
      { text: "Monter à la bibliothèque", next: "bibliotheque" },
      { text: "Aller à l’extérieur", next: "exterieur" },
      { text: "Aller à la salle de danse", next: "salleDanse" }
    ]
  },
  bibliotheque: {
    text: "À la bibliothèque, personne n’a trouvé de boussole. On devrait chercher à l’extérieur, qu'en penses-tu ?.",
    character: "bibliotheque",
    choices: [
      { text: "Redescendre dans le hall", next: "hall" },
      { text: "Aller à l’extérieur", next: "exterieur" }
    ]
  },
  salleDanse: {
    text: "Voici la salle de danse de Madame Joelle. Je sais qu’elle met souvent les objets perdus dans le bac à jouets. Devrions-nous fouiller un peu dedans ?",
    character: "salle-danse",
    choices: [
      { text: "Oui, regardons", next: "bacJouets" },
      { text: "Non, retournons dans le hall", next: "hall" }
    ]
  },
  bacJouets: {
    text: "Voici le bac à jouets. Je crois voir quelque chose qui dépasse…",
    character: "bac-jouets",
    choices: [
      { text: "Regardons de plus près", next: "trouveBoussole" },
      { text: "Non, retournons dans le hall", next: "hall" }
    ]
  },
  trouveBoussole: {
    text: "C’est la boussole ! Merci beaucoup pour ton aide !",
    character: "jacquot-boussole", 
    choices: [
      { text: "Bravo Jacquot !", next: "finWin" }
    ]
  },
  finWin: {
    text: "Je l’ai enfin retrouvé, bravo à toi explorateur !",
    character: "jacquot-heureux",
    choices: [
      { text: "Dire au revoir à Jacquot", next: "finQuitter" }
    ]
  },
  exterieur: {
    text: "Nous sortons à l’extérieur, par où commencer ?",
    character: "cscsc2",
    choices: [
      { text: "Aller au terrain de soccer", next: "terrainSoccer" },
      { text: "Aller au terrain de jeux", next: "terrainJeux" },
      { text: "Retourner dans le hall", next: "hall" }
    ]
  },
  terrainSoccer: {
    text: "Nous voici au terrain de soccer, aucune trace pour l'instant.",
    character: "terrain-soccer",
    choices: [
      { text: "Aller au terrain de jeux", next: "terrainJeux" },
      { text: "Retourner dans le hall", next: "hall" }
    ]
  },
  terrainJeux: {
    text: "Nous voici au terrain de jeux, aucun signe de la boussole ici.",
    character: "terrain-jeux",
    choices: [
      { text: "Aller au terrain de soccer", next: "terrainSoccer" },
      { text: "Retourner dans le hall", next: "hall" }
    ]
  },
  finQuitter: {
    text: "À bientôt pour une nouvelle aventure !",
    character: "jacquot-bonjour",
    choices: []
  }
};

// --------- Gestion du jeu ---------
const textElement = document.getElementById("text");
const choicesElement = document.getElementById("choices");
const characterElement = document.getElementById("character");

const historyStack = [];

function showScene(key) {
  const scene = scenes[key];
  if (!scene) return;

  if (historyStack[historyStack.length - 1] !== key) historyStack.push(key);

  textElement.innerHTML = "";
  choicesElement.innerHTML = "";
  choicesElement.style.display = "none";

  setCharacter(scene.character);

  if (scene.choices.length === 0) {
    textElement.innerHTML = scene.text;
    return;
  }

  typeWriter(scene.text, 0, () => {
    choicesElement.style.display = "block";
    scene.choices.forEach(c => addChoiceButton(c.text, () => showScene(c.next)));

    if (key !== "start") addChoiceButton("⬅ Revenir en arrière", goBack);
  });
}

function addChoiceButton(label, action) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.onclick = action;
  choicesElement.appendChild(btn);
}

function goBack() {
  historyStack.pop();
  const prev = historyStack.pop();
  if (prev) showScene(prev);
}

function setCharacter(name) {
  const path = "images/";
  const images = {
    "cscsc1": "cscsc-1.jpg",
    "cscsc2": "cscsc-2.jpg",
    "hall": "entrée-école.jpg",
    "samuel-boussole": "samuel-boussole.png",
    "boussole": "boussole.png",
    "grand-gymnase": "grand-gymnase.jpg",
    "salle-danse": "salle-danse.jpg",
    "terrain-jeux": "terrain-jeux.jpg",
    "terrain-soccer": "terrain-soccer.jpg",
    "jacquot-bonjour": "jacquot-bonjour.png",
    "jacquot-boussole": "jacquot-boussole.png",
    "jacquot-colere": "jacquot-colere.png",
    "jacquot-confus": "jacquot-confus.png",
    "jacquot-fache": "jacquot-faché.png",
    "jacquot-neutre": "jacquot-neutre.png",
    "jacquot-peur": "jacquot-peur.png",
    "jacquot-pleure": "jacquot-pleure.png",
    "jacquot-heureux": "jacquot-heureux.png",
    "jacquot-reflechis": "jacquot-reflechis.png",
    "jacquot-serrein": "jacquot-serrein.png",
    "jacquot-triste": "jacquot-triste.png",
    "bac-jouets": "bac-jouets-salle-danse.jpg",
    "cafeteria": "cafeteria.jpg",
    "bibliotheque": "bibliotheque.jpg"
  };

  if (images[name]) {
    characterElement.style.backgroundImage = `url(${path}${images[name]})`;
    characterElement.classList.add("visible");
  } else {
    characterElement.style.backgroundImage = "";
    characterElement.classList.remove("visible");
  }
}

function typeWriter(text, i, callback) {
  if (i < text.length) {
    textElement.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1, callback), 20);
  } else if (callback) callback();
}

// Démarrage
showScene("start");
