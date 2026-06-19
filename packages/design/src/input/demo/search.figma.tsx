import { SearchOutlined } from '@oceanbase/icons';
import { Col, Input, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `Input.Search` 的 `figma.connect`（FIGMA_OCEANBASE_INPUT_SEARCH）一致。
 * `searchButton` 的 `ture` 为设计稿拼写，语义为 true（带 enterButton）。
 */

type SearchButton = 'ture' | 'false';

function FigmaInputSearchExample(props: { root: React.ReactNode }) {
  return <>{props.root}</>;
}

function buildInputSearchRoot(
  placeholder: boolean,
  searchButton: SearchButton,
  allowClear: boolean,
  text: string
) {
  const style = { width: 320 };
  const prefix = <SearchOutlined />;
  const key = `${placeholder}-${searchButton}-${allowClear}-${text}`;

  if (placeholder) {
    if (searchButton === 'ture') {
      if (allowClear) {
        return (
          <Input.Search
            key={key}
            placeholder="Search"
            prefix={prefix}
            enterButton
            allowClear
            style={style}
          />
        );
      }
      return (
        <Input.Search key={key} placeholder="Search" prefix={prefix} enterButton style={style} />
      );
    }
    if (allowClear) {
      return (
        <Input.Search key={key} placeholder="Search" prefix={prefix} allowClear style={style} />
      );
    }
    return <Input.Search key={key} placeholder="Search" prefix={prefix} style={style} />;
  }
  if (searchButton === 'ture') {
    if (allowClear) {
      return (
        <Input.Search
          key={key}
          defaultValue={text}
          prefix={prefix}
          enterButton
          allowClear
          style={style}
        />
      );
    }
    return <Input.Search key={key} defaultValue={text} prefix={prefix} enterButton style={style} />;
  }
  if (allowClear) {
    return <Input.Search key={key} defaultValue={text} prefix={prefix} allowClear style={style} />;
  }
  return <Input.Search key={key} defaultValue={text} prefix={prefix} style={style} />;
}

const App: React.FC = () => {
  const [placeholder, setPlaceholder] = useState(true);
  const [searchButton, setSearchButton] = useState<SearchButton>('ture');
  const [allowClear, setAllowClear] = useState(true);
  const [text, setText] = useState('text');

  const root = useMemo(
    () => buildInputSearchRoot(placeholder, searchButton, allowClear, text),
    [placeholder, searchButton, allowClear, text]
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
        <FigmaInputSearchExample root={root} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Input.Search
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>placeholder</span>
            <Switch checked={placeholder} onChange={setPlaceholder} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>searchButton</div>
            <Select
              style={{ width: '100%' }}
              value={searchButton}
              onChange={v => setSearchButton(v as SearchButton)}
              options={[
                { value: 'ture', label: 'ture（设计稿拼写）' },
                { value: 'false', label: 'false' },
              ]}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>allowClear</span>
            <Switch checked={allowClear} onChange={setAllowClear} />
          </div>
          {!placeholder && (
            <div>
              <div style={{ marginBottom: 6, fontSize: 12 }}>text（figma.string）</div>
              <Input value={text} onChange={e => setText(e.target.value)} />
            </div>
          )}
        </Space>
      </Col>
    </Row>
  );
};

export default App;
