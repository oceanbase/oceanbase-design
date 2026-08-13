import React from 'react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: 'Category A',
      value: 1.3,
    },
    {
      type: 'Category B',
      value: 3.38,
    },
    {
      type: 'Category C',
      value: 4.56,
    },
    {
      type: 'Category D',
      value: 5.7,
    },
    {
      type: 'Category E',
      value: 6.22,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
    isDonut: true,
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'bottom',
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
