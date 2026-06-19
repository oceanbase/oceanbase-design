/**
 * Playground：与 `../index.figma.tsx` 变体一致。
 * 预览 iframe 较窄时勿用固定 1204px 宽 + 父级 `overflow: hidden`，否则标题/Tabs 会被裁切；用 `width:100%` + `maxWidth` 与左栏 `minWidth:0` + 可滚动。
 */
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

/** 稿面：白底卡片、细边框（标题-only 变体）。用 100% + maxWidth，避免窄预览 iframe 内固定 1204px 被裁切看不见 */
const shellTitle: CSSProperties = {
  width: '100%',
  maxWidth: 1204,
  minHeight: 480,
  background: '#ffffff',
  border: '1px solid #e2e8f3',
  borderRadius: 8,
  boxSizing: 'border-box',
};

/** 稿面：Tab 变体带轻阴影、圆角 */
const shellTabs: CSSProperties = {
  width: '100%',
  maxWidth: 1204,
  minHeight: 480,
  background: '#ffffff',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(19, 32, 57, 0.08)',
  overflow: 'hidden',
  boxSizing: 'border-box',
};

const tabBarProps = {
  defaultActiveKey: '2' as const,
  tabBarStyle: {
    marginBottom: 0,
    paddingLeft: 24,
    paddingRight: 24,
  },
};

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

/**
 * 与 `index.figma.tsx` 的 `example: ({ layout }) => <div>{layout}</div>` 一致：外层包一层 div。
 * 预览区父级已设 `minWidth: 0`，此处不再加 `style`。
 */
function FigmaPageContainerExample(props: { layout: React.ReactNode }) {
  const { layout } = props;
  return <div>{layout}</div>;
}

/** 稿面：Tab 下筛选条左侧（Search / Status / Filters） */
function FilterToolbarLeft(props: { text: TextFields }) {
  const { text } = props;
  return (
    <Space size={8} align="center">
      <Input
        placeholder={text.search}
        prefix={<SearchOutlined style={{ color: '#8c8c8c', fontSize: 14 }} />}
        style={{ width: 264 }}
      />
      <Flex
        align="center"
        gap={6}
        style={{
          border: '1px solid #cdd5e4',
          borderRadius: 8,
          padding: '0 12px',
          minHeight: 32,
          background: '#ffffff',
        }}
      >
        <Flex align="center" gap={4}>
          {[0, 1, 2, 3].map(i => (
            <span
              key={i}
              style={{
                width: 18,
                height: 6,
                borderRadius: 3,
                background: '#e8ecf4',
                opacity: 0.7,
              }}
            />
          ))}
        </Flex>
        <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>{text.status}</span>
        <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
      </Flex>
      <Flex
        align="center"
        gap={8}
        style={{
          border: '1px solid #cdd5e4',
          borderRadius: 8,
          padding: '0 12px',
          minHeight: 32,
          background: '#ffffff',
        }}
      >
        <FilterOutlined style={{ color: '#595959', fontSize: 14 }} />
        <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>{text.filters}</span>
      </Flex>
    </Space>
  );
}

