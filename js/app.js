(function () {
  function initMobileMenu() {
    const button = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (!button || !menu) return;

    const closeMenu = () => {
      menu.classList.add('hidden');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open menu');
    };

    const openMenu = () => {
      menu.classList.remove('hidden');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Close menu');
    };

    button.addEventListener('click', () => {
      const isOpen = !menu.classList.contains('hidden');
      if (isOpen) closeMenu();
      else openMenu();
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (!menu.classList.contains('hidden')) {
        const clickedInside = menu.contains(event.target) || button.contains(event.target);
        if (!clickedInside) closeMenu();
      }
    });
  }

  function initDemoLogin() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      window.location.hash = '#/app/lesson/1?level=1&paid=1&from=login';
    });
  }

  function initFavoriteToggles() {
    document.querySelectorAll('[data-toggle-favorite]').forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.toggle('text-red-500');
        button.classList.toggle('text-gray-300');
      });
    });
  }

  function initRevealButtons() {
    document.querySelectorAll('[data-reveal-target]').forEach((button) => {
      button.addEventListener('click', () => {
        const target = document.getElementById(button.dataset.revealTarget);
        if (target) target.classList.remove('hidden');
        button.classList.add('hidden');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initDemoLogin();
    initFavoriteToggles();
    initRevealButtons();
    window.DarijaAudio?.bindAudioButtons(document);
    window.DarijaRouter?.init();
  });
})();
