import {
  FilterOutlined,
  MoreHorizontalOutlined,
  SearchOutlined,
  SyncOutlined,
} from '@oceanbase/icons';
import {
  Button,
  Col,
  Filter,
  Flex,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useState } from 'react';
import { ListToolBar } from '@oceanbase/ui';

/**
 * Playground：与 `../index.figma.tsx` 中单条 `figma.connect(ListToolBar)` 的 props / example 一致。
 * 嵌套维度：single line × w/search × w/more filters × w/ action group；文案与 `figma.string` 对齐。
 */

const ROW: CSSProperties = { width: 1000, minHeight: 28 };

const STATUS_FILTER_OPTIONS = [
  { value: 's1', label: 'S1', color: '#1677ff' },
  { value: 's2', label: 'S2', color: '#52c41a' },
  { value: 's3', label: 'S3', color: '#faad14' },
  { value: 's4', label: 'S4', color: '#ff4d4f' },
  { value: 's5', label: 'S5', color: '#722ed1' },
];

function StatusDropdown({ statusText }: { statusText: string }) {
  const [statusValues, setStatusValues] = useState<string[]>(['s1', 's2', 's3', 's4']);
  return (
    <Filter.Checkbox
      label={statusText}
      value={statusValues}
      onChange={setStatusValues}
      options={STATUS_FILTER_OPTIONS}
      bordered
    />
  );
}

function FiltersChip({ filtersText }: { filtersText: string }) {
  return (
    <Filter.Select
      label={filtersText}
      icon={<FilterOutlined style={{ color: '#595959', fontSize: 14 }} />}
      bordered
      options={[
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
      ]}
    />
  );
}

function SearchField({ placeholder }: { placeholder: string }) {
  return (
    <Input
      placeholder={placeholder}
      prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
      style={{ width: 264 }}
    />
  );
}

function ActionGroup({ buttonText }: { buttonText: string }) {
  return (
    <Space size={8}>
      <Button type="default" size="middle">
        {buttonText}
      </Button>
      <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
      <Button type="default" size="middle" icon={<SyncOutlined />} />
    </Space>
  );
}

type FigmaToolbarVariant = {
  singleLineYes: boolean;
  wSearch: boolean;
  wMoreFilters: boolean;
  wActionGroup: boolean;
  search: string;
  status: string;
  filters: string;
  button: string;
};

