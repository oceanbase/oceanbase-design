import { CheckOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  Dropdown,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `<FIGMA_OCEANBASE_FILTERSDROPDOWN>` 的 `menu` + `popupRender` 语义一致；
 * 列表模式浮层布局、顶栏/搜索/底栏与 `figma/Dropdown/index.figma.tsx` 的 `<FIGMA_OCEANBASE_DROPDOWN>` 对齐（`Flex`、`borderTop` 底栏、`Clear All` 为 link）。
 * - `moreFilter`：`ture` = More 面板；`false` = 列表 + 菜单。
 * - 不传 `open`，由用户点击「选项」展开（§6）。
 */

export type FigmaMoreFilterKey = 'ture' | 'false';

/** 与 `figma/Dropdown/index.figma.tsx` `<FIGMA_OCEANBASE_DROPDOWN>` 的 title / search / actions 结构一致 */
function buildTitleHeader(show: boolean, headerTitle: string) {
  if (!show) {
    return null;
  }
  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        width: '100%',
        padding: '8px 12px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <span style={{ color: 'rgba(0,0,0,0.45)' }}>{headerTitle}</span>
    </Flex>
  );
}

function buildSearchSection(show: boolean) {
  if (!show) {
    return null;
  }
  return (
    <Flex style={{ width: '100%', padding: '8px 12px 4px' }}>
      <Input.Search placeholder="Search" allowClear />
    </Flex>
  );
}

function buildActionsFooter(show: boolean) {
  if (!show) {
    return null;
  }
  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        width: '100%',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        padding: '8px 12px',
      }}
    >
      <Button type="primary" size="small">
        Apply
      </Button>
      <Button type="link" size="small">
        Clear All
      </Button>
    </Flex>
  );
}

function labelRow(labelText: string, right: React.ReactNode) {
  return (
    <Flex justify="space-between" align="center" gap={8} style={{ width: '100%' }}>
      <span>{labelText}</span>
      {right}
    </Flex>
  );
}

const MENU_SURFACE_STYLE: React.CSSProperties = {
  width: '100%',
  minWidth: 0,
  background: 'transparent',
  boxShadow: 'none',
  borderRadius: 0,
};

function buildListMenu(multiple: boolean, subitem: boolean, labelText: string): MenuProps {
  if (!multiple && !subitem) {
    return {
      selectable: true,
      multiple: false,
      selectedKeys: ['1'],
      style: MENU_SURFACE_STYLE,
      items: [
        {
          key: '1',
          label: labelRow(labelText, <CheckOutlined style={{ color: '#1677ff', fontSize: 14 }} />),
        },
        {
          key: '2',
          label: labelRow(labelText, <span style={{ width: 14 }} />),
        },
        {
          key: '3',
          label: labelRow(labelText, <span style={{ width: 14 }} />),
          style: { background: 'rgba(22, 119, 255, 0.08)' },
        },
        {
          key: '4',
          label: labelRow(labelText, <span style={{ width: 14 }} />),
        },
        {
          key: '5',
          label: labelRow(labelText, <span style={{ width: 14 }} />),
        },
      ],
    };
  }

  if (!multiple && subitem) {
    return {
      selectable: false,
      style: MENU_SURFACE_STYLE,
      items: [
        {
          key: '1',
          label: <span>{labelText}</span>,
          children: [{ key: '1-sub', label: 'Sub item' }],
        },
        {
          key: '2',
          label: <span>{labelText}</span>,
          children: [{ key: '2-sub', label: 'Sub item' }],
        },
        {
          key: '3',
          label: <span>{labelText}</span>,
          children: [{ key: '3-sub', label: 'Sub item' }],
        },
        {
          key: '4',
          label: <span>{labelText}</span>,
          children: [{ key: '4-sub', label: 'Sub item' }],
        },
      ],
    };
  }

  if (multiple && !subitem) {
    return {
      selectable: false,
      style: MENU_SURFACE_STYLE,
      items: [
        {
          key: '1',
          label: (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
              <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
              <span>{labelText}</span>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
              <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
              <span>{labelText}</span>
            </div>
          ),
        },
        {
          key: '3',
          label: (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
              <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
              <span>{labelText}</span>
            </div>
          ),
        },
        {
          key: '4',
          label: (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
              <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
              <span>{labelText}</span>
            </div>
          ),
        },
        {
          key: '5',
          label: (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
              <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
              <span>{labelText}</span>
            </div>
          ),
        },
      ],
    };
  }

  return {
    selectable: false,
    style: MENU_SURFACE_STYLE,
    items: [
      {
        key: '1',
        label: (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
            <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
            <span>{labelText}</span>
          </div>
        ),
        children: [{ key: '1-sub', label: 'Sub item' }],
      },
      {
        key: '2',
        label: (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
            <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
            <span>{labelText}</span>
          </div>
        ),
        children: [{ key: '2-sub', label: 'Sub item' }],
      },
      {
        key: '3',
        label: (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
            <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
            <span>{labelText}</span>
          </div>
        ),
        children: [{ key: '3-sub', label: 'Sub item' }],
      },
      {
        key: '4',
        label: (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
            <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
            <span>{labelText}</span>
          </div>
        ),
        children: [{ key: '4-sub', label: 'Sub item' }],
      },
    ],
  };
}

