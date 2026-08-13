import React from 'react';
import type { DirectionType } from '@oceanbase/design/es/config-provider';
import type { ThemeName } from '../common/ThemeSwitch';

export type LocaleType = 'cn' | 'en';

export interface SiteContextProps {
  isMobile: boolean;
  direction: DirectionType;
  theme: ThemeName[];
  locale: LocaleType;
  updateSiteConfig: (props: Partial<SiteContextProps>) => void;
}

const SiteContext = React.createContext<SiteContextProps>({
  isMobile: false,
  direction: 'ltr',
  theme: ['light'],
  locale: 'cn',
  updateSiteConfig: () => {},
});

export default SiteContext;
