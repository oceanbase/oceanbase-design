import { describe, it, expect } from 'vitest';
import vm from 'vm';
import { LOCALE_REDIRECT_SCRIPT } from '../../.dumi/theme/locale-redirect-script';

/**
 * Behavior tests for the homepage locale-redirect script injected into the
 * static HTML <head>. Runs the real script string in a vm sandbox.
 * Keep semantics in sync with applyLocalePreference in ./locale-preference.ts.
 */

interface BrowserContext {
  pathname?: string;
  search?: string;
  hash?: string;
  /** Value returned by localStorage.getItem('locale'); null when unset */
  stored?: string | null;
  languages?: string[];
}

const runScript = ({
  pathname = '/',
  search = '',
  hash = '',
  stored = null,
  languages = ['en-US'],
}: BrowserContext = {}): string[] => {
  const replaced: string[] = [];
  const sandbox = {
    window: {
      location: {
        pathname,
        search,
        hash,
        replace: (url: string) => {
          replaced.push(url);
        },
      },
      localStorage: {
        getItem: () => stored,
      },
      navigator: {
        languages,
        language: languages[0] ?? 'en-US',
      },
    },
  };
  sandbox.window.window = sandbox.window;
  sandbox.window.document = {};
  vm.runInNewContext(LOCALE_REDIRECT_SCRIPT, sandbox);
  return replaced;
};

describe('locale redirect head script', () => {
  it('redirects zh-preferring browsers to /zh-CN on first visit', () => {
    expect(runScript({ languages: ['zh-CN', 'zh', 'en-US'] })).toEqual(['/zh-CN']);
  });

  it('keeps query and hash when redirecting', () => {
    expect(runScript({ search: '?theme=dark', hash: '#banner', languages: ['zh-CN'] })).toEqual([
      '/zh-CN?theme=dark#banner',
    ]);
  });

  it('redirects when zh is the first recognized language, even if en follows', () => {
    expect(runScript({ languages: ['zh-CN', 'en-US'] })).toEqual(['/zh-CN']);
  });

  it('scans past unrecognized languages before zh (same as applyLocalePreference)', () => {
    expect(runScript({ languages: ['ja-JP', 'zh-CN'] })).toEqual(['/zh-CN']);
  });

  it('does not redirect en-preferring browsers', () => {
    expect(runScript({ languages: ['en-US', 'zh-CN'] })).toEqual([]);
  });

  it('redirects when stored locale is zh-CN, regardless of browser language', () => {
    expect(runScript({ stored: 'zh-CN', languages: ['en-US'] })).toEqual(['/zh-CN']);
  });

  it('does not redirect when stored locale is en-US, even in a zh browser', () => {
    expect(runScript({ stored: 'en-US', languages: ['zh-CN'] })).toEqual([]);
  });

  it('never redirects on the /zh-CN homepage or its trailing-slash form', () => {
    expect(runScript({ pathname: '/zh-CN', languages: ['zh-CN'] })).toEqual([]);
    expect(runScript({ pathname: '/zh-CN/', languages: ['zh-CN'] })).toEqual([]);
  });

  it('never redirects on inner pages', () => {
    expect(runScript({ pathname: '/components/table', languages: ['zh-CN'] })).toEqual([]);
  });

  it('treats /index.html as the homepage', () => {
    expect(runScript({ pathname: '/index.html', languages: ['zh-CN'] })).toEqual(['/zh-CN']);
  });
});
