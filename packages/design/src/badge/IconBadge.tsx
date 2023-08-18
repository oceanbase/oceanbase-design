import React from 'react';
import { Space } from 'antd';
import Icon, {
  CloseCircleFilled,
  CheckCircleFilled,
  Loading3QuartersOutlined,
  StopFilled
} from '@ant-design/icons';
// @ts-ignore
import { WaitingSvg } from './style/waiting.svg';

export interface IconBadgeProps {
  prefixCls: any,
  className?: string;
  status?: string; // 设置 Badge 为状态点
  text?: React.ReactNode;
  icon?: boolean | React.ReactNode;
}

const IconBadge = ({ icon, status, text, className, ...restProps }: IconBadgeProps) => {

  const classNameIcon = `ant-badge-status-icon ant-badge-status-${status}`
  let statusIcon: React.ReactNode | undefined = undefined;
  const statusTextNode = !text ? <></> : <span className="ant-badge-status-text">{text}</span>;

  if (icon && typeof icon !== 'boolean') {
    statusIcon = icon
  } else {
    if (status === 'processing') {
      statusIcon = <Loading3QuartersOutlined />;
    } else if (status === 'success') {
      statusIcon = <CheckCircleFilled />;
    } else if (status === 'error') {
      statusIcon = <CloseCircleFilled />;
    } else if (status === 'warning') {
      statusIcon = <Icon component={WaitingSvg} />
    } else if (status === 'default') {
      statusIcon = <StopFilled />;
    }
  }

  return (<Space className={`${className}`}>
    <span className={classNameIcon}>{statusIcon}</span>
    {statusTextNode}
  </Space>)
};

export default IconBadge;
