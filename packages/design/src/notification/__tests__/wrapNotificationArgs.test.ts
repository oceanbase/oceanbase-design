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
});
