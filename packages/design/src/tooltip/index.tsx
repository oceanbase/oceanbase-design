import { Tooltip as AntTooltip } from 'antd';
import type { TooltipPropsWithTitle as AntTooltipPropsWithTitle } from 'antd/es/tooltip';
import React from 'react';
import { token } from '../static-function';
import MouseTooltip from './MouseTooltip';

export * from 'antd/es/tooltip';

export type TooltipType = 'default' | 'light' | 'success' | 'info' | 'warning' | 'error';

export interface TooltipProps extends AntTooltipPropsWithTitle {
  type?: TooltipType;
  mouseFollow?: boolean;
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
  ...restProps
}) => {
  const typeList = getTooltipTypeList();
  const typeItem = typeList.find(item => item.type === type);
  return mouseFollow ? (
    <MouseTooltip
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
