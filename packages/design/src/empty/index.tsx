import React, { useContext } from 'react';
import { Empty as AntEmpty, Steps } from 'antd';
import type { EmptyProps as AntEmptyProps } from 'antd/es/empty';
import type { StepProps } from 'antd/es/steps';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import { useLocale } from '../locale';
import DefaultEmptyImg from './default';
import ColoredEmptyImg from './colored';
import GuideEmptyImg from './guide';
import useStyle from './style';

export * from 'antd/es/empty';

const defaultEmptyImg = <DefaultEmptyImg />;
// simple empty image is same as default empty image
// To be compatible with antd API
const simpleEmptyImg = <DefaultEmptyImg />;
const coloredEmptyImg = <ColoredEmptyImg />;
const guideEmptyImg = <GuideEmptyImg />;

export interface EmptyProps extends AntEmptyProps {
  title?: React.ReactNode;
  steps?: StepProps[];
  layout?: 'horizontal' | 'vertical';
}

type CompoundedComponent = React.FC<EmptyProps> & {
  PRESENTED_IMAGE_DEFAULT: React.ReactNode;
  PRESENTED_IMAGE_SIMPLE: React.ReactNode;
  PRESENTED_IMAGE_COLORED: React.ReactNode;
  PRESENTED_IMAGE_GUIDE: React.ReactNode;
};

const Empty: CompoundedComponent = props => {
  const [locale] = useLocale('Empty');
  const {
    image = defaultEmptyImg,
    title,
    description = locale.description,
    steps,
    layout = 'vertical',
    children,
    prefixCls: customizePrefixCls,
    className,
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('empty', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const isHorizontal = layout === 'horizontal';
  const emptyCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-horizontal`]: isHorizontal,
      [`${prefixCls}-small`]: image === defaultEmptyImg || image === simpleEmptyImg,
    },
    className
  );

  return wrapSSR(
    <AntEmpty
      image={image}
      description={
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
Empty.PRESENTED_IMAGE_COLORED = coloredEmptyImg;
Empty.PRESENTED_IMAGE_GUIDE = guideEmptyImg;

if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = AntEmpty.displayName;
}

export default Empty;
