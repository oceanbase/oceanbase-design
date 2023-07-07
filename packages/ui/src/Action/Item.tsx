import { LoadingOutlined } from '@oceanbase/icons';
import { Button, Tooltip, Typography } from '@oceanbase/design';
import React from 'react';

export interface BaseProps {
  /** 是否显示 */
  visible?: boolean;
  disabled?: boolean;
  onClick?: () => Promise<void> | void;
  children?: React.ReactElement | string;
  type?: 'default' | 'primary';
  className?: string;
  enableLoading?: boolean;
  tooltip?: string;
  loading?: boolean;
  danger?: boolean;
  /** 不会被隐藏 */
  fixed?: boolean;
}

export class ActionButton extends React.PureComponent<BaseProps> {
  static __DISPLAY_NAME = 'button';
  state = {
    loading: false,
  };
  render() {
    const {
      type,
      disabled,
      children,
      onClick,
      enableLoading = true,
      className,
      tooltip,
      loading,
      danger,
    } = this.props;
    return (
      <Tooltip placement="top" title={tooltip}>
        <Button
          className={className}
          loading={enableLoading && (loading || this.state.loading)}
          type={type}
          danger={danger}
          disabled={disabled}
          onClick={_ => {
            if (enableLoading) {
              this.setState({ loading: true });

              const handle = onClick?.();

              if ((handle as Promise<void>).then) {
                (handle as Promise<void>).then(() => {
                  this.setState({ loading: false });
                });
              }
            }
          }}
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
      className,
      enableLoading = true,
      tooltip,
      loading,
    } = this.props;
    return (
      <Typography.Link
        className={className}
        style={{ padding: 0 }}
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
      >
        <Tooltip placement="top" title={tooltip}>
          {loading || this.state.disabled ? <LoadingOutlined /> : ''} {children}
        </Tooltip>
      </Typography.Link>
    );
  }
}
