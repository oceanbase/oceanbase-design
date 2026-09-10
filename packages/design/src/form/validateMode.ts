import type { FormInstance } from 'antd/es/form';
import type { NamePath } from 'antd/es/form/interface';
import type { FormProps as AntFormProps } from 'antd/es/form';
import { withSkipScrollOnError } from './scrollToFirstError';

type FieldChangeMeta = {
  name?: NamePath;
  value?: unknown;
  touched?: boolean;
  errors?: string[];
  warnings?: string[];
  validating?: boolean;
};

export type FormValidateMode = 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched' | 'all';

export type FormReValidateMode = 'onChange' | 'onBlur' | 'onSubmit';

export const DEFAULT_VALIDATE_MODE: FormValidateMode = 'onSubmit';

export const DEFAULT_REVALIDATE_MODE: FormReValidateMode = 'onChange';

export type OBFormConfig = {
  validateMode?: FormValidateMode;
  reValidateMode?: FormReValidateMode;
  /** Preserve field values when fields unmount (antd default `true`, OB default `false`). */
  preserve?: boolean;
};

export function resolveValidateMode(
  prop?: FormValidateMode,
  context?: FormValidateMode
): FormValidateMode {
  return prop ?? context ?? DEFAULT_VALIDATE_MODE;
}

export function resolveReValidateMode(
  prop?: FormReValidateMode,
  context?: FormReValidateMode
): FormReValidateMode {
  return prop ?? context ?? DEFAULT_REVALIDATE_MODE;
}

export function resolveValidateTrigger(
  validateMode: FormValidateMode,
  explicitTrigger?: AntFormProps['validateTrigger']
): AntFormProps['validateTrigger'] | undefined {
  if (explicitTrigger !== undefined) {
    return explicitTrigger;
  }
  switch (validateMode) {
    case 'onSubmit':
      return [];
    case 'onBlur':
    case 'onTouched':
      return 'onBlur';
    case 'onChange':
      return 'onChange';
    case 'all':
      return ['onBlur', 'onChange'];
    default:
      return undefined;
  }
}

export function shouldInjectRevalidateOnChange(
  validateMode: FormValidateMode,
  reValidateMode: FormReValidateMode,
  explicitTrigger?: AntFormProps['validateTrigger']
): boolean {
  if (explicitTrigger !== undefined) {
    return false;
  }
  // onTouched validates on change after first blur regardless of reValidateMode (RHF `mode` semantics)
  if (validateMode === 'onTouched') {
    return true;
  }
  if (reValidateMode !== 'onChange') {
    return false;
  }
  return validateMode !== 'onChange' && validateMode !== 'all';
}

export function shouldTrackSubmitAttempt(
  validateMode: FormValidateMode,
  reValidateMode: FormReValidateMode,
  explicitTrigger?: AntFormProps['validateTrigger']
): boolean {
  if (explicitTrigger !== undefined) {
    return false;
  }
  if (injectRevalidateOnChangeNeeded(validateMode, reValidateMode)) {
    return true;
  }
  return validateMode === 'onSubmit' || validateMode === 'onBlur' || validateMode === 'onTouched';
}

function injectRevalidateOnChangeNeeded(
  validateMode: FormValidateMode,
  reValidateMode: FormReValidateMode
): boolean {
  return reValidateMode === 'onChange' && validateMode !== 'onChange' && validateMode !== 'all';
}

/**
 * Port of react-hook-form `skipValidation` for change events (`isBlurEvent = false`).
 * Reference implementation for tests; runtime uses `getFieldsToRevalidateOnChange` instead.
 * @see https://github.com/react-hook-form/react-hook-form/blob/master/src/logic/skipValidation.ts
 */
