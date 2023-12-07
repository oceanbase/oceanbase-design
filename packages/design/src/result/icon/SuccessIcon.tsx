import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as SuccessSvg } from '../assets/success.svg';

const SuccessIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SuccessSvg} {...props} />
);

export default SuccessIcon;
