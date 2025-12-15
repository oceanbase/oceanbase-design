import React from 'react';
import { Badge } from '@oceanbase/shadcn';

export default () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Badge className="bg-ob-blue-1 text-ob-blue-6 border-ob-blue-3">信息</Badge>
      <Badge className="bg-ob-green-1 text-ob-green-6 border-ob-green-3">成功</Badge>
      <Badge className="bg-ob-orange-1 text-ob-orange-6 border-ob-orange-3">警告</Badge>
      <Badge className="bg-ob-red-1 text-ob-red-6 border-ob-red-3">错误</Badge>
    </div>
  );
};

