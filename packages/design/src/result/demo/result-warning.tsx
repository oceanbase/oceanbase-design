import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      layout="warning"
      icon={
        <img src="https://mass-office.alipay.com/design_kitchen/afts/img/J7MXQpEp8mgAAAAAAAAAABAADmmSAQBr/original?x-oss-process=image/resize,w_400/quality,q_90" />
      }
      title="诊断异常"
      subTitle={
        <>
          <div>
            这是一段诊断异常的描述，这是一段诊断异常的描述，这是一段诊断异常的描述，这是一段诊断完
          </div>
          <div>成的描述，这是一段诊断异常的描述，这是一段诊断异常的描述</div>
        </>
      }
      extra={[
        <Button type="primary" key="console">
          开启智能诊断
        </Button>,
      ]}
    />
  );
};
