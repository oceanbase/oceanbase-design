import { Col, Input, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `Input.Password` 的 `figma.connect`（FIGMA_OCEANBASE_INPUT_PASSWORD）一致。
 * Figma 属性名为 `satus`（拼写）；代码分支与映射一致。
 */

type PasswordStatus = 'default' | 'hover' | 'focus' | 'disabled';

function FigmaInputPasswordExample(props: { root: React.ReactNode }) {
  return <>{props.root}</>;
}

function buildInputPasswordRoot(placeholder: boolean, satus: PasswordStatus, text: string) {
  const style = { width: 280 };
  const key = `${placeholder}-${satus}-${text}`;

  if (placeholder) {
    if (satus === 'focus') {
      return <Input.Password key={key} placeholder="Enter" autoFocus style={style} />;
    }
    if (satus === 'disabled') {
      return <Input.Password key={key} placeholder="Enter" disabled style={style} />;
    }
    return <Input.Password key={key} placeholder="Enter" style={style} />;
  }
  if (satus === 'focus') {
    return <Input.Password key={key} defaultValue={text} autoFocus style={style} />;
  }
  if (satus === 'disabled') {
    return <Input.Password key={key} defaultValue={text} disabled style={style} />;
  }
  return <Input.Password key={key} defaultValue={text} style={style} />;
}

const App: React.FC = () => {
  const [placeholder, setPlaceholder] = useState(true);
  const [satus, setSatus] = useState<PasswordStatus>('default');
  const [text, setText] = useState('text');

  const root = useMemo(
    () => buildInputPasswordRoot(placeholder, satus, text),
    [placeholder, satus, text]
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
        <FigmaInputPasswordExample root={root} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Input.Password
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>placeholder</span>
            <Switch checked={placeholder} onChange={setPlaceholder} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>satus（Figma）</div>
            <Select
              style={{ width: '100%' }}
              value={satus}
              onChange={v => setSatus(v as PasswordStatus)}
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
