import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="running"
      icon={
        <img src="https://mass-office.alipay.com/design_kitchen/afts/img/4V9JR5T4azAAAAAAAAAAABAADmmSAQBr/original?x-oss-process=image/resize,w_400/quality,q_90" />
      }
      title="OCP Agent 正在重装中"
      subTitle={
        <div>
          <div>
            这是一段关于任务创建重装中的描述，这是一段关于任务创建重装中的描述，这是一段关于任务创建
          </div>
          <div>重装中的描述，这是一段关于任务创建重装中的描述</div>
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
