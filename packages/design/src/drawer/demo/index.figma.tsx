import {
  Button,
  Col,
  Descriptions,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  Typography,
} from '@oceanbase/design';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中唯一一条 `figma.connect` 的 props / example 一致。
 * Figma 属性名为 `footer`：`false` → Descriptions 内容；`true` → Form + footer 按钮区。
 * 文档内用 `getContainer` 将抽屉限制在左侧预览区；Code Connect 侧为整页遮罩语义。
 */

const DESCRIPTIONS_BLOCK_A = (
  <Descriptions
    title={
      <span style={{ fontSize: 14, fontWeight: 500, color: '#132039', lineHeight: '20px' }}>
        Title
      </span>
    }
    column={1}
    layout="horizontal"
    bordered={false}
    items={[
      { key: '1', label: 'label', children: 'caption' },
      { key: '2', label: 'label', children: 'caption' },
      { key: '3', label: 'label', children: 'caption' },
    ]}
    style={{ width: '100%' }}
    labelStyle={{
      color: '#5c6b8a',
      fontSize: 14,
      lineHeight: '20px',
      whiteSpace: 'nowrap',
    }}
    contentStyle={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}
  />
);

const DESCRIPTIONS_BLOCK_B = (
  <Descriptions
    title={
      <span style={{ fontSize: 14, fontWeight: 500, color: '#132039', lineHeight: '20px' }}>
        Title
      </span>
    }
    column={1}
    layout="horizontal"
    bordered={false}
    items={[
      { key: 'a', label: 'label', children: 'caption' },
      { key: 'b', label: 'label', children: 'caption' },
      { key: 'c', label: 'label', children: 'caption' },
    ]}
    style={{ width: '100%' }}
    labelStyle={{
      color: '#5c6b8a',
      fontSize: 14,
      lineHeight: '20px',
      whiteSpace: 'nowrap',
    }}
    contentStyle={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}
  />
);

/** 与 figma.connect 中 `example: ({ preview }) => <div>{preview}</div>` 同构，仅补充预览容器与开关状态 */
function FigmaDrawerExample(props: { preview: React.ReactNode }) {
  const { preview } = props;
  return <div>{preview}</div>;
}

type FooterEnum = 'false' | 'true';

const App: React.FC = () => {
  const [footer, setFooter] = useState<FooterEnum>('false');
  const [open, setOpen] = useState(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [footer]);

  const preview = useMemo(() => {
    if (!container) {
      return null;
    }
    if (footer === 'false') {
      return (
        <Drawer
          open={open}
          width={520}
          placement="right"
          title="Title"
          onClose={handleClose}
          getContainer={container}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {DESCRIPTIONS_BLOCK_A}
            {DESCRIPTIONS_BLOCK_B}
          </div>
        </Drawer>
      );
    }
    return (
      <Drawer
        open={open}
        width={520}
        placement="right"
        title="Title"
        onClose={handleClose}
        getContainer={container}
        footer={
          <Space size={8}>
            <Button type="primary">Button</Button>
            <Button>Button</Button>
          </Space>
        }
      >
        <Form layout="vertical" style={{ width: '100%' }}>
          {Array.from({ length: 9 }, (_, i) => (
            <Form.Item key={`drawer-form-${i}`} label="Label">
              <Input placeholder="Enter" />
            </Form.Item>
          ))}
        </Form>
      </Drawer>
    );
  }, [container, footer, open, handleClose]);

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
        <div
          ref={setContainer}
          style={{
            position: 'relative',
            width: '100%',
            minHeight: 420,
            borderRadius: 8,
            overflow: 'hidden',
            background: 'var(--ant-color-fill-quaternary, #fafafa)',
          }}
        >
          {!open && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
              }}
            >
              <Button type="primary" onClick={() => setOpen(true)}>
                打开抽屉
              </Button>
            </div>
          )}
          {preview ? <FigmaDrawerExample preview={preview} /> : null}
        </div>
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Drawer
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>footer</div>
            <Select
              style={{ width: '100%' }}
              value={footer}
              onChange={v => setFooter(v as FooterEnum)}
              options={[
                { value: 'false', label: 'false' },
                { value: 'true', label: 'true' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
