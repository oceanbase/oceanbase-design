import React from 'react';
import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={[24, 100]}>
      <Col span={8}>
        <Liquid height={100} layout="horizontal" title="CPU" percent={0.6754} />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="Memory"
          percent={0.6754}
          // Keep 1 significant decimal place
          decimal={1}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="Disk"
          percent={0.6754}
          // Keep 0 significant decimal places
          decimal={0}
        />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="CPU" percent={0.001234} />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="Memory" percent={0.0001234} />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="Disk" percent={0.00001234} />
      </Col>
    </Row>
  );
};
