import React from 'react';
import { Bar } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: 'Sprint',
      value: 0.95,
    },
    {
      type: 'Marathon',
      value: 0.72,
    },
    {
      type: 'Soccer',
      value: 0.64,
    },
    {
      type: 'Basketball',
      value: 0.32,
    },
    {
      type: 'Tennis',
      value: 0.21,
    },
  ];
  const config1 = {
    isProgress: true,
    xField: 'value',
    yField: 'type',
    meta: {
      value: {
        alias: 'Match Progress',
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
