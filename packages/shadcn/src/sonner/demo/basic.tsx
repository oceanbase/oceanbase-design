import React from 'react';
import { Toaster } from '@oceanbase/shadcn';
import { toast } from 'sonner';

export default () => {
  const handleClick = () => {
    toast.success('操作成功！');
  };

  return (
    <div>
      <Toaster />
      <button onClick={handleClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        显示通知
      </button>
    </div>
  );
};
