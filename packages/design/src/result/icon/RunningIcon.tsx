import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as RunningSvg } from '../assets/running.svg';

const RunningIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={RunningSvg} {...props} />
);

export default RunningIcon;
