import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';
import { ReactComponent as NoClusterSvg } from '../assets/no-cluster.svg';

const EmptyCluster = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={NoClusterSvg} {...props} />
);

export default EmptyCluster;
