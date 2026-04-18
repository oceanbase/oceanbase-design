import { Col, Input, Row, Select, Space, Typography } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_FORMDESCRIPTION（Typography.Text）映射一致。
 * `example`: `({ desc, textStyle }) => <Typography.Text style={textStyle}>{desc}</Typography.Text>`
 */

type TextStyleKey = 'default' | 'error' | 'link';

const STYLE_BY_KEY: Record<TextStyleKey, CSSProperties> = {
  default: { fontSize: 12, lineHeight: '20px', color: '#8592ad' },
  error: { fontSize: 12, lineHeight: '20px', color: '#eb4242' },
  link: { fontSize: 12, lineHeight: '20px', color: '#0d6cf2' },
};

function FigmaFormDescriptionExample(props: { desc: string; textStyle: CSSProperties }) {
  const { desc, textStyle } = props;
  return <Typography.Text style={textStyle}>{desc}</Typography.Text>;
}

const App: React.FC = () => {
  const [desc, setDesc] = useState('Description');
  const [styleKey, setStyleKey] = useState<TextStyleKey>('default');

  const textStyle = useMemo(() => STYLE_BY_KEY[styleKey], [styleKey]);

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 280,
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
          minHeight: 200,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaFormDescriptionExample desc={desc} textStyle={textStyle} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          FormDescription
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>desc</div>
            <Input value={desc} onChange={e => setDesc(e.target.value)} placeholder="desc" />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>style</div>
            <Select
              style={{ width: '100%' }}
              value={styleKey}
              onChange={v => setStyleKey(v as TextStyleKey)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'error', label: 'error' },
                { value: 'link', label: 'link' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