/** 与 `index.figma.tsx` 中 `toolbar` 嵌套 props 各分支 JSX 一致（字面量由 connect 映射） */
function FigmaDataToolbarExample(p: FigmaToolbarVariant) {
  const { singleLineYes, wSearch, wMoreFilters, wActionGroup, search, status, filters, button } = p;

  const key = `${singleLineYes ? 'y' : 'n'}-${wSearch ? 1 : 0}-${wMoreFilters ? 1 : 0}-${wActionGroup ? 1 : 0}`;

  let toolbar: React.ReactNode = null;
  switch (key) {
    case 'y-1-1-1':
      toolbar = (
        <Flex justify="space-between" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <SearchField placeholder={search} />
            <StatusDropdown statusText={status} />
            <FiltersChip filtersText={filters} />
          </Space>
          <ActionGroup buttonText={button} />
        </Flex>
      );
      break;
    case 'y-1-1-0':
      toolbar = (
        <Flex justify="space-between" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <SearchField placeholder={search} />
            <StatusDropdown statusText={status} />
            <FiltersChip filtersText={filters} />
          </Space>
        </Flex>
      );
      break;
    case 'y-1-0-1':
      toolbar = (
        <Flex justify="space-between" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <SearchField placeholder={search} />
            <StatusDropdown statusText={status} />
          </Space>
          <ActionGroup buttonText={button} />
        </Flex>
      );
      break;
    case 'y-1-0-0':
      toolbar = (
        <Flex justify="space-between" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <SearchField placeholder={search} />
            <StatusDropdown statusText={status} />
          </Space>
        </Flex>
      );
      break;
    case 'y-0-1-1':
      toolbar = (
        <Flex justify="space-between" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <StatusDropdown statusText={status} />
            <FiltersChip filtersText={filters} />
          </Space>
          <ActionGroup buttonText={button} />
        </Flex>
      );
      break;
    case 'y-0-1-0':
      toolbar = (
        <Flex justify="space-between" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <StatusDropdown statusText={status} />
            <FiltersChip filtersText={filters} />
          </Space>
        </Flex>
      );
      break;
    case 'y-0-0-1':
      toolbar = (
        <Flex justify="space-between" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <StatusDropdown statusText={status} />
          </Space>
          <ActionGroup buttonText={button} />
        </Flex>
      );
      break;
    case 'y-0-0-0':
      toolbar = (
        <Flex justify="space-between" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <StatusDropdown statusText={status} />
          </Space>
        </Flex>
      );
      break;
    case 'n-1-1-1':
      toolbar = (
        <Flex justify="flex-end" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <SearchField placeholder={search} />
            <FiltersChip filtersText={filters} />
            <Space size={8}>
              <Button type="default" size="middle">
                {button}
              </Button>
              <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
              <Button type="default" size="middle" icon={<SyncOutlined />} />
            </Space>
          </Space>
        </Flex>
      );
      break;
    case 'n-1-1-0':
      toolbar = (
        <Flex justify="flex-end" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <SearchField placeholder={search} />
            <FiltersChip filtersText={filters} />
          </Space>
        </Flex>
      );
      break;
    case 'n-1-0-1':
      toolbar = (
        <Flex justify="flex-end" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <SearchField placeholder={search} />
            <Space size={8}>
              <Button type="default" size="middle">
                {button}
              </Button>
              <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
              <Button type="default" size="middle" icon={<SyncOutlined />} />
            </Space>
          </Space>
        </Flex>
      );
      break;
    case 'n-1-0-0':
      toolbar = (
        <Flex justify="flex-end" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <SearchField placeholder={search} />
          </Space>
        </Flex>
      );
      break;
    case 'n-0-1-1':
      toolbar = (
        <Flex justify="flex-end" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <FiltersChip filtersText={filters} />
            <Space size={8}>
              <Button type="default" size="middle">
                {button}
              </Button>
              <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
              <Button type="default" size="middle" icon={<SyncOutlined />} />
            </Space>
          </Space>
        </Flex>
      );
      break;
    case 'n-0-1-0':
      toolbar = (
        <Flex justify="flex-end" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <FiltersChip filtersText={filters} />
          </Space>
        </Flex>
      );
      break;
    case 'n-0-0-1':
      toolbar = (
        <Flex justify="flex-end" align="center" gap={8} style={ROW}>
          <Space size={8} align="center">
            <Space size={8}>
              <Button type="default" size="middle">
                {button}
              </Button>
              <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
              <Button type="default" size="middle" icon={<SyncOutlined />} />
            </Space>
          </Space>
        </Flex>
      );
      break;
    case 'n-0-0-0':
      toolbar = (
        <Flex justify="flex-end" align="center" gap={8} style={ROW}>
          <span style={{ fontSize: 13, color: '#132039' }}> </span>
        </Flex>
      );
      break;
    default:
      toolbar = null;
  }

  return <ListToolBar style={{ width: 1000, minHeight: 28 }} filter={toolbar} />;
}

const App: React.FC = () => {
  const [singleLineYes, setSingleLineYes] = React.useState(true);
  const [wSearch, setWSearch] = React.useState(true);
  const [wMoreFilters, setWMoreFilters] = React.useState(true);
  const [wActionGroup, setWActionGroup] = React.useState(true);
  const [search, setSearch] = React.useState('Search');
  const [status, setStatus] = React.useState('Status');
  const [filters, setFilters] = React.useState('Filters');
  const [button, setButton] = React.useState('Button');

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
          overflow: 'auto',
        }}
      >
        <FigmaDataToolbarExample
          singleLineYes={singleLineYes}
          wSearch={wSearch}
          wMoreFilters={wMoreFilters}
          wActionGroup={wActionGroup}
          search={search}
          status={status}
          filters={filters}
          button={button}
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
          DataToolBar
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>single line</div>
            <Select
              style={{ width: '100%' }}
              value={singleLineYes ? 'yes' : 'no'}
              onChange={v => setSingleLineYes(v === 'yes')}
              options={[
                { value: 'yes', label: 'yes' },
                { value: 'no', label: 'no' },
              ]}
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
            <span style={{ fontSize: 12 }}>w/search</span>
            <Switch checked={wSearch} onChange={setWSearch} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>w/more filters</span>
            <Switch checked={wMoreFilters} onChange={setWMoreFilters} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>w/ action group</span>
            <Switch checked={wActionGroup} onChange={setWActionGroup} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Search（figma.string）</div>
            <Input
              style={{ width: '100%' }}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Status（figma.string）</div>
            <Input
              style={{ width: '100%' }}
              value={status}
              onChange={e => setStatus(e.target.value)}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Filters（figma.string）</div>
            <Input
              style={{ width: '100%' }}
              value={filters}
              onChange={e => setFilters(e.target.value)}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Button（figma.string）</div>
            <Input
              style={{ width: '100%' }}
              value={button}
              onChange={e => setButton(e.target.value)}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
