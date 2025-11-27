import { Button, ConfigProvider } from '@oceanbase/design';
import React, { useContext, useMemo } from 'react';
import type { FunctionConfigType, FunctionStateType } from '../constant';
import classNames from 'classnames';
import useStyle from '../style';

export interface IBoundaryFunction extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  state: FunctionStateType;
  config: FunctionConfigType;
  onClick?: () => void;
}

export const BoundaryFunction: React.FC<IBoundaryFunction> = props => {
  const { children, state, config, onClick, className, ...restProps } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('boundary');
  const { wrapSSR } = useStyle(prefixCls);
  const info = useMemo(() => {
    return state ? config[state] : config[Object.keys(config)[0]];
  }, [config, state]);

  return wrapSSR(
    <div
      className={classNames('boundary-container', `${prefixCls}-function`, className)}
      {...restProps}
    >
      <div className="empty">
        <img src={info.imageUrl} />
        <h4>{info.title}</h4>
        {children}
        {info.buttonText && (
          <Button type="primary" onClick={onClick || info.onClick}>
            {info.buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};
