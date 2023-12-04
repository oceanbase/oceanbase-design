import React, { useState } from 'react';
import { Stat } from '@oceanbase/charts';
import type { StatConfig } from '@oceanbase/charts';
import { Col, Row, Form, Radio } from '@oceanbase/design';
import { range } from 'lodash';

export default () => {
  const [height, setHeight] = useState(100);
  const [span, setSpan] = useState(8);
  const [layout, setLayout] = useState<StatConfig['layout']>('vertical');
  const [colorMode, setColorMode] = useState<StatConfig['colorMode']>('background');
  const [chartMode, setChartMode] = useState<StatConfig['chartMode']>('area');
  const [textAlign, setTextAlign] = useState<StatConfig['textAlign']>('auto');
  const [extra, setExtra] = useState('suffix');
  const config: StatConfig = {
    height,
    ...(extra
      ? {
          [extra]: extra === 'prefix' ? '$' : 'USD',
        }
      : {}),
    layout,
    colorMode,
    chartMode,
    chartData: [
      264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
      243, 226, 192,
    ],
    textAlign,
    thresholds: {
      100: 'rgb(87, 148, 242)',
      200: 'rgb(115, 191, 105)',
      300: 'rgb(184, 119, 217)',
      400: 'rgb(250, 222, 42)',
      500: 'rgb(255, 152, 48)',
      600: 'rgb(242, 73, 92)',
    },
  };
  return (
    <div>
      <Form
        layout="horizontal"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{ span: 18 }}
        requiredMark={false}
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item label="Height">
              <Radio.Group value={height} onChange={e => setHeight(e.target.value)}>
                <Radio.Button value={200}>200</Radio.Button>
                <Radio.Button value={150}>150</Radio.Button>
                <Radio.Button value={100}>100</Radio.Button>
                <Radio.Button value={50}>50</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Columns">
              <Radio.Group value={span} onChange={e => setSpan(e.target.value)}>
                <Radio.Button value={4}>6</Radio.Button>
                <Radio.Button value={6}>4</Radio.Button>
                <Radio.Button value={8}>3</Radio.Button>
                <Radio.Button value={12}>2</Radio.Button>
                <Radio.Button value={24}>1</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Layout">
              <Radio.Group value={layout} onChange={e => setLayout(e.target.value)}>
                <Radio.Button value="vertical">Vertical</Radio.Button>
                <Radio.Button value="horizontal">Horizontal</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Color Mode">
              <Radio.Group value={colorMode} onChange={e => setColorMode(e.target.value)}>
                <Radio.Button value="none">None</Radio.Button>
                <Radio.Button value="value">Value</Radio.Button>
                <Radio.Button value="background">Background</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Chart Mode">
              <Radio.Group value={chartMode} onChange={e => setChartMode(e.target.value)}>
                <Radio.Button value="none">None</Radio.Button>
                <Radio.Button value="line">Line</Radio.Button>
                <Radio.Button value="area">Area</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Text Align">
              <Radio.Group value={textAlign} onChange={e => setTextAlign(e.target.value)}>
                <Radio.Button value="auto">Auto</Radio.Button>
                <Radio.Button value="center">Center</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Extra">
              <Radio.Group value={extra} onChange={e => setExtra(e.target.value)}>
                <Radio.Button value={undefined}>None</Radio.Button>
                <Radio.Button value="prefix">Prefix</Radio.Button>
                <Radio.Button value="suffix">Suffix</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row gutter={[8, 8]}>
        {range(1, 7).map(index => (
          <Col span={span} key={index}>
            <Stat title={`Cluster${index + 1}`} value={index * 100} {...config} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
