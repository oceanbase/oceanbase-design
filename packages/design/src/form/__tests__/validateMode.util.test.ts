import { describe, expect, it } from 'vitest';
import {
  DEFAULT_REVALIDATE_MODE,
  DEFAULT_VALIDATE_MODE,
  deserializeNamePath,
  getChangedNamePaths,
  getFieldsToRevalidateOnChange,
  resolveReValidateMode,
  resolveValidateMode,
  resolveValidateTrigger,
  serializeNamePath,
  shouldInjectRevalidateOnChange,
  syncBlurredFieldsFromFieldsChange,
  syncSubmittedFromFieldsChange,
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

  it('syncBlurredFieldsFromFieldsChange should track touched fields and clear on reset', () => {
    const blurred = new Set<string>();

    syncBlurredFieldsFromFieldsChange(blurred, [{ name: 'name', touched: true }], 'onTouched');
    expect(blurred.has(serializeNamePath('name'))).toBe(true);

    syncBlurredFieldsFromFieldsChange(blurred, [{ name: 'name', touched: false }], 'onTouched');
    expect(blurred.size).toBe(0);
  });

  it('syncBlurredFieldsFromFieldsChange should track blur errors without touched flag', () => {
    const blurred = new Set<string>();

    syncBlurredFieldsFromFieldsChange(
      blurred,
      [{ name: 'name', errors: ['Name is required'] }],
      'onTouched'
    );
    expect(blurred.has(serializeNamePath('name'))).toBe(true);
  });

  it('syncSubmittedFromFieldsChange should clear submitted on full reset only', () => {
    const submitted = { current: true };
    const allFields = [
      { name: 'name', touched: false },
      { name: 'email', touched: false },
    ];

    syncSubmittedFromFieldsChange(submitted, [{ name: 'name', touched: false }], allFields);
    expect(submitted.current).toBe(true);

    syncSubmittedFromFieldsChange(submitted, allFields, allFields);
    expect(submitted.current).toBe(false);
  });

  it('getChangedNamePaths should flatten nested changed values', () => {
    expect(getChangedNamePaths({ name: 'a' })).toEqual([['name']]);
    expect(getChangedNamePaths({ user: { name: 'a' } })).toEqual([['user', 'name']]);
  });

  it('getFieldsToRevalidateOnChange should revalidate changed fields after submit', () => {
    const form = {
      getFieldsError: () => [],
    } as never;

    expect(
      getFieldsToRevalidateOnChange(form, 'onSubmit', new Set(), {
        submitted: true,
        changedValues: { name: '' },
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
        changedValues: { name: '' },
      })
    ).toEqual([]);
  });
});
