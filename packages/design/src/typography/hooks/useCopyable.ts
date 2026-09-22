import { useContext } from 'react';
import type { ReactNode } from 'react';
import ConfigProvider from '../../config-provider';
import type { ConfigConsumerProps } from '../../config-provider';
import { getCopyableConfig } from '../../_util/getCopyableConfig';
import type { Copyable } from '../../_util/getCopyableConfig';

const useCopyable = (copyable?: Copyable, children?: ReactNode) => {
  const { typography } = useContext<ConfigConsumerProps>(ConfigProvider.ConfigContext);
  return getCopyableConfig(copyable, children, typography?.copyable?.hover);
};

export default useCopyable;
