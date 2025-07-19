// assets/tabs.js
document.addEventListener('DOMContentLoaded', () => {
  const tabs     = document.querySelectorAll('.tabs button');
  const contents = document.querySelectorAll('.tab-content');

  function showTab(target) {
    tabs.forEach(btn => {
      const isActive = btn.dataset.target === target;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
    contents.forEach(c => {
      const isTarget = c.id === target;
      c.classList.toggle('active', isTarget);
      if (isTarget) c.removeAttribute('hidden');
      else c.setAttribute('hidden', '');
    });
  }

  tabs.forEach(btn =>
    btn.addEventListener('click', () => {
      showTab(btn.dataset.target);
      history.replaceState(null, '', `#${btn.dataset.target}`);
    })
  );

  // Onglet initial : hash ou premier onglet
  const initial = location.hash.replace('#', '');
  if (initial && document.getElementById(initial)) {
    showTab(initial);
  } else if (tabs.length) {
    showTab(tabs[0].dataset.target);
  }
});
