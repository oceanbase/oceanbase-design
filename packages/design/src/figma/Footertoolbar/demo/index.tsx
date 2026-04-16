import { MoreHorizontalOutlined } from '@oceanbase/icons';
import { Button, Col, Input, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';
import { FooterToolbar } from '@oceanbase/ui';

/**
 * Playground：与 `../index.figma.tsx` 的 props（actions + infoAside）与 `example` 拼装一致。
 */

/** 与 figma.connect 的 example 相同：`({ actions, infoAside }) => <FooterToolbar extra={actions}>{infoAside}</FooterToolbar>` */
function FigmaFooterToolbarExample(props: { layout: React.ReactNode }) {
  const { layout } = props;
  return layout;
}

const App: React.FC = () => {
  /** 对应 Figma `info`：true / false */
  const [info, setInfo] = useState<'true' | 'false'>('true');
  /** 对应各 `figma.string('Text')`（稿面多处同名 Text，统一驱动） */
  const [text, setText] = useState('Text');
  /** 对应 `figma.textContent('info')`（仅 info=false 分支展示） */
  const [infoContent, setInfoContent] = useState('辅助说明文案');

  const layout = useMemo(() => {
    const barStyle: React.CSSProperties = {
      width: '100%',
      maxWidth: 1200,
      padding: '16px 32px',
      background: '#ffffff',
      boxShadow: '0px -1px 2px 0px rgba(19, 32, 57, 0.1)',
    };
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
    const infoAside =
      info === 'false' ? (
        <span
          style={{
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '20px',
            color: '#8592ad',
            whiteSpace: 'nowrap',
          }}
        >
          {infoContent}
        </span>
      ) : null;
    return (
      <FooterToolbar portalDom={false} style={barStyle} extra={actions}>
        {infoAside}
      </FooterToolbar>
    );
  }, [info, text, infoContent]);

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
        <FigmaFooterToolbarExample layout={layout} />
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
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>info</div>
            <Select
              style={{ width: '100%' }}
              value={info}
              onChange={v => setInfo(v as 'true' | 'false')}
              options={[
                { value: 'true', label: 'true' },
                { value: 'false', label: 'false' },
              ]}
            />
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
              disabled={info === 'true'}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
