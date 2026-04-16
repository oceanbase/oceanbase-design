import { Col, Input, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `Input` 的 `figma.connect`（FIGMA_OCEANBASE_INPUT）一致。
 * `status === focus` 时使用 `autoFocus` 与映射一致；切换为 focus 时通过 `key` 触发重挂载以复现聚焦。
 * `defaultValue` 分支中文案对应 `figma.string('text')`，右侧面板可编辑。
 */

type InputStatus = 'default' | 'hover' | 'focus' | 'disabled';

function FigmaInputExample(props: { root: React.ReactNode }) {
  return <>{props.root}</>;
}

function buildInputRoot(placeholder: boolean, status: InputStatus, text: string) {
  const style = { width: 280 };
  const key = `${placeholder}-${status}-${text}`;

  if (placeholder) {
    if (status === 'focus') {
      return <Input key={key} placeholder="Enter" autoFocus style={style} />;
    }
    if (status === 'disabled') {
      return <Input key={key} placeholder="Enter" disabled style={style} />;
    }
    return <Input key={key} placeholder="Enter" style={style} />;
  }
  if (status === 'focus') {
    return <Input key={key} defaultValue={text} autoFocus style={style} />;
  }
  if (status === 'disabled') {
    return <Input key={key} defaultValue={text} disabled style={style} />;
  }
  return <Input key={key} defaultValue={text} style={style} />;
}

const App: React.FC = () => {
  const [placeholder, setPlaceholder] = useState(true);
  const [status, setStatus] = useState<InputStatus>('default');
  const [text, setText] = useState('text');

  const root = useMemo(
    () => buildInputRoot(placeholder, status, text),
    [placeholder, status, text]
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
        <FigmaInputExample root={root} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Input
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>placeholder</span>
            <Switch checked={placeholder} onChange={setPlaceholder} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as InputStatus)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'hover', label: 'hover' },
                { value: 'focus', label: 'focus' },
                { value: 'disabled', label: 'disabled' },
              ]}
            />
          </div>
          {!placeholder && (
            <div>
              <div style={{ marginBottom: 6, fontSize: 12 }}>text（figma.string）</div>
              <Input value={text} onChange={e => setText(e.target.value)} />
            </div>
          )}
        </Space>
      </Col>
    </Row>
  );
};

export default App;
