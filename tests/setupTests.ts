import '@testing-library/jest-dom';
import createFetchMock from 'vitest-fetch-mock';
import MockDate from 'mockdate';
import { TextEncoder, TextDecoder } from 'util';
import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from '@oceanbase/design';
import excludeAllWarning from './shared/excludeWarning';

// To ensure snapshot stable, should disable hashed in test env.
theme.defaultConfig.hashed = false;

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.React = React;

ReactDOM.createPortal = vi.fn(modal => modal);

vi.mock('react', async () => {
  const mockReact = await vi.importActual('react');
  return {
    ...mockReact,
    useLayoutEffect: mockReact.useEffect,
  };
});

excludeAllWarning();

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

if (typeof window.URL.createObjectURL === 'undefined') {
  window.URL.createObjectURL = vi.fn();
}

// Not implemented: window.computedStyle(elt, pseudoElt)
// ref: https://github.com/NickColley/jest-axe/issues/147#issuecomment-758804533
const { getComputedStyle } = window;
window.getComputedStyle = elt => getComputedStyle(elt);

/* eslint-disable global-require */
if (typeof window !== 'undefined') {
  // ref: https://github.com/ant-design/ant-design/issues/18774
  if (!window.matchMedia) {
    Object.defineProperty(global.window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: vi.fn(() => ({
        matches: false,
        addListener: vi.fn(),
        removeListener: vi.fn(),
      })),
    });
  }
  if (!window.matchMedia) {
    Object.defineProperty(global.window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: vi.fn(query => ({
        matches: query.includes('max-width'),
        addListener: vi.fn(),
        removeListener: vi.fn(),
      })),
    });
  }
  // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

Object.defineProperty(window, 'open', {
  value: vi.fn,
});

const crypto = require('crypto');
Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr: any[]) => crypto.randomBytes(arr.length),
  },
});

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function requestAnimationFrame(cb) {
    return setTimeout(cb, 0);
  };

// browserMocks.js
export const localStorageMock = (() => {
  let store: any = {
    umi_locale: 'en-US',
  };

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem(key: string) {
      store[key] = null;
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

Object.defineProperty(window, 'cancelAnimationFrame', {
  value: () => null,
});

// 2016-11-22 15:22:44
MockDate.set(1479828164000);

Math.random = () => 0.8404419276253765;

// @ts-ignore-next-line
global.Worker = class {
  constructor(stringUrl: string) {
    // @ts-ignore-next-line
    this.url = stringUrl;
    // @ts-ignore-next-line
    this.onmessage = () => {};
  }

  postMessage(msg: string) {
    // @ts-ignore-next-line
    this.onmessage(msg);
  }
};

if (process.env.TEST_LOG === 'none') {
  console.error = () => {};
  console.warn = () => {};
  console.log = () => {};
}
