import { Button } from '@oceanbase/design';
import React, { useMemo } from 'react';
import type { LocaleWrapperProps } from '../../locale/LocaleWrapper';
import LocaleWrapper from '../../locale/LocaleWrapper';
import type { CodeType } from '../constant';
import { CODE_PRESET } from '../constant';
import type { BoundaryLocale } from '../IBoundary';
import zhCN from '../locale/zh-CN';
import classNames from 'classnames';

export interface IBoundaryCode extends LocaleWrapperProps, React.HTMLProps<HTMLDivElement> {
  code: CodeType;
  onClick?: () => void;
  children?: React.ReactNode;
  imageUrl?: string;
  title?: string;
  buttonText?: string;
  locale?: BoundaryLocale;
}

const BoundaryCode: React.FC<IBoundaryCode> = props => {
  const { children, onClick, code, imageUrl, title, buttonText, locale, className, ...restProps } =
    props;

  const info = useMemo(() => {
    const data = CODE_PRESET(locale);

    return data[code];
  }, [code, locale]);

  return (
    <div
      className={classNames(
        'boundary-container',
        'boundary-code',
        `ob-boundary-${code}`,
        className
      )}
      {...restProps}
    >
      <div className="empty">
        <img src={imageUrl || info.imageUrl} />
        <h4>{title || info.title}</h4>
        {children}
        <Button type="primary" onClick={onClick || info.onClick}>
          {buttonText || info.buttonText}
        </Button>
      </div>
    </div>
  );
};

export const Code = LocaleWrapper({
  componentName: 'Boundary',
  defaultLocale: zhCN,
})(BoundaryCode);
