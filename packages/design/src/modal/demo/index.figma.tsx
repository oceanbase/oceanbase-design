import { ExclamationCircleOutlined } from '@oceanbase/icons';
import {
  Alert,
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Typography,
} from '@oceanbase/design';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中唯一一条 `figma.connect` 的 props / example 一致。
 * `type`（default / confirm / errorConfirm）驱动 width、closable、title、footer、modalBody。
 * confirm：**业务上与 `Modal.confirm({ title, icon, content, okText, cancelText, width })` 一致**；Playground 用按钮调起 `Modal.confirm`，并 `getContainer` 限制在左侧预览区。
 * default / errorConfirm：`open` 默认关闭，按钮打开 `<Modal />`；Code Connect 侧为 `open={true}` 全页语义。
 * `title` / `description` 对应 Figma `figma.string('title')`、`figma.string('description')`，便于与稿面文案对齐。
 */

type ModalType = 'default' | 'confirm' | 'errorConfirm';

/** default / errorConfirm 的 `<Modal />` 预览样式；confirm 走 `Modal.confirm`，不经过本函数。 */
function modalStylesForType() {
  const content = {
    padding: 0,
    borderRadius: 8,
    boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)',
  };
  const footerBase = {
    margin: 0,
    padding: '16px 24px',
    display: 'flex' as const,
    justifyContent: 'flex-end' as const,
  };
  const bodyReset = { marginInline: 0, marginBlock: 0 } as const;
  return {
    content,
    header: {
      margin: 0,
      padding: '16px 24px',
      borderBottom: '1px solid #e2e8f3',
      fontSize: 18,
      fontWeight: 500,
      lineHeight: '26px',
    },
    body: { ...bodyReset, padding: '24px' },
    footer: { ...footerBase, borderTop: '1px solid #e2e8f3' },
  };
}

const FOOTER_DEFAULT = (
  <Space size={8}>
    <Button type="default">Button</Button>
    <Button type="primary">Button</Button>
  </Space>
);

const FOOTER_ERROR = (
  <Space size={8}>
    <Button type="default">Button</Button>
    <Button danger type="default">
      Button
    </Button>
  </Space>
);

/** 与 figma.connect `example` 相同的根节点拼装；额外接收 open / onCancel / getContainer 供文档交互。 */
function FigmaModalExample(props: {
  closable: boolean;
  footer: React.ReactNode;
  modalBody: React.ReactNode;
  onCancel: () => void;
  open: boolean;
  title: React.ReactNode;
  width: number;
  getContainer?: HTMLElement | (() => HTMLElement) | false;
}) {
  const { width, closable, title, footer, modalBody, open, onCancel, getContainer } = props;
  return (
    <Modal
      open={open}
      width={width}
      title={title}
      closable={closable}
      footer={footer}
      onCancel={onCancel}
      maskClosable={false}
      centered
      getContainer={getContainer}
      styles={modalStylesForType()}
    >
      {modalBody}
    </Modal>
  );
}

function buildModalBody(
  type: ModalType,
  titleText: string,
  descriptionText: string
): React.ReactNode {
  if (type === 'default') {
    return (
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
    );
  }
  return (
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
  );
}

const App: React.FC = () => {
  const [type, setType] = useState<ModalType>('default');
  const [titleText, setTitleText] = useState('Title');
  const [descriptionText, setDescriptionText] = useState('description text for confirmation body.');
  const [open, setOpen] = useState(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const handleCancel = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [type]);

  const showModalConfirm = useCallback(() => {
    if (!container) {
      return;
    }
    Modal.confirm({
      title: titleText,
      icon: <ExclamationCircleOutlined />,
      content: descriptionText,
      okText: '确认',
      cancelText: '取消',
      width: 384,
      getContainer: () => container,
    });
  }, [container, titleText, descriptionText]);

  const { width, closable, title, footer, modalBody } = useMemo(() => {
    if (type === 'confirm') {
      return {
        width: 384,
        closable: true,
        title: null,
        footer: null,
        modalBody: null,
      };
    }
    const w = 520;
    const c = true;
    const t = titleText;
    const foot = type === 'errorConfirm' ? FOOTER_ERROR : FOOTER_DEFAULT;
    const body = buildModalBody(type, titleText, descriptionText);
    return { width: w, closable: c, title: t, footer: foot, modalBody: body };
  }, [type, titleText, descriptionText]);

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
          {type !== 'confirm' && !open && (
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
                打开对话框
              </Button>
            </div>
          )}
          {container && type === 'confirm' ? (
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
              <Button type="primary" onClick={showModalConfirm}>
                打开确认框（Modal.confirm）
              </Button>
            </div>
          ) : null}
          {container && type !== 'confirm' ? (
            <FigmaModalExample
              open={open}
              width={width}
              title={title}
              closable={closable}
              footer={footer}
              modalBody={modalBody}
              onCancel={handleCancel}
              getContainer={container}
            />
          ) : null}
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
          Modal
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={type}
              onChange={v => setType(v as ModalType)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'confirm', label: 'confirm' },
                { value: 'errorConfirm', label: 'errorConfirm' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>title（figma.string）</div>
            <Input value={titleText} onChange={e => setTitleText(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>description（confirm 正文）</div>
            <Input.TextArea
              value={descriptionText}
              onChange={e => setDescriptionText(e.target.value)}
              rows={3}
              disabled={type !== 'confirm'}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
