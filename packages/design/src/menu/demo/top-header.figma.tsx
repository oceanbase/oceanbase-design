import {
  AimOutlined,
  AlertOutlined,
  BillingOutlined,
  HelpOutlined,
  LanguageEnOutlined,
  SwapOutlined,
} from '@oceanbase/icons';
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Col,
  Divider,
  Input,
  Layout,
  Row,
  Space,
  Typography,
} from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_TOPHEADER 的 `headerNode` / `example` 一致。
 * 映射中头像为 `figma.textContent('Y')`；此处用 Input 模拟可编辑文案（文档富文本维度）。
 */

function FigmaTopHeaderExample(props: { avatarText: string }) {
  const { avatarText } = props;
  return (
    <Layout.Header
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        height: 44,
        padding: '12px 32px 12px 24px',
        lineHeight: 'unset',
        background: '#fbfcfe',
        borderBottom: '1px solid #e2e8f3',
      }}
    >
      <Breadcrumb
        separator="/"
        items={[
          {
            title: (
              <Space direction="horizontal" size={6}>
                <Typography.Text type="secondary">Org-name</Typography.Text>
                <SwapOutlined rotate={90} />
              </Space>
            ),
          },
          {
            title: (
              <Space direction="horizontal" size={6}>
                <Typography.Text type="secondary">Project-name</Typography.Text>
                <SwapOutlined rotate={90} />
              </Space>
            ),
          },
          {
            title: (
              <Space direction="horizontal" size={6}>
                <Badge status="error" />
                <Typography.Text type="secondary">Instance-name</Typography.Text>
                <SwapOutlined rotate={90} />
              </Space>
            ),
          },
          {
            title: (
              <Space direction="horizontal" size={6}>
                <Badge status="error" />
                <Typography.Text strong>Tenant-name</Typography.Text>
                <SwapOutlined rotate={90} />
              </Space>
            ),
          },
        ]}
      />
      <Space size={16} align="center">
        <Button type="default" size="small">
          Feedback
        </Button>
        <Divider type="vertical" style={{ height: 16, margin: 0 }} />
        <BillingOutlined />
        <HelpOutlined />
        <AlertOutlined />
        <LanguageEnOutlined />
        <Avatar
          size={24}
          style={{
            background: 'linear-gradient(180deg, #58abff 12.5%, #41d9a6)',
            flexShrink: 0,
          }}
        >
          {avatarText}
        </Avatar>
      </Space>
    </Layout.Header>
  );
}

const App: React.FC = () => {
  const [avatarText, setAvatarText] = useState('Y');

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
          alignItems: 'stretch',
          justifyContent: 'center',
          minHeight: 280,
          padding: 16,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
          overflowX: 'auto',
          overflowY: 'auto',
        }}
      >
        <div style={{ width: '100%', minWidth: 1080, maxWidth: 1220 }}>
          <FigmaTopHeaderExample avatarText={avatarText} />
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
          TopHeader
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>头像文案（映射 figma.textContent）</div>
            <Input value={avatarText} onChange={e => setAvatarText(e.target.value)} maxLength={2} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
