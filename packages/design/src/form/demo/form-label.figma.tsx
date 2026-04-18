import { Col, Form, Input, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_FORMLABEL（Form.Item）映射一致。
 * `example`: `({ root }) => <>{root}</>` — 设计稿的 `figma.string('label')` / `figma.string('optional')` 在文档中用 Input 编辑。
 */

type LabelStyle = 'default' | 'optional' | 'with info' | 'optional + info';

const LABEL_PRIMARY: React.CSSProperties = {
  fontSize: 13,
  lineHeight: '20px',
  color: '#132339',
};

const LABEL_OPTIONAL: React.CSSProperties = {
  fontSize: 13,
  lineHeight: '20px',
  color: '#8592ad',
  marginLeft: 4,
};

function FigmaFormLabelExample(props: { root: React.ReactNode }) {
  const { root } = props;
  return <>{root}</>;
}

function buildRoot(style: LabelStyle, label: string, optional: string): React.ReactNode {
  switch (style) {
    case 'default':
      return (
        <Form.Item label={label}>
          <Input placeholder="Field" />
        </Form.Item>
      );
    case 'optional':
      return (
        <Form.Item
          label={
            <span>
              <span style={LABEL_PRIMARY}>{label}</span>
              <span style={LABEL_OPTIONAL}>{optional}</span>
            </span>
          }
        >
          <Input placeholder="Field" />
        </Form.Item>
      );
    case 'with info':
      return (
        <Form.Item label={label} tooltip="Description">
          <Input placeholder="Field" />
        </Form.Item>
      );
    case 'optional + info':
      return (
        <Form.Item
          label={
            <span>
              <span style={LABEL_PRIMARY}>{label}</span>
              <span style={LABEL_OPTIONAL}>{optional}</span>
            </span>
          }
          tooltip="Description"
        >
          <Input placeholder="Field" />
        </Form.Item>
      );
    default:
      return null;
  }
}

const App: React.FC = () => {
  const [style, setStyle] = useState<LabelStyle>('default');
  const [label, setLabel] = useState('Label');
  const [optional, setOptional] = useState('(optional)');

  const root = useMemo(() => buildRoot(style, label, optional), [style, label, optional]);

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 320,
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
          minHeight: 240,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <Form layout="vertical" style={{ maxWidth: 360 }}>
          <FigmaFormLabelExample root={root} />
        </Form>
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          FormLabel
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>style</div>
            <Select
              style={{ width: '100%' }}
              value={style}
              onChange={v => setStyle(v as LabelStyle)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'optional', label: 'optional' },
                { value: 'with info', label: 'with info' },
                { value: 'optional + info', label: 'optional + info' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>label</div>
            <Input value={label} onChange={e => setLabel(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>optional</div>
            <Input
              value={optional}
              onChange={e => setOptional(e.target.value)}
              disabled={style !== 'optional' && style !== 'optional + info'}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
