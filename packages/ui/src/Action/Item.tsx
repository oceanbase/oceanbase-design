import { LoadingOutlined } from '@oceanbase/icons';
import { Button, Tooltip, Typography } from '@oceanbase/design';
import type { ButtonProps } from '@oceanbase/design';
import React from 'react';

export interface BaseProps extends ButtonProps {
  /** 是否显示 */
  visible?: boolean;
  /** 固定展示、不会被折叠 */
  fixed?: boolean;
  onClick?: () => Promise<void> | void;
  children?: React.ReactElement | string;
  enableLoading?: boolean;
  tooltip?: string;
  loading?: boolean;
}

export class ActionButton extends React.PureComponent<BaseProps> {
  static __DISPLAY_NAME = 'button';
  state = {
    loading: false,
  };
  render() {
    const { children, onClick, enableLoading = true, tooltip, loading, ...restProps } = this.props;
    return (
      <Tooltip placement="top" title={tooltip}>
        <Button
          loading={enableLoading && (loading || this.state.loading)}
          onClick={_ => {
            const handle = onClick?.();

            if (enableLoading && (handle as Promise<void>)?.then) {
              this.setState({ loading: true });

              (handle as Promise<void>).then(() => {
                this.setState({ loading: false });
              });
            }
          }}
          {...restProps}
        >
          {children}
        </Button>
      </Tooltip>
    );
  }
}

export class ActionLink extends React.PureComponent<BaseProps> {
  static __DISPLAY_NAME = 'link';
  state = {
    loading: false,
    disabled: false,
  };
  render() {
    const {
      disabled,
      onClick,
      children,
      enableLoading = true,
      tooltip,
      loading,
      type,
      style,
      ...restProps
    } = this.props;
    return (
      <Typography.Link
        style={{ padding: 0, ...style }}
        disabled={loading || disabled || this.state.disabled}
        onClick={_ => {
          const handle = onClick?.();

          if (enableLoading && (handle as Promise<void>)?.then) {
            this.setState({ loading: true, disabled: true });

            (handle as Promise<void>).then(() => {
              this.setState({ loading: false, disabled: false });
            });
          }
        }}
        {...restProps}
      >
        <Tooltip placement="top" title={tooltip}>
          {loading || this.state.disabled ? <LoadingOutlined /> : ''} {children}
        </Tooltip>
      </Typography.Link>
    );
  }
}
