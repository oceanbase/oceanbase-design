import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as NoHostSvg } from '../assets/no-host.svg';

const EmptyHost = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={NoHostSvg} {...props} />
);

export default EmptyHost;
