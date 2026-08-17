import type { FormInstance } from 'antd/es/form';
import type { NamePath } from 'antd/es/form/interface';
import type { FormProps as AntFormProps } from 'antd/es/form';
import { withSkipScrollOnError } from './scrollToFirstError';

type FieldChangeMeta = {
  name?: NamePath;
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

/** Collect leaf field name paths from `onValuesChange` changedValues. */
export function getChangedNamePaths(
  changedValues: Record<string, unknown>,
  prefix: NamePath = []
): NamePath[] {
  const paths: NamePath[] = [];
  Object.keys(changedValues).forEach(key => {
    const value = changedValues[key];
    const path: NamePath = [...(Array.isArray(prefix) ? prefix : [prefix]), key];
    if (
      value !== null &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      !(value instanceof Date)
    ) {
      paths.push(...getChangedNamePaths(value as Record<string, unknown>, path));
    } else {
      paths.push(path);
    }
  });
  return paths;
}

/**
 * Whether form submit was attempted (aligns with react-hook-form `isSubmitted`).
 * Clear on full `resetFields()` only, not partial `resetFields(['field'])` (aligns with RHF `reset` vs `resetField`).
 */
export function syncSubmittedFromFieldsChange(
  submitted: { current: boolean },
  changedFields: FieldChangeMeta[],
  allFields: FieldChangeMeta[] = []
): void {
  if (!submitted.current) {
    return;
  }

  const resetInChange = changedFields.filter(
    field => field.name !== undefined && field.touched === false
  );
  if (resetInChange.length === 0) {
    return;
  }

  if (allFields.length === 0) {
    submitted.current = false;
    return;
  }

  const resetKeys = new Set(resetInChange.map(field => serializeNamePath(field.name!)));
  const allFieldKeys = allFields
    .filter(field => field.name !== undefined)
    .map(field => serializeNamePath(field.name!));

  if (allFieldKeys.length > 0 && allFieldKeys.every(key => resetKeys.has(key))) {
    submitted.current = false;
  }
}

/**
 * Track fields touched by the user (for onTouched), aligned with RHF `touchedFields`.
 * Add on blur / touch (`touched: true`); remove on reset (`touched: false`).
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
    if (field.touched === true) {
      blurredFields.add(key);
      return;
    }
    // rc-field-form may omit `touched` when blur is the first interaction (e.g. blur empty input).
    if (field.errors && field.errors.length > 0) {
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
    changedValues?: Record<string, unknown>;
    submitted?: boolean;
  } = {}
): NamePath[] {
  const { changedValues, submitted } = options;
  const changedNames = changedValues ? getChangedNamePaths(changedValues) : [];
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
    changedValues?: Record<string, unknown>;
    submitted?: boolean;
  }
): void {
  const { validateMode, reValidateMode, blurredFields, changedValues, submitted } = options;
  const shouldRevalidateOnChange =
    reValidateMode === 'onChange' || (!submitted && validateMode === 'onTouched');
  if (!shouldRevalidateOnChange) {
    return;
  }
  if (validateMode === 'onChange' || validateMode === 'all') {
    return;
  }
  const names = getFieldsToRevalidateOnChange(form, validateMode, blurredFields, {
    changedValues,
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
