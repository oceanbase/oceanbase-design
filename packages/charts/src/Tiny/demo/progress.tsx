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
        <Progress title="内存" percent={0.7} />
        <Progress title="磁盘" percent={0.9} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} />
        <Progress title="内存" percent={0.7} warningPercent={0.7} />
        <Progress title="磁盘" percent={0.9} dangerPercent={0.9} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} progressStyle={progressStyle} />
        <Progress title="内存" percent={0.7} progressStyle={progressStyle} />
        <Progress title="磁盘" percent={0.9} progressStyle={progressStyle} />
      </Col>
      <Col span={12}>
        <Progress title={<div style={titleStyle}>CPU</div>} percent={0.3} />
        <Progress title={<div style={titleStyle}>内存内存</div>} percent={0.7} />
        <Progress title={<div style={titleStyle}>磁盘磁盘磁盘</div>} percent={0.9} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} formatter={percent => `百分比: ${percent * 100}%`} />
        <Progress title="内存" percent={0.7} formatter={percent => `百分比: ${percent * 100}%`} />
        <Progress title="磁盘" percent={0.9} formatter={percent => `百分比: ${percent * 100}%`} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} maxColumnWidth={maxColumnWidth} />
        <Progress title="内存" percent={0.7} maxColumnWidth={maxColumnWidth} />
        <Progress title="磁盘" percent={0.9} maxColumnWidth={maxColumnWidth} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.001234} percentStyle={percentStyle} />
        <Progress title="内存" percent={0.0001234} percentStyle={percentStyle} />
        <Progress title="磁盘" percent={0.00001234} percentStyle={percentStyle} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.001234} percentStyle={percentStyle} />
        <Progress title="内存" percent={0.0001234} percentStyle={percentStyle} />
        <Progress title="磁盘" percent={0.00001234} percentStyle={percentStyle} />
      </Col>
    </Row>
  );
};
