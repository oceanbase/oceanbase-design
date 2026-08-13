import { PlusOutlined } from '@oceanbase/icons';
import { Button, Card, Col, ConfigProvider, Row } from '@oceanbase/design';
import type { ButtonProps } from '@oceanbase/design/es/button';
import classNames from 'classnames';
import React, { useContext } from 'react';
import LocaleWrapper from '../locale/LocaleWrapper';
import { directTo } from '../_util';
import useStyle from './style';
import zhCN from './locale/zh-CN';
import type { WelcomeStepProps } from './step';
import Step from './step';

export interface IntroduceItem {
  // 图片的 URL 地址
  image: string;
  // 介绍标题
  title: string;
  // 介绍描述
  description: string;
}

export interface StepItem {
  // 步骤标题
  title: string;
  // 步骤描述
  description: string;
}

export interface HelpItem {
  // 帮助标题
  title: string;
  // 帮助文档对应链接
  link: string;
  // 是否为 `查看更多`，默认为 false
  isMore?: boolean;
}

export interface WelcomeLocale {
  helpTitle: string;
  defaultOperation: string;
}

export type StepType = 'default' | 'card';

export interface WelcomeProps {
  // 产品标题
  title: string;
  // 产品描述
  description: string;
  // 背景图片
  bgImage: string;
  // 产品介绍列表
  introduces: IntroduceItem[];
  // 向导步骤列表
  steps: StepItem[];
  // steps UI 类型
  stepType?: StepType;
  // 按钮文本
  buttonText: string;
  // Button 属性
  buttonProps?: ButtonProps;
  // 帮助文档列表
  helps: HelpItem[];
  locale?: WelcomeLocale;
  className?: string;
  style?: React.CSSProperties;
}

const Welcome: React.FC<WelcomeProps> = ({
  title,
  description,
  bgImage,
  introduces = [],
  buttonText,
  buttonProps,
  steps = [],
  stepType = 'default',
  helps = [],
  locale,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('welcome');
  const { wrapSSR } = useStyle(prefixCls);
  const isDefault = stepType === 'default';
  const renderStep = (item, index) => {
    const DefaultStep = () => (
      <Col span={12} data-testid="steps" key={item.title} className={`${prefixCls}-item`}>
        <div className={`${prefixCls}-order-wrapper`}>
          <div className={`${prefixCls}-order`}>{index + 1}</div>
        </div>
        <span>
          <h3 className={`${prefixCls}-title`}>{item.title}</h3>
          <p className={`${prefixCls}-description`}>{item.description}</p>
        </span>
      </Col>
    );

    const StepProps: WelcomeStepProps = {
      title: item.title,
      description: item.description,
      index: index + 1,
      imgUrl: item.imgUrl,
      operations: item.operations,
      locale,
    };

    const StepItem = isDefault ? (
      <DefaultStep key={item.title} />
    ) : (
      <Step data-testid="steps" key={item.title} {...StepProps} />
    );

    return StepItem;
  };

  return wrapSSR(
    <div className={`${prefixCls}-container ${className || ''}`} {...restProps}>
      <Row
        className={`${prefixCls}-page-header`}
        style={{
          backgroundImage: `url("${bgImage}")`,
        }}
      >
        <Col span={24} className={`${prefixCls}-title`}>
          <div>{title}</div>
        </Col>
        <Col span={16} className={`${prefixCls}-description`}>
          <p>{description}</p>
        </Col>
      </Row>
      <Card bordered={false} className={`${prefixCls}-introduce`}>
        <Row gutter={78}>
          {introduces.map(item => (
            <Col span={8} key={item.image} className={`${prefixCls}-item`} data-testid="introduces">
              <img src={item.image} alt="" height={80} />
              <span>
                <h3 className={`${prefixCls}-title`}>{item.title}</h3>
                <p className={`${prefixCls}-description`}>{item.description}</p>
              </span>
            </Col>
          ))}
        </Row>
      </Card>
      <Row className={`${prefixCls}-content`}>
        <Col span={14} className={isDefault ? `${prefixCls}-left` : 'borderRight'}>
          <Row justify="space-around">
            {steps.map((item, index) => renderStep(item, index))}
            {isDefault && (
              <Col span={24}>
                <div className={`${prefixCls}-btn-wrapper`}>
                  <Button
                    size="large"
                    type="primary"
                    icon={<PlusOutlined />}
                    block={true}
                    {...buttonProps}
                  >
                    {buttonText}
                  </Button>
                </div>
              </Col>
            )}
          </Row>
        </Col>
        <Col span={10} className={`${prefixCls}-right`}>
          <h3 className={`${prefixCls}-title`}>{locale.helpTitle}</h3>
          {helps.map(item => (
            <Button
              key={item.title}
              shape="round"
              onClick={() => {
                directTo(item.link);
              }}
              className={classNames({
                [`${prefixCls}-more`]: !!item.isMore,
              })}
              data-testid="helps"
            >
              {item.title}
            </Button>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default LocaleWrapper({
  componentName: 'Welcome',
  defaultLocale: zhCN,
})(Welcome);
