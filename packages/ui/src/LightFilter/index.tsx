import React, { useContext } from 'react';
import { LightFilter as AntLightFilter } from '@ant-design/pro-components';
import type { LightFilterProps } from '@ant-design/pro-components';
import { ConfigProvider } from '@oceanbase/design';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import useStyle from './style';
import zhCN from './locale/zh-CN';

export type { LightFilterProps };

function LightFilter<T>(
  props: LightFilterProps<T> & LocaleWrapperProps & { filterAriaLabel?: string }
) {
  const { prefixCls: customizePrefixCls, filterAriaLabel, locale, ...rest } = props;
  const { theme: _injectedTheme, ...restProps } = rest as typeof rest & {
    theme?: { hashed?: boolean };
  };
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('pro-form-light-filter', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const label = filterAriaLabel ?? locale?.filterLabel;

  return wrapSSR(
    <div role="group" aria-label={label}>
      <AntLightFilter prefixCls={customizePrefixCls} {...restProps} />
    </div>
  );
}

export default LocaleWrapper({
  componentName: 'LightFilter',
  defaultLocale: zhCN,
})(LightFilter) as typeof LightFilter;
