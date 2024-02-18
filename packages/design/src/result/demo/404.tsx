import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="集群已被删除，页面无法打开"
      extra={<Button type="primary">返回首页</Button>}
    />
  );
};
