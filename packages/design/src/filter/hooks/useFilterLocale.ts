import { useContext } from 'react';
import ConfigProvider from '../../config-provider';
import type { FilterLocale, Locale } from '../../locale';
import defaultLocale from '../../locale/en-US';

/**
 * 获取 Filter 组件的国际化文案
 * 优先级：customLocale > ConfigProvider locale > 默认语言包（en-US）
 * @param customLocale 通过 props 传入的 locale
 * @returns 合并后的 Filter 文案
 */
export function useFilterLocale(customLocale?: FilterLocale): FilterLocale {
  const { locale: contextLocale } = useContext(ConfigProvider.ConfigContext);
  return {
    ...defaultLocale.Filter,
    ...(contextLocale as Locale)?.Filter,
    ...customLocale,
  };
}

export default useFilterLocale;
