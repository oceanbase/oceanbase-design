import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as NoTenantSvg } from '../assets/no-tenant.svg';

const EmptyTenant = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={NoTenantSvg} {...props} />
);

export default EmptyTenant;
