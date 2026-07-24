import React from 'react';
import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={[24, 100]}>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="CPU"
          percent={0.9}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="Memory"
          percent={0.6}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="Disk"
          percent={0.3}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          shape="rect"
          layout="horizontal"
          title="CPU"
          percent={0.9}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          shape="rect"
          layout="horizontal"
          title="Memory"
          percent={0.6}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          shape="rect"
          layout="horizontal"
          title="Disk"
          percent={0.3}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
    </Row>
  );
};
