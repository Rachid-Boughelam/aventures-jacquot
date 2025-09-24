// Récupération des éléments
const playBtn = document.getElementById('playBtn');
const episodesDropdown = document.getElementById('episodesDropdown');

// Clic sur le bouton Jouer : bascule l'affichage du menu
playBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Empêche la fermeture immédiate
  episodesDropdown.style.display =
    episodesDropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Ferme le menu si on clique ailleurs
document.addEventListener('click', () => {
  episodesDropdown.style.display = 'none';
});
