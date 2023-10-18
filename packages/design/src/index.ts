// 引入 antd/dist/reset.css，以重置基本样式，保证原生元素遵从 antd 规范样式
// ref: https://ant.design/docs/react/migration-v5-cn#%E6%8A%80%E6%9C%AF%E8%B0%83%E6%95%B4
import 'antd/dist/reset.css';

export * from 'antd';
export { version } from '../package.json';
export { default as Alert } from './alert';
export { default as Button } from './button';
export { default as Card } from './card';
export { default as ConfigProvider } from './config-provider';
export { default as Descriptions } from './descriptions';
export { default as Form } from './form';
export { default as Modal } from './modal';
export { message, notification, token } from './static-function';
export { default as Table } from './table';

export { default as Tabs } from './tabs';
export type { TabsProps } from './tabs';

export { default as theme } from './theme';
export { default as Tooltip } from './tooltip';
export { default as Breadcrumb } from './breadcrumb';
export { default as Spin } from './spin';
export { default as Badge } from './badge';

import theme from './theme';

const { useToken } = theme;
export { useToken };

export type { PresetStatusColorType } from 'antd/es/_util/colors';
