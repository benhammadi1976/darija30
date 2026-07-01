(function () {
  const publicRoutes = {
    '/': 'page-home',
    '/free-lesson': 'page-free-lesson',
    '/30-day-plan': 'page-30-day-plan',
    '/pricing': 'page-pricing',
    '/about-darija': 'page-about-darija',
    '/blog': 'page-blog',
    '/login': 'page-login',
    '/launch-qa': 'page-launch-qa',
    '/audio-qa': 'page-audio-qa',
    '/privacy': 'page-privacy',
    '/terms': 'page-terms',
    '/refund': 'page-refund',
    '/support': 'page-support'
  };

  const appRoutes = {
    '/app/dashboard': 'page-app-dashboard',
    '/app/lessons': 'page-app-lessons',
    '/app/review': 'page-app-review',
    '/app/weekly-wheel': 'page-app-weekly-wheel',
    '/app/favorites': 'page-app-favorites',
    '/app/certificate': 'page-app-certificate'
  };

  const adminRoutes = {
    '/admin': 'page-admin-dashboard',
    '/admin/login': 'page-admin-login',
    '/admin/levels': 'page-admin-levels',
    '/admin/lesson-media': 'page-admin-audio',
    '/admin/users': 'page-admin-users',
    '/admin/payments': 'page-admin-payments',
    '/admin/reset-password': 'page-admin-reset-password'
  };

  function currentPath() {
    return (window.location.hash || '#/').replace(/^#/, '') || '/';
  }

  function routeBase(path) {
    return String(path || '').split('?')[0];
  }

  function setDisplay(element, visible, display = 'block') {
    if (!element) return;
    element.style.display = visible ? display : 'none';
  }

  function updateNavLinks(selector, path) {
    document.querySelectorAll(selector).forEach((link) => {
      const hrefPath = (link.getAttribute('href') || '').replace(/^#/, '');
      const isActive = hrefPath === path || hrefPath === routeBase(path) || (hrefPath === '/admin/levels' && routeBase(path).startsWith('/admin/levels/'));
      link.classList.toggle('is-active', isActive);
      if (selector.includes('app-nav') || selector.includes('admin-nav')) {
        link.classList.toggle('opacity-100', isActive);
        link.classList.toggle('opacity-70', !isActive);
        link.classList.toggle('text-blue-400', isActive && selector.includes('admin-nav'));
      }
    });
  }

  function resolveTargetPage(path) {
    const basePath = routeBase(path);
    if (publicRoutes[basePath]) return publicRoutes[basePath];
    if (appRoutes[basePath]) return appRoutes[basePath];
    if (basePath.startsWith('/app/lesson/')) return 'page-app-lesson';
    if (basePath.startsWith('/blog/')) return 'page-blog-article';
    if (basePath.startsWith('/admin/levels/')) return 'page-admin-levels';
    if (adminRoutes[basePath]) return adminRoutes[basePath];
    return 'page-home';
  }

  function handleRoute() {
    const path = currentPath();
    const basePath = routeBase(path);
    if (basePath === '/admin/audio' || basePath === '/admin/lessons' || basePath === '/admin/phrases') {
      window.location.replace('#/admin/lesson-media');
      return;
    }
    const isAppRoute = basePath.startsWith('/app/');
    const isAdminRoute = basePath.startsWith('/admin');
    const isAdminSessionActive = Boolean(window.DarijaAdminSession?.isActive?.() && window.DarijaSupabaseMedia?.readSession?.()?.access_token);
    const isLoginRoute = basePath === '/login';
    const targetPageId = resolveTargetPage(path);

    document.querySelectorAll('.page').forEach((page) => page.classList.remove('active'));

    const isPublicRoute = !isAppRoute && !isAdminRoute;
    const showPublicFooter = isPublicRoute && !isLoginRoute;
    document.body.classList.toggle('is-public-route', isPublicRoute);
    document.body.classList.toggle('is-app-route', isAppRoute);
    document.body.classList.toggle('is-admin-route', isAdminRoute);
    document.body.classList.toggle('is-admin-session-active', isAdminSessionActive);
    document.body.classList.toggle('has-mobile-public-cta', showPublicFooter);

    setDisplay(document.getElementById('main-nav'), isPublicRoute);
    setDisplay(document.getElementById('app-nav'), isAppRoute);
    setDisplay(document.getElementById('admin-nav'), isAdminRoute && isAdminSessionActive);
    setDisplay(document.getElementById('main-footer'), showPublicFooter);

    updateNavLinks('.public-nav-link, .mobile-nav-link', path);
    updateNavLinks('.app-nav-link', path);
    updateNavLinks('.admin-nav-link', path);

    const targetPage = document.getElementById(targetPageId) || document.getElementById('page-home');
    if (targetPage) targetPage.classList.add('active');

    window.DarijaLessonPlayer?.renderForPath(path);
    window.DarijaBlog?.renderForPath(path);
    window.DarijaLaunchQA?.renderForPath(path);
    window.DarijaAudioReadiness?.renderForPath(path);
    window.DarijaAdminPreview?.renderForPath(path);
    window.DarijaAdminResetPassword?.renderForPath(path);

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function init() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  window.DarijaRouter = { init, handleRoute };
})();
