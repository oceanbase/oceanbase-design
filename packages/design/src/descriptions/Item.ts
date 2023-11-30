import { Descriptions as AntDescriptions } from 'antd';
import type { DescriptionsItemProps as AntDescriptionsItemProps } from 'antd/es/descriptions/Item';
import type { TextProps } from '../typography/Text';

export interface DescriptionsItemProps extends AntDescriptionsItemProps {
  contentProps?: TextProps;
}

export default AntDescriptions.Item as React.FC<DescriptionsItemProps>;
