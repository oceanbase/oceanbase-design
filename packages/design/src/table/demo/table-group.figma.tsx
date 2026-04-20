import {
  Button,
  Col,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Table,
  Tag,
  Typography,
} from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * 与 `../index.figma.tsx` FIGMA_OCEANBASE_TABLEGROUP 一致：
 * - `body` ← type（表头 | 单元格 | 翻页器 | 翻页器2）
 * - 单元格列内 Title / Desc 为 figma.string
 * - `example: ({ body }) => <div>{body}</div>`
 */

type BodyType = '表头' | '单元格' | '翻页器' | '翻页器2';

type RowPlain = { plain: string; key: string };

function TableGroupExample(props: { body: React.ReactNode }) {
  return (
    <div style={{ background: '#ffffff', padding: 0, boxSizing: 'border-box' as const }}>
      {props.body}
    </div>
  );
}

function buildColumnsForCellBody(titleText: string, descText: string): ColumnsType<RowPlain> {
  return [
    {
      key: 'c1',
      render: () => (
        <Space direction="vertical" size={0}>
          <Typography.Text>{titleText}</Typography.Text>
          <Typography.Text type="secondary">{descText}</Typography.Text>
        </Space>
      ),
    },
    {
      key: 'c2',
      render: () => (
        <Space align="start">
          <Space direction="vertical" size={0}>
            <Typography.Text>{titleText}</Typography.Text>
            <Typography.Text type="secondary">{descText}</Typography.Text>
          </Space>
        </Space>
      ),
    },
    {
      key: 'c3',
      dataIndex: 'plain',
      render: (t: string) => t,
    },
    {
      key: 'c4',
      align: 'center',
      render: () => (
        <Space size={4}>
          <Tag color="error">tag</Tag>
          <Tag color="success">tag</Tag>
          <Tag color="processing">tag</Tag>
        </Space>
      ),
    },
    {
      key: 'c5',
      align: 'right',
      render: () => (
        <Space>
          <Button type="primary" ghost>
            Button
          </Button>
          <Button>Button</Button>
          <Button icon={<Typography.Text>⋯</Typography.Text>} />
        </Space>
      ),
    },
  ];
}

const wrapperStyle: CSSProperties = {
  minHeight: 420,
  border: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
  borderRadius: 8,
  overflow: 'hidden',
  background: 'var(--ant-color-bg-container, #fff)',
};

