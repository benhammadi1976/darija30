(function () {
  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function statusBox(message, tone = 'info') {
    const map = {
      success: 'bg-green-50 text-green-800 border-green-200',
      error: 'bg-red-50 text-red-800 border-red-200',
      warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
      info: 'bg-blue-50 text-blue-800 border-blue-200'
    };
    return `<div data-reset-password-status class="mt-4 rounded-2xl border px-4 py-3 text-sm font-extrabold ${map[tone] || map.info}">${escapeHtml(message)}</div>`;
  }

  function setStatus(root, message, tone = 'info') {
    const slot = root.querySelector('[data-reset-password-status-slot]');
    if (!slot) return;
    slot.innerHTML = message ? statusBox(message, tone) : '';
  }

  function readConfig() {
    return window.DarijaSupabaseMedia?.readConfig?.() || { url: '', publishableKey: '' };
  }

  function hasRecoverySession() {
    return Boolean(window.DarijaSupabaseMedia?.readRecoverySession?.()?.access_token);
  }

  function renderMissingRecovery(root) {
    const config = readConfig();
    root.innerHTML = `
      <div class="rounded-3xl border border-yellow-200 bg-yellow-50 p-5 text-right">
        <h2 class="text-xl font-black text-yellow-900 mb-2">رابط تغيير كلمة السر غير موجود أو انتهى</h2>
        <p class="text-sm text-yellow-900 leading-7 mb-4">افتح Supabase ثم أرسل رابط Password recovery جديد، واضغط الرابط فورًا. لا تستعمل الروابط القديمة.</p>
        <div class="rounded-2xl bg-white/70 border border-yellow-200 p-4 text-xs leading-6" dir="ltr">
          <p><strong>Project URL:</strong> ${escapeHtml(config.url || 'Not saved')}</p>
          <p><strong>Publishable key:</strong> ${config.publishableKey ? 'Saved in this browser' : 'Missing — save it in #/admin/audio first'}</p>
        </div>
        <a href="#/admin/audio" class="mt-4 inline-flex rounded-xl bg-terracotta px-5 py-3 text-sm font-extrabold text-white hover:bg-red-700">الرجوع إلى مركز ملفات الدروس</a>
      </div>
    `;
  }

  function renderForm(root) {
    const config = readConfig();
    root.innerHTML = `
      <form data-admin-reset-password-form class="rounded-3xl border border-gray-200 bg-gray-50 p-5 text-right">
        <div class="mb-5 rounded-2xl bg-blue-50 border border-blue-100 p-4 text-sm leading-7 text-blue-900">
          <p class="font-extrabold mb-1">هذه الصفحة وصلت من رابط Supabase recovery.</p>
          <p>اكتب كلمة سر جديدة، ثم استعملها لاحقًا في مركز ملفات الدروس عند Login admin.</p>
        </div>
        <label class="block text-xs font-extrabold text-gray-500 uppercase tracking-wide mb-2" for="adminNewPassword">كلمة السر الجديدة</label>
        <input id="adminNewPassword" data-admin-new-password type="password" autocomplete="new-password" class="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left font-bold focus:border-chefchaouen focus:outline-none focus:ring-2 focus:ring-blue-100" minlength="8" required>
        <label class="block text-xs font-extrabold text-gray-500 uppercase tracking-wide mb-2 mt-4" for="adminConfirmPassword">تأكيد كلمة السر</label>
        <input id="adminConfirmPassword" data-admin-confirm-password type="password" autocomplete="new-password" class="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left font-bold focus:border-chefchaouen focus:outline-none focus:ring-2 focus:ring-blue-100" minlength="8" required>
        <div class="mt-4 rounded-2xl bg-white border border-gray-200 p-4 text-xs leading-6" dir="ltr">
          <p><strong>Project URL:</strong> ${escapeHtml(config.url || 'Not saved')}</p>
          <p><strong>Publishable key:</strong> ${config.publishableKey ? 'Saved in this browser' : 'Missing — save it in #/admin/audio first'}</p>
        </div>
        <div data-reset-password-status-slot></div>
        <div class="mt-5 flex flex-col sm:flex-row gap-3 justify-start">
          <button type="submit" class="rounded-xl bg-terracotta px-6 py-3 text-sm font-extrabold text-white hover:bg-red-700">حفظ كلمة السر الجديدة</button>
          <a href="#/admin/audio" class="rounded-xl bg-white border border-gray-200 px-6 py-3 text-sm font-extrabold text-gray-700 hover:bg-gray-50 text-center">إلغاء والرجوع</a>
        </div>
      </form>
    `;

    const form = root.querySelector('[data-admin-reset-password-form]');
    form?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const password = root.querySelector('[data-admin-new-password]')?.value || '';
      const confirmPassword = root.querySelector('[data-admin-confirm-password]')?.value || '';
      if (password.length < 8) {
        setStatus(root, 'كلمة السر يجب أن تكون 8 أحرف على الأقل.', 'error');
        return;
      }
      if (password !== confirmPassword) {
        setStatus(root, 'كلمتا السر غير متطابقتين.', 'error');
        return;
      }
      try {
        setStatus(root, 'جاري حفظ كلمة السر الجديدة...', 'info');
        await window.DarijaSupabaseMedia?.updateRecoveryPassword?.(password);
        setStatus(root, 'تم تغيير كلمة السر بنجاح. ارجع الآن إلى مركز ملفات الدروس وسجل الدخول بكلمة السر الجديدة.', 'success');
        form.querySelector('button[type="submit"]')?.setAttribute('disabled', 'disabled');
        setTimeout(() => {
          window.location.hash = '#/admin/audio';
        }, 1200);
      } catch (error) {
        setStatus(root, error?.message || 'لم يتم تغيير كلمة السر. أرسل رابط recovery جديد وحاول فورًا.', 'error');
      }
    });
  }

  function renderForPath(path) {
    if (path !== '/admin/reset-password') return;
    const root = document.getElementById('adminResetPasswordRoot');
    if (!root) return;
    if (!hasRecoverySession()) renderMissingRecovery(root);
    else renderForm(root);
  }

  window.DarijaAdminResetPassword = { renderForPath };
})();
