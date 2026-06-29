(function () {
  const posts = () => window.DARIJA30_BLOG_POSTS || [];

  function getMeta(name) {
    return document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
  }

  function setMeta(name, content) {
    const tag = getMeta(name);
    if (tag) tag.setAttribute('content', content);
  }

  function currentSlug(path) {
    const prefix = '/blog/';
    if (!path.startsWith(prefix)) return '';
    return decodeURIComponent(path.slice(prefix.length).replace(/^article\//, ''));
  }

  function findPost(slug) {
    return posts().find((post) => post.slug === slug) || null;
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderPostCard(post) {
    return `
      <a href="#/blog/${escapeHtml(post.slug)}" class="blog-card group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition block">
        <div class="blog-card__visual blog-image-placeholder h-40 flex items-center justify-center text-5xl" aria-hidden="true">${escapeHtml(post.heroIcon)}</div>
        <div class="p-6">
          <div class="flex items-center gap-2 mb-3 text-xs font-extrabold uppercase tracking-wide">
            <span class="text-terracotta">${escapeHtml(post.category)}</span>
            <span class="text-gray-300">•</span>
            <span class="text-gray-400">${escapeHtml(post.readingTime)}</span>
          </div>
          <h3 class="font-extrabold text-xl mb-3 text-medina group-hover:text-chefchaouen leading-snug">${escapeHtml(post.title)}</h3>
          <p class="text-gray-600 text-sm mb-5 leading-relaxed">${escapeHtml(post.excerpt)}</p>
          <span class="text-chefchaouen font-bold text-sm">Read the guide →</span>
        </div>
      </a>`;
  }

  function renderPhraseRows(phrases, sampleIntro = '') {
    if (!Array.isArray(phrases) || !phrases.length) return '';

    function renderPhraseCard(phrase) {
      const mode = phrase.mode || (phrase.audio ? 'audio' : 'darija');
      const hasAudio = mode === 'audio' && phrase.audio;
      const badge = mode === 'audio'
        ? '<span class="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-chefchaouen">Audio sample</span>'
        : mode === 'english'
          ? '<span class="inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-700">Learn this in Darija</span>'
          : '<span class="inline-flex rounded-full bg-gray-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-gray-500">Written sample</span>';

      const mainText = mode === 'english'
        ? `<p class="font-bold text-xl text-medina leading-snug mb-1">${escapeHtml(phrase.meaning)}</p>`
        : `<p class="font-mono text-lg font-extrabold text-chefchaouen mb-1">${escapeHtml(phrase.latin)}</p><p class="font-bold text-medina">${escapeHtml(phrase.meaning)}</p>`;

      return `
        <div class="blog-phrase-sample rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div class="flex items-start justify-between gap-4">
            <div class="min-w-0">
              <div class="mb-3">${badge}</div>
              ${mainText}
            </div>
            ${hasAudio ? `<button type="button" data-audio-play data-speed="1" data-audio-url="${escapeHtml(phrase.audio || '')}" class="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-blue-50 text-chefchaouen border border-blue-100 hover:bg-chefchaouen hover:text-white transition" aria-label="Hear ${escapeHtml(phrase.latin || phrase.meaning)}">🔊</button>` : ''}
          </div>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed">${escapeHtml(phrase.note)}</p>
        </div>`;
    }

    return `
      <div class="my-6">
        ${sampleIntro ? `<p class="rounded-2xl bg-amber-50 border border-amber-100 text-amber-900 text-sm leading-relaxed p-4 mb-4">${escapeHtml(sampleIntro)}</p>` : ''}
        <div class="space-y-3">
          ${phrases.slice(0, 3).map(renderPhraseCard).join('')}
        </div>
      </div>`;
  }

  function renderArticleSection(section) {
    return `
      <section class="blog-article-section">
        <h2 class="text-2xl md:text-3xl font-extrabold text-medina mt-10 mb-4">${escapeHtml(section.heading)}</h2>
        ${(section.paragraphs || []).map((paragraph) => `<p class="text-gray-700 leading-8 mb-4">${escapeHtml(paragraph)}</p>`).join('')}
        ${renderPhraseRows(section.phrases, section.sampleIntro)}
      </section>`;
  }

  function renderBlogList() {
    const root = document.getElementById('blogListRoot');
    if (!root) return;
    const allPosts = posts();
    root.innerHTML = `
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-chefchaouen mb-4">SEO attraction layer</span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-medina mb-4">Moroccan Darija Travel Guides for English Speakers</h1>
        <p class="text-lg text-gray-600 leading-relaxed">Short, practical articles that answer what travelers search before Morocco — then move them into a free audio lesson.</p>
      </div>

      <div class="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm mb-10">
        <div class="grid md:grid-cols-3 gap-5 text-left">
          <div class="rounded-2xl bg-red-50 border border-red-100 p-5">
            <p class="text-2xl mb-2">🎧</p>
            <h2 class="font-bold text-medina mb-1">Audio lesson CTA</h2>
            <p class="text-sm text-gray-600">Each guide points to the free audio lesson, not a dead article page.</p>
          </div>
          <div class="rounded-2xl bg-blue-50 border border-blue-100 p-5">
            <p class="text-2xl mb-2">🔎</p>
            <h2 class="font-bold text-medina mb-1">Search intent first</h2>
            <p class="text-sm text-gray-600">Topics match real beginner questions: taxi, market, café, MSA vs Darija.</p>
          </div>
          <div class="rounded-2xl bg-green-50 border border-green-100 p-5">
            <p class="text-2xl mb-2">🇲🇦</p>
            <h2 class="font-bold text-medina mb-1">Culture-aware</h2>
            <p class="text-sm text-gray-600">The article explains what the phrase means socially, not only literally.</p>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        ${allPosts.map(renderPostCard).join('')}
      </div>

      <div class="mt-14 rounded-3xl zellige-accent border border-gray-100 p-8 md:p-10 text-center shadow-sm">
        <p class="text-sm font-extrabold uppercase tracking-wide text-terracotta mb-2">Start where the blog ends</p>
        <h2 class="text-3xl font-extrabold text-medina mb-3">Hear your first phrase now.</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-6">No signup. No alphabet wall. Just a real Moroccan taxi phrase with normal and slow audio controls.</p>
        <a href="#/free-lesson" class="inline-block bg-terracotta hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-md transition">Start free audio lesson</a>
      </div>`;
    window.DarijaAudio?.bindAudioButtons(root);
  }

  function renderArticle(path) {
    const root = document.getElementById('blogArticleRoot');
    if (!root) return;
    const slug = currentSlug(path);
    const post = findPost(slug) || posts()[0];
    if (!post) return;

    document.title = `${post.title} | Darija30`;
    setMeta('description', post.excerpt);
    setMeta('og:title', `${post.title} | Darija30`);
    setMeta('og:description', post.excerpt);

    root.innerHTML = `
      <article class="max-w-3xl mx-auto px-4 py-12">
        <a href="#/blog" class="inline-flex items-center gap-2 text-sm font-bold text-chefchaouen hover:underline mb-8">← Back to blog</a>
        <div class="mb-8">
          <div class="text-5xl mb-5" aria-hidden="true">${escapeHtml(post.heroIcon)}</div>
          <div class="flex flex-wrap items-center gap-2 mb-4 text-xs font-extrabold uppercase tracking-wide">
            <span class="rounded-full bg-red-50 text-terracotta px-3 py-1">${escapeHtml(post.category)}</span>
            <span class="rounded-full bg-gray-100 text-gray-500 px-3 py-1">${escapeHtml(post.readingTime)}</span>
            <span class="rounded-full bg-blue-50 text-chefchaouen px-3 py-1">For English speakers</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-medina leading-tight mb-5">${escapeHtml(post.title)}</h1>
          <p class="text-xl text-gray-600 leading-relaxed">${escapeHtml(post.excerpt)}</p>
        </div>

        <div class="rounded-3xl bg-blue-50 border border-blue-100 p-6 mb-10">
          <p class="text-xs font-extrabold uppercase tracking-wide text-chefchaouen mb-2">Search intent</p>
          <p class="font-bold text-medina">${escapeHtml(post.keywordIntent)}</p>
          <p class="text-sm text-gray-600 mt-2">Reader: ${escapeHtml(post.targetReader)}</p>
        </div>

        <div class="blog-article-body">
          ${(post.body || []).map(renderArticleSection).join('')}
        </div>

        <div class="mt-12 rounded-3xl border border-red-100 bg-red-50 p-7 text-center">
          <p class="text-sm font-extrabold uppercase tracking-wide text-terracotta mb-2">Next step</p>
          <h2 class="text-2xl font-extrabold text-medina mb-3">Do not just read Darija. Hear it.</h2>
          <p class="text-gray-600 mb-6">Get the full method: normal audio, slow audio, video dialogue, cultural intent, and quick practice.</p>
          <a href="${escapeHtml(post.lessonLink)}" class="inline-block bg-terracotta hover:bg-red-700 text-white px-7 py-3 rounded-xl font-bold shadow-md transition">${escapeHtml(post.lessonCta)}</a>
        </div>
      </article>`;
    window.DarijaAudio?.bindAudioButtons(root);
  }

  function renderForPath(path) {
    if (path === '/blog') {
      document.title = 'Moroccan Darija Travel Blog | Darija30';
      setMeta('description', 'Practical Moroccan Darija guides for English speakers visiting Morocco: taxi, café, market, MSA vs Darija, and friendly Latin spelling.');
      renderBlogList();
      return;
    }
    if (path.startsWith('/blog/')) {
      renderArticle(path);
    }
  }

  window.DarijaBlog = { renderForPath, renderBlogList, renderArticle };
})();
