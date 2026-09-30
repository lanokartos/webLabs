'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuToggle || !mobileMenu) {
    return;
  }

  const openMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Закрити меню');
    mobileMenu.removeAttribute('hidden');
  };

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Відкрити меню');
    mobileMenu.setAttribute('hidden', '');
  };

  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  menuToggle.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });

  mobileMenu.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('a')) {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (
      target instanceof Node &&
      !menuToggle.contains(target) &&
      !mobileMenu.contains(target) &&
      menuToggle.getAttribute('aria-expanded') === 'true'
    ) {
      closeMenu();
    }
  });

  const desktopMediaQuery = window.matchMedia('(min-width: 64rem)');
  const handleBreakpointChange = (mediaQueryList) => {
    if (mediaQueryList.matches && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  };

  desktopMediaQuery.addEventListener('change', handleBreakpointChange);
});
