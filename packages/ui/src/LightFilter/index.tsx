import React, { useContext } from 'react';
import { LightFilter as AntLightFilter } from '@ant-design/pro-components';
import type { LightFilterProps } from '@ant-design/pro-components';
import { ConfigProvider } from '@oceanbase/design';
import useStyle from './style';

export type { LightFilterProps };

function LightFilter<T>({ prefixCls: customizePrefixCls, ...restProps }: LightFilterProps<T>) {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('pro-form-light-filter', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  return wrapSSR(<AntLightFilter prefixCls={customizePrefixCls} {...restProps} />);
}

export default LightFilter;
