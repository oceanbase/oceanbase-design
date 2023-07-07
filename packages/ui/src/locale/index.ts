import type { Locale as AntLocale } from 'antd/es/locale';

export interface Locale extends AntLocale {
  [key: string]: any;
}
