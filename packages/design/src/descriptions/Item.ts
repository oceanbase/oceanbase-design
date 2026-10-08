import { Descriptions as AntDescriptions } from 'antd';
import type { DescriptionsItemProps as AntDescriptionsItemProps } from 'antd/es/descriptions/Item';
import type { DescriptionsContentProps } from './types';

export interface DescriptionsItemProps extends AntDescriptionsItemProps {
  contentProps?: DescriptionsContentProps;
}

export default AntDescriptions.Item as React.FC<DescriptionsItemProps>;
