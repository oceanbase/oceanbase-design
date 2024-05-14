import React from 'react';
import { Bar } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: '短跑',
      value: 0.95,
    },
    {
      type: '长跑',
      value: 0.72,
    },
    {
      type: '足球',
      value: 0.64,
    },
    {
      type: '篮球',
      value: 0.32,
    },
    {
      type: '网球',
      value: 0.21,
    },
  ];
  const config1 = {
    isProgress: true,
    xField: 'value',
    yField: 'type',
    meta: {
      value: {
        alias: '比赛进度',
      },
    },
  };
  const config2 = {
    ...config1,
    warningPercent: 0.7,
    dangerPercent: 0.8,
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Bar height={200} data={data} {...config1} />
      </Col>
      <Col span={12}>
        <Bar height={200} data={data} {...config2} />
      </Col>
    </Row>
  );
};
