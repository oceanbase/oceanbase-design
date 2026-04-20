import {
  Button,
  Col,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Typography,
  message,
} from '@oceanbase/design';
import React, { useCallback, useState } from 'react';

/**
 * Playground：与 Figma Message（`figma.config.json` → `<FIGMA_OCEANBASE_MESSAGE>`，node `5026:7044`）的
 * `type`（info / success / alert / error）维度对齐；`alert` 分支在 antd 中语义对应 `warning`。
 * 文档演示可调 `content` / `duration`；若 `index.figma.tsx` 中仅有 `figma.textContent`，则以纯文本为准。
 * Message 为全局 Portal，通常固定在视口顶部，不在左侧灰底内裁剪显示。
 */

/** 与 Figma `type` 变体键一致；`alert` → `message.warning` */
type FigmaMessageType = 'info' | 'success' | 'alert' | 'error';

function figmaMessageShow(props: {
  type: FigmaMessageType;
  content: React.ReactNode;
  duration: number;
}) {
  const { type, content, duration } = props;
  if (type === 'info') {
    message.open({ type: 'info', content, duration });
    return;
  }
  if (type === 'success') {
    message.open({ type: 'success', content, duration });
    return;
  }
  if (type === 'alert') {
    message.open({ type: 'warning', content, duration });
    return;
  }
  message.open({ type: 'error', content, duration });
}

const App: React.FC = () => {
  const [type, setType] = useState<FigmaMessageType>('info');
  const [content, setContent] = useState('This is a message that will disappear on its own.');
  const [duration, setDuration] = useState(3);

  const handleShow = useCallback(() => {
    figmaMessageShow({ type, content, duration });
  }, [type, content, duration]);

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
        <Typography.Paragraph type="secondary" style={{ marginBottom: 16, fontSize: 13 }}>
          点击下方按钮触发全局提示；提示出现在视口顶部（与 Figma 画布中 Toast
          位置一致），不会铺满整页遮罩。
        </Typography.Paragraph>
        <div>
          <Button type="primary" onClick={handleShow}>
            显示消息
          </Button>
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
          Message
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={type}
              onChange={v => setType(v as FigmaMessageType)}
              options={[
                { value: 'info', label: 'info' },
                { value: 'success', label: 'success' },
                { value: 'alert', label: 'alert（→ warning）' },
                { value: 'error', label: 'error' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>content</div>
            <Input.TextArea
              value={content}
              onChange={e => setContent(e.target.value)}
              rows={4}
              placeholder="Message text"
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>duration（秒，0 为不自动关闭）</div>
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              step={1}
              value={duration}
              onChange={v => setDuration(typeof v === 'number' ? v : 3)}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
