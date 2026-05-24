import {
  Badge,
  Breadcrumb,
  Button,
  Col,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `<FIGMA_OCEANBASE_BREADCRUMBITEM>` 的 `props` / `example` 一致。
 * `figma.boolean`（divider / badge / action）→ Switch；`status` → Select；`name`（figma.textContent）→ Input。
 */

type FigmaStatusKey = 'default' | 'selected';

function FigmaBreadcrumbItemExample(props: {
  separator: string;
  labelText: React.ReactNode;
  inlineDivider: React.ReactNode;
  statusBadge: React.ReactNode;
  actionButton: React.ReactNode;
}) {
  const { separator, labelText, inlineDivider, statusBadge, actionButton } = props;
  return (
    <Breadcrumb separator={separator}>
      <Breadcrumb.Item>
        <Space direction="horizontal" size={6}>
          {statusBadge}
          {labelText}
          {inlineDivider}
          {actionButton}
        </Space>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

const App: React.FC = () => {
  const [name, setName] = useState('Tenant-name');
  const [divider, setDivider] = useState(true);
  const [badge, setBadge] = useState(true);
  const [action, setAction] = useState(true);
  const [status, setStatus] = useState<FigmaStatusKey>('selected');

  const separator = divider ? '/' : '';

  const labelText = useMemo(
    () =>
      status === 'default' ? (
        <Typography.Text type="secondary">{name}</Typography.Text>
      ) : (
        <Typography.Text strong>{name}</Typography.Text>
      ),
    [status, name]
  );

  const inlineDivider = useMemo(
    () => (divider ? <Typography.Text type="secondary">/</Typography.Text> : <></>),
    [divider]
  );

  const statusBadge = useMemo(() => (badge ? <Badge status="error" /> : <></>), [badge]);

  const actionButton = useMemo(
    () =>
      action ? (
        <Button type="default" variant="outlined" size="small">
          Connect
        </Button>
      ) : (
        <></>
      ),
    [action]
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
        <FigmaBreadcrumbItemExample
          separator={separator}
          labelText={labelText}
          inlineDivider={inlineDivider}
          statusBadge={statusBadge}
          actionButton={actionButton}
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
          BreadcrumbItem
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>name（figma.textContent）</div>
            <Input style={{ width: '100%' }} value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>divider</span>
            <Switch checked={divider} onChange={setDivider} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>badge</span>
            <Switch checked={badge} onChange={setBadge} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>action</span>
            <Switch checked={action} onChange={setAction} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as FigmaStatusKey)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'selected', label: 'selected' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
