import {
  DownOutlined,
  FilterOutlined,
  MoreHorizontalOutlined,
  SearchOutlined,
  SyncOutlined,
} from '@oceanbase/icons';
import { Button, Col, Flex, Input, Row, Space, Switch, Typography } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';
import { PageContainer } from '@oceanbase/ui';

/**
 * Playground：与 `../index.figma.tsx` 单条 `figma.connect` 的 props / example 对齐。
 * `example`：`({ layout }) => layout`
 */

type TextFields = {
  title: string;
  button: string;
  tab001: string;
  tab002: string;
  tab004: string;
  search: string;
  status: string;
  filters: string;
};

/** 与 figma.connect 的 example 一致 */
function FigmaPageContainerExample(props: { layout: React.ReactNode }) {
  const { layout } = props;
  return layout;
}

function buildPageContainerLayout(
  collapsible: boolean,
  tabs: boolean,
  fliters: boolean,
  text: TextFields
): React.ReactNode {
  if (collapsible) {
    if (!tabs) {
      if (!fliters) {
        return (
          <PageContainer
            ghost={false}
            style={{
              width: 1204,
              minHeight: 720,
              background: '#ffffff',
              border: '1px solid #e2e8f3',
              borderRadius: 8,
            }}
            header={{
              title: (
                <Flex align="center" gap={8} style={{ width: '100%' }}>
                  <DownOutlined style={{ fontSize: 16, color: '#132039' }} />
                  <span
                    style={
                      {
                        flex: 1,
                        fontSize: 16,
                        fontWeight: 500,
                        color: '#132039',
                        lineHeight: '24px',
                      } as CSSProperties
                    }
                  >
                    {text.title}
                  </span>
                </Flex>
              ),
              extra: (
                <Space size={8}>
                  <Button type="primary">{text.button}</Button>
                  <Button type="default" color="primary" variant="outlined">
                    {text.button}
                  </Button>
                  <Button type="default">{text.button}</Button>
                  <Button type="default" icon={<MoreHorizontalOutlined />} />
                </Space>
              ),
            }}
          >
            <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
          </PageContainer>
        );
      }
      return (
        <PageContainer
          ghost={false}
          style={{
            width: 1204,
            minHeight: 720,
            background: '#ffffff',
            border: '1px solid #e2e8f3',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
        </PageContainer>
      );
    }
    if (!fliters) {
      return (
        <PageContainer
          ghost={false}
          style={{
            width: 1204,
            minHeight: 720,
            background: '#ffffff',
            border: '1px solid #e2e8f3',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
        </PageContainer>
      );
    }
    return (
      <PageContainer
        ghost={false}
        style={{
          width: 1204,
          minHeight: 720,
          background: '#ffffff',
          border: '1px solid #e2e8f3',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
      </PageContainer>
    );
  }

  if (!tabs) {
    if (!fliters) {
      return (
        <PageContainer
          ghost={false}
          style={{
            width: 1204,
            minHeight: 720,
            background: '#ffffff',
            border: '1px solid #e2e8f3',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
        </PageContainer>
      );
    }
    return (
      <PageContainer
        ghost={false}
        style={{
          width: 1204,
          minHeight: 720,
          background: '#ffffff',
          border: '1px solid #e2e8f3',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
      </PageContainer>
    );
  }
  if (!fliters) {
    return (
      <PageContainer
        ghost={false}
        style={{
          width: 1204,
          minHeight: 720,
          background: '#ffffff',
          border: '1px solid #e2e8f3',
          borderRadius: 8,
          overflow: 'hidden',
        }}
        tabList={[
          { key: '1', tab: text.tab001 },
          { key: '2', tab: text.tab002 },
          { key: '3', tab: text.tab004 },
        ]}
        tabProps={{ defaultActiveKey: '2' }}
        tabBarExtraContent={
          <Space size={8}>
            <Button type="default">{text.button}</Button>
            <Button type="default" icon={<MoreHorizontalOutlined />} />
          </Space>
        }
      >
        <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
      </PageContainer>
    );
  }

  return (
    <PageContainer
      ghost={false}
      style={{
        width: 1204,
        minHeight: 720,
        background: '#ffffff',
        border: '1px solid #e2e8f3',
        borderRadius: 8,
        overflow: 'hidden',
      }}
      tabList={[
        { key: '1', tab: text.tab001 },
        { key: '2', tab: text.tab002 },
        { key: '3', tab: text.tab004 },
      ]}
      tabProps={{ defaultActiveKey: '2' }}
    >
      <Flex vertical style={{ width: '100%' }}>
        <Flex
          justify="space-between"
          align="center"
          style={{ padding: '0 24px', minHeight: 28, width: '100%' }}
        >
          <Space size={8} align="center">
            <Input
              placeholder={text.search}
              prefix={<SearchOutlined style={{ color: '#8c8c8c', fontSize: 14 }} />}
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
              <Flex align="center" style={{ display: 'inline-flex' }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#1677ff',
                    marginRight: -2,
                  }}
                />
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#52c41a',
                    marginRight: -2,
                  }}
                />
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#faad14',
                    marginRight: -2,
                  }}
                />
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#ff4d4f',
                    marginRight: -2,
                  }}
                />
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#722ed1',
                  }}
                />
              </Flex>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>{text.status}</span>
              <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
            </Flex>
            <Flex
              align="center"
              gap={8}
              style={{
                border: '1px solid #cdd5e4',
                borderRadius: 4,
                padding: '4px 12px',
                background: '#ffffff',
              }}
            >
              <FilterOutlined style={{ color: '#595959', fontSize: 14 }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                {text.filters}
              </span>
            </Flex>
          </Space>
          <Space size={8}>
            <Button type="default">{text.button}</Button>
            <Button type="default" icon={<MoreHorizontalOutlined />} />
            <Button type="default" icon={<SyncOutlined />} />
          </Space>
        </Flex>
        <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
      </Flex>
    </PageContainer>
  );
}

const App: React.FC = () => {
  /** Figma `collapsible` 键 True */
  const [collapsibleTrue, setCollapsibleTrue] = useState(true);
  /** Figma `tabs`：false / true */
  const [tabs, setTabs] = useState(false);
  /** Figma `fliters`：false / true（设计稿拼写） */
  const [fliters, setFliters] = useState(false);

  const [title, setTitle] = useState('Title');
  const [button, setButton] = useState('Button');
  const [tab001, setTab001] = useState('Tab001');
  const [tab002, setTab002] = useState('Tab002');
  const [tab004, setTab004] = useState('Tab004');
  const [search, setSearch] = useState('Search');
  const [status, setStatus] = useState('Status');
  const [filters, setFilters] = useState('Filters');

  const text: TextFields = useMemo(
    () => ({
      title,
      button,
      tab001,
      tab002,
      tab004,
      search,
      status,
      filters,
    }),
    [title, button, tab001, tab002, tab004, search, status, filters]
  );

  const layout = useMemo(
    () => buildPageContainerLayout(collapsibleTrue, tabs, fliters, text),
    [collapsibleTrue, tabs, fliters, text]
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
        <FigmaPageContainerExample layout={layout} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          PageContainer
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>collapsible</span>
            <Switch checked={collapsibleTrue} onChange={setCollapsibleTrue} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>tabs</span>
            <Switch checked={tabs} onChange={setTabs} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>fliters</span>
            <Switch checked={fliters} onChange={setFliters} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Title</div>
            <Input value={title} onChange={e => setTitle(e.target.value)} />
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
            <div style={{ marginBottom: 6, fontSize: 12 }}>Tab004</div>
            <Input value={tab004} onChange={e => setTab004(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Search</div>
            <Input value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Status</div>
            <Input value={status} onChange={e => setStatus(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Filters</div>
            <Input value={filters} onChange={e => setFilters(e.target.value)} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
