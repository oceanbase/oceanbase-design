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
          title="内存"
          percent={0.6754}
          // 保留 1 位有效小数
          decimal={1}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="磁盘"
          percent={0.6754}
          // 保留 0 位有效小数
          decimal={0}
        />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="CPU" percent={0.001234} />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="内存" percent={0.0001234} />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="磁盘" percent={0.00001234} />
      </Col>
    </Row>
  );
};
