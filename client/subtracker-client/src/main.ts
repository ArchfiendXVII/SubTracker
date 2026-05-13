window.addEventListener("DOMContentLoaded", () => {
  const cogBtn = document.querySelector('.cog');
  const cogMenu = document.getElementById('cog-menu');

  // Toggle cog menu
  cogBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    cogMenu?.classList.toggle('visible');
  });

  // Close on click outside
  document.addEventListener('click', () => {
    cogMenu?.classList.remove('visible');
  });

  // Quit
  document.getElementById('quit')?.addEventListener('click', () => {
    window.close();
  });
});