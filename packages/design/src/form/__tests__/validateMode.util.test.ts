import { describe, expect, it, vi } from 'vitest';
import type { NamePath } from 'antd/es/form/interface';
import {
  DEFAULT_REVALIDATE_MODE,
  DEFAULT_VALIDATE_MODE,
  collectValueChangedNames,
  deserializeNamePath,
  getFieldsToRevalidateOnChange,
  getTrackedFormState,
  patchResetFieldsTracking,
  resolveReValidateMode,
  resolveValidateMode,
  resolveValidateTrigger,
  serializeNamePath,
  shouldInjectRevalidateOnChange,
  syncBlurredFieldsFromFieldsChange,
} from '../validateMode';

describe('validateMode utils', () => {
  it('resolveValidateMode should fall back to defaults', () => {
    expect(resolveValidateMode()).toBe(DEFAULT_VALIDATE_MODE);
    expect(resolveValidateMode('onChange')).toBe('onChange');
    expect(resolveValidateMode(undefined, 'onBlur')).toBe('onBlur');
  });

  it('resolveReValidateMode should fall back to defaults', () => {
    expect(resolveReValidateMode()).toBe(DEFAULT_REVALIDATE_MODE);
    expect(resolveReValidateMode('onSubmit')).toBe('onSubmit');
  });

  it('resolveValidateTrigger should map modes and respect explicit trigger', () => {
    expect(resolveValidateTrigger('onSubmit')).toEqual([]);
    expect(resolveValidateTrigger('onBlur')).toBe('onBlur');
    expect(resolveValidateTrigger('onTouched')).toBe('onBlur');
    expect(resolveValidateTrigger('onChange')).toBe('onChange');
    expect(resolveValidateTrigger('all')).toEqual(['onBlur', 'onChange']);
    expect(resolveValidateTrigger('onSubmit', 'onChange')).toBe('onChange');
  });

  it('shouldInjectRevalidateOnChange should follow mode matrix', () => {
    expect(shouldInjectRevalidateOnChange('onSubmit', 'onChange')).toBe(true);
    expect(shouldInjectRevalidateOnChange('onSubmit', 'onSubmit')).toBe(false);
    expect(shouldInjectRevalidateOnChange('onChange', 'onChange')).toBe(false);
    expect(shouldInjectRevalidateOnChange('all', 'onChange')).toBe(false);
    expect(shouldInjectRevalidateOnChange('onTouched', 'onSubmit')).toBe(true);
    expect(shouldInjectRevalidateOnChange('onSubmit', 'onChange', 'onBlur')).toBe(false);
  });

  it('serializeNamePath should normalize string and array name paths', () => {
    expect(serializeNamePath('name')).toBe(serializeNamePath(['name']));
  });

  it('serializeNamePath roundtrip', () => {
    const name = ['user', 'name'];
    expect(deserializeNamePath(serializeNamePath(name))).toEqual(name);
  });

  it('syncBlurredFieldsFromFieldsChange should track blurred fields, not typed ones', () => {
    const blurred = new Set<string>();

    // A change event reports `touched: true` without validating — typing must not count as blurred.
    syncBlurredFieldsFromFieldsChange(
      blurred,
      [{ name: 'name', touched: true, validating: false }],
      'onTouched'
    );
    expect(blurred.size).toBe(0);

    // A blur runs the `onBlur` validation, reported as an in-flight `validating` update.
    syncBlurredFieldsFromFieldsChange(
      blurred,
      [{ name: 'name', touched: true, validating: true }],
      'onTouched'
    );
    expect(blurred.has(serializeNamePath('name'))).toBe(true);

    syncBlurredFieldsFromFieldsChange(blurred, [{ name: 'name', touched: false }], 'onTouched');
    expect(blurred.size).toBe(0);
  });

  it('syncBlurredFieldsFromFieldsChange should track settled blur errors', () => {
    const blurred = new Set<string>();

    syncBlurredFieldsFromFieldsChange(
      blurred,
      [{ name: 'name', errors: ['Name is required'] }],
      'onTouched'
    );
    expect(blurred.has(serializeNamePath('name'))).toBe(true);
  });

  it('patchResetFieldsTracking should clear all tracked state on a full reset', () => {
    const resetFields = vi.fn();
    const form = { resetFields, getFieldValue: () => undefined } as never;

    patchResetFieldsTracking(form);
    const tracked = getTrackedFormState(form);
    tracked.blurredFields.add(serializeNamePath('name'));
    tracked.previousValues.set(serializeNamePath('name'), 'a');
    tracked.submitted.current = true;

    (form as unknown as { resetFields: (nameList?: NamePath[]) => void }).resetFields();

    expect(resetFields).toHaveBeenCalledTimes(1);
    expect(tracked.blurredFields.size).toBe(0);
    expect(tracked.previousValues.size).toBe(0);
    expect(tracked.submitted.current).toBe(false);
  });

  it('patchResetFieldsTracking should clear only the reset fields on a partial reset', () => {
    const resetFields = vi.fn();
    const form = { resetFields, getFieldValue: () => 'reset-value' } as never;

    patchResetFieldsTracking(form);
    const tracked = getTrackedFormState(form);
    tracked.blurredFields.add(serializeNamePath('name'));
    tracked.blurredFields.add(serializeNamePath('email'));
    tracked.previousValues.set(serializeNamePath('name'), 'a');
    tracked.previousValues.set(serializeNamePath('email'), 'b');
    tracked.submitted.current = true;

    (form as unknown as { resetFields: (nameList?: NamePath[]) => void }).resetFields(['name']);

    expect(resetFields).toHaveBeenCalledWith(['name']);
    expect(tracked.blurredFields.has(serializeNamePath('name'))).toBe(false);
    expect(tracked.blurredFields.has(serializeNamePath('email'))).toBe(true);
    // Re-seeded with the post-reset value, so the next change still counts as a change.
    expect(tracked.previousValues.get(serializeNamePath('name'))).toBe('reset-value');
    expect(tracked.previousValues.get(serializeNamePath('email'))).toBe('b');
    expect(tracked.submitted.current).toBe(true);
  });

  it('patchResetFieldsTracking should patch the instance only once', () => {
    const resetFields = vi.fn();
    const form = { resetFields, getFieldValue: () => undefined } as never;

    patchResetFieldsTracking(form);
    patchResetFieldsTracking(form);
    (form as unknown as { resetFields: () => void }).resetFields();

    expect(resetFields).toHaveBeenCalledTimes(1);
  });

  it('getTrackedFormState should return the same state for the same form instance', () => {
    const form = { resetFields: vi.fn(), getFieldValue: () => undefined } as never;

    expect(getTrackedFormState(form)).toBe(getTrackedFormState(form));
  });

  it('collectValueChangedNames should report only fields whose value changed', () => {
    const previousValues = new Map<string, unknown>();

    // First sighting only seeds the cache (no validation happened yet, nothing to clear)
    expect(collectValueChangedNames([{ name: ['name'], value: 'a' }], previousValues)).toEqual([]);

    // Same value (e.g. a validation-state update) is not a change
    expect(collectValueChangedNames([{ name: ['name'], value: 'a' }], previousValues)).toEqual([]);

    expect(collectValueChangedNames([{ name: ['name'], value: 'b' }], previousValues)).toEqual([
      ['name'],
    ]);
  });

  it('collectValueChangedNames should compare object values by identity', () => {
    const previousValues = new Map<string, unknown>();
    const first = { value: 'a', label: 'A' };

    collectValueChangedNames([{ name: ['keyword'], value: first }], previousValues);

    // Same reference (validation-state update) — not a change
    expect(collectValueChangedNames([{ name: ['keyword'], value: first }], previousValues)).toEqual(
      []
    );

    // New reference (value update) — a change
    expect(
      collectValueChangedNames(
        [{ name: ['keyword'], value: { value: 'b', label: 'B' } }],
        previousValues
      )
    ).toEqual([['keyword']]);
  });

  it('collectValueChangedNames should ignore values with a circular reference', () => {
    const cyclic: Record<string, unknown> = {};
    cyclic.self = cyclic;
    const previousValues = new Map<string, unknown>();

    collectValueChangedNames([{ name: ['field'], value: cyclic }], previousValues);

    expect(collectValueChangedNames([{ name: ['field'], value: cyclic }], previousValues)).toEqual(
      []
    );
  });

  it('collectValueChangedNames should skip fields without a name', () => {
    expect(collectValueChangedNames([{ value: 'a' }], new Map())).toEqual([]);
  });

  it('getFieldsToRevalidateOnChange should revalidate changed fields after submit', () => {
    const form = {
      getFieldsError: () => [],
    } as never;

    expect(
      getFieldsToRevalidateOnChange(form, 'onSubmit', new Set(), {
        submitted: true,
        changedNames: [['name']],
      })
    ).toEqual([['name']]);
  });

  it('getFieldsToRevalidateOnChange should not revalidate before submit without current errors', () => {
    const form = {
      getFieldsError: () => [],
    } as never;

    expect(
      getFieldsToRevalidateOnChange(form, 'onSubmit', new Set(), {
        submitted: false,
        changedNames: [['name']],
      })
    ).toEqual([]);
  });

  it('getFieldsToRevalidateOnChange should match object-valued fields by name', () => {
    const form = {
      getFieldsError: () => [{ name: 'keyword', errors: ['required'] }],
    } as never;

    expect(
      getFieldsToRevalidateOnChange(form, 'onSubmit', new Set(), {
        submitted: false,
        changedNames: [['keyword']],
      })
    ).toEqual([['keyword']]);
  });
});
