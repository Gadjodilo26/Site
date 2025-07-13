document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs button');
  const contents = document.querySelectorAll('.tab-content');

  function showTab(target) {
    // Active tab
    tabs.forEach(btn =>
      btn.dataset.target === target
        ? btn.classList.add('active')
        : btn.classList.remove('active')
    );
    // Affiche le contenu correspondant
    contents.forEach(c =>
      c.id === target
        ? c.classList.add('active')
        : c.classList.remove('active')
    );
  }

  tabs.forEach(btn =>
    btn.addEventListener('click', () => showTab(btn.dataset.target))
  );

  // Onglet par défaut
  if (tabs.length) showTab(tabs[0].dataset.target);
});
