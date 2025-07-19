// assets/search.js
// Filtre les traitements et le planning selon la saisie dans la barre de recherche

document.addEventListener('DOMContentLoaded', () => {
  const searchInput    = document.getElementById('searchInput');
  const treatmentItems = document.querySelectorAll('.treatment-item');
  const planningItems  = document.querySelectorAll('#planning .section ul li');

  function filterItems() {
    const query = searchInput.value.trim().toLowerCase();

    // Affiche / masque chaque traitement
    treatmentItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? '' : 'none';
    });

    // Affiche / masque chaque élément du planning
    planningItems.forEach(li => {
      const text = li.textContent.toLowerCase();
      li.style.display = text.includes(query) ? '' : 'none';
    });
  }

  // Lancement du filtrage à chaque modification
  searchInput.addEventListener('input', filterItems);
});