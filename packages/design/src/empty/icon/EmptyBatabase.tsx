import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as NoDatabaseSvg } from '../assets/no-database.svg';

const EmptyBatabase = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={NoDatabaseSvg} {...props} />
);

export default EmptyBatabase;
