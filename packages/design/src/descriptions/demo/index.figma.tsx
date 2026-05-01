import { RightOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Descriptions,
  Drawer,
  Modal,
  Popover,
  Row,
  Select,
  Space,
  Typography,
} from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useEffect, useMemo, useState } from 'react';

/**
 * Playground：第一条 connect 的结构 props（position → bordered、column、layout、size、title、items）与 `../index.figma.tsx` 一致。
 * §3.4a：`style` / `styles` 仅在此预览层使用；`index.figma.tsx` 执行 §3.4c 不映射外观向样式。
 * 抽屉 / 弹层用 Button + useState 打开；左侧预览区可横向滚动。
 */

type Position = 'page' | 'drawer' | 'popover';

const TITLE_PAGE = (
  <Space size={8} align="center">
    <RightOutlined style={{ fontSize: 16, color: '#132039' }} />
    <span style={{ fontSize: 16, fontWeight: 500, color: '#132039', lineHeight: '24px' }}>
      Card Title
    </span>
  </Space>
);

const TITLE_DRAWER = (
  <span style={{ fontSize: 14, fontWeight: 500, color: '#132039', lineHeight: '20px' }}>
    Card Title
  </span>
);

const TITLE_POPOVER = (
  <span style={{ fontSize: 14, fontWeight: 500, color: '#132039', lineHeight: '20px' }}>
    Card Title
  </span>
);

const ITEMS_PAGE = [
  { key: '1', label: 'label', children: 'caption' },
  { key: '2', label: 'label', children: 'caption' },
  { key: '3', label: 'label', children: 'caption' },
  { key: '4', label: 'label', children: 'caption' },
  { key: '5', label: 'label', children: 'caption' },
  { key: '6', label: 'label', children: 'caption' },
  { key: '7', label: 'label', children: 'caption' },
  { key: '8', label: 'label', children: 'caption' },
];

const ITEMS_DRAWER = [
  { key: '1', label: 'label', children: 'caption' },
  { key: '2', label: 'label', children: 'caption' },
  { key: '3', label: 'label', children: 'caption' },
];

const ITEMS_POPOVER = [
  { key: '1', label: 'label', children: 'caption' },
  { key: '2', label: 'label', children: 'caption' },
  { key: '3', label: 'label', children: 'caption' },
];

const STYLE_PAGE: CSSProperties = { width: 696, borderRadius: 6, background: '#ffffff' };
const STYLE_DRAWER: CSSProperties = {
  width: 370,
  padding: 16,
  background: '#ffffff',
  borderRadius: 6,
  rowGap: 0,
};
const STYLE_POPOVER: CSSProperties = {
  width: 200,
  padding: 12,
  background: '#ffffff',
  borderRadius: 6,
};

const STYLES_PAGE = {
  label: { color: '#5c6b8a', fontSize: 12, lineHeight: '20px' },
  content: { color: '#132039', fontSize: 14, lineHeight: '20px' },
};

const STYLES_DRAWER = {
  label: { color: '#5c6b8a', fontSize: 14, lineHeight: '20px', whiteSpace: 'nowrap' as const },
  content: { color: '#132039', fontSize: 14, lineHeight: '20px' },
};

const STYLES_POPOVER = {
  label: { color: '#5c6b8a', fontSize: 12, lineHeight: '20px', whiteSpace: 'nowrap' as const },
  content: { color: '#132039', fontSize: 12, lineHeight: '20px' },
};

/** 与 figma.connect example 相同的拼装方式 */
function FigmaDescriptionGroupExample(props: {
  bordered: boolean;
  column: number;
  layout: 'vertical' | 'horizontal';
  size: 'default' | 'small';
  title: React.ReactNode;
  items: { key: string; label: React.ReactNode; children: React.ReactNode }[];
  style: CSSProperties;
  styles: { label: CSSProperties; content: CSSProperties };
}) {
  const { bordered, column, layout, size, title, items, style, styles } = props;
  return (
    <Descriptions
      bordered={bordered}
      column={column}
      layout={layout}
      size={size}
      title={title}
      items={items}
      style={style}
      styles={styles}
    />
  );
}

