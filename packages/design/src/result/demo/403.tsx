import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="数据传输服务需要云资源的访问权限"
      extra={<Button type="primary">前往 RAM 角色授权</Button>}
    />
  );
};
