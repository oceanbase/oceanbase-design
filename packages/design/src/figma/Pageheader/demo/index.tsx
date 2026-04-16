import {
  DocumentOutlined,
  FilterOutlined,
  LeftOutlined,
  MoreHorizontalOutlined,
  SearchOutlined,
  SyncOutlined,
} from '@oceanbase/icons';
import {
  Badge,
  Button,
  Col,
  Divider,
  Flex,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Tabs,
  Typography,
} from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';
import { PageHeader } from '@oceanbase/ui';

/**
 * Playground：与 `../index.figma.tsx` 单条 `figma.connect` 的 props / example 对齐。
 * `example`：`({ layout }) => layout`
 */

type PageHeaderType = '带tab' | '带返回' | '默认';

type TextFields = {
  pageTitle: string;
  search: string;
  filters: string;
  button: string;
  tab001: string;
  tab002: string;
  tab003: string;
  tab004: string;
  status: string;
};

const TAB_SEP = (
  <span
    style={{
      display: 'inline-block',
      width: 1,
      height: 20,
      background: '#e2e8f3',
      verticalAlign: 'middle',
    }}
  />
);

/** 与 figma.connect 的 example 一致 */
function FigmaPageHeaderExample(props: { layout: React.ReactNode }) {
  const { layout } = props;
  return layout;
}

