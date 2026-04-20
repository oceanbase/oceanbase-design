import { Col, Radio, Row, Space, Switch, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `<FIGMA_OCEANBASE_RADIO>` 的 `props` / `example` 一致。
 * `active`（yes/no）与 `disabled`（false/true）两档布尔枚举用 Switch（见 gen-playground §5）。
 */

function FigmaRadioExample(props: {
  checked: boolean;
  disabledBool: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  const { checked, disabledBool, onCheckedChange } = props;
  return (
    <Radio
      checked={checked}
      disabled={disabledBool}
      onChange={e => onCheckedChange(e.target.checked)}
    />
  );
}

const App: React.FC = () => {
  const [activeYes, setActiveYes] = useState(true);
  const [disabled, setDisabled] = useState(false);

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
        <FigmaRadioExample
          checked={activeYes}
          disabledBool={disabled}
          onCheckedChange={setActiveYes}
        />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Radio
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>active</span>
            <Switch
              checked={activeYes}
              onChange={setActiveYes}
              checkedChildren="yes"
              unCheckedChildren="no"
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>disabled</span>
            <Switch checked={disabled} onChange={setDisabled} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
