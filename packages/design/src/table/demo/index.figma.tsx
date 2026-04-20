import {
  Col,
  Input,
  Row,
  Segmented,
  Select,
  Space,
  Switch,
  Table,
  Typography,
} from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';
import { buildFigmaTableCell, type ElementType } from './table-cell-builders.figma';

/**
 * 与 `../index.figma.tsx` FIGMA_OCEANBASE_TABLECELL 的 `props` / `example` 一致：
 * - `align` ← position（left | center | right）
 * - `cellRender` ← element（Default 时 unfold × checkbox × icon × desc + Title / Desc；映射为列 `render` 函数）
 * 右侧为 Figma 同名属性面板。
 */

type Align = 'left' | 'center' | 'right';

type CellRow = { key: string; v: string };

/** 与 `figma.connect` 中列上 `render: cellRender` 等价；演示侧用 ReactNode + 包一层 render。 */
function TableCellExample(props: { align: Align; cell: React.ReactNode }) {
  const columns: ColumnsType<CellRow> = useMemo(
    () => [
      {
        title: '列标题',
        dataIndex: 'v',
        key: 'v',
        align: props.align,
        render: () => props.cell,
      },
    ],
    [props.align, props.cell]
  );

  return (
    <Table<CellRow> dataSource={[{ key: 'r1', v: 'x' }]} pagination={false} columns={columns} />
  );
}

const wrapperStyle: CSSProperties = {
  minHeight: 420,
  border: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
  borderRadius: 8,
  overflow: 'hidden',
  background: 'var(--ant-color-bg-container, #fff)',
};

const App: React.FC = () => {
  const [align, setAlign] = useState<Align>('left');
  const [element, setElement] = useState<ElementType>('Default');
  const [unfold, setUnfold] = useState(true);
  const [checkbox, setCheckbox] = useState(true);
  const [icon, setIcon] = useState(true);
  const [desc, setDesc] = useState(true);
  const [titleText, setTitleText] = useState('Title');
  const [descText, setDescText] = useState('Desc');

  const cell = useMemo(
    () => buildFigmaTableCell(element, unfold, checkbox, icon, desc, titleText, descText),
    [element, unfold, checkbox, icon, desc, titleText, descText]
  );

  const isDefault = element === 'Default';

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
        <TableCellExample align={align} cell={cell} />
      </Col>
      <Col
        flex="0 0 320px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text strong style={{ fontSize: 13 }}>
          FIGMA_OCEANBASE_TABLECELL
        </Typography.Text>
        <Typography.Paragraph
          type="secondary"
          style={{ fontSize: 12, marginBottom: 12, marginTop: 4 }}
        >
          Default 为 unfold × checkbox × icon × desc 线性组合，开关与预览一致；完整嵌套见{' '}
          <Typography.Text code>index.figma.tsx</Typography.Text>。
        </Typography.Paragraph>
        <Space direction="vertical" size={14} style={{ width: '100%' }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>element</div>
            <Select
              style={{ width: '100%' }}
              value={element}
              onChange={v => setElement(v as ElementType)}
              options={[
                { value: 'Default', label: 'Default' },
                { value: 'Tag', label: 'Tag' },
                { value: 'Status', label: 'Status' },
                { value: 'Process', label: 'Process' },
                { value: 'Actions', label: 'Actions' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>position</div>
            <Segmented
              block
              value={align}
              onChange={v => setAlign(v as Align)}
              options={[
                { value: 'left', label: 'left' },
                { value: 'center', label: 'center' },
                { value: 'right', label: 'right' },
              ]}
            />
          </div>
          {isDefault ? (
            <>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 12 }}>unfold</span>
                <Switch checked={unfold} onChange={setUnfold} />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 12 }}>checkbox</span>
                <Switch checked={checkbox} onChange={setCheckbox} />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 12 }}>icon</span>
                <Switch checked={icon} onChange={setIcon} />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 12 }}>desc</span>
                <Switch checked={desc} onChange={setDesc} />
              </div>
            </>
          ) : (
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              非 Default 时无 unfold / checkbox / icon / desc 变体（与映射一致）。
            </Typography.Text>
          )}
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Title</div>
            <Input value={titleText} onChange={e => setTitleText(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Desc</div>
            <Input value={descText} onChange={e => setDescText(e.target.value)} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