function buildPageHeaderLayout(
  type: PageHeaderType,
  wToolbar: boolean,
  text: TextFields
): React.ReactNode {
  if (type === '带tab') {
    if (wToolbar) {
      return (
        <PageHeader
          ghost={false}
          style={{
            width: '100%',
            maxWidth: 1242,
            background: '#fbfcfe',
            padding: '24px 32px 0',
          }}
          title={
            <Space size={8} align="center">
              <span
                style={
                  {
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: '28px',
                    color: '#132039',
                  } as CSSProperties
                }
              >
                {text.pageTitle}
              </span>
              <Divider type="vertical" style={{ height: 16, margin: 0, borderColor: '#e2e8f3' }} />
              <DocumentOutlined style={{ fontSize: 16, color: '#132039' }} />
            </Space>
          }
          extra={
            <Flex
              align="center"
              justify="flex-end"
              gap={8}
              style={{ height: 28, flex: 1, minWidth: 0 }}
            >
              <Input
                placeholder={text.search}
                prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
                style={{ width: 264 }}
              />
              <Flex
                align="center"
                gap={4}
                style={{
                  border: '1px solid #cdd5e4',
                  borderRadius: 4,
                  padding: '4px 12px',
                  background: '#ffffff',
                }}
              >
                <FilterOutlined style={{ fontSize: 16, color: '#595959' }} />
                <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                  {text.filters}
                </span>
              </Flex>
              <Space size={8}>
                <Button type="default">{text.button}</Button>
                <Button
                  type="default"
                  icon={<MoreHorizontalOutlined />}
                  style={{ padding: '6px 12px' }}
                />
                <Button type="default" icon={<SyncOutlined />} style={{ padding: '6px 12px' }} />
              </Space>
            </Flex>
          }
          footer={
            <div style={{ width: '100%', marginTop: 0, borderBottom: '1px solid #e2e8f3' }}>
              <Tabs
                defaultActiveKey="2"
                style={{ width: '100%' }}
                tabBarGutter={24}
                items={[
                  { key: '1', label: text.tab001 },
                  { key: '2', label: text.tab002 },
                  { key: '3', label: text.tab003, disabled: true },
                  { key: 'sep', label: TAB_SEP, disabled: true },
                  { key: '4', label: text.tab004 },
                ]}
              />
            </div>
          }
        />
      );
    }
    return (
      <PageHeader
        ghost={false}
        style={{
          width: '100%',
          maxWidth: 1242,
          background: '#fbfcfe',
          padding: '24px 32px 0',
        }}
        title={
          <Space size={8} align="center">
            <span
              style={
                {
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: '28px',
                  color: '#132039',
                } as CSSProperties
              }
            >
              {text.pageTitle}
            </span>
            <Divider type="vertical" style={{ height: 16, margin: 0, borderColor: '#e2e8f3' }} />
            <DocumentOutlined style={{ fontSize: 16, color: '#132039' }} />
          </Space>
        }
        footer={
          <div style={{ width: '100%', marginTop: 0, borderBottom: '1px solid #e2e8f3' }}>
            <Tabs
              defaultActiveKey="2"
              style={{ width: '100%' }}
              tabBarGutter={24}
              items={[
                { key: '1', label: text.tab001 },
                { key: '2', label: text.tab002 },
                { key: '3', label: text.tab003, disabled: true },
                { key: 'sep', label: TAB_SEP, disabled: true },
                { key: '4', label: text.tab004 },
              ]}
            />
          </div>
        }
      />
    );
  }

  if (type === '带返回') {
    if (wToolbar) {
      return (
        <PageHeader
          ghost={false}
          style={{
            width: '100%',
            maxWidth: 1242,
            background: '#fbfcfe',
            padding: '24px 32px 8px',
          }}
          onBack={() => undefined}
          backIcon={
            <Button type="default" icon={<LeftOutlined />} style={{ padding: '6px 12px' }} />
          }
          title={
            <span
              style={
                {
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: '28px',
                  color: '#132039',
                } as CSSProperties
              }
            >
              {text.pageTitle}
            </span>
          }
          tags={
            <Space size={8} align="center">
              <Badge status="processing" />
              <span style={{ fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#132039' }}>
                {text.status}
              </span>
            </Space>
          }
          extra={
            <Flex
              align="center"
              justify="flex-end"
              gap={8}
              style={{ height: 28, flex: 1, minWidth: 0 }}
            >
              <Input
                placeholder={text.search}
                prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
                style={{ width: 264 }}
              />
              <Flex
                align="center"
                gap={4}
                style={{
                  border: '1px solid #cdd5e4',
                  borderRadius: 4,
                  padding: '4px 12px',
                  background: '#ffffff',
                }}
              >
                <FilterOutlined style={{ fontSize: 16, color: '#595959' }} />
                <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                  {text.filters}
                </span>
              </Flex>
              <Space size={8}>
                <Button type="default">{text.button}</Button>
                <Button
                  type="default"
                  icon={<MoreHorizontalOutlined />}
                  style={{ padding: '6px 12px' }}
                />
                <Button type="default" icon={<SyncOutlined />} style={{ padding: '6px 12px' }} />
              </Space>
            </Flex>
          }
        />
      );
    }
    return (
      <PageHeader
        ghost={false}
        style={{
          width: '100%',
          maxWidth: 1242,
          background: '#fbfcfe',
          padding: '24px 32px 8px',
        }}
        onBack={() => undefined}
        backIcon={<Button type="default" icon={<LeftOutlined />} style={{ padding: '6px 12px' }} />}
        title={
          <span
            style={
              {
                fontSize: 20,
                fontWeight: 500,
                lineHeight: '28px',
                color: '#132039',
              } as CSSProperties
            }
          >
            {text.pageTitle}
          </span>
        }
        tags={
          <Space size={8} align="center">
            <Badge status="processing" />
            <span style={{ fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#132039' }}>
              {text.status}
            </span>
          </Space>
        }
      />
    );
  }

  if (wToolbar) {
    return (
      <PageHeader
        ghost={false}
        style={{
          width: '100%',
          maxWidth: 1242,
          background: '#fbfcfe',
          padding: '24px 32px 8px',
        }}
        title={
          <Space size={8} align="center">
            <span
              style={
                {
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: '28px',
                  color: '#132039',
                } as CSSProperties
              }
            >
              {text.pageTitle}
            </span>
            <Divider type="vertical" style={{ height: 16, margin: 0, borderColor: '#e2e8f3' }} />
            <DocumentOutlined style={{ fontSize: 16, color: '#132039' }} />
          </Space>
        }
        extra={
          <Flex
            align="center"
            justify="flex-end"
            gap={8}
            style={{ height: 28, flex: 1, minWidth: 0 }}
          >
            <Input
              placeholder={text.search}
              prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
              style={{ width: 264 }}
            />
            <Flex
              align="center"
              gap={4}
              style={{
                border: '1px solid #cdd5e4',
                borderRadius: 4,
                padding: '4px 12px',
                background: '#ffffff',
              }}
            >
              <FilterOutlined style={{ fontSize: 16, color: '#595959' }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                {text.filters}
              </span>
            </Flex>
            <Space size={8}>
              <Button type="default">{text.button}</Button>
              <Button
                type="default"
                icon={<MoreHorizontalOutlined />}
                style={{ padding: '6px 12px' }}
              />
              <Button type="default" icon={<SyncOutlined />} style={{ padding: '6px 12px' }} />
            </Space>
          </Flex>
        }
      />
    );
  }

  return (
    <PageHeader
      ghost={false}
      style={{
        width: '100%',
        maxWidth: 1242,
        background: '#fbfcfe',
        padding: '24px 32px 8px',
      }}
      title={
        <Space size={8} align="center">
          <span
            style={
              {
                fontSize: 20,
                fontWeight: 500,
                lineHeight: '28px',
                color: '#132039',
              } as CSSProperties
            }
          >
            {text.pageTitle}
          </span>
          <Divider type="vertical" style={{ height: 16, margin: 0, borderColor: '#e2e8f3' }} />
          <DocumentOutlined style={{ fontSize: 16, color: '#132039' }} />
        </Space>
      }
    />
  );
}

const TYPE_OPTIONS: { value: PageHeaderType; label: string }[] = [
  { value: '带tab', label: '带tab' },
  { value: '带返回', label: '带返回' },
  { value: '默认', label: '默认' },
];

const App: React.FC = () => {
  const [headerType, setHeaderType] = useState<PageHeaderType>('默认');
  /** Figma 属性名 `w/toolbar` */
  const [wToolbar, setWToolbar] = useState(true);

  const [pageTitle, setPageTitle] = useState('PAGE TITLE');
  const [search, setSearch] = useState('Search');
  const [filters, setFilters] = useState('Filters');
  const [button, setButton] = useState('Button');
  const [tab001, setTab001] = useState('Tab001');
  const [tab002, setTab002] = useState('Tab002');
  const [tab003, setTab003] = useState('Tab003');
  const [tab004, setTab004] = useState('Tab004');
  const [status, setStatus] = useState('status');

  const text: TextFields = useMemo(
    () => ({
      pageTitle,
      search,
      filters,
      button,
      tab001,
      tab002,
      tab003,
      tab004,
      status,
    }),
    [pageTitle, search, filters, button, tab001, tab002, tab003, tab004, status]
  );

  const layout = useMemo(
    () => buildPageHeaderLayout(headerType, wToolbar, text),
    [headerType, wToolbar, text]
  );

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 420,
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
          minHeight: 360,
          padding: 16,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
          overflow: 'auto',
        }}
      >
        <FigmaPageHeaderExample layout={layout} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          PageHeader
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              value={headerType}
              onChange={v => setHeaderType(v as PageHeaderType)}
              options={TYPE_OPTIONS}
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>w/toolbar</span>
            <Switch checked={wToolbar} onChange={setWToolbar} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>PAGE TITLE</div>
            <Input value={pageTitle} onChange={e => setPageTitle(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Search</div>
            <Input value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Filters</div>
            <Input value={filters} onChange={e => setFilters(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Button</div>
            <Input value={button} onChange={e => setButton(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Tab001</div>
            <Input value={tab001} onChange={e => setTab001(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Tab002</div>
            <Input value={tab002} onChange={e => setTab002(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Tab003</div>
            <Input value={tab003} onChange={e => setTab003(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Tab004</div>
            <Input value={tab004} onChange={e => setTab004(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Input value={status} onChange={e => setStatus(e.target.value)} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
