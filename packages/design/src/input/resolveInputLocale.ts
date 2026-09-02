import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';
import type { InputLocale } from './Input';

export function resolveInputLocale(
  contextLocale: ConfigConsumerProps['locale'],
  customLocale?: InputLocale
): InputLocale {
  return {
    placeholder: contextLocale?.global?.inputPlaceholder || defaultLocale.global?.inputPlaceholder,
    ...defaultLocale.Input,
    ...contextLocale?.Input,
    ...customLocale,
  };
}
