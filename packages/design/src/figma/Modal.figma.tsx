// @ts-nocheck

import { figma } from '@figma/code-connect';
import { CloseOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Alert, Button, Form, Input, Modal, Space } from '@oceanbase/design';

/**
 * Code Connect — Modal（2351:5318：default 表单 / confirm 轻量确认 / errorConfirm 释放集群危险确认）。
 * Page: "↵Modal"
 */

// Figma: "Modal" · 2351:5318
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2351-5318&m=dev
figma.connect(Modal, '<FIGMA_OCEANBASE_MODAL>', {
  props: {
    width: figma.enum('type', {
      default: 520,
      confirm: 384,
      errorConfirm: 520,
    }),
    closable: figma.enum('type', {
      default: true,
      confirm: false,
      errorConfirm: true,
    }),
    title: figma.enum('type', {
      default: figma.string('title'),
      confirm: null,
      errorConfirm: figma.string('title'),
    }),
    footer: figma.enum('type', {
      default: (
        <Space size={8}>
          <Button type="default">Button</Button>
          <Button type="primary">Button</Button>
        </Space>
      ),
      confirm: (
        <Space size={8}>
          <Button type="default">Button</Button>
          <Button type="primary">Button</Button>
        </Space>
      ),
      errorConfirm: (
        <Space size={8}>
          <Button type="default">Button</Button>
          <Button danger type="default">
            Button
          </Button>
        </Space>
      ),
    }),
    modalBody: figma.enum('type', {
      default: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
          <Form layout="vertical" style={{ width: '100%', margin: 0 }}>
            <Form.Item label="Label" style={{ marginBottom: 0 }}>
              <Input placeholder="Enter" />
            </Form.Item>
            <Form.Item label="Label" style={{ marginBottom: 0 }}>
              <Input placeholder="Enter" />
            </Form.Item>
          </Form>
        </div>
      ),
      confirm: (
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
          <ExclamationCircleFilled style={{ fontSize: 24, color: '#f7a600', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%' }}>
              <span
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#132039',
                  lineHeight: '24px',
                }}
              >
                {figma.string('title')}
              </span>
              <CloseOutlined style={{ fontSize: 16, color: '#132039', flexShrink: 0 }} />
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: '#8592ad',
                lineHeight: '20px',
                width: '100%',
              }}
            >
              {figma.string('description')}
            </p>
          </div>
        </div>
      ),
      errorConfirm: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
          <Alert
            type="warning"
            showIcon
            style={{
              background: '#fff9ee',
              border: '1px solid #f7ca88',
              borderRadius: 6,
              padding: '12px 16px',
            }}
            message={
              <span style={{ fontSize: 14, fontWeight: 500, color: '#6c4408', lineHeight: '20px' }}>
                All data will be deleted upon release. Please proceed with caution!
              </span>
            }
            description={
              <div style={{ fontSize: 14, color: '#132039', lineHeight: '20px' }}>
                <p style={{ margin: 0 }}>Operation Target: OB Cluster ob2322</p>
                <p style={{ margin: 0 }}>Cluster ID: 23242212</p>
                <p style={{ margin: 0 }}>Cluster Type: Primary Cluster</p>
                <p style={{ margin: 0 }}>Number of Tenants: 3</p>
                <p style={{ margin: 0 }}>Current Session Count: 92</p>
                <p style={{ margin: 0 }}>Current QPS: 27</p>
                <p style={{ margin: 0 }}>Current TPS: 0</p>
              </div>
            }
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
            <div style={{ fontSize: 13, lineHeight: '21px' }}>
              <span style={{ color: '#132039' }}>Please enter &apos;</span>
              <span style={{ color: '#eb4242', fontWeight: 500 }}>release</span>
              <span style={{ color: '#132039' }}>&apos; to confirm the release.</span>
            </div>
            <Input placeholder="Enter" />
          </div>
        </div>
      ),
    }),
  },
  example: ({ width, closable, title, footer, modalBody }) => (
    <Modal
      open={true}
      width={width}
      title={title}
      closable={closable}
      footer={footer}
      onCancel={() => {}}
      maskClosable={false}
      styles={{
        content: {
          padding: 0,
          borderRadius: 8,
          boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)',
        },
        header: {
          margin: 0,
          padding: '16px 24px',
          borderBottom: '1px solid #e2e8f3',
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '26px',
        },
        body: { padding: '24px' },
        footer: { margin: 0, padding: '16px 24px', borderTop: 'none' },
      }}
    >
      {modalBody}
    </Modal>
  ),
});
