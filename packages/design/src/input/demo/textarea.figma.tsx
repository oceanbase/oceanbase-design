import { Col, Input, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `Input.TextArea` 的 `figma.connect`（FIGMA_OCEANBASE_INPUT_TEXTAREA）一致。
 * `placeholder + focus` 分支中 `maxLength={2000}` 与 `default/focus` 的 200 不同，与映射字面量一致。
 */

type TextAreaStatus = 'default' | 'focus' | 'disabled';

function FigmaInputTextAreaExample(props: { root: React.ReactNode }) {
  return <>{props.root}</>;
}

function buildInputTextAreaRoot(placeholder: boolean, status: TextAreaStatus, text: string) {
  const style = { width: 360, resize: 'none' as const };
  const key = `${placeholder}-${status}-${text}`;

  if (placeholder) {
    if (status === 'default') {
      return (
        <Input.TextArea
          key={key}
          placeholder="Enter"
          rows={4}
          maxLength={200}
          showCount
          style={style}
        />
      );
    }
    if (status === 'focus') {
      return (
        <Input.TextArea
          key={key}
          placeholder="Enter"
          rows={4}
          maxLength={2000}
          showCount
          autoFocus
          style={style}
        />
      );
    }
    return (
      <Input.TextArea
        key={key}
        placeholder="Enter"
        rows={4}
        maxLength={200}
        showCount
        disabled
        style={style}
      />
    );
  }
  if (status === 'default') {
    return (
      <Input.TextArea
        key={key}
        defaultValue={text}
        rows={4}
        maxLength={200}
        showCount
        style={style}
      />
    );
  }
  if (status === 'focus') {
    return (
      <Input.TextArea
        key={key}
        defaultValue={text}
        rows={4}
        maxLength={200}
        showCount
        autoFocus
        style={style}
      />
    );
  }
  return (
    <Input.TextArea
      key={key}
      defaultValue={text}
      rows={4}
      maxLength={200}
      showCount
      disabled
      style={style}
    />
  );
}

const App: React.FC = () => {
  const [placeholder, setPlaceholder] = useState(true);
  const [status, setStatus] = useState<TextAreaStatus>('default');
  const [text, setText] = useState('text');

  const root = useMemo(
    () => buildInputTextAreaRoot(placeholder, status, text),
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
        <FigmaInputTextAreaExample root={root} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Input.TextArea
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
              onChange={v => setStatus(v as TextAreaStatus)}
              options={[
                { value: 'default', label: 'default' },
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