function buildPageContainerLayout(
  collapsible: boolean,
  tabs: boolean,
  fliters: boolean,
  text: TextFields
): React.ReactNode {
  const tabList = [
    { key: '1', tab: text.tab001 },
    { key: '2', tab: text.tab002 },
    { key: '3', tab: text.tab004 },
  ];

  /** collapsible + 仅标题区：主按钮 / 描边主色 / 文字按钮 / 更多 */
  const layoutCollapsibleTitleOnly = (
    <PageContainer
      ghost={false}
      style={shellTitle}
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
            <Button type="text">{text.button}</Button>
            <Button type="default" icon={<MoreHorizontalOutlined />} />
          </Space>
        ),
      }}
    >
      <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
    </PageContainer>
  );

  /** Tab + 右侧操作：描边主按钮 + 更多（稿面 Tab002 为激活） */
  const layoutTabsOnly = (
    <PageContainer
      ghost={false}
      style={shellTabs}
      tabList={tabList}
      tabProps={tabBarProps}
      tabBarExtraContent={
        <Space size={8}>
          <Button color="primary" variant="outlined">
            {text.button}
          </Button>
          <Button type="default" icon={<MoreHorizontalOutlined />} />
        </Space>
      }
    >
      <div style={{ flex: 1, minHeight: 400, width: '100%', background: '#ffffff' }} />
    </PageContainer>
  );

  /** Tab + 分隔线 + 筛选条 + 右侧操作 */
  const layoutTabsAndFilters = (
    <PageContainer ghost={false} style={shellTabs} tabList={tabList} tabProps={tabBarProps}>
      <Flex vertical style={{ width: '100%' }}>
        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={12}
          style={{
            padding: '12px 24px',
            width: '100%',
            borderTop: '1px solid #f0f0f0',
            background: '#ffffff',
          }}
        >
          <FilterToolbarLeft text={text} />
          <Space size={8}>
            <Button color="primary" variant="outlined">
              {text.button}
            </Button>
            <Button type="default" icon={<MoreHorizontalOutlined />} />
            <Button type="default" icon={<SyncOutlined />} />
          </Space>
        </Flex>
        <div style={{ flex: 1, minHeight: 360, width: '100%', background: '#ffffff' }} />
      </Flex>
    </PageContainer>
  );

  /** 仅筛选条（无 Tab、无 collapsible 标题） */
  const layoutFiltersOnly = (
    <PageContainer ghost={false} style={{ ...shellTitle, overflow: 'hidden' }}>
      <Flex vertical style={{ width: '100%' }}>
        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={12}
          style={{ padding: '12px 24px', width: '100%' }}
        >
          <FilterToolbarLeft text={text} />
          <Space size={8}>
            <Button color="primary" variant="outlined">
              {text.button}
            </Button>
            <Button type="default" icon={<MoreHorizontalOutlined />} />
            <Button type="default" icon={<SyncOutlined />} />
          </Space>
        </Flex>
        <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
      </Flex>
    </PageContainer>
  );

  /** collapsible 标题 + 下方筛选条（无 Tab） */
  const layoutTitleAndFilters = (
    <PageContainer
      ghost={false}
      style={{ ...shellTitle, overflow: 'hidden' }}
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
            <Button type="text">{text.button}</Button>
            <Button type="default" icon={<MoreHorizontalOutlined />} />
          </Space>
        ),
      }}
    >
      <Flex vertical style={{ width: '100%' }}>
        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={12}
          style={{
            padding: '12px 24px',
            width: '100%',
            borderTop: '1px solid #f0f0f0',
            background: '#ffffff',
          }}
        >
          <FilterToolbarLeft text={text} />
          <Space size={8}>
            <Button color="primary" variant="outlined">
              {text.button}
            </Button>
            <Button type="default" icon={<MoreHorizontalOutlined />} />
            <Button type="default" icon={<SyncOutlined />} />
          </Space>
        </Flex>
        <div style={{ flex: 1, minHeight: 360, width: '100%' }} />
      </Flex>
    </PageContainer>
  );

  const layoutEmptyShell = (
    <PageContainer ghost={false} style={{ ...shellTitle, overflow: 'hidden' }}>
      <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
    </PageContainer>
  );

  // —— 与 Figma 变体 collapsible × tabs × fliters 对齐；有 Tab 时优先走 Tab 稿面 ——
  if (tabs && fliters) {
    return layoutTabsAndFilters;
  }
  if (tabs && !fliters) {
    return layoutTabsOnly;
  }
  if (collapsible && !tabs && !fliters) {
    return layoutCollapsibleTitleOnly;
  }
  if (collapsible && !tabs && fliters) {
    return layoutTitleAndFilters;
  }
  if (!collapsible && !tabs && fliters) {
    return layoutFiltersOnly;
  }
  return layoutEmptyShell;
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
        background: 'var(--ant-color-bg-container, #fff)',
      }}
    >
      <Col
        flex="1 1 auto"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          minHeight: 360,
          minWidth: 0,
          padding: 16,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
          overflow: 'auto',
        }}
      >
        <FigmaPageContainerExample key={`${collapsibleTrue}-${tabs}-${fliters}`} layout={layout} />
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
