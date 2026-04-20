import { Alert, Button, Col, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect` 的 props / example 一一对应，
 * 便于在文档里用控件复现 Figma Component playground 中的 type / size / button / closable。
 */

const STYLE_BY_SIZE: Record<'default' | 'large' | 'mini', CSSProperties> = {
  default: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  large: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
  },
  mini: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
};

type FigmaAlertType = 'info' | 'warning' | 'success' | 'error';

/** 与 `../index.figma.tsx` 的 props/example 一致；default/large 与 mini 的稿面间距差仅在此用 STYLE_BY_SIZE 预览（§3.4a）。 */
function FigmaAlertExample(props: {
  closable: boolean;
  type: FigmaAlertType;
  size: 'default' | 'large' | 'mini';
  style: CSSProperties;
  action?: React.ReactNode;
  message: React.ReactNode;
}) {
  const { closable, type, size, style, action, message } = props;
  return (
    <Alert
      closable={closable}
      type={type}
      mini={size === 'mini'}
      style={style}
      action={action}
      message={message}
    />
  );
}

const MESSAGE_DEMO = (
  <span>
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.{' '}
    <Typography.Link href="#" onClick={e => e.preventDefault()}>
      help
    </Typography.Link>
  </span>
);

const App: React.FC = () => {
  const [type, setType] = useState<FigmaAlertType>('info');
  const [size, setSize] = useState<'default' | 'large' | 'mini'>('default');
  /** 对应 Figma `button`：false / ture（设计稿拼写） */
  const [withButton, setWithButton] = useState(true);
  const [closable, setClosable] = useState(true);

  const style = STYLE_BY_SIZE[size];
  const action = useMemo(
    () => (withButton ? <Button type="default">Button</Button> : undefined),
    [withButton]
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
        <FigmaAlertExample
          closable={closable}
          type={type}
          size={size}
          style={style}
          action={action}
          message={MESSAGE_DEMO}
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
          Alert
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={type}
              onChange={v => setType(v as FigmaAlertType)}
              options={[
                { value: 'info', label: 'info' },
                { value: 'warning', label: 'warning' },
                { value: 'success', label: 'success' },
                { value: 'error', label: 'error' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={size}
              onChange={v => setSize(v as 'default' | 'large' | 'mini')}
              options={[
                { value: 'default', label: 'default' },
                { value: 'large', label: 'large' },
                { value: 'mini', label: 'mini' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>button</div>
            <Select
              style={{ width: '100%' }}
              value={withButton ? 'true' : 'false'}
              onChange={v => setWithButton(v === 'true')}
              options={[
                { value: 'false', label: 'false' },
                { value: 'true', label: 'true' },
              ]}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>closable</span>
            <Switch checked={closable} onChange={setClosable} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
