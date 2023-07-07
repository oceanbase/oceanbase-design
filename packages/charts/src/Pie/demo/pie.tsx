import { Pie } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: '分类一',
      value: 32,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 20,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config1 = {
    data,
    angleField: 'value',
    colorField: 'type',
  };
  const config2 = {
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
