(function () {
  const KEY = 'darija30_admin_preview_active';

  function isActive() {
    try {
      return window.localStorage?.getItem(KEY) === 'true';
    } catch (error) {
      return false;
    }
  }

  function setActive(value, options = {}) {
    try {
      if (value) window.localStorage?.setItem(KEY, 'true');
      else window.localStorage?.removeItem(KEY);
    } catch (error) {
      // Static preview only. If localStorage fails, the UI still continues safely.
    }
    updateUiFlag();
    if (options.redirect) window.location.hash = options.redirect;
    window.DarijaRouter?.handleRoute?.();
  }

  function login() {
    setActive(true, { redirect: '#/admin' });
  }

  function logout() {
    setActive(false, { redirect: '#/' });
  }

  function updateUiFlag() {
    document.body?.classList.toggle('is-admin-preview-active', isActive());
    document.documentElement?.setAttribute('data-admin-preview-active', isActive() ? 'true' : 'false');
  }

  function bindGlobalControls() {
    document.addEventListener('click', (event) => {
      const loginButton = event.target.closest('[data-admin-login-demo]');
      if (loginButton) {
        event.preventDefault();
        login();
        return;
      }

      const logoutButton = event.target.closest('[data-admin-logout]');
      if (logoutButton) {
        event.preventDefault();
        logout();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateUiFlag();
    bindGlobalControls();
  });

  window.DarijaAdminSession = {
    isActive,
    setActive,
    login,
    logout,
    updateUiFlag
  };
})();
