import {
  CheckCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from '@oceanbase/design';
import type { CardProps } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect` 的 props / example 一一对应。
 * `title` / `description` 在映射侧为 `figma.string('…')`；此处用 Input 可调，便于对齐稿面文案。
 */

const CARD_STYLE: CSSProperties = {
  width: 384,
  borderRadius: 8,
  boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)',
  background: '#ffffff',
  border: 'none',
};

const CARD_STYLES: CardProps['styles'] = {
  body: {
    padding: 24,
  },
};

type FigmaNotificationType = 'default' | 'alert' | 'success' | 'error';

/** 与 figma.connect example 相同的拼装方式 */
function FigmaNotificationExample(props: {
  style: CSSProperties;
  styles: CardProps['styles'];
  children: React.ReactNode;
}) {
  const { style, styles, children } = props;
  return (
    <Card style={style} styles={styles} bordered={false}>
      {children}
    </Card>
  );
}

/**
 * 与 `index.figma.tsx` 中 `children: figma.enum('type', { … })` 嵌套 `figma.enum('actions', { … })`
 * 各分支 JSX 一致；`actions` 键 `ture` 为设计稿拼写，此处用布尔 `actionsTure` 映射。
 */
function notificationChildren(
  type: FigmaNotificationType,
  actionsTure: boolean,
  title: string,
  description: string
): React.ReactNode {
  if (type === 'default') {
    if (actionsTure) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#132039',
                  lineHeight: '24px',
                  minWidth: 0,
                }}
              >
                {title}
              </span>
              <CloseOutlined style={{ fontSize: 16, color: '#8592ad', flexShrink: 0 }} />
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
              {description}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, width: '100%' }}>
            <Button size="small">Cancel</Button>
            <Button type="primary" size="small">
              Confirm
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: 500,
              color: '#132039',
              lineHeight: '24px',
              minWidth: 0,
            }}
          >
            {title}
          </span>
          <CloseOutlined style={{ fontSize: 16, color: '#8592ad', flexShrink: 0 }} />
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
          {description}
        </p>
      </div>
    );
  }

  if (type === 'alert') {
    if (actionsTure) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
            <ExclamationCircleFilled
              style={{ fontSize: 24, color: '#f7a600', flexShrink: 0, marginTop: 2 }}
            />
            <div
              style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#132039',
                    lineHeight: '24px',
                    minWidth: 0,
                  }}
                >
                  {title}
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
                {description}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, width: '100%' }}>
            <Button size="small">Cancel</Button>
            <Button type="primary" size="small">
              Confirm
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
        <ExclamationCircleFilled
          style={{ fontSize: 24, color: '#f7a600', flexShrink: 0, marginTop: 2 }}
        />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                flex: 1,
                fontSize: 16,
                fontWeight: 500,
                color: '#132039',
                lineHeight: '24px',
                minWidth: 0,
              }}
            >
              {title}
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
            {description}
          </p>
        </div>
      </div>
    );
  }

  if (type === 'success') {
    if (actionsTure) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
            <CheckCircleFilled
              style={{ fontSize: 24, color: '#29cc6a', flexShrink: 0, marginTop: 2 }}
            />
            <div
              style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#132039',
                    lineHeight: '24px',
                    minWidth: 0,
                  }}
                >
                  {title}
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
                {description}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, width: '100%' }}>
            <Button size="small">Cancel</Button>
            <Button type="primary" size="small">
              Confirm
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
        <CheckCircleFilled
          style={{ fontSize: 24, color: '#29cc6a', flexShrink: 0, marginTop: 2 }}
        />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                flex: 1,
                fontSize: 16,
                fontWeight: 500,
                color: '#132039',
                lineHeight: '24px',
                minWidth: 0,
              }}
            >
              {title}
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
            {description}
          </p>
        </div>
      </div>
    );
  }

  // error
  if (actionsTure) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
          <CloseCircleFilled
            style={{ fontSize: 24, color: '#eb4242', flexShrink: 0, marginTop: 2 }}
          />
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#132039',
                  lineHeight: '24px',
                  minWidth: 0,
                }}
              >
                {title}
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
              {description}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, width: '100%' }}>
          <Button size="small">Cancel</Button>
          <Button type="primary" size="small">
            Confirm
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
      <CloseCircleFilled style={{ fontSize: 24, color: '#eb4242', flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: 500,
              color: '#132039',
              lineHeight: '24px',
              minWidth: 0,
            }}
          >
            {title}
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
          {description}
        </p>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  const [type, setType] = useState<FigmaNotificationType>('default');
  /** 对应 Figma `actions`：`ture` / `false`（设计稿拼写 `ture`） */
  const [actionsTure, setActionsTure] = useState(true);
  const [title, setTitle] = useState('Notification title');
  const [description, setDescription] = useState(
    'Description text goes here. It can span multiple lines when needed.'
  );

  const children = useMemo(
    () => notificationChildren(type, actionsTure, title, description),
    [type, actionsTure, title, description]
  );

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
        <FigmaNotificationExample style={CARD_STYLE} styles={CARD_STYLES}>
          {children}
        </FigmaNotificationExample>
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Notification
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={type}
              onChange={v => setType(v as FigmaNotificationType)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'alert', label: 'alert' },
                { value: 'success', label: 'success' },
                { value: 'error', label: 'error' },
              ]}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>actions（ture）</span>
            <Switch checked={actionsTure} onChange={setActionsTure} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>title</div>
            <Input value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>description</div>
            <Input.TextArea
              value={description}
              onChange={e => setDescription(e.target.value)}
              autoSize={{ minRows: 2, maxRows: 4 }}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
