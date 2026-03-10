/**
 * Gestion du menu mobile (hamburger)
 */
function initMobileMenu() {
  const toggle = document.querySelector("#menu-btn");
  const nav = document.querySelector("#menu");
  const page = document.body;

  function openMenu() {
    toggle.ariaExpanded = "true";
    nav.ariaHidden = "false";
    page.classList.add("overflow-hidden");
  }

  function closeMenu() {
    toggle.ariaExpanded = "false";
    nav.ariaHidden = "true";
    page.classList.remove("overflow-hidden");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.ariaExpanded === "true";
      isOpen ? closeMenu() : openMenu();
    });

    const closeBtn = document.querySelector("#menu-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeMenu);
    }
  }
}
// Initialisation au chargement du DOM
initMobileMenu();