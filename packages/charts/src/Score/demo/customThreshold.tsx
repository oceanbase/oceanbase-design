import React from 'react';
import { Score } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';
import { range } from 'lodash';

export default () => {
  const thresholds = {
    0: 'rgb(242, 73, 92)',
    20: 'rgb(250, 222, 42)',
    40: 'rgb(255, 152, 48)',
    60: 'rgb(184, 119, 217)',
    80: 'rgb(87, 148, 242)',
    100: 'rgb(115, 191, 105)',
  };
  return (
    <Row gutter={[8, 8]}>
      {range(0, 6).map(index => (
        <Col span={8} key={index}>
          <Score value={index * 20} thresholds={thresholds} />
        </Col>
      ))}
    </Row>
  );
};
