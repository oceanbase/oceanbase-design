import { describe, expect, it } from 'vitest';
import {
  getFieldsToRevalidateOnChange,
  serializeNamePath,
  shouldSkipValidationOnChange,
  shouldTrackSubmitAttempt,
} from '../validateMode';

/**
 * Mirrors react-hook-form default: mode onSubmit + reValidateMode onChange.
 * @see https://react-hook-form.com/docs/useform
 */
describe('validateMode RHF alignment (shouldSkipValidationOnChange)', () => {
  const defaults = { validateMode: 'onSubmit' as const, reValidateMode: 'onChange' as const };

  it('onSubmit default: skip change before submit', () => {
    expect(
      shouldSkipValidationOnChange(defaults.validateMode, defaults.reValidateMode, {
        isSubmitted: false,
        isFieldTouched: true,
      })
    ).toBe(true);
  });

  it('onSubmit default: validate on change after submit', () => {
    expect(
      shouldSkipValidationOnChange(defaults.validateMode, defaults.reValidateMode, {
        isSubmitted: true,
        isFieldTouched: true,
      })
    ).toBe(false);
  });

  it('onTouched: skip change before field is touched', () => {
    expect(
      shouldSkipValidationOnChange('onTouched', 'onChange', {
        isSubmitted: false,
        isFieldTouched: false,
      })
    ).toBe(true);
  });

  it('onTouched: validate on change after field is touched', () => {
    expect(
      shouldSkipValidationOnChange('onTouched', 'onChange', {
        isSubmitted: false,
        isFieldTouched: true,
      })
    ).toBe(false);
  });

  it('onChange mode: always validate on change', () => {
    expect(
      shouldSkipValidationOnChange('onChange', 'onChange', {
        isSubmitted: false,
        isFieldTouched: false,
      })
    ).toBe(false);
  });

  it('all mode: never skip on change', () => {
    expect(
      shouldSkipValidationOnChange('all', 'onChange', {
        isSubmitted: false,
        isFieldTouched: false,
      })
    ).toBe(false);
  });

  it('onBlur mode before submit: skip on change', () => {
    expect(
      shouldSkipValidationOnChange('onBlur', 'onChange', {
        isSubmitted: false,
        isFieldTouched: true,
      })
    ).toBe(true);
  });

  it('reValidateMode onSubmit after submit: skip on change', () => {
    expect(
      shouldSkipValidationOnChange('onSubmit', 'onSubmit', {
        isSubmitted: true,
        isFieldTouched: true,
      })
    ).toBe(true);
  });

  it('reValidateMode onBlur after submit: skip on change', () => {
    expect(
      shouldSkipValidationOnChange('onSubmit', 'onBlur', {
        isSubmitted: true,
        isFieldTouched: true,
      })
    ).toBe(true);
  });
});

describe('validateMode RHF alignment (field selection)', () => {
  const formWithErrors = (names: string[]) =>
    ({
      getFieldsError: () => names.map(name => ({ name: [name], errors: ['err'] })),
    }) as never;

  it('after submit: only changed fields are revalidated (per-field)', () => {
    expect(
      getFieldsToRevalidateOnChange(formWithErrors(['name', 'email']), 'onSubmit', new Set(), {
        submitted: true,
        changedValues: { name: 'new' },
      })
    ).toEqual([['name']]);
  });

  it('onTouched: revalidate touched changed fields even without current errors', () => {
    const blurred = new Set([serializeNamePath(['name'])]);
    expect(
      getFieldsToRevalidateOnChange({ getFieldsError: () => [] } as never, 'onTouched', blurred, {
        submitted: false,
        changedValues: { name: '' },
      })
    ).toEqual([['name']]);
  });

  it('onTouched: revalidate errored changed fields even when not in blurred set', () => {
    expect(
      getFieldsToRevalidateOnChange(formWithErrors(['name']), 'onTouched', new Set(), {
        submitted: false,
        changedValues: { name: 'valid' },
      })
    ).toEqual([['name']]);
  });

  it('shouldTrackSubmitAttempt for default onSubmit', () => {
    expect(shouldTrackSubmitAttempt('onSubmit', 'onChange')).toBe(true);
  });
});
