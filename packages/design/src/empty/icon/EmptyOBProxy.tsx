import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as NoOBProxySvg } from '../assets/no-obproxy.svg';

const EmptyOBProxy = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={NoOBProxySvg} {...props} />
);

export default EmptyOBProxy;
