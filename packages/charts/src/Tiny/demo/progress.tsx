import React from 'react';
import { Progress } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const titleStyle = { width: 90 };
  const percentStyle = {
    width: 80,
  };
  const progressStyle = { radius: 6 };
  const maxColumnWidth = 6;
  return (
    <Row gutter={[100, 50]}>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} />
        <Progress title="Memory" percent={0.7} />
        <Progress title="Disk" percent={0.9} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} />
        <Progress title="Memory" percent={0.7} warningPercent={0.7} />
        <Progress title="Disk" percent={0.9} dangerPercent={0.9} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} progressStyle={progressStyle} />
        <Progress title="Memory" percent={0.7} progressStyle={progressStyle} />
        <Progress title="Disk" percent={0.9} progressStyle={progressStyle} />
      </Col>
      <Col span={12}>
        <Progress title={<div style={titleStyle}>CPU</div>} percent={0.3} />
        <Progress title={<div style={titleStyle}>Memory Memory</div>} percent={0.7} />
        <Progress title={<div style={titleStyle}>Disk Disk Disk</div>} percent={0.9} />
      </Col>
      <Col span={12}>
        <Progress
          title="CPU"
          percent={0.3}
          formatter={percent => `Percentage: ${percent * 100}%`}
        />
        <Progress
          title="Memory"
          percent={0.7}
          formatter={percent => `Percentage: ${percent * 100}%`}
        />
        <Progress
          title="Disk"
          percent={0.9}
          formatter={percent => `Percentage: ${percent * 100}%`}
        />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} maxColumnWidth={maxColumnWidth} />
        <Progress title="Memory" percent={0.7} maxColumnWidth={maxColumnWidth} />
        <Progress title="Disk" percent={0.9} maxColumnWidth={maxColumnWidth} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.001234} percentStyle={percentStyle} />
        <Progress title="Memory" percent={0.0001234} percentStyle={percentStyle} />
        <Progress title="Disk" percent={0.00001234} percentStyle={percentStyle} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.001234} percentStyle={percentStyle} />
        <Progress title="Memory" percent={0.0001234} percentStyle={percentStyle} />
        <Progress title="Disk" percent={0.00001234} percentStyle={percentStyle} />
      </Col>
    </Row>
  );
};
