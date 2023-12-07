import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as HealthySvg } from '../assets/healthy.svg';

const HealthyIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HealthySvg} {...props} />
);

export default HealthyIcon;
