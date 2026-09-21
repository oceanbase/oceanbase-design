import {
  getConfiguredNotificationDuration,
  resetGlobalNotificationDuration,
  setGlobalNotificationDuration,
} from '../durationConfig';

describe('notification duration config', () => {
  afterEach(() => {
    resetGlobalNotificationDuration();
  });

  it('returns the instance duration for the matching type', () => {
    expect(getConfiguredNotificationDuration('error', { error: 3 })).toBe(3);
  });

  it('falls back to default within the same level', () => {
    expect(getConfiguredNotificationDuration('success', { default: 7, error: 3 })).toBe(7);
  });

  it('applies an instance number to every type', () => {
    expect(getConfiguredNotificationDuration('loading', 4)).toBe(4);
    expect(getConfiguredNotificationDuration('error', 4)).toBe(4);
  });

  it('falls back to the global config per type when higher levels miss that type', () => {
    setGlobalNotificationDuration({ success: 2 });
    expect(getConfiguredNotificationDuration('success', { error: 6 })).toBe(2);
  });

  it('prefers the higher level over the global config for the same type', () => {
    setGlobalNotificationDuration({ error: 2, success: 9 });
    expect(getConfiguredNotificationDuration('error', { error: 6 })).toBe(6);
    expect(getConfiguredNotificationDuration('success', { error: 6 })).toBe(9);
  });

  it('walks the levels in order, falling back per type', () => {
    setGlobalNotificationDuration({ error: 1, success: 1, info: 1 });
    expect(getConfiguredNotificationDuration('error', { error: 3 }, { error: 2, success: 2 })).toBe(
      3
    );
    expect(
      getConfiguredNotificationDuration('success', { error: 3 }, { error: 2, success: 2 })
    ).toBe(2);
    expect(getConfiguredNotificationDuration('info', { error: 3 }, { error: 2, success: 2 })).toBe(
      1
    );
  });

  it('treats an explicit 0 as configured and does not keep falling back', () => {
    setGlobalNotificationDuration({ error: 5 });
    expect(getConfiguredNotificationDuration('error', { error: 0 })).toBe(0);
  });

  it('returns undefined when no level matches the type', () => {
    setGlobalNotificationDuration({ success: 2 });
    expect(getConfiguredNotificationDuration('error', { success: 3 })).toBeUndefined();
    expect(getConfiguredNotificationDuration('error')).toBeUndefined();
  });

  it('merges global object configs by type and replaces them with a number', () => {
    setGlobalNotificationDuration({ error: 3 });
    setGlobalNotificationDuration({ success: 2 });
    expect(getConfiguredNotificationDuration('error')).toBe(3);
    expect(getConfiguredNotificationDuration('success')).toBe(2);

    setGlobalNotificationDuration(5);
    expect(getConfiguredNotificationDuration('error')).toBe(5);
    expect(getConfiguredNotificationDuration('success')).toBe(5);
  });

  it('keeps the previous global config when called without a duration', () => {
    setGlobalNotificationDuration({ error: 3 });
    setGlobalNotificationDuration(undefined);
    expect(getConfiguredNotificationDuration('error')).toBe(3);
  });
});
