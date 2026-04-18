import { DownOutlined } from '@ant-design/icons';
import {
  Checkbox,
  Col,
  Input,
  Row,
  Segmented,
  Space,
  Switch,
  Table,
  Tooltip,
  Typography,
} from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * TableHeader 演示：unfold × checkbox × info × Title 按语义线性组合，面板与预览一致。
 * 完整嵌套树见 `../index.figma.tsx` FIGMA_OCEANBASE_TABLEHEADER。
 */

type Align = 'left' | 'center' | 'right';

const downIcon = <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />;

/**
 * 表头内复选框：列开启 sorter 时整格可点排序，需在捕获阶段拦住冒泡，否则勾选会触发排序。
 */
function HeaderCheckbox() {
  const stop: React.MouseEventHandler = e => {
    e.stopPropagation();
  };
  return (
    <span
      role="presentation"
      style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 1 }}
      onClickCapture={stop}
      onMouseDownCapture={stop}
      onPointerDownCapture={stop}
    >
      <Checkbox onClick={stop} onMouseDown={stop} />
    </span>
  );
}

function renderTitleRendered(params: {
  unfold: boolean;
  checkbox: boolean;
  info: boolean;
  title: string;
}): React.ReactNode {
  const { unfold, checkbox, info, title } = params;

  const titleBlock = info ? (
    <Space size={4}>
      <span>{title}</span>
      <Tooltip title="帮助说明">
        <Typography.Link>ⓘ</Typography.Link>
      </Tooltip>
    </Space>
  ) : (
    <span>{title}</span>
  );

  return (
    <Space size={4}>
      {unfold ? downIcon : null}
      {checkbox ? <HeaderCheckbox /> : null}
      {titleBlock}
    </Space>
  );
}

function TableHeaderExample(props: {
  titleRendered: React.ReactNode;
  align: Align;
  sortEnabled: boolean;
}) {
  const columns = useMemo(
    () => [
      {
        title: props.titleRendered,
        dataIndex: 'field',
        key: 'field',
        align: props.align,
        sorter: props.sortEnabled,
      },
    ],
    [props.titleRendered, props.align, props.sortEnabled]
  );

  return <Table dataSource={[{ key: '1', field: '—' }]} pagination={false} columns={columns} />;
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
  const [sortEnabled, setSortEnabled] = useState(true);
  const [unfold, setUnfold] = useState(true);
  const [checkbox, setCheckbox] = useState(true);
  const [info, setInfo] = useState(true);
  const [titleText, setTitleText] = useState('Title');

  const titleRendered = useMemo(
    () => renderTitleRendered({ unfold, checkbox, info, title: titleText }),
    [unfold, checkbox, info, titleText]
  );

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
        <TableHeaderExample titleRendered={titleRendered} align={align} sortEnabled={sortEnabled} />
      </Col>
      <Col
        flex="0 0 320px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text strong style={{ fontSize: 13 }}>
          FIGMA_OCEANBASE_TABLEHEADER
        </Typography.Text>
        <Typography.Paragraph
          type="secondary"
          style={{ fontSize: 12, marginBottom: 12, marginTop: 4 }}
        >
          unfold / checkbox / info 为语义开关；列上 sorter
          开启时，表头内复选框已隔离点击。完整映射见{' '}
          <Typography.Text code>index.figma.tsx</Typography.Text>。
        </Typography.Paragraph>
        <Space direction="vertical" size={14} style={{ width: '100%' }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>position → align</div>
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>sort → sorter</span>
            <Switch checked={sortEnabled} onChange={setSortEnabled} />
          </div>
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
            <span style={{ fontSize: 12 }}>info</span>
            <Switch checked={info} onChange={setInfo} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Title</div>
            <Input value={titleText} onChange={e => setTitleText(e.target.value)} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
