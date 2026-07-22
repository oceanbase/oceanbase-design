import { useLocation as useDumiLocation } from 'dumi';
import * as React from 'react';
import useLocale from './useLocale';
import * as utils from '../theme/utils';

function trimTrailingSlash(path: string) {
  return path.replace(/\/$/, '') || '/';
}

export default function useLocation() {
  const location = useDumiLocation();
  const { search } = location;
  const [, localeType] = useLocale();

  const getLink = React.useCallback(
    (path: string, hash?: string | { cn: string; en: string }) => {
      let pathname = trimTrailingSlash(utils.getPathWithoutLocale(path));
      pathname =
        localeType === 'cn'
          ? pathname === '/'
            ? utils.ZH_CN_BASE
            : `${utils.ZH_CN_BASE}${pathname}`
          : pathname;

      if (search) {
        pathname = `${pathname}${search}`;
      }

      if (hash) {
        let hashStr: string;
        if (typeof hash === 'object') {
          hashStr = hash[localeType];
        } else {
          hashStr = hash;
        }

        pathname = `${pathname}#${hashStr}`;
      }

      return pathname;
    },
    [localeType, search]
  );

  const pathnameWithoutLocale = trimTrailingSlash(utils.getPathWithoutLocale(location.pathname));
  const pathnameWithLocale = trimTrailingSlash(location.pathname);

  return {
    ...location,
    pathname: pathnameWithoutLocale,
    pathnameWithLocale,
    getLink,
  };
}
