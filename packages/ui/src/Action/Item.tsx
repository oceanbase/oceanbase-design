import { LoadingOutlined } from '@oceanbase/icons';
import { Button, Tooltip, Typography } from '@oceanbase/design';
import type { ButtonProps } from '@oceanbase/design';
import React, { useState } from 'react';

export interface BaseProps extends ButtonProps {
  /** 是否显示 */
  visible?: boolean;
  /** 固定展示、不会被折叠 */
  fixed?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<void> | void;
  children?: React.ReactElement | React.ReactNode | string;
  enableLoading?: boolean;
  tooltip?: string;
  loading?: boolean;
  divider?: boolean;
}

export const ActionButton: React.FC<BaseProps> & { __DISPLAY_NAME?: string } = ({
  children,
  onClick,
  enableLoading = true,
  tooltip,
  loading,
  ...restProps
}) => {
  const [internalLoading, setInternalLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const handle = onClick?.(e);

    if (enableLoading && (handle as Promise<void>)?.then) {
      setInternalLoading(true);

      (handle as Promise<void>).then(() => {
        setInternalLoading(false);
      });
    }
  };

  return (
    <Tooltip placement="top" title={tooltip}>
      <Button
        loading={enableLoading && (loading || internalLoading)}
        onClick={handleClick}
        {...restProps}
      >
        {children}
      </Button>
    </Tooltip>
  );
};

ActionButton.__DISPLAY_NAME = 'button';

export const ActionLink: React.FC<BaseProps> & { __DISPLAY_NAME?: string } = ({
  disabled,
  onClick,
  children,
  enableLoading = true,
  tooltip,
  loading,
  type,
  style,
  ...restProps
}) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const [internalDisabled, setInternalDisabled] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const handle = onClick?.(e);

    if (enableLoading && (handle as Promise<void>)?.then) {
      setInternalLoading(true);
      setInternalDisabled(true);

      (handle as Promise<void>).then(() => {
        setInternalLoading(false);
        setInternalDisabled(false);
      });
    }
  };

  return (
    <Typography.Link
      style={{ padding: 0, ...style }}
      disabled={loading || disabled || internalDisabled}
      onClick={handleClick}
      {...restProps}
    >
      <Tooltip placement="top" title={tooltip}>
        {loading || internalDisabled ? <LoadingOutlined /> : ''} {children}
      </Tooltip>
    </Typography.Link>
  );
};

ActionLink.__DISPLAY_NAME = 'link';
