document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbarToggler = document.querySelector(".navbar-toggler");

  // ---- ABRIR/FECHAR MENU MOBILE ----
  if (openBtn && closeBtn && mobileMenu) {
    openBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
    closeBtn.addEventListener("click", () => mobileMenu.classList.remove("open"));
  }

  // ---- FECHAR MENU AO REDIMENSIONAR PARA DESKTOP ----
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992 && navbarCollapse?.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
      navbarToggler?.classList.add("collapsed");
      navbarToggler?.setAttribute("aria-expanded", "false");
    }

    // Também fecha o menu lateral customizado, se existir
    if (window.innerWidth >= 992 && mobileMenu?.classList.contains("open")) {
      mobileMenu.classList.remove("open");
    }
  });
});
