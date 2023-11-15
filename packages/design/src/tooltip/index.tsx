import { Tooltip as AntTooltip, Space } from 'antd';
import type {
  TooltipPropsWithTitle as AntTooltipPropsWithTitle,
  TooltipRef,
} from 'antd/es/tooltip';
import React, { useContext, useEffect, useState } from 'react';
import { CloseOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import { isNil } from 'lodash';
import MouseTooltip from './MouseTooltip';
import ConfigProvider from '../config-provider';
import useStyle from './style';
import { useTooltipTypeList } from './hooks/useTooltipTypeList';

export * from 'antd/es/tooltip';

export type TooltipType = 'default' | 'light' | 'success' | 'info' | 'warning' | 'error';

export interface TooltipProps extends AntTooltipPropsWithTitle {
  type?: TooltipType;
  mouseFollow?: boolean;
  closeIcon?: boolean | React.ReactNode;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  TooltipProps & React.RefAttributes<TooltipRef | undefined>
> & {
  /** @internal */
  __ANT_TOOLTIP: boolean;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof AntTooltip._InternalPanelDoNotUseOrYouWillBeFired;
};

const Tooltip = React.forwardRef<TooltipRef, TooltipProps>(
  (
    {
      children,
      title,
      type = 'default',
      color,
      mouseFollow,
      closeIcon = false,
      onClose,
      open,
      defaultOpen,
      onOpenChange,
      visible,
      defaultVisible,
      onVisibleChange,
      overlayInnerStyle,
      className,
      ...restProps
    },
    ref
  ) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

    const { prefixCls: customizePrefixCls } = restProps;
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const { wrapSSR, hashId } = useStyle(prefixCls);

    const tooltipCls = classNames(className, hashId);
    const [innerOpen, setInnerOpen] = useState(open ?? visible ?? defaultOpen ?? defaultVisible);

    const newOpen = open ?? visible ?? innerOpen;

    useEffect(() => {
      if (!isNil(open)) {
        setInnerOpen(open);
      } else if (!isNil(visible)) {
        setInnerOpen(visible);
      }
    }, [open, visible]);

    const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      onClose?.(e);

      if (e.defaultPrevented) {
        return;
      }

      setInnerOpen(false);
    };

    const closeIconNode = closeIcon ? (
      closeIcon === true ? (
        <CloseOutlined className={`${prefixCls}-close-icon`} onClick={handleCloseClick} />
      ) : (
        <span className={`${prefixCls}-close-icon`} onClick={handleCloseClick}>
          {closeIcon}
        </span>
      )
    ) : null;

    const titleNode = typeof title === 'function' ? title() : title;
    const newTitle = closeIcon ? (
      <Space className={`${prefixCls}-close-icon-wrap`}>
        {titleNode}
        {closeIconNode}
      </Space>
    ) : (
      titleNode
    );

    const typeList = useTooltipTypeList();
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
          ref={ref}
          title={newTitle}
          color={color || typeItem?.backgroundColor}
          open={newOpen}
          defaultOpen={defaultOpen}
          onOpenChange={value => {
            setInnerOpen(value);
            onVisibleChange?.(value);
            onOpenChange?.(value);
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
  }
) as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = AntTooltip.displayName;
}

Tooltip.__ANT_TOOLTIP = true;

Tooltip._InternalPanelDoNotUseOrYouWillBeFired = AntTooltip._InternalPanelDoNotUseOrYouWillBeFired;

export default Tooltip;
