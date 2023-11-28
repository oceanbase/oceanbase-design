import type { Locale as AntLocale } from 'antd/es/locale';
import type { TableLocale } from '../table';
import type { DrawerLocale } from '../drawer';

export * from 'antd/es/locale';

export interface Locale extends AntLocale {
  Table?: TableLocale;
  Drawer?: DrawerLocale;
}
