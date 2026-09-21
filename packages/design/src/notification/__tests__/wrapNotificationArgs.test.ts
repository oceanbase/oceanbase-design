import { resolveDuration } from '../wrapNotificationArgs';

describe('notification resolveDuration', () => {
  it('returns 0 for error by default', () => {
    expect(resolveDuration('error', 'desc', { message: 'Error' })).toBe(0);
  });

  it('returns 5 for title only', () => {
    expect(resolveDuration('success', undefined, { message: 'OK' })).toBe(5);
  });

  it('returns 10 when description exists', () => {
    expect(resolveDuration('info', 'details', { message: 'Info' })).toBe(10);
  });

  it('respects explicit duration', () => {
    expect(resolveDuration('success', 'details', { message: 'OK', duration: 3 })).toBe(3);
  });

  it('respects explicit duration on error', () => {
    expect(resolveDuration('error', 'details', { message: 'Error', duration: 8 })).toBe(8);
  });

  it('applies the configured duration to every type', () => {
    expect(resolveDuration('error', 'desc', { message: 'Error' }, 3)).toBe(3);
    expect(resolveDuration('success', undefined, { message: 'OK' }, 2)).toBe(2);
    expect(resolveDuration('info', 'details', { message: 'Info' }, 0)).toBe(0);
  });

  it('lets explicit duration win over the configured duration', () => {
    expect(resolveDuration('error', 'desc', { message: 'Error', duration: 9 }, 6)).toBe(9);
    expect(resolveDuration('error', 'desc', { message: 'Error', duration: 0 }, 6)).toBe(0);
  });

  it('keeps the built-in strategy when nothing is configured', () => {
    expect(resolveDuration('error', 'desc', { message: 'Error' }, undefined)).toBe(0);
    expect(resolveDuration('success', undefined, { message: 'OK' }, undefined)).toBe(5);
  });
});
