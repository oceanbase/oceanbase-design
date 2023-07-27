import type { Locale as DesignLocale } from '@oceanbase/design/es/locale';

export interface Locale extends DesignLocale {
  [key: string]: any;
}
