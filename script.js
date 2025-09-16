// Récupération des éléments
const playBtn = document.getElementById('playBtn');
const episodesDropdown = document.getElementById('episodesDropdown');
const boussoleLink = document.getElementById('boussoleLink');

// Fonction pour rediriger vers le premier épisode
function startEpisode() {
  window.location.href = "premier-episode-boussole/boussole.html"; 
}

// Clic sur le bouton Jouer : bascule le menu
playBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Empêche la fermeture immédiate
  episodesDropdown.style.display = episodesDropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Clic sur le lien "boussole perdue"
boussoleLink.addEventListener('click', (e) => {
  e.preventDefault(); // Empêche le lien par défaut
  startEpisode();
});

// Ferme le menu si on clique ailleurs sur la page
document.addEventListener('click', () => {
  episodesDropdown.style.display = 'none';
});
