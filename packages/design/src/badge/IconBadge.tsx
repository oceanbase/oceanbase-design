import React from 'react';
import { Space } from 'antd';
import {
  CloseCircleFilled,
  CheckCircleFilled,
  Loading3QuartersOutlined,
  StopFilled,
  ClockCircleFilled
} from '@ant-design/icons';
// @ts-ignore
// import waitingIcon from './style/waiting.png';

export interface IconBadgeProps {
  prefixCls: any,
  className?: string;
  status?: string; // 设置 Badge 为状态点
  text?: React.ReactNode;
  icon?: boolean | React.ReactNode;
}

const IconBadge = ({ icon, status, text, className, ...restProps }: IconBadgeProps) => {

  const classNameIcon = `${className}-status-icon ${className}-status-${status}`
  const statusTextNode = !text ? <></> : <span className={`${className}-status-text`}>{text}</span>;

  const iconMap = {
    default: <StopFilled />,
    processing: <Loading3QuartersOutlined style={{
      display: 'inline-block',
      animation: 'loadingCircle 1s infinite linear'
    }} />,
    success: <CheckCircleFilled />,
    error: <CloseCircleFilled />,
    warning: <ClockCircleFilled />,
  };

  return (<Space className={`${className}`}>
    <span className={classNameIcon}>
      {React.isValidElement(icon) ? icon : iconMap?.[status]}
    </span>
    {statusTextNode}
  </Space>)
};

export default IconBadge;
