import React from 'react';
import { Bar } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];
  const config = {
    isGroup: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Bar height={250} data={data} {...config} />
      </Col>
      <Col span={12}>
        <Bar
          height={250}
          data={data.filter(item => ['Mon.', 'Tues.'].includes(item.label))}
          {...config}
        />
      </Col>
    </Row>
  );
};
