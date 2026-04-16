import { Col, Input, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';
import {
  buildFigmaOceanbaseFiltersChip,
  FigmaFiltersChipExample,
  type FigmaFilterStatus,
} from './filters-chip';

/**
 * Playground：与 `../index.figma.tsx` 中 `<FIGMA_OCEANBASE_FILTERS>` 的 `props` / `example` 一致
 *（`chip` 嵌套维度 status / mini / multiple / value / moreFilters / filterIcon 与 Title、Value 文案）。
 */

const App: React.FC = () => {
  const [status, setStatus] = useState<FigmaFilterStatus>('default');
  const [mini, setMini] = useState(true);
  const [multiple, setMultiple] = useState(true);
  const [value, setValue] = useState(true);
  const [moreFilters, setMoreFilters] = useState(true);
  const [filterIcon, setFilterIcon] = useState(true);
  const [title, setTitle] = useState('Title');
  const [valueText, setValueText] = useState('Value');

  const chip = useMemo(
    () =>
      buildFigmaOceanbaseFiltersChip({
        status,
        mini,
        multiple,
        value,
        moreFilters,
        filterIcon,
        title,
        valueText,
      }),
    [status, mini, multiple, value, moreFilters, filterIcon, title, valueText]
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
        <FigmaFiltersChipExample chip={chip} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Filters（chip）
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as FigmaFilterStatus)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'hover', label: 'hover' },
                { value: 'disabled', label: 'disabled' },
              ]}
            />
          </div>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>mini</span>
            <Switch checked={mini} onChange={setMini} />
          </label>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>multiple</span>
            <Switch checked={multiple} onChange={setMultiple} />
          </label>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>value</span>
            <Switch checked={value} onChange={setValue} />
          </label>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>moreFilters</span>
            <Switch checked={moreFilters} onChange={setMoreFilters} />
          </label>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>filterIcon</span>
            <Switch checked={filterIcon} onChange={setFilterIcon} />
          </label>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Title</div>
            <Input value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Value</div>
            <Input value={valueText} onChange={e => setValueText(e.target.value)} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
