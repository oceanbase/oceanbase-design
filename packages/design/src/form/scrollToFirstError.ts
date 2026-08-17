import type { FormInstance } from 'antd/es/form';
// `ScrollFocusOptions` is defined in `antd/es/form/interface`; the `antd/es/form`
// entry does not re-export it (would be TS2614 under father's dts check).
import type { ScrollFocusOptions } from 'antd/es/form/interface';

const SCROLL_FLAG = Symbol('oceanbase.form.scrollToFirstError');
const SCROLL_PATCHED = Symbol('oceanbase.form.scrollToFirstErrorPatched');
const SKIP_NEXT_CALL = Symbol('oceanbase.form.skipScrollOnErrorNextCall');

type ScrollToFirstErrorValue = ScrollFocusOptions | boolean | undefined;
type FlaggedForm = FormInstance & Record<symbol, unknown>;

export function setScrollToFirstErrorFlag(
  instance: FormInstance,
  value: ScrollToFirstErrorValue
): void {
  (instance as unknown as FlaggedForm)[SCROLL_FLAG] = value;
}

function getScrollToFirstErrorFlag(instance: FormInstance): ScrollToFirstErrorValue {
  return (instance as unknown as FlaggedForm)[SCROLL_FLAG] as ScrollToFirstErrorValue;
}

/**
 * Run `fn` with the scroll-on-error behavior suppressed for its `validateFields`
 * call. The patched `validateFields` reads the marker synchronously, so it is
 * captured per call; the marker is cleared when the returned promise settles.
 */
export function withSkipScrollOnError<T>(form: FormInstance, fn: () => Promise<T>): Promise<T> {
  const flags = form as unknown as FlaggedForm;
  flags[SKIP_NEXT_CALL] = true;
  const result = fn();
  return result.finally(() => {
    flags[SKIP_NEXT_CALL] = false;
  });
}

/**
 * Patch `validateFields` so that a validation failure also scrolls to the first
 * error field when `scrollToFirstError` is configured. antd only wires the
 * property to the `submit()` failure branch; this covers direct `validateFields()`
 * calls (e.g. Modal `onOk`). The store's internal `submit()` calls its own
 * `validateFields` (not the patched instance method), so no double scroll.
 */
export function patchScrollOnValidateError(instance: FormInstance): void {
  const flags = instance as unknown as FlaggedForm;
  if (flags[SCROLL_PATCHED]) {
    return;
  }
  flags[SCROLL_PATCHED] = true;

  const originalValidateFields = instance.validateFields;
  flags.validateFields = ((...args: Parameters<typeof originalValidateFields>) => {
    const skipScroll = flags[SKIP_NEXT_CALL] === true;

    const result = originalValidateFields.apply(instance, args);
    return result.catch(
      (errorInfo: { errorFields?: { name: Parameters<typeof instance.scrollToField>[0] }[] }) => {
        if (!skipScroll && errorInfo?.errorFields?.length) {
          const flag = getScrollToFirstErrorFlag(instance);
          if (flag) {
            const scrollOptions = flag === true ? undefined : flag;
            instance.scrollToField?.(errorInfo.errorFields[0].name, scrollOptions);
          }
        }
        // Keep the original rejection so callers observe unchanged semantics.
        return Promise.reject(errorInfo);
      }
    );
  }) as typeof originalValidateFields;
}