const App: React.FC = () => {
  const [position, setPosition] = useState<Position>('page');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
    setModalOpen(false);
    setPopoverOpen(false);
  }, [position]);

  const derived = useMemo(() => {
    switch (position) {
      case 'page':
        return {
          bordered: true,
          column: 4,
          layout: 'vertical' as const,
          size: 'default' as const,
          title: TITLE_PAGE,
          items: ITEMS_PAGE,
          style: STYLE_PAGE,
          styles: STYLES_PAGE,
        };
      case 'drawer':
        return {
          bordered: false,
          column: 1,
          layout: 'horizontal' as const,
          size: 'default' as const,
          title: TITLE_DRAWER,
          items: ITEMS_DRAWER,
          style: STYLE_DRAWER,
          styles: STYLES_DRAWER,
        };
      case 'popover':
        return {
          bordered: false,
          column: 1,
          layout: 'horizontal' as const,
          size: 'small' as const,
          title: TITLE_POPOVER,
          items: ITEMS_POPOVER,
          style: STYLE_POPOVER,
          styles: STYLES_POPOVER,
        };
      default:
        return {
          bordered: true,
          column: 4,
          layout: 'vertical' as const,
          size: 'default' as const,
          title: TITLE_PAGE,
          items: ITEMS_PAGE,
          style: STYLE_PAGE,
          styles: STYLES_PAGE,
        };
    }
  }, [position]);

  const renderDescription = () => (
    <FigmaDescriptionGroupExample
      bordered={derived.bordered}
      column={derived.column}
      layout={derived.layout}
      size={derived.size}
      title={derived.title}
      items={derived.items}
      style={derived.style}
      styles={derived.styles}
    />
  );

  const modalWidth = position === 'page' ? 720 : position === 'drawer' ? 420 : 320;

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
        flex="1 1 0%"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 280,
          minWidth: 0,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <Space direction="vertical" size={12} style={{ width: '100%', minWidth: 0 }}>
          <Space wrap size={8}>
            <Button type="primary" onClick={() => setDrawerOpen(true)}>
              在抽屉中查看
            </Button>
            <Button onClick={() => setModalOpen(true)}>在对话框中查看</Button>
            <Popover
              trigger="click"
              open={popoverOpen}
              onOpenChange={setPopoverOpen}
              placement="bottomLeft"
              content={
                <div style={{ maxWidth: 280 }} onClick={e => e.stopPropagation()}>
                  {renderDescription()}
                </div>
              }
            >
              <Button>在气泡卡片中查看</Button>
            </Popover>
          </Space>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            当前 position：<strong>{position}</strong>；下方为内联预览（page
            较宽时可横向滚动）。按钮可在抽屉 / 对话框 / 气泡内用<strong>同一套</strong> props
            再预览。
          </Typography.Text>
          <div
            style={{
              width: '100%',
              minWidth: 0,
              overflowX: 'auto',
              overflowY: 'visible',
              paddingBottom: 4,
            }}
          >
            {renderDescription()}
          </div>
        </Space>
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          minWidth: 280,
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          DescriptionGroup
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>position</div>
            <Select
              style={{ width: '100%' }}
              value={position}
              onChange={v => setPosition(v as Position)}
              options={[
                { value: 'page', label: 'page' },
                { value: 'drawer', label: 'drawer' },
                { value: 'popover', label: 'popover' },
              ]}
            />
          </div>
        </Space>
      </Col>

      <Drawer
        title="Drawer"
        placement="right"
        width={420}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        destroyOnClose
      >
        {renderDescription()}
      </Drawer>

      <Modal
        title="Modal"
        open={modalOpen}
        footer={null}
        width={modalWidth}
        onCancel={() => setModalOpen(false)}
        destroyOnClose
      >
        <div style={{ maxHeight: '70vh', overflow: 'auto' }}>{renderDescription()}</div>
      </Modal>
    </Row>
  );
};

export default App;
