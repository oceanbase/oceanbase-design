import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as EmptySvg } from '../assets/empty.svg';

const EmptyIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={EmptySvg} {...props} />
);

export default EmptyIcon;
