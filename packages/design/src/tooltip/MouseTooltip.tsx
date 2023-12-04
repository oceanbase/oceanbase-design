import { useMouse, useSize } from 'ahooks';
import type { TooltipPropsWithTitle as AntTooltipPropsWithTitle } from 'antd/es/tooltip';
import React, { useRef, useState } from 'react';
import ReactStickyMouseTooltip from 'react-sticky-mouse-tooltip';
import theme from '../theme';

interface MouseTooltipProps extends AntTooltipPropsWithTitle {
  /* 外部传入的 visible 并不完全控制显示和隐藏，只是作为是否显示的前提条件 */
  visible?: boolean;
  offsetX?: number;
  offsetY?: number;
}

const MouseTooltip: React.FC<MouseTooltipProps> = ({
  children,
  title,
  color: backgroundColor,
  visible: outerVisible = true,
  open: outerOpen = true,
  onOpenChange,
  onVisibleChange,
  overlayInnerStyle,
  mouseEnterDelay = 0.1,
  mouseLeaveDelay = 0.1,
  ...restProps
}) => {
  const { token } = theme.useToken();
  const [visible, setVisible] = useState(false);

  const { color: textColor, ...restOverlayInnerStyle } = overlayInnerStyle || {};

  const handleVisibleChange = (value: boolean) => {
    setVisible(value);
    onOpenChange?.(value);
    onVisibleChange?.(value);
  };

  // 获取鼠标位置
  const { clientX = 0, clientY = 0 } = useMouse();
  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);
  // tooltip 宽高，由于 ref 是设置在内容区上的，因此还需要加上外部的 padding
  const tooltipWidth = (size?.width || 0) + 16;
  const tooltipHeight = (size?.height || 0) + 12;
  // 页面宽高
  const pageWidth = document.body.clientWidth || 0;
  const pageHeight = document.body.clientHeight || 0;

  // 是否横向超出浏览器，需要留出 8px 缓冲区，避免到达页面边界时位置调整不生效
  const isOverWidth = clientX + tooltipWidth + 8 > pageWidth;
  // 是否纵向超出浏览器，需要留出 8px 缓冲区，避免到达页面边界时位置调整不生效
  const isOverHeight = clientY + tooltipHeight + 8 > pageHeight;

  // tooltip 和鼠标之间的偏移
  const offset = 8;

  return (
    <>
      <span
        onMouseEnter={() => {
          if (outerOpen || outerVisible) {
            setTimeout(() => {
              handleVisibleChange(true);
            }, mouseEnterDelay * 1000);
          }
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            handleVisibleChange(false);
          }, mouseLeaveDelay * 1000);
        }}
      >
        {children}
      </span>
      {title && (
        <ReactStickyMouseTooltip
          visible={visible}
          style={{
            // 需要大于 Popover 的 1030 zIndex 值，否则会被遮挡
            zIndex: 1100,
            padding: '6px 8px',
            boxShadow: token.boxShadowSecondary,
            borderRadius: token.borderRadius,
            color: textColor || token.colorTextLightSolid,
            backgroundColor: backgroundColor || token.colorBgSpotlight,
            left: isOverWidth ? clientX - tooltipWidth - offset : clientX + offset,
            top: isOverHeight ? clientY - tooltipHeight - offset : clientY + offset,
            ...restOverlayInnerStyle,
          }}
          {...restProps}
        >
          <div ref={ref}>{typeof title === 'function' ? title() : title}</div>
        </ReactStickyMouseTooltip>
      )}
    </>
  );
};

if (process.env.NODE_ENV !== 'production') {
  MouseTooltip.displayName = 'MouseTooltip';
}

export default MouseTooltip;