export function shouldSkipValidationOnChange(
  validateMode: FormValidateMode,
  reValidateMode: FormReValidateMode,
  options: { isSubmitted: boolean; isFieldTouched: boolean }
): boolean {
  const { isSubmitted, isFieldTouched } = options;

  if (validateMode === 'all') {
    return false;
  }
  if (!isSubmitted && validateMode === 'onTouched') {
    return !isFieldTouched;
  }

  const useOnBlur = isSubmitted ? reValidateMode === 'onBlur' : validateMode === 'onBlur';
  const useOnChange = isSubmitted ? reValidateMode === 'onChange' : validateMode === 'onChange';

  if (useOnBlur) {
    return true;
  }
  if (useOnChange) {
    return false;
  }
  return true;
}

export function markFormSubmitted(submitted: { current: boolean }): void {
  submitted.current = true;
}

export function normalizeNamePath(name: NamePath): (string | number)[] {
  return Array.isArray(name) ? name : [name];
}

export function serializeNamePath(name: NamePath): string {
  return JSON.stringify(normalizeNamePath(name));
}

export function deserializeNamePath(key: string): NamePath {
  return JSON.parse(key) as NamePath;
}

/**
 * Collect the field name paths whose value actually changed, from `onFieldsChange` changedFields.
 *
 * rc-field-form emits `onFieldsChange` for value updates as well as validation-state updates
 * (validating / errors / warnings), and only the former should trigger revalidation. A validation
 * update reports the unchanged value, so comparing against the last value seen for the field
 * separates the two. Fields seen for the first time only seed `previousValues`; they are not
 * reported as changed, which matches "nothing to clear before a field has ever been validated".
 *
 * Comparing by identity mirrors rc-field-form's own change detection (`newValue !== value`): it only
 * dispatches a value update when the reference (or primitive) differs.
 */
export function collectValueChangedNames(
  changedFields: FieldChangeMeta[],
  previousValues: Map<string, unknown>
): NamePath[] {
  const names: NamePath[] = [];
  changedFields.forEach(field => {
    if (field.name === undefined) {
      return;
    }
    const key = serializeNamePath(field.name);
    const isKnown = previousValues.has(key);
    const previousValue = previousValues.get(key);
    previousValues.set(key, field.value);
    if (isKnown && !Object.is(previousValue, field.value)) {
      names.push(field.name);
    }
  });
  return names;
}

/** State tracked by the injected revalidation, keyed by `serializeNamePath` where applicable. */
export type TrackedFormState = {
  /** Fields the user has blurred. */
  blurredFields: Set<string>;
  /** Last value seen per field. */
  previousValues: Map<string, unknown>;
  /** Whether form submit was attempted (react-hook-form `isSubmitted`). */
  submitted: { current: boolean };
};

/**
 * Tracking state is keyed by form instance rather than held in component refs: the instance outlives
 * any single `Form` mount, so the patched `resetFields()` must always clear the exact state that
 * `onFieldsChange` reads — including after the `Form` unmounts and remounts (`Modal` / `Drawer` /
 * `Tab`) while the consumer keeps the same `Form.useForm()` instance.
 */
const trackedFormStates = new WeakMap<FormInstance, TrackedFormState>();

export function getTrackedFormState(form: FormInstance): TrackedFormState {
  let tracked = trackedFormStates.get(form);
  if (!tracked) {
    tracked = {
      blurredFields: new Set<string>(),
      previousValues: new Map<string, unknown>(),
      submitted: { current: false },
    };
    trackedFormStates.set(form, tracked);
  }
  return tracked;
}

const RESET_FIELDS_PATCHED = Symbol('oceanbase.form.resetFieldsPatched');

type PatchedForm = FormInstance & Record<symbol, unknown>;

/**
 * `resetFields()` mutates field internals without emitting `onFieldsChange` (unlike value updates and
 * validations), so the tracked state cannot be cleared from `handleFieldsChange`. Patch the instance
 * method instead, mirroring react-hook-form: a full `reset()` clears everything, while
 * `resetFields([name])` (like `resetField`) clears only that field and keeps the submit state.
 */
