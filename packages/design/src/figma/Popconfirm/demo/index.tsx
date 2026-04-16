import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Col, Input, Popconfirm, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useRef, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中唯一一条 `figma.connect`（node `5026:7212`，`<FIGMA_OCEANBASE_POPCONFIRM>`）的 props / example 一致。
 * 文档为交互演示：`open` 默认关闭、`onOpenChange` 受控；映射侧为 `open: true` 静态稿面。
 * `getPopupContainer` 仅用于左侧预览区 `overflow` 下浮层不裁剪；Code Connect 无此项。
 * `title` 对应 `figma.string('text')`；`placement` 枚举键与 Figma 一致（含 `righbottom` 拼写）。
 */

const ICON = <ExclamationCircleFilled style={{ fontSize: 24, color: '#f7a600' }} />;

/** 与 `index.figma.tsx` 中 `figma.enum('placement', …)` 字面量一致 */
const PLACEMENT_BY_FIGMA_KEY = {
  topright: 'topRight',
  topleft: 'topLeft',
  bottomright: 'bottomRight',
  bottomleft: 'bottomLeft',
  right: 'right',
  righttop: 'rightTop',
  righbottom: 'rightBottom',
  left: 'left',
  lefttop: 'leftTop',
  leftbottom: 'leftBottom',
  bottom: 'bottom',
  top: 'top',
} as const;

type FigmaPlacementKey = keyof typeof PLACEMENT_BY_FIGMA_KEY;

type PlacementValue = (typeof PLACEMENT_BY_FIGMA_KEY)[FigmaPlacementKey];

/** 与 `example: ({ title, placement, okText, cancelText, icon, open }) => …` 传参一致；`open` 由文档默认关 + `onOpenChange` 受控 */
function FigmaPopconfirmExample(props: {
  title: React.ReactNode;
  placement: PlacementValue;
  okText: string;
  cancelText: string;
  icon: React.ReactNode;
}) {
  const { title, placement, okText, cancelText, icon } = props;
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Popconfirm
        title={title}
        placement={placement}
        okText={okText}
        cancelText={cancelText}
        icon={icon}
        open={open}
        onOpenChange={setOpen}
        getPopupContainer={() => containerRef.current ?? document.body}
      >
        <Button type="primary">Button</Button>
      </Popconfirm>
    </div>
  );
}

const App: React.FC = () => {
  const [title, setTitle] = useState('Delete this item?');
  const [placementKey, setPlacementKey] = useState<FigmaPlacementKey>('top');
  const [okText, setOkText] = useState('Confirm');
  const [cancelText, setCancelText] = useState('Cancel');

  const placementOptions = (Object.keys(PLACEMENT_BY_FIGMA_KEY) as FigmaPlacementKey[]).map(k => ({
    value: k,
    label: k === 'righbottom' ? 'righbottom（→ rightBottom）' : k,
  }));

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
          点击下方主按钮展开气泡确认；首屏默认不展开，避免遮挡右侧属性栏。
        </Typography.Paragraph>
        <div>
          <FigmaPopconfirmExample
            title={title}
            placement={PLACEMENT_BY_FIGMA_KEY[placementKey]}
            okText={okText}
            cancelText={cancelText}
            icon={ICON}
          />
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
          Popconfirm
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>text（title）</div>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Confirmation text"
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>placement</div>
            <Select
              style={{ width: '100%' }}
              value={placementKey}
              onChange={v => setPlacementKey(v as FigmaPlacementKey)}
              options={placementOptions}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>okText</div>
            <Input value={okText} onChange={e => setOkText(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>cancelText</div>
            <Input value={cancelText} onChange={e => setCancelText(e.target.value)} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
