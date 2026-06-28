(function () {
  function getLessons() {
    return Array.isArray(window.DARIJA30_LESSONS) ? window.DARIJA30_LESSONS : [];
  }

  function getBlogs() {
    return Array.isArray(window.DARIJA30_BLOG_POSTS) ? window.DARIJA30_BLOG_POSTS : [];
  }

  function flattenFreePhrases() {
    return getLessons()
      .filter((lesson) => lesson.isFree)
      .flatMap((lesson) => (lesson.phrases || []).map((phrase) => ({ lesson, phrase })));
  }

  function textContains(value) {
    return document.body.textContent.toLowerCase().includes(String(value).toLowerCase());
  }

  function hasRequiredPhraseFields(item) {
    const phrase = item.phrase;
    const required = [
      'scenario',
      'goal',
      'friendlyLatin',
      'english',
      'meaning',
      'intent',
      'cultureNote',
      'memoryHook',
      'audioNormal',
      'audioSlow'
    ];
    return required.every((field) => typeof phrase[field] === 'string' && phrase[field].trim().length > 0);
  }

  function runChecks() {
    const lessons = getLessons();
    const freeLessons = lessons.filter((lesson) => lesson.isFree);
    const freePhrases = flattenFreePhrases();
    const blogs = getBlogs();

    const checks = [
      {
        id: 'data-lessons-loaded',
        label: 'Lessons data is loaded',
        pass: lessons.length >= 30,
        detail: `${lessons.length} lessons found. Expected at least 30 including locked previews.`
      },
      {
        id: 'free-lessons-count',
        label: 'Three free lessons are open',
        pass: freeLessons.length === 3,
        detail: `${freeLessons.length} free lessons found.`
      },
      {
        id: 'free-phrases-count',
        label: 'Free lessons contain 15 useful phrases',
        pass: freePhrases.length >= 15,
        detail: `${freePhrases.length} free phrases found.`
      },
      {
        id: 'phrase-model-complete',
        label: 'Free phrases follow the Scenario → Audio → Meaning → Culture model',
        pass: freePhrases.length > 0 && freePhrases.every(hasRequiredPhraseFields),
        detail: 'Required fields: scenario, goal, friendlyLatin, english, meaning, intent, cultureNote, memoryHook, audioNormal, audioSlow.'
      },
      {
        id: 'arabic-optional',
        label: 'Arabic script remains optional in the beginner flow',
        pass: freePhrases.length > 0 && freePhrases.every((item) => item.phrase.showArabicByDefault === false),
        detail: 'All free phrases should keep Arabic script hidden by default.'
      },
      {
        id: 'friendly-latin-first',
        label: 'Friendly Latin Darija is present for every free phrase',
        pass: freePhrases.length > 0 && freePhrases.every((item) => item.phrase.friendlyLatin && !/[379٥٧٩]/.test(item.phrase.friendlyLatin)),
        detail: 'The main beginner spelling avoids confusing Arabizi numbers.'
      },
      {
        id: 'audio-paths-present',
        label: 'Normal and slow audio paths are ready',
        pass: freePhrases.length > 0 && freePhrases.every((item) => item.phrase.audioNormal?.endsWith('.mp3') && item.phrase.audioSlow?.endsWith('.mp3')),
        detail: 'This checks paths only. Real MP3 recordings still need to be added to assets/audio/.'
      },
      {
        id: 'public-pages-present',
        label: 'Core public pages exist',
        pass: ['page-home', 'page-free-lesson', 'page-30-day-plan', 'page-pricing', 'page-blog', 'page-blog-article', 'page-login'].every((id) => Boolean(document.getElementById(id))),
        detail: 'Home, free lesson, plan, pricing, blog, article, and login pages are present.'
      },
      {
        id: 'trust-pages-present',
        label: 'Trust pages exist before payment launch',
        pass: ['page-privacy', 'page-terms', 'page-refund', 'page-support'].every((id) => Boolean(document.getElementById(id)))
          && Boolean(document.querySelector('a[href="#/privacy"]'))
          && Boolean(document.querySelector('a[href="#/terms"]'))
          && Boolean(document.querySelector('a[href="#/refund"]'))
          && Boolean(document.querySelector('a[href="#/support"]')),
        detail: 'Privacy, Terms, Refund, and Support pages are available from the public footer/pricing trust strip.'
      },
      {
        id: 'app-pages-present',
        label: 'Core app pages exist',
        pass: ['page-app-dashboard', 'page-app-lessons', 'page-app-lesson', 'page-app-review', 'page-app-favorites', 'page-app-certificate'].every((id) => Boolean(document.getElementById(id))),
        detail: 'Dashboard, lessons, lesson player, review, favorites, and certificate pages are present.'
      },
      {
        id: 'blog-content-ready',
        label: 'Blog/SEO attraction layer is loaded',
        pass: blogs.length >= 6 && blogs.every((post) => post.slug && post.title && post.excerpt && Array.isArray(post.body)),
        detail: `${blogs.length} SEO posts found.`
      },
      {
        id: 'cta-free-lesson',
        label: 'Primary funnel CTA points to the free lesson',
        pass: Boolean(document.querySelector('a[href="#/free-lesson"]')),
        detail: 'The first public action should send visitors to the audio lesson.'
      },
      {
        id: 'mobile-cta',
        label: 'Mobile sticky CTA exists',
        pass: Boolean(document.getElementById('mobilePublicCta')),
        detail: 'Mobile users should always have a quick path to the free lesson.'
      },
      {
        id: 'pricing-offer-clear',
        label: 'Starter Pack price is visible',
        pass: textContains('$29') || textContains('29 one-time'),
        detail: 'The one-time Starter Pack price should be clear before Stripe is connected.'
      },
      {
        id: 'seo-meta',
        label: 'Basic SEO metadata exists',
        pass: Boolean(document.querySelector('meta[name="description"]')) && Boolean(document.querySelector('meta[property="og:title"]')),
        detail: 'Meta description and Open Graph title are present.'
      },
      {
        id: 'progress-store',
        label: 'Local progress engine is available',
        pass: Boolean(window.DarijaProgressStore && typeof window.DarijaProgressStore.getState === 'function'),
        detail: 'LocalStorage progress, favorites, and review depend on this engine.'
      }
    ];

    return checks;
  }

  function summarize(checks) {
    const passed = checks.filter((check) => check.pass).length;
    return {
      passed,
      total: checks.length,
      failed: checks.length - passed,
      ok: passed === checks.length
    };
  }

  function renderResults(root, checks) {
    if (!root) return;
    const summary = summarize(checks);
    const tone = summary.ok ? 'green' : 'yellow';
    root.innerHTML = `
      <div class="bg-${tone}-50 border border-${tone}-200 rounded-2xl p-6 mb-6">
        <p class="text-sm font-extrabold uppercase tracking-wide text-${tone}-700 mb-2">Launch QA Summary</p>
        <h2 class="text-3xl font-extrabold text-medina">${summary.passed}/${summary.total} checks passed</h2>
        <p class="text-gray-600 mt-2">${summary.ok ? 'The public MVP is structurally ready for manual browser testing.' : 'Some items need attention before launch.'}</p>
      </div>
      <div class="space-y-3">
        ${checks.map((check) => `
          <div class="bg-white border ${check.pass ? 'border-green-200' : 'border-yellow-300'} rounded-xl p-4 flex gap-3 items-start">
            <div class="text-2xl leading-none">${check.pass ? '✅' : '⚠️'}</div>
            <div>
              <h3 class="font-bold text-medina">${check.label}</h3>
              <p class="text-sm text-gray-600 mt-1">${check.detail}</p>
              <p class="text-xs font-mono text-gray-400 mt-1">${check.id}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderForPath(path) {
    if (path !== '/launch-qa') return;
    const root = document.getElementById('launchQaRoot');
    if (!root) return;
    const checks = runChecks();
    renderResults(root, checks);
  }

  function init() {
    document.addEventListener('click', (event) => {
      const button = event.target.closest('[data-run-launch-qa]');
      if (!button) return;
      const root = document.getElementById('launchQaRoot');
      const checks = runChecks();
      renderResults(root, checks);
      console.table(checks.map((check) => ({ id: check.id, pass: check.pass, detail: check.detail })));
    });
  }

  window.DarijaLaunchQA = {
    run: runChecks,
    summarize,
    renderForPath,
    init
  };

  document.addEventListener('DOMContentLoaded', init);
})();
