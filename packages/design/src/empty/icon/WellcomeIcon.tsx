import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as WellcomeSvg } from '../assets/wellcome.svg';

const WellcomeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={WellcomeSvg} {...props} />
);

export default WellcomeIcon;
