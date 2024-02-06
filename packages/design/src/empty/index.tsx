import React, { useContext } from 'react';
import { Empty as AntEmpty, Steps } from 'antd';
import type { EmptyProps as AntEmptyProps } from 'antd/es/empty';
import type { StepProps } from 'antd/es/steps';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import DefaultEmptyImg from './empty';
import SimpleEmptyImg from './simple';
import useStyle from './style';

export * from 'antd/es/empty';

const defaultEmptyImg = <DefaultEmptyImg />;
const simpleEmptyImg = <SimpleEmptyImg />;

export interface EmptyProps extends AntEmptyProps {
  title?: React.ReactNode;
  steps?: StepProps[];
  layout?: 'horizontal' | 'vertical';
}

type CompoundedComponent = React.FC<EmptyProps> & {
  PRESENTED_IMAGE_DEFAULT: React.ReactNode;
  PRESENTED_IMAGE_SIMPLE: React.ReactNode;
};

const Empty: CompoundedComponent = ({
  image = defaultEmptyImg,
  title,
  description,
  steps,
  layout = 'vertical',
  children,
  prefixCls: customizePrefixCls,
  className,
  style,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('empty', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const isHorizontal = layout === 'horizontal';
  const emptyCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-normal`]: image === simpleEmptyImg,
      [`${prefixCls}-horizontal`]: isHorizontal,
    },
    className
  );

  return wrapSSR(
    <AntEmpty
      image={image}
      description={
        title || description || steps || (isHorizontal && children) ? (
          <>
            {title && <div className={`${prefixCls}-title`}>{title}</div>}
            {description && (
              <div
                // to avoid conflicts with `${prefixCls}-description`
                className={`${prefixCls}-description-content`}
              >
                {description}
              </div>
            )}
            {steps && <Steps items={steps} />}
            {isHorizontal && children && <div className={`${prefixCls}-footer`}>{children}</div>}
          </>
        ) : undefined
      }
      prefixCls={customizePrefixCls}
      className={emptyCls}
      {...restProps}
    >
      {!isHorizontal && children}
    </AntEmpty>
  );
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;

if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = AntEmpty.displayName;
}

export default Empty;
