import type { Locale as AntLocale } from 'antd/es/locale';
import type { TableLocale } from '../table';

export interface Locale extends AntLocale {
  Table?: TableLocale;
}