export function patchResetFieldsTracking(form: FormInstance): void {
  const flags = form as unknown as PatchedForm;
  if (flags[RESET_FIELDS_PATCHED]) {
    return;
  }
  flags[RESET_FIELDS_PATCHED] = true;

  const originalResetFields = form.resetFields;
  flags.resetFields = ((nameList?: NamePath[]) => {
    const result = originalResetFields.call(form, nameList);
    const tracked = getTrackedFormState(form);
    if (nameList === undefined) {
      tracked.blurredFields.clear();
      tracked.previousValues.clear();
      tracked.submitted.current = false;
    } else {
      nameList.forEach(name => {
        const key = serializeNamePath(name);
        tracked.blurredFields.delete(key);
        // Re-seed with the post-reset value. Dropping the entry instead would make the next change
        // look like a first sighting, and `collectValueChangedNames` never reports those, so the
        // first edit after a partial reset would silently skip revalidation.
        tracked.previousValues.set(key, form.getFieldValue(name));
      });
    }
    return result;
  }) as typeof originalResetFields;
}

/**
 * Track fields the user has blurred (react-hook-form `touchedFields`).
 *
 * rc-field-form sets a field's `touched` flag on every change, so `touched` cannot tell a blur apart
 * from typing. A blur instead runs the configured `onBlur` validation, which is observable as an
 * in-flight `validating` update and, once it settles, as errors. Fields without rules run no
 * validation, but they have nothing to validate either.
 */
export function syncBlurredFieldsFromFieldsChange(
  blurredFields: Set<string>,
  changedFields: FieldChangeMeta[],
  validateMode: FormValidateMode
): void {
  if (validateMode !== 'onTouched') {
    return;
  }
  changedFields.forEach(field => {
    if (field.name === undefined) {
      return;
    }
    const key = serializeNamePath(field.name);
    if (field.touched === false) {
      blurredFields.delete(key);
      return;
    }
    if (field.validating === true || (field.errors && field.errors.length > 0)) {
      blurredFields.add(key);
    }
  });
}

/** Collect field keys that currently have validation errors. */
function getCurrentErrorFieldKeys(form: FormInstance): Set<string> {
  return new Set(
    form
      .getFieldsError()
      .filter(({ errors }) => errors.length > 0)
      .map(({ name }) => serializeNamePath(name))
  );
}

export function getFieldsToRevalidateOnChange(
  form: FormInstance,
  validateMode: FormValidateMode,
  blurredFields: Set<string>,
  options: {
    changedNames?: NamePath[];
    submitted?: boolean;
  } = {}
): NamePath[] {
  const { changedNames = [], submitted } = options;

  if (changedNames.length === 0) {
    return [];
  }

  // After submit: revalidate every changed field (shadcn / RHF isSubmitted + reValidateMode onChange)
  if (submitted) {
    return changedNames;
  }

  // Before submit: only revalidate changed fields that still show errors (clear errors live, no new ones)
  const errorKeys = getCurrentErrorFieldKeys(form);

  if (validateMode === 'onTouched') {
    return changedNames.filter(name => {
      const key = serializeNamePath(name);
      return blurredFields.has(key) || errorKeys.has(key);
    });
  }

  return changedNames.filter(name => errorKeys.has(serializeNamePath(name)));
}

export function revalidateOnChange(
  form: FormInstance,
  options: {
    validateMode: FormValidateMode;
    reValidateMode: FormReValidateMode;
    blurredFields: Set<string>;
    changedNames?: NamePath[];
    submitted?: boolean;
  }
): void {
  const { validateMode, reValidateMode, blurredFields, changedNames, submitted } = options;
  const shouldRevalidateOnChange =
    reValidateMode === 'onChange' || (!submitted && validateMode === 'onTouched');
  if (!shouldRevalidateOnChange) {
    return;
  }
  if (validateMode === 'onChange' || validateMode === 'all') {
    return;
  }
  const names = getFieldsToRevalidateOnChange(form, validateMode, blurredFields, {
    changedNames,
    submitted,
  });
  if (names.length > 0) {
    // Defer until rc-field-form commits changed values (aligns with RHF async field updates)
    queueMicrotask(() => {
      // Internal revalidation must not scroll to the first error on failure.
      withSkipScrollOnError(form, () => form.validateFields(names)).catch(() => {});
    });
  }
}
