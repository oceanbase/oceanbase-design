import { Tooltip as AntTooltip, Space } from 'antd';
import type { TooltipPropsWithTitle as AntTooltipPropsWithTitle } from 'antd/es/tooltip';
import React, { useContext, useEffect, useMemo } from 'react';
import { CloseCircleTwoTone, CloseOutlined } from '@oceanbase/icons';
import { token } from '../static-function';
import MouseTooltip from './MouseTooltip';
import ConfigProvider from '../config-provider';
import useToken from 'antd/lib/theme/useToken';

export * from 'antd/es/tooltip';

export type TooltipType = 'default' | 'light' | 'success' | 'info' | 'warning' | 'error';

export interface TooltipProps extends AntTooltipPropsWithTitle {
  type?: TooltipType;
  mouseFollow?: boolean;
  closeIcon?: boolean | React.ReactNode;
  closeTitle?: React.ReactNode;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const getTooltipTypeList = () => [
  {
    type: 'light',
    color: token.colorText,
    backgroundColor: '#ffffff',
  },
  {
    type: 'success',
    color: token.colorSuccess,
    backgroundColor: token.colorSuccessBg,
  },
  {
    type: 'info',
    color: token.colorInfo,
    backgroundColor: token.colorInfoBg,
  },
  {
    type: 'warning',
    color: token.colorWarning,
    backgroundColor: token.colorWarningBg,
  },
  {
    type: 'error',
    color: token.colorError,
    backgroundColor: token.colorErrorBg,
  },
];

type CompoundedComponent = React.FC<TooltipProps> & {
  /** @internal */
  __ANT_TOOLTIP: boolean;
};

const Tooltip: CompoundedComponent = ({
  children,
  type = 'default',
  color,
  overlayInnerStyle,
  mouseFollow,
  closeTitle,
  closeIcon = false,
  onClose,
  title,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const { prefixCls: customizePrefixCls } = restProps
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);

  const [open, setOpen] = React.useState(undefined);
  const token = useToken()

  useEffect(() => {
    // 使用 open 关闭 tooltip 后，将 open 重新设置为 undefined 让 antd tooltip 继续接管展示逻辑
    if (open === false) {
      setOpen(undefined)
    }
  }, [open])

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);

    if (e.defaultPrevented) {
      return;
    }
    setOpen(false);
  };

  const spaceStyle = { display: 'flex', justifyContent: 'space-between' }
  const CloseIconNode = useMemo(() => {
    if (closeIcon === false || closeIcon === null) {
      return null
    }

    const IconNode = closeIcon === true ? <CloseOutlined className={`${prefixCls}-close-icon`} onClick={handleCloseClick} /> : <span style={{ cursor: 'pointer' }} className={`${prefixCls}-close-icon`} onClick={handleCloseClick}>
      {closeIcon}
    </span>
    return closeTitle ? <Space style={spaceStyle}>
      {closeTitle}
      {IconNode}
    </Space> : IconNode
  }, [closeIcon])

  const titleNode = typeof title === 'function' ? title() : title
  const titleWithCloseIcon = [
    closeTitle && CloseIconNode,
    !closeTitle ? <Space style={spaceStyle}>
      {titleNode}
      {CloseIconNode}
    </Space> : titleNode
  ]

  const typeList = getTooltipTypeList();
  const typeItem = typeList.find(item => item.type === type);
  return mouseFollow ? (
    <MouseTooltip
      title={title}
      color={color || typeItem?.backgroundColor}
      overlayInnerStyle={{
        color: typeItem?.color,
        ...overlayInnerStyle,
      }}
      {...restProps}
    >
      {children}
    </MouseTooltip>
  ) : (
    <AntTooltip
      title={titleWithCloseIcon}
      open={open}
      color={color || typeItem?.backgroundColor}
      overlayInnerStyle={{
        color: typeItem?.color,
        ...overlayInnerStyle,
      }}
      {...restProps}
    >
      {children}
    </AntTooltip>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = AntTooltip.displayName;
}

Tooltip.__ANT_TOOLTIP = true;

export default Tooltip;
