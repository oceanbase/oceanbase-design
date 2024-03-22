import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="服务器发生了错误"
      extra={<Button type="primary">返回首页</Button>}
    />
  );
};