function buildMoreBody(showActions: boolean) {
  const body = (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 16px',
        }}
      >
        <span style={{ fontSize: 14, color: '#132039' }}>More Filters</span>
        <Button type="link" size="small" icon={<PlusOutlined />}>
          Add
        </Button>
      </div>
      <div
        style={{
          padding: '0 16px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: '#132039' }}>Option</span>
          <Switch size="small" defaultChecked={false} />
        </div>
        <Form layout="vertical" style={{ margin: 0 }}>
          <Form.Item label="Label" style={{ marginBottom: 6 }}>
            <Input placeholder="Enter" />
          </Form.Item>
        </Form>
        <Input placeholder="item" style={{ width: '100%' }} />
      </div>
    </>
  );

  if (!showActions) {
    return <div style={{ width: 200, padding: '8px 0' }}>{body}</div>;
  }

  return (
    <div style={{ width: 200, padding: '8px 0' }}>
      {body}
      <Flex
        justify="space-between"
        align="center"
        style={{
          width: '100%',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          padding: '8px 12px',
        }}
      >
        <Button type="primary" size="small">
          Apply
        </Button>
        <Button type="link" size="small">
          Clear All
        </Button>
      </Flex>
    </div>
  );
}

export function buildFigmaFiltersDropdownProps(args: {
  moreFilter: FigmaMoreFilterKey;
  title: boolean;
  search: boolean;
  actionsList: boolean;
  multiple: boolean;
  subitem: boolean;
  morePanelActions: boolean;
  headerTitle: string;
  labelText: string;
}) {
  const titleHeader = buildTitleHeader(args.title, args.headerTitle);
  const searchSection = buildSearchSection(args.search);
  const actionsFooter = buildActionsFooter(args.actionsList);
  const menu: MenuProps =
    args.moreFilter === 'ture'
      ? { items: [] }
      : buildListMenu(args.multiple, args.subitem, args.labelText);

  const panelShadow =
    '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)';
  const moreShell: React.CSSProperties = {
    minWidth: 200,
    width: '100%',
    background: '#ffffff',
    borderRadius: 8,
    boxShadow: panelShadow,
    overflow: 'hidden',
  };
  /** 与 Dropdown 默认浮层一致；列表内容区最小宽度 */
  const listShell: React.CSSProperties = {
    minWidth: 160,
    width: '100%',
    background: '#ffffff',
    borderRadius: 8,
    boxShadow: panelShadow,
    overflow: 'hidden',
  };

  const popupRender = (node: React.ReactNode) => {
    if (args.moreFilter === 'ture') {
      return (
        <Flex vertical align="stretch" style={moreShell}>
          {buildMoreBody(args.morePanelActions)}
        </Flex>
      );
    }
    return (
      <Flex vertical align="stretch" style={listShell}>
        {titleHeader}
        {searchSection}
        {node}
        {actionsFooter}
      </Flex>
    );
  };

  return {
    menu,
    popupRender,
  };
}

/** 与 `index.figma.tsx` 中 `example` 一致：`menu` + `popupRender` */
export function FigmaFiltersDropdownExample(props: {
  menu: MenuProps;
  popupRender: (node: React.ReactNode) => React.ReactNode;
}) {
  const { menu, popupRender } = props;
  return (
    <Dropdown trigger={['click']} menu={menu} popupRender={popupRender}>
      <Button type="default" size="small">
        选项
      </Button>
    </Dropdown>
  );
}

const App: React.FC = () => {
  const [moreFilter, setMoreFilter] = useState<FigmaMoreFilterKey>('false');
  const [title, setTitle] = useState(true);
  const [search, setSearch] = useState(true);
  const [actionsList, setActionsList] = useState(true);
  const [multiple, setMultiple] = useState(false);
  const [subitem, setSubitem] = useState(false);
  const [morePanelActions, setMorePanelActions] = useState(true);
  const [headerTitle, setHeaderTitle] = useState('Title');
  const [labelText, setLabelText] = useState('Label');

  const figmaProps = useMemo(
    () =>
      buildFigmaFiltersDropdownProps({
        moreFilter,
        title,
        search,
        actionsList,
        multiple,
        subitem,
        morePanelActions,
        headerTitle,
        labelText,
      }),
    [
      moreFilter,
      title,
      search,
      actionsList,
      multiple,
      subitem,
      morePanelActions,
      headerTitle,
      labelText,
    ]
  );

  const listOnly = moreFilter === 'false';

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
          minHeight: 320,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaFiltersDropdownExample {...figmaProps} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          FiltersDropdown
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>moreFilter（ture = More 模式）</div>
            <Select
              style={{ width: '100%' }}
              value={moreFilter}
              onChange={v => setMoreFilter(v as FigmaMoreFilterKey)}
              options={[
                { value: 'false', label: 'false（list）' },
                { value: 'ture', label: 'ture（more）' },
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
            <span style={{ fontSize: 12 }}>title</span>
            <Switch checked={title} onChange={setTitle} disabled={!listOnly} />
          </label>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>search</span>
            <Switch checked={search} onChange={setSearch} disabled={!listOnly} />
          </label>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>actions（列表底部）</span>
            <Switch checked={actionsList} onChange={setActionsList} disabled={!listOnly} />
          </label>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>actions（More 面板底部）</span>
            <Switch checked={morePanelActions} onChange={setMorePanelActions} disabled={listOnly} />
          </label>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>multiple（仅 list）</span>
            <Switch checked={multiple} onChange={setMultiple} disabled={!listOnly} />
          </label>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>subitem（仅 list）</span>
            <Switch checked={subitem} onChange={setSubitem} disabled={!listOnly} />
          </label>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>headerTitle</div>
            <Input
              value={headerTitle}
              onChange={e => setHeaderTitle(e.target.value)}
              disabled={!listOnly}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Label（菜单项）</div>
            <Input
              value={labelText}
              onChange={e => setLabelText(e.target.value)}
              disabled={!listOnly}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
