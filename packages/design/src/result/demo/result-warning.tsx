import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      resultStatus="warning"
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
