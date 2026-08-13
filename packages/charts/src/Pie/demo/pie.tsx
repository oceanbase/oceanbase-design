import React from 'react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: 'Category A',
      value: 32,
    },
    {
      type: 'Category B',
      value: 25,
    },
    {
      type: 'Category C',
      value: 18,
    },
    {
      type: 'Category D',
      value: 15,
    },
    {
      type: 'Category E',
      value: 20,
    },
    {
      type: 'Other',
      value: 5,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'bottom',
    },
    label: {
      content: datum => `${(datum.percent * 100).toFixed(0)}%`,
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Pie height={300} {...config1} />
      </Col>
      <Col span={12}>
        <Pie height={300} {...config2} />
      </Col>
    </Row>
  );
};
