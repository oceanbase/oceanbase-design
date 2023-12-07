import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as NoDataSvg } from '../assets/no-data.svg';

const NoDataIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={NoDataSvg} {...props} />
);

export default NoDataIcon;
