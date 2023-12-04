import { Col } from '@oceanbase/design';
import React from 'react';
import LocaleWrapper from '../locale/LocaleWrapper';
import { getPrefix } from '../_util';
import './index.less';
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

const prefix = getPrefix('welcome-step');

const WelcomeStep: React.FC<WelcomeStepProps> = props => {
  const { title, description, operations, imgUrl, locale } = props;
  return (
    <Col span={11} key={title} className={prefix}>
      <div className={`${prefix}-left`}>
        <img src={imgUrl} alt="" width="60" />
      </div>
      <div className={`${prefix}-right`}>
        <h3 className={`${prefix}-title`}>{title}</h3>
        <p className={`${prefix}-description`}>{description}</p>
        {operations && (
          <div className={`${prefix}-operations`}>
            {operations?.map((operation, index) => {
              return (
                <span key={index} onClick={operation.onClick} className={`${prefix}-operation`}>
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
