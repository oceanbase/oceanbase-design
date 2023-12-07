import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as FailedSvg } from '../assets/failed.svg';

const FailedIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={FailedSvg} {...props} />
);

export default FailedIcon;
