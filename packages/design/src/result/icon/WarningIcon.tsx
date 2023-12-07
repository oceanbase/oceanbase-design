import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as WarningSvg } from '../assets/warning.svg';

const WarningIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={WarningSvg} {...props} />
);

export default WarningIcon;
