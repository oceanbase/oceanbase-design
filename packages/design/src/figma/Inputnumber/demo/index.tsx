import { Col, InputNumber, Row, Space, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中唯一一条 `figma.connect` 的
 * `placeholder` / `disabled` / `minus` 嵌套枚举与 `example`（`<div>{root}</div>`）一致。
 */

/** 与 figma.connect 中 `props.root` 各分支 JSX 一致（自 `index.figma.tsx` 复制，避免漂移） */
function buildFigmaInputNumberRoot(props: {
  placeholder: boolean;
  disabled: boolean;
  minus: boolean;
}): React.ReactElement {
  const { placeholder, disabled, minus } = props;

  if (placeholder) {
    if (!disabled) {
      if (minus) {
        return (
          <InputNumber
            placeholder="Enter"
            disabled={false}
            addonAfter={
              <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>Days</span>
            }
            controls
            style={{ width: 200 }}
          />
        );
      }
      return <InputNumber placeholder="Enter" disabled={false} controls style={{ width: 128 }} />;
    }
    if (minus) {
      return (
        <InputNumber
          placeholder="Enter"
          disabled
          addonAfter={
            <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>Days</span>
          }
          controls
          style={{ width: 200 }}
        />
      );
    }
    return <InputNumber placeholder="Enter" disabled controls style={{ width: 128 }} />;
  }

  if (!disabled) {
    if (minus) {
      return (
        <InputNumber
          defaultValue={1}
          disabled={false}
          addonAfter={
            <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>Days</span>
          }
          controls
          style={{ width: 200 }}
        />
      );
    }
    return <InputNumber defaultValue={1} disabled={false} controls style={{ width: 128 }} />;
  }
  if (minus) {
    return (
      <InputNumber
        defaultValue={1}
        disabled
        addonAfter={
          <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>Days</span>
        }
        controls
        style={{ width: 200 }}
      />
    );
  }
  return <InputNumber defaultValue={1} disabled controls style={{ width: 128 }} />;
}

function FigmaInputNumberExample(props: { root: React.ReactNode }) {
  const { root } = props;
  return <div>{root}</div>;
}

const App: React.FC = () => {
  const [placeholder, setPlaceholder] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [minus, setMinus] = useState(true);

  const root = useMemo(
    () => buildFigmaInputNumberRoot({ placeholder, disabled, minus }),
    [placeholder, disabled, minus]
  );

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
        <FigmaInputNumberExample root={root} />
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
