import { Button } from '@oceanbase/design';
import React, { useMemo } from 'react';
import type { FunctionConfigType, FunctionStateType } from '../constant';
import classNames from 'classnames';

export interface IBoundaryFunction extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  state: FunctionStateType;
  config: FunctionConfigType;
  onClick?: () => void;
}

export const BoundaryFunction: React.FC<IBoundaryFunction> = props => {
  const { children, state, config, onClick, className, ...restProps } = props;
  const info = useMemo(() => {
    return state ? config[state] : config[Object.keys(config)[0]];
  }, [config, state]);

  return (
    <div
      className={classNames('boundary-container', 'ob-boundary-function', className)}
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
