import type { Locale as AntLocale } from 'antd/es/locale';
import type { PasswordLocale } from '../input/InputPassword';
import type { TableLocale } from '../table';
import type { DrawerLocale } from '../drawer/Drawer';

export * from 'antd/es/locale';

export interface Locale extends AntLocale {
  Table?: TableLocale;
  Input?: {
    Password?: PasswordLocale;
  };
  Drawer?: DrawerLocale;
}
