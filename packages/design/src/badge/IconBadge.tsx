import React from 'react';
import Icon, {
  CloseCircleFilled,
  CheckCircleFilled,
  Loading3QuartersOutlined,
  StopFilled
} from '@ant-design/icons';

export interface IconBadgeProps {
  prefixCls: any,
  className?: string;
  status?: string; // 设置 Badge 为状态点
  text?: React.ReactNode;
  icon?: boolean | React.ReactNode;
}

const WaitingSvg = () => (
  <svg t="1692177915450" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6069" width="18" height="18"><path d="M512 85.333333a426.666667 426.666667 0 1 1 0 853.333334A426.666667 426.666667 0 0 1 512 85.333333zM298.666667 469.333333a42.666667 42.666667 0 1 0 0 85.333334 42.666667 42.666667 0 0 0 0-85.333334z m213.333333 0a42.666667 42.666667 0 1 0 0 85.333334 42.666667 42.666667 0 0 0 0-85.333334z m213.333333 0a42.666667 42.666667 0 1 0 0 85.333334 42.666667 42.666667 0 0 0 0-85.333334z" fill="#FAAD14" p-id="6070"></path></svg>
);


const IconBadge = ({ icon, status, text, className, ...restProps }: IconBadgeProps) => {

  const classNameIcon = `ant-badge-status-icon ant-badge-status-${status}`
  let statusIcon: React.ReactNode | undefined = undefined;
  const statusTextNode = !text ? <></> : <span className="ant-badge-status-text">{text}</span>;

  if (icon && typeof icon !== 'boolean') {
    statusIcon = icon
  } else {
    if (status === 'processing') {
      statusIcon = <Loading3QuartersOutlined className={classNameIcon} style={{ color: '#0ac185' }} />;
    } else if (status === 'success') {
      statusIcon = <CheckCircleFilled className={classNameIcon} style={{ color: '#ff4b4b' }} />;
    } else if (status === 'error') {
      statusIcon = <CloseCircleFilled className={classNameIcon} style={{ color: '#CDD5E4' }} />;
    } else if (status === 'warning') {
      statusIcon = <Icon component={WaitingSvg} className={classNameIcon} style={{ color: '#006aff' }} />
    } else if (status === 'default') {
      statusIcon = <StopFilled className={classNameIcon} style={{ color: '#ffac33' }} />;
    }
  }

  return (<span className={`${className}`}>
    {statusIcon}
    {statusTextNode}
  </span>)
};

export default IconBadge;
