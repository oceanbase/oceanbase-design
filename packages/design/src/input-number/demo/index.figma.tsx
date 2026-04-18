import { Col, InputNumber, Row, Space, Switch, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中唯一一条 `figma.connect` 的
 * `placeholder` / `disabled` / `minus` 布尔映射及 `example`（直连 `<InputNumber />`）一致。
 * §3.4a：根宽等预览样式由外层容器传入，不在映射文件写 style。
 */

function FigmaInputNumberExample(props: {
  placeholder: boolean;
  disabled: boolean;
  minus: boolean;
}) {
  const { placeholder, disabled, minus } = props;
  return (
    <div style={{ width: minus ? 200 : 128 }}>
      <InputNumber
        disabled={disabled}
        placeholder={placeholder ? 'Enter' : undefined}
        defaultValue={placeholder ? undefined : 1}
        addonAfter={minus ? 'Days' : undefined}
        controls
      />
    </div>
  );
}

const App: React.FC = () => {
  const [placeholder, setPlaceholder] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [minus, setMinus] = useState(true);

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
        <FigmaInputNumberExample placeholder={placeholder} disabled={disabled} minus={minus} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          InputNumber
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>placeholder</span>
            <Switch checked={placeholder} onChange={setPlaceholder} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>disabled</span>
            <Switch checked={disabled} onChange={setDisabled} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>minus</span>
            <Switch checked={minus} onChange={setMinus} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
