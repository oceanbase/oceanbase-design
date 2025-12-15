import React from 'react';
import { Input } from '@oceanbase/shadcn';

export default () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input placeholder="请输入内容" />
      <Input type="email" placeholder="请输入邮箱" />
      <Input type="password" placeholder="请输入密码" />
      <Input disabled placeholder="禁用状态" />
    </div>
  );
};

