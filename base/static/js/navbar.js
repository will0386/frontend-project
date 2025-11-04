  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  openMenu.addEventListener('click', () => {
    mobileMenu.classList.add('open');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });

