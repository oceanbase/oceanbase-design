import { isCnLikeLocale, isEnLikeLocale } from '../../theme/default';

describe('isCnLikeLocale', () => {
  it('matches zh / ja / ko primary subtags', () => {
    expect(isCnLikeLocale('zh-cn')).toBe(true);
    expect(isCnLikeLocale('zh-TW')).toBe(true);
    expect(isCnLikeLocale('ja-JP')).toBe(true);
    expect(isCnLikeLocale('ko')).toBe(true);
    expect(isCnLikeLocale('ko_KR')).toBe(true);
  });

  it('rejects Latin and other locales', () => {
    expect(isCnLikeLocale('en')).toBe(false);
    expect(isCnLikeLocale('en-gb')).toBe(false);
    expect(isCnLikeLocale('de-DE')).toBe(false);
    expect(isCnLikeLocale('fr')).toBe(false);
  });

  it('handles empty / undefined', () => {
    expect(isCnLikeLocale(undefined)).toBe(false);
    expect(isCnLikeLocale('')).toBe(false);
  });
});

describe('isEnLikeLocale', () => {
  it('matches en and en-* subtags', () => {
    expect(isEnLikeLocale('en')).toBe(true);
    expect(isEnLikeLocale('en-gb')).toBe(true);
    expect(isEnLikeLocale('en-US')).toBe(true);
    expect(isEnLikeLocale('en_au')).toBe(true);
  });

  it('rejects non-English locales', () => {
    expect(isEnLikeLocale('zh-cn')).toBe(false);
    expect(isEnLikeLocale('de-DE')).toBe(false);
    expect(isEnLikeLocale('')).toBe(false);
    expect(isEnLikeLocale(undefined)).toBe(false);
  });
});
