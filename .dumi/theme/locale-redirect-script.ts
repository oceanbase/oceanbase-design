/**
 * Inline script injected into every static page <head>.
 * On the English homepage `/`, it redirects zh-preferring visitors to `/zh-CN`
 * during HTML parsing, before first paint, to avoid an English flash.
 *
 * Keep the rules in sync with applyLocalePreference in ./locale-preference.ts
 * (the React fallback used by hooks/useLocalePreference): stored `locale` wins;
 * otherwise scan navigator.languages (zh* → /zh-CN, en* stays). Homepage
 * (`/`, `/index.html`) only; query and hash are preserved.
 */
export const LOCALE_REDIRECT_SCRIPT = `(function () {
      try {
        var rawPath = window.location.pathname.replace(/\\/+$/, '') || '/';
        var isHome = rawPath === '/' || rawPath === '/index.html';
        if (!isHome) return;
        var target = null;
        var decided = false;
        try {
          var stored = window.localStorage.getItem('locale');
          if (stored === 'zh-CN' || stored === 'cn') {
            target = '/zh-CN';
            decided = true;
          } else if (stored === 'en-US' || stored === 'en') {
            decided = true;
          }
        } catch (e) {}
        if (!decided) {
          var langs = window.navigator.languages && window.navigator.languages.length
            ? window.navigator.languages
            : [window.navigator.language];
          for (var i = 0; i < langs.length; i++) {
            var lang = String(langs[i] || '').toLowerCase();
            if (lang.indexOf('zh') === 0) {
              target = '/zh-CN';
              break;
            }
            if (lang.indexOf('en') === 0) {
              break;
            }
          }
        }
        if (target) {
          window.location.replace(target + window.location.search + window.location.hash);
        }
      } catch (e) {}
    })();`;
