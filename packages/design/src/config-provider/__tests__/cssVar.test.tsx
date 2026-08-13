import React from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { App, Button, ConfigProvider } from '@oceanbase/design';

const CSS_VAR_KEY = 'design-cssvar-test';

function cleanupInjectedStyles() {
  document.querySelectorAll('style').forEach(el => el.remove());
}

function collectStyleText(doc: Document) {
  return Array.from(doc.querySelectorAll('style'))
    .map(el => el.textContent || '')
    .join('\n');
}

function hasScopeClass(el: Element | null, stableKey?: string) {
  if (!el) return false;
  return Array.from(el.classList).some(
    cls => cls.startsWith('css-var-') || (stableKey ? cls === stableKey : false)
  );
}

function findScopeAncestor(from: Element | null, stableKey?: string) {
  let node: Element | null = from;
  while (node) {
    if (hasScopeClass(node, stableKey)) return node;
    node = node.parentElement;
  }
  return null;
}

function countCssVarScopes(styleText: string, stableKey: string) {
  const re = new RegExp(`\\.${stableKey}\\s*\\{[^}]*--ant-color-`, 'g');
  return (styleText.match(re) || []).length;
}

function hasGlobalTokenScope(styleText: string, stableKey: string) {
  return countCssVarScopes(styleText, stableKey) > 0;
}

function auditCssVar(
  doc: Document,
  options: { probeSelector: string; stableKey?: string; appSelector?: string }
) {
  const probe = doc.querySelector(options.probeSelector);
  const app = doc.querySelector(options.appSelector ?? '.ant-app');
  const styleText = collectStyleText(doc);
  const stableKey = options.stableKey;

  return {
    scopeOnApp: hasScopeClass(app, stableKey),
    scopeOnContent: Boolean(findScopeAncestor(probe, stableKey)),
    hasAntVars: styleText.includes('--ant-color-'),
    stableKeyInStyle: stableKey ? hasGlobalTokenScope(styleText, stableKey) : false,
    scopeCount: stableKey ? countCssVarScopes(styleText, stableKey) : 0,
  };
}

describe('ConfigProvider cssVar', () => {
  beforeEach(() => {
    cleanupInjectedStyles();
  });

  afterEach(() => {
    cleanupInjectedStyles();
  });
  it('uses App div by default when cssVar is enabled', () => {
    const { container } = render(
      <ConfigProvider theme={{ cssVar: true }}>
        <span data-testid="child">content</span>
      </ConfigProvider>
    );

    expect(container.querySelector('.ant-app')?.tagName).toBe('DIV');
  });

  it('does not render App wrapper when cssVar is disabled', () => {
    const { container, getByTestId } = render(
      <ConfigProvider>
        <span data-testid="child">content</span>
      </ConfigProvider>
    );

    expect(getByTestId('child')).toBeTruthy();
    expect(container.querySelector('.ant-app')).toBeNull();
  });

  it('appProps overrides default App component when cssVar is enabled', () => {
    const { container } = render(
      <ConfigProvider theme={{ cssVar: true }} appProps={{ component: 'section' }}>
        <span>content</span>
      </ConfigProvider>
    );

    expect(container.querySelector('.ant-app')?.tagName).toBe('SECTION');
  });

  it('injects --ant-* variables and mounts scope class with stable cssVar.key', () => {
    const { baseElement } = render(
      <ConfigProvider theme={{ cssVar: { prefix: 'ant', key: CSS_VAR_KEY } }}>
        <Button data-probe>btn</Button>
      </ConfigProvider>
    );

    const audit = auditCssVar(baseElement.ownerDocument, {
      probeSelector: '[data-probe]',
      stableKey: CSS_VAR_KEY,
    });

    expect(audit.scopeOnApp).toBe(true);
    expect(audit.scopeOnContent).toBe(true);
    expect(audit.hasAntVars).toBe(true);
    expect(audit.stableKeyInStyle).toBe(true);
    expect(audit.scopeCount).toBe(1);
  });

  it('loses App scope when appProps forces component=false under cssVar', () => {
    const { baseElement } = render(
      <ConfigProvider
        theme={{ cssVar: { prefix: 'ant', key: CSS_VAR_KEY } }}
        appProps={{ component: false }}
      >
        <Button data-probe>btn</Button>
      </ConfigProvider>
    );

    const audit = auditCssVar(baseElement.ownerDocument, {
      probeSelector: '[data-probe]',
      stableKey: CSS_VAR_KEY,
    });

    expect(audit.scopeOnApp).toBe(false);
  });

  it('nested ConfigProvider reuses stable cssVar.key', () => {
    const { baseElement } = render(
      <ConfigProvider theme={{ cssVar: { prefix: 'ant', key: CSS_VAR_KEY } }}>
        <ConfigProvider
          theme={{
            cssVar: { prefix: 'ant', key: CSS_VAR_KEY },
            components: { Slider: { trackBg: '#f00' } },
          }}
        >
          <Button data-probe>btn</Button>
        </ConfigProvider>
      </ConfigProvider>
    );

    const audit = auditCssVar(baseElement.ownerDocument, {
      probeSelector: '[data-probe]',
      stableKey: CSS_VAR_KEY,
    });

    expect(audit.scopeOnApp).toBe(true);
    expect(audit.scopeOnContent).toBe(true);
    expect(audit.hasAntVars).toBe(true);
    expect(audit.stableKeyInStyle).toBe(true);
    expect(audit.scopeCount).toBe(1);
  });

  it('nested ConfigProvider without cssVar.key does not pin stable scope in styles', () => {
    const { baseElement } = render(
      <ConfigProvider theme={{ cssVar: { prefix: 'ant' } }}>
        <ConfigProvider theme={{ components: { Slider: { trackBg: '#f00' } } }}>
          <Button className="cssvar-probe-nested">btn</Button>
        </ConfigProvider>
      </ConfigProvider>
    );

    const styleText = collectStyleText(baseElement.ownerDocument);

    expect(
      auditCssVar(baseElement.ownerDocument, {
        probeSelector: '.cssvar-probe-nested',
      }).scopeOnApp
    ).toBe(true);
    expect(styleText.includes('--ant-color-')).toBe(true);
    expect(hasGlobalTokenScope(styleText, CSS_VAR_KEY)).toBe(false);
  });

  it('simulates legacy double-App workaround: outer App div carries scope', () => {
    const { baseElement } = render(
      <ConfigProvider theme={{ cssVar: { prefix: 'ant' } }}>
        <App component={false}>
          <App component="div">
            <Button data-probe>btn</Button>
          </App>
        </App>
      </ConfigProvider>
    );

    const audit = auditCssVar(baseElement.ownerDocument, {
      probeSelector: '[data-probe]',
    });

    expect(audit.scopeOnApp).toBe(true);
    expect(audit.scopeOnContent).toBe(true);
    expect(audit.hasAntVars).toBe(true);
  });
});
