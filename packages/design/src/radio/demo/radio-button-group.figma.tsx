import { Col, Radio, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `<FIGMA_OCEANBASE_RADIOBUTTONGROUP>` 的 `props` / `example` 一致。
 * `row` 在映射内为固定子树，此处原样复用；可调维度仅 `size`（medium / small）。
 */

const ROW = (
  <>
    <Radio.Button value="1">item</Radio.Button>
    <Radio.Button value="2">item</Radio.Button>
    <Radio.Button value="3">item</Radio.Button>
  </>
);

function FigmaRadioButtonGroupExample(props: { groupSize: 'middle' | 'small' }) {
  const { groupSize } = props;
  return (
    <Radio.Group optionType="button" size={groupSize} defaultValue="3" buttonStyle="outline">
      {ROW}
    </Radio.Group>
  );
}

const App: React.FC = () => {
  const [groupSize, setGroupSize] = useState<'middle' | 'small'>('middle');

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 360,
        border: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
        borderRadius: 8,
        overflow: 'hidden',
        background: 'var(--ant-color-bg-container, #fff)',
      }}
    >
      <Col
        flex="1 1 auto"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 280,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaRadioButtonGroupExample groupSize={groupSize} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          RadioButtonGroup
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={groupSize}
              onChange={v => setGroupSize(v as 'middle' | 'small')}
              options={[
                { value: 'middle', label: 'medium' },
                { value: 'small', label: 'small' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
