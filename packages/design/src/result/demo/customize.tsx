import React from 'react';
import { Result, Button } from '@oceanbase/design';
import HealthyIcon from '../icon/HealthyIcon';

export default () => {
  return (
    <Result
      icon={<HealthyIcon />}
      title="任务创建成功"
      subTitle={
        <div>
          <div>
            这是一段关于任务创建成功的描述，这是一段关于任务创建成功的描述，这是一段关于任务创建
          </div>
          <div>成功的描述，这是一段关于任务创建成功的描述</div>
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
