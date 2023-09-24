import { Tooltip as AntTooltip, Space } from 'antd';
import type { TooltipPropsWithTitle as AntTooltipPropsWithTitle } from 'antd/es/tooltip';
import React, { useContext, useMemo, useState } from 'react';
import { CloseOutlined } from '@oceanbase/icons';
import { isNil } from 'lodash';
import { token } from '../static-function';
import MouseTooltip from './MouseTooltip';
import ConfigProvider from '../config-provider';
import useStyle from './style';
import classNames from 'classnames';

export * from 'antd/es/tooltip';

export type TooltipType = 'default' | 'light' | 'success' | 'info' | 'warning' | 'error';

export interface TooltipProps extends AntTooltipPropsWithTitle {
  type?: TooltipType;
  mouseFollow?: boolean;
  closeIcon?: boolean | React.ReactNode;
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
  closeIcon = false,
  onClose,
  title,
  className,
  open: propOpen,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const { prefixCls: customizePrefixCls } = restProps;
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const { wrapSSR, hashId } = useStyle(prefixCls);

  const tooltipCls = classNames(className, hashId);
  const [innerOpen, setInnerOpen] = useState(undefined);

  const open = isNil(propOpen) ? innerOpen : propOpen;

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);

    if (e.defaultPrevented) {
      return;
    }

    setInnerOpen(false);
  };

  const hasCloseIcon = !!closeIcon;
  const CloseIconNode = useMemo(() => {
    if (!hasCloseIcon) {
      return null;
    }

    return closeIcon === true ? (
      <CloseOutlined className={`${prefixCls}-close-icon`} onClick={handleCloseClick} />
    ) : (
      <span className={`${prefixCls}-close-icon`} onClick={handleCloseClick}>
        {closeIcon}
      </span>
    );
  }, [closeIcon]);

  const titleNode = typeof title === 'function' ? title() : title;
  const titleWithCloseIcon = (
    <Space className={`${prefixCls}-close-icon-wrap`}>
      {titleNode}
      {CloseIconNode}
    </Space>
  );

  const typeList = getTooltipTypeList();
  const typeItem = typeList.find(item => item.type === type);
  return wrapSSR(
    mouseFollow ? (
      <MouseTooltip
        title={title}
        color={color || typeItem?.backgroundColor}
        overlayInnerStyle={{
          color: typeItem?.color,
          ...overlayInnerStyle,
        }}
        className={tooltipCls}
        {...restProps}
      >
        {children}
      </MouseTooltip>
    ) : (
      <AntTooltip
        title={hasCloseIcon ? titleWithCloseIcon : title}
        color={color || typeItem?.backgroundColor}
        open={open}
        onOpenChange={open => {
          setInnerOpen(open);
        }}
        overlayInnerStyle={{
          color: typeItem?.color,
          ...overlayInnerStyle,
        }}
        className={tooltipCls}
        {...restProps}
      >
        {children}
      </AntTooltip>
    )
  );
};

if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = AntTooltip.displayName;
}

Tooltip.__ANT_TOOLTIP = true;

export default Tooltip;
