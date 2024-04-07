import type { Locale as AntLocale } from 'antd/es/locale';
import type { DrawerLocale } from '../drawer';
import type { InputLocale } from '../input';
import type { SelectLocale } from '../select';
import type { TableLocale } from '../table';

export * from 'antd/es/locale';

export interface Locale extends AntLocale {
  Drawer?: DrawerLocale;
  Input?: InputLocale;
  Select?: SelectLocale;
  Table?: TableLocale;
}

export { default as useLocale } from './useLocale';
