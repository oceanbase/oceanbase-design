import isUrl from 'is-url';

describe('isUrl', () => {
  it('path', () => {
    expect(isUrl('login')).toBe(false);
    expect(isUrl('/login')).toBe(false);
    expect(isUrl('/test/login')).toBe(false);
  });

  it('without protocol', () => {
    expect(isUrl('127.0.0.1:8080')).toBe(false);
    expect(isUrl('www.example.com')).toBe(false);
  });

  it('ip', () => {
    expect(isUrl('http://127.0.0.1:8080')).toBe(true);
    expect(isUrl('https://127.0.0.1:8080')).toBe(true);
    expect(isUrl('https://127.0.0.1:8080/test')).toBe(true);
  });

  it('url', () => {
    expect(isUrl('http://www.example.com')).toBe(true);
    expect(isUrl('https://www.example.com')).toBe(true);
    expect(isUrl('https://www.example.com/test')).toBe(true);
  });
});
