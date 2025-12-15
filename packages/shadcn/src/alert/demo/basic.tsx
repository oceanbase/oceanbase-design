import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@oceanbase/shadcn';

export default () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="info">
        <AlertTitle>信息提示</AlertTitle>
        <AlertDescription>这是一条信息提示，用于展示一般性信息。</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>成功提示</AlertTitle>
        <AlertDescription>操作已成功完成。</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>警告提示</AlertTitle>
        <AlertDescription>请注意，此操作可能会产生不可逆的影响。</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>错误提示</AlertTitle>
        <AlertDescription>操作失败，请检查后重试。</AlertDescription>
      </Alert>
    </div>
  );
};

