import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={24}>
      <Col span={8}>
        <Liquid
          height={200}
          shape="rect"
          title="CPU"
          percent={0.9}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={200}
          shape="rect"
          title="内存"
          percent={0.6}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={200}
          shape="rect"
          title="磁盘"
          percent={0.3}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
    </Row>
  );
};
