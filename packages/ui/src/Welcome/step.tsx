import { Col, ConfigProvider } from '@oceanbase/design';
import React, { useContext } from 'react';
import LocaleWrapper from '../locale/LocaleWrapper';
import useStyle from './step/style';
import zhCN from './locale/zh-CN';

export interface OperationProps {
  text: string;
  onClick: () => void;
}

export interface WelcomeStepLocale {
  defaultOperation: string;
}

export interface WelcomeStepProps {
  title: string;
  description: string;
  imgUrl?: string;
  index: number;
  operations?: OperationProps[];
  locale?: WelcomeStepLocale;
}

const WelcomeStep: React.FC<WelcomeStepProps> = props => {
  const { title, description, operations, imgUrl, locale } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('welcome-step');
  const { wrapSSR } = useStyle(prefixCls);
  return wrapSSR(
    <Col span={11} key={title} className={prefixCls}>
      <div className={`${prefixCls}-left`}>
        <img src={imgUrl} alt="" width="60" />
      </div>
      <div className={`${prefixCls}-right`}>
        <h3 className={`${prefixCls}-title`}>{title}</h3>
        <p className={`${prefixCls}-description`}>{description}</p>
        {operations && (
          <div className={`${prefixCls}-operations`}>
            {operations?.map((operation, index) => {
              return (
                <span key={index} onClick={operation.onClick} className={`${prefixCls}-operation`}>
                  {operation.text || locale.defaultOperation}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </Col>
  );
};

export default LocaleWrapper({
  componentName: 'WelcomeStep',
  defaultLocale: zhCN,
})(WelcomeStep);
