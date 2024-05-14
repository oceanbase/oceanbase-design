import React from 'react';
import { Empty, Button } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      layout="horizontal"
      image={Empty.PRESENTED_IMAGE_GUIDE}
      title="欢迎体验 OB 智能诊断"
      description={
        <>
          <div>• OB 智能诊断是一个数据库问题诊断的控制面板</div>
          <div>• 将详细的数据库数据图形化的展示</div>
          <div>• 旨在帮助客户快速评估数据库的运行状态，并对如何处理问题提供建议和指导</div>
        </>
      }
    >
      <Button type="primary">开启智能诊断</Button>
    </Empty>
  );
};
