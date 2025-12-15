import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@oceanbase/shadcn';

export default () => {
  return (
    <Card style={{ width: '350px' }}>
      <CardHeader>
        <CardTitle>卡片标题</CardTitle>
        <CardDescription>这是卡片的描述信息</CardDescription>
      </CardHeader>
      <CardContent>
        <p>这是卡片的内容区域，可以放置任何内容。</p>
      </CardContent>
    </Card>
  );
};

