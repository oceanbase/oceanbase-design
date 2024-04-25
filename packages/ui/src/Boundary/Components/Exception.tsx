import { Alert, Button } from '@oceanbase/design';
import React from 'react';
import type { LocaleWrapperProps } from '../../locale/LocaleWrapper';
import LocaleWrapper from '../../locale/LocaleWrapper';
import { EXCEPTION_PRESET } from '../constant';
import type { BoundaryLocale } from '../IBoundary';
import zhCN from '../locale/zh-CN';
import classNames from 'classnames';

export interface ExceptionProps extends LocaleWrapperProps, React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  imageUrl?: string;
  title?: string;
  buttonText?: string;
  onClick?: () => void;
  subscription?: string;
  isNotCompatible?: boolean;
  showError?: boolean;
  hasButton?: boolean;
  locale?: BoundaryLocale;
}

interface ExceptionState {
  hasError: boolean;
  error: Error | null;
  info: Object;
}
class BoundaryException extends React.PureComponent<ExceptionProps, ExceptionState> {
  state = {
    hasError: false,
    error: undefined,
    info: {
      componentStack: '',
    },
  };
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error | null, info: object) {
    this.setState({ error, info });
  }

  onClick() {
    const { onClick: onBtnClick } = this.props;
    if (onBtnClick) {
      onBtnClick();
    } else {
      window.location.href = '/';
    }
  }

  render() {
    const {
      imageUrl,
      title,
      buttonText,
      subscription,
      isNotCompatible,
      showError = false,
      hasButton = true,
      locale,
      className,
      ...restProps
    } = this.props;

    const errorInfo = EXCEPTION_PRESET(locale).ERROR_BOUNDARY;
    const notCompatibleInfo = EXCEPTION_PRESET(locale).INCOMPATIBLE_VERSION;
    const { error, info } = this.state;
    const errorDescription = info?.componentStack;
    const errorMessage = (error || '').toString();

    if (this.state?.hasError) {
      return (
        <div
          className={classNames('boundary-container', 'ob-boundary-error', className)}
          {...restProps}
        >
          <div className="empty">
            <img src={imageUrl || errorInfo.imageUrl} />
            <h4>{title || errorInfo.title}</h4>
            {showError ? (
              <Alert
                type="error"
                showIcon={true}
                message={errorMessage}
                description={errorDescription}
                style={{
                  marginTop: 24,
                  overflow: 'auto',
                  maxHeight: '50vh',
                  // 为了避免被 Empty 的水平居中样式影响，需要设置 textAlign
                  textAlign: 'left',
                }}
              />
            ) : (
              subscription && <span>{subscription}</span>
            )}
            {hasButton ? (
              <Button type="primary" onClick={() => this.onClick()}>
                {buttonText || errorInfo.buttonText}
              </Button>
            ) : (
              ''
            )}
          </div>
        </div>
      );
    } else if (isNotCompatible) {
      return (
        <div
          className={classNames(
            'boundary-container',
            'ob-boundary-browser-not-compatible',
            className
          )}
          {...restProps}
        >
          <div className="empty">
            <img src={imageUrl || notCompatibleInfo.imageUrl} />
            <h4>{title || notCompatibleInfo.title}</h4>
            <span>{subscription ? subscription : notCompatibleInfo.subscription}</span>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export const Exception = LocaleWrapper({
  componentName: 'Boundary',
  defaultLocale: zhCN,
})(BoundaryException);
