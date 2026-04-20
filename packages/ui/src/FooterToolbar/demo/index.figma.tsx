import { MoreHorizontalOutlined } from '@oceanbase/icons';
import { Button, Col, Input, Row, Space, Switch, Typography } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';
import { FooterToolbar } from '@oceanbase/ui';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect` 的 `props` 键（`actions`、`infoAside`）及 `example` 拼装一致；
 * 预览根 `style` 外置传入，见 `playground_reference.md` §3.4a。
 */

/** Pro 默认 `position:fixed`，脱离演示区；稿面为白底横条、左对齐成组。映射 `example` 不传 `style` / `className`。 */
const FOOTER_TOOLBAR_PREVIEW_STYLE: CSSProperties = {
  position: 'relative',
  bottom: 'auto',
  insetInlineEnd: 'auto',
  left: 'auto',
  right: 'auto',
  zIndex: 0,
  width: '100%',
  maxWidth: '100%',
  padding: '16px 32px',
  background: '#ffffff',
  boxShadow: '0px -1px 2px 0px rgba(19, 32, 57, 0.1)',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backdropFilter: 'none',
  WebkitBackdropFilter: 'none',
};

/** 与 `../index.figma.tsx` 的 `example: ({ actions, infoAside }) => …` 同结构；根 `style` 由外部传入（映射侧省略）。 */
function FigmaFooterToolbarExample(props: {
  actions: React.ReactNode;
  infoAside: React.ReactNode | null;
  style: CSSProperties;
}) {
  const { actions, infoAside, style } = props;
  return (
    <FooterToolbar
      portalDom={false}
      style={style}
      extra={
        infoAside != null ? (
          <Space size="middle">
            {actions}
            {infoAside}
          </Space>
        ) : (
          actions
        )
      }
    />
  );
}

const App: React.FC = () => {
  /** 对应 Figma VARIANT「info」：true / false（两档枚举 → Switch，见 playground_reference §5） */
  const [infoTrue, setInfoTrue] = useState(true);
  /** 对应各 `figma.string('Text')`（稿面多处同名 Text，统一驱动） */
  const [text, setText] = useState('Text');
  /** 对应 `figma.textContent('info')`（仅 info=false 分支；稿面为灰色「info」） */
  const [infoContent, setInfoContent] = useState('info');

  const { actions, infoAside } = useMemo(() => {
    const actions = (
      <Space size="middle">
        <Button type="primary" size="middle">
          {text}
        </Button>
        <Button type="default" color="primary" variant="outlined" size="middle">
          {text}
        </Button>
        <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
      </Space>
    );
    const infoAside = !infoTrue ? (
      <Typography.Text type="secondary" ellipsis>
        {infoContent}
      </Typography.Text>
    ) : null;
    return { actions, infoAside };
  }, [infoTrue, text, infoContent]);

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
        <FigmaFooterToolbarExample
          actions={actions}
          infoAside={infoAside}
          style={FOOTER_TOOLBAR_PREVIEW_STYLE}
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
          Footer Toolbar
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>info</span>
            <Switch checked={infoTrue} onChange={setInfoTrue} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Text（figma.string）</div>
            <Input value={text} onChange={e => setText(e.target.value)} placeholder="按钮文案" />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>
              info（figma.textContent，仅 info=false）
            </div>
            <Input
              value={infoContent}
              onChange={e => setInfoContent(e.target.value)}
              placeholder="右侧说明"
              disabled={infoTrue}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
