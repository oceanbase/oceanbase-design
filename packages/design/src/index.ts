export * from 'antd';
export { version } from '../package.json';

export { default as Alert } from './alert';
export type { AlertProps } from './alert';

export { default as Button } from './button';
export type { ButtonProps } from './button';

export { default as Space } from './space';
export type { SpaceProps, SpaceSize } from './space';

export { Col, Row } from './grid';
export type { ColProps, RowProps, ColSize } from './grid';

export { default as Typography } from './typography';
export type { TypographyProps } from './typography';

export { default as Card } from './card';
export type { CardProps } from './card';

export { default as App } from './app';
export type { AppProps } from './app';

export { default as ConfigProvider } from './config-provider';
export type { ConfigProviderProps, ConfigConsumerProps, ThemeConfig } from './config-provider';

export { default as Descriptions } from './descriptions';
export type {
  DescriptionsProps,
  DescriptionsItemType,
  DescriptionsItemProps,
} from './descriptions';

export { default as Empty } from './empty';
export type { EmptyProps } from './empty';

export { default as Form } from './form';
export type { FormProps, FormItemProps } from './form';

export { default as Modal } from './modal';
export type { ModalProps, ModalFuncProps, ModalProgressProps } from './modal';

export { default as Drawer } from './drawer';
export type { DrawerProps } from './drawer';

export { message, notification, token } from './static-function';

export { default as List } from './list';
export type { ListProps } from './list';

export { default as Table } from './table';
export type { TableProps } from './table';

export { default as Tabs } from './tabs';
export type { TabsProps } from './tabs';

export { default as Tag } from './tag';
export type { TagProps } from './tag';

export { default as Input } from './input';
export type { InputProps } from './input';

export { default as InputNumber } from './input-number';
export type { InputNumberProps } from './input-number';

export { default as Radio } from './radio';
export type { RadioProps } from './radio';

export { default as Checkbox } from './checkbox';
export type { CheckboxProps } from './checkbox';

export { default as Switch } from './switch';
export type { SwitchProps } from './switch';

export { default as Select } from './select';
export type { SelectProps } from './select';

export { default as TreeSelect } from './tree-select';
export type { TreeSelectProps } from './tree-select';

export { default as Slider } from './slider';
export type { SliderSingleProps, SliderRangeProps } from './slider';

export { default as Tooltip } from './tooltip';
export type { TooltipProps } from './tooltip';

export { default as Segmented } from './segmented';
export type { SegmentedProps } from './segmented';

export { default as Breadcrumb } from './breadcrumb';
export type { BreadcrumbProps, BreadcrumbItemProps } from './breadcrumb';

export { default as Dropdown } from './dropdown';
export type { DropdownProps, DropdownButtonProps, DropdownButtonType } from './dropdown';

export { default as Result } from './result';
export type { ResultProps, ResultType, ResultStatusType } from './result';

export { default as Spin } from './spin';
export type { SpinProps } from './spin';

export { default as Badge } from './badge';
export type { BadgeProps } from './badge';

export { default as Lottie } from './lottie';
export type { LottieProps, LottieRef } from './lottie';

export { default as theme } from './theme';

import theme from './theme';

const { useToken } = theme;
export { useToken };

export type { PresetStatusColorType } from 'antd/es/_util/colors';
