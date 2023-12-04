import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="error"
      icon={
        <img src="https://mass-office.alipay.com/design_kitchen/afts/img/W4kAS4_d6KgAAAAAAAAAABAADmmSAQBr/original?x-oss-process=image/resize,w_400/quality,q_90" />
      }
      title="任务创建失败"
      subTitle={
        <div>
          <div>
            这是一段关于任务创建失败的描述，这是一段关于任务创建失败的描述，这是一段关于任务创建
          </div>
          <div>失败的描述，这是一段关于任务创建失败的描述</div>
        </div>
      }
      extra={[
        <Button type="primary" key="console">
          主操作
        </Button>,
        <Button key="buy">次操作</Button>,
      ]}
    />
  );
};