const App: React.FC = () => {
  const [bodyType, setBodyType] = useState<BodyType>('表头');
  const [titleText, setTitleText] = useState('Title');
  const [descText, setDescText] = useState('Desc');

  const [pgTotal50, setPgTotal50] = useState(50);
  const [pgCurrent1, setPgCurrent1] = useState(1);
  const [pgSize1, setPgSize1] = useState(10);

  const [pgTotal1000, setPgTotal1000] = useState(1000);
  const [pgCurrent7, setPgCurrent7] = useState(7);
  const [pgSize2, setPgSize2] = useState(10);

  const body = useMemo(() => {
    switch (bodyType) {
      case '表头':
        return (
          <Table
            pagination={false}
            columns={[
              { title: 'Title', dataIndex: 'c1', key: 'c1' },
              { title: 'Title', dataIndex: 'c2', key: 'c2', align: 'center' },
              { title: 'Title', dataIndex: 'c3', key: 'c3', align: 'center' },
              { title: 'Title', dataIndex: 'c4', key: 'c4', align: 'center' },
              { title: 'Title', dataIndex: 'c5', key: 'c5', align: 'right' },
            ]}
            dataSource={[]}
          />
        );
      case '单元格':
        return (
          <Table<RowPlain>
            pagination={false}
            showHeader={false}
            columns={buildColumnsForCellBody(titleText, descText)}
            dataSource={[{ plain: 'Title', key: 'row' }]}
          />
        );
      case '翻页器':
        return (
          <Table
            columns={[{ title: 'Title', dataIndex: 'a', key: 'a' }]}
            dataSource={[{ key: '1', a: '—' }]}
            pagination={{
              total: pgTotal50,
              current: pgCurrent1,
              pageSize: pgSize1,
              showSizeChanger: true,
              showTotal: total => 'Total ' + total + ' items',
              pageSizeOptions: ['10', '20', '50'],
            }}
          />
        );
      case '翻页器2':
        return (
          <Table
            columns={[{ title: 'Title', dataIndex: 'a', key: 'a' }]}
            dataSource={[{ key: '1', a: '—' }]}
            pagination={{
              total: pgTotal1000,
              current: pgCurrent7,
              pageSize: pgSize2,
              showSizeChanger: true,
              showTotal: total => 'Total ' + total + ' items',
              pageSizeOptions: ['10', '20', '50'],
            }}
          />
        );
      default:
        return null;
    }
  }, [
    bodyType,
    titleText,
    descText,
    pgTotal50,
    pgCurrent1,
    pgSize1,
    pgTotal1000,
    pgCurrent7,
    pgSize2,
  ]);

  const showTitleDesc = bodyType === '单元格';
  const showPg1 = bodyType === '翻页器';
  const showPg2 = bodyType === '翻页器2';

  return (
    <Row wrap={false} gutter={0} style={wrapperStyle}>
      <Col
        flex="1 1 auto"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center',
          minHeight: 320,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
          overflow: 'auto',
        }}
      >
        <TableGroupExample body={body} />
      </Col>
      <Col
        flex="0 0 320px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text strong style={{ fontSize: 13 }}>
          FIGMA_OCEANBASE_TABLEGROUP
        </Typography.Text>
        <Typography.Paragraph
          type="secondary"
          style={{ fontSize: 12, marginBottom: 12, marginTop: 4 }}
        >
          `body` 由 type 枚举切换；单元格列内文案绑定 figma.string。
        </Typography.Paragraph>
        <Space direction="vertical" size={14} style={{ width: '100%' }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type → body</div>
            <Select
              style={{ width: '100%' }}
              value={bodyType}
              onChange={v => setBodyType(v as BodyType)}
              options={[
                { value: '表头', label: '表头' },
                { value: '单元格', label: '单元格' },
                { value: '翻页器', label: '翻页器' },
                { value: '翻页器2', label: '翻页器2' },
              ]}
            />
          </div>
          {showTitleDesc ? (
            <>
              <div>
                <div style={{ marginBottom: 6, fontSize: 12 }}>Title（figma.string）</div>
                <Input value={titleText} onChange={e => setTitleText(e.target.value)} />
              </div>
              <div>
                <div style={{ marginBottom: 6, fontSize: 12 }}>Desc（figma.string）</div>
                <Input value={descText} onChange={e => setDescText(e.target.value)} />
              </div>
            </>
          ) : (
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              当前 type 不使用 Title/Desc 绑定（与映射一致）。
            </Typography.Text>
          )}
          {showPg1 ? (
            <Space direction="vertical" size={8} style={{ width: '100%' }}>
              <Typography.Text style={{ fontSize: 12 }}>
                翻页器（默认 total=50, current=1）
              </Typography.Text>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, width: 52 }}>total</span>
                <InputNumber
                  min={1}
                  style={{ flex: 1 }}
                  value={pgTotal50}
                  onChange={v => setPgTotal50(typeof v === 'number' ? v : Number(v) || 50)}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, width: 52 }}>current</span>
                <InputNumber
                  min={1}
                  style={{ flex: 1 }}
                  value={pgCurrent1}
                  onChange={v => setPgCurrent1(typeof v === 'number' ? v : Number(v) || 1)}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, width: 52 }}>pageSize</span>
                <InputNumber
                  min={1}
                  style={{ flex: 1 }}
                  value={pgSize1}
                  onChange={v => setPgSize1(typeof v === 'number' ? v : Number(v) || 10)}
                />
              </div>
            </Space>
          ) : null}
          {showPg2 ? (
            <Space direction="vertical" size={8} style={{ width: '100%' }}>
              <Typography.Text style={{ fontSize: 12 }}>
                翻页器2（默认 total=1000, current=7）
              </Typography.Text>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, width: 52 }}>total</span>
                <InputNumber
                  min={1}
                  style={{ flex: 1 }}
                  value={pgTotal1000}
                  onChange={v => setPgTotal1000(typeof v === 'number' ? v : Number(v) || 1000)}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, width: 52 }}>current</span>
                <InputNumber
                  min={1}
                  style={{ flex: 1 }}
                  value={pgCurrent7}
                  onChange={v => setPgCurrent7(typeof v === 'number' ? v : Number(v) || 7)}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, width: 52 }}>pageSize</span>
                <InputNumber
                  min={1}
                  style={{ flex: 1 }}
                  value={pgSize2}
                  onChange={v => setPgSize2(typeof v === 'number' ? v : Number(v) || 10)}
                />
              </div>
            </Space>
          ) : null}
        </Space>
      </Col>
    </Row>
  );
};

export default App;
