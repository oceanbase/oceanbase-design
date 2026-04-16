import { CheckOutlined } from '@oceanbase/icons';
import {
  Button,
  Checkbox,
  Col,
  Dropdown,
  Flex,
  Input,
  Row,
  Space,
  Switch,
  Typography,
} from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

import { SPLIT_BORDER } from './dropdown-popup-shell';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_DROPDOWN 的 props / example 语义一致。
 * - 文案与 `figma.string('Label')` 对齐为「Label」。
 * - 文档首屏默认收起浮层，受控 `open` + `onOpenChange`；映射 example 为静态 `open`。
 */

/** 与 figma.connect example 相同的拼装方式（另加受控 open / onOpenChange 供文档交互） */
function FigmaDropdownMainExample(props: {
  titleHeader: React.ReactNode;
  searchSection: React.ReactNode;
  actionsFooter: React.ReactNode;
  menu: MenuProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { titleHeader, searchSection, actionsFooter, menu, open, onOpenChange } = props;
  const menuMerged = useMemo(
    () => ({
      ...menu,
      style: {
        ...menu.style,
        width: '100%',
        minWidth: 0,
        background: 'transparent',
        boxShadow: 'none',
        borderRadius: 0,
      },
    }),
    [menu]
  );
  return (
    <Dropdown
      trigger={['click']}
      open={open}
      onOpenChange={onOpenChange}
      menu={menuMerged}
      popupRender={node => (
        <Flex
          vertical
          align="stretch"
          style={{
            minWidth: 160,
            width: '100%',
            background: 'var(--ant-color-bg-elevated, #ffffff)',
            borderRadius: 'var(--ant-border-radius-lg, 8px)',
            boxShadow:
              'var(--ant-shadow-2, 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05))',
            overflow: 'hidden',
          }}
        >
          {titleHeader}
          {searchSection}
          {node}
          {actionsFooter}
        </Flex>
      )}
    >
      <Button type="default" size="small">
        选项
      </Button>
    </Dropdown>
  );
}

const LABEL = 'Label';

function buildMainMenu(multiple: boolean, subitem: boolean): MenuProps {
  if (!multiple && !subitem) {
    return {
      selectable: true,
      multiple: false,
      selectedKeys: ['1'],
      items: [
        {
          key: '1',
          label: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: 8,
              }}
            >
              <span>{LABEL}</span>
              <CheckOutlined style={{ color: '#1677ff', fontSize: 14 }} />
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: 8,
              }}
            >
              <span>{LABEL}</span>
              <span style={{ width: 14 }} />
            </div>
          ),
        },
        {
          key: '3',
          label: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: 8,
              }}
            >
              <span>{LABEL}</span>
              <span style={{ width: 14 }} />
            </div>
          ),
          style: { background: 'rgba(22, 119, 255, 0.08)' },
        },
        {
          key: '4',
          label: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: 8,
              }}
            >
              <span>{LABEL}</span>
              <span style={{ width: 14 }} />
            </div>
          ),
        },
        {
          key: '5',
          label: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: 8,
              }}
            >
              <span>{LABEL}</span>
              <span style={{ width: 14 }} />
            </div>
          ),
        },
      ],
    };
  }
  if (!multiple && subitem) {
    return {
      selectable: false,
      items: [
        {
          key: '1',
          label: LABEL,
          children: [{ key: '1-sub', label: 'Sub item' }],
        },
        {
          key: '2',
          label: LABEL,
          children: [{ key: '2-sub', label: 'Sub item' }],
        },
        {
          key: '3',
          label: LABEL,
          children: [{ key: '3-sub', label: 'Sub item' }],
        },
        {
          key: '4',
          label: LABEL,
          children: [{ key: '4-sub', label: 'Sub item' }],
        },
      ],
    };
  }
  if (multiple && !subitem) {
    return {
      selectable: false,
      items: [
        {
          key: '1',
          label: (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
              }}
            >
              <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
              <span>{LABEL}</span>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
              }}
            >
              <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
              <span>{LABEL}</span>
            </div>
          ),
        },
        {
          key: '3',
          label: (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
              }}
            >
              <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
              <span>{LABEL}</span>
            </div>
          ),
        },
        {
          key: '4',
          label: (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
              }}
            >
              <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
              <span>{LABEL}</span>
            </div>
          ),
        },
        {
          key: '5',
          label: (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
              }}
            >
              <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
              <span>{LABEL}</span>
            </div>
          ),
        },
      ],
    };
  }
  return {
    selectable: false,
    items: [
      {
        key: '1',
        label: (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              width: '100%',
            }}
          >
            <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
            <span>{LABEL}</span>
          </div>
        ),
        children: [{ key: '1-sub', label: 'Sub item' }],
      },
      {
        key: '2',
        label: (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              width: '100%',
            }}
          >
            <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
            <span>{LABEL}</span>
          </div>
        ),
        children: [{ key: '2-sub', label: 'Sub item' }],
      },
      {
        key: '3',
        label: (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              width: '100%',
            }}
          >
            <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
            <span>{LABEL}</span>
          </div>
        ),
        children: [{ key: '3-sub', label: 'Sub item' }],
      },
      {
        key: '4',
        label: (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              width: '100%',
            }}
          >
            <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
            <span>{LABEL}</span>
          </div>
        ),
        children: [{ key: '4-sub', label: 'Sub item' }],
      },
    ],
  };
}

const App: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [title, setTitle] = useState(true);
  const [search, setSearch] = useState(true);
  const [actions, setActions] = useState(true);
  const [multiple, setMultiple] = useState(false);
  const [subitem, setSubitem] = useState(false);

  const titleHeader = useMemo(
    () =>
      title ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 12px',
            borderBottom: SPLIT_BORDER,
          }}
        >
          <span style={{ color: 'rgba(0,0,0,0.45)' }}>Title</span>
        </div>
      ) : null,
    [title]
  );

  const searchSection = useMemo(
    () =>
      search ? (
        <div style={{ padding: '8px 12px 4px' }}>
          <Input.Search placeholder="Search" allowClear />
        </div>
      ) : null,
    [search]
  );

  const actionsFooter = useMemo(
    () =>
      actions ? (
        <Flex
          vertical
          align="start"
          style={{ borderTop: SPLIT_BORDER, padding: '8px 12px', width: '100%' }}
        >
          <Row justify="space-between" align="middle" style={{ width: '100%' }}>
            <Col>
              <Button type="primary" size="small">
                Apply
              </Button>
            </Col>
            <Col>
              <Button type="link" size="small">
                Clear All
              </Button>
            </Col>
          </Row>
        </Flex>
      ) : null,
    [actions]
  );

  const menu = useMemo(() => buildMainMenu(multiple, subitem), [multiple, subitem]);

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
        <FigmaDropdownMainExample
          titleHeader={titleHeader}
          searchSection={searchSection}
          actionsFooter={actionsFooter}
          menu={menu}
          open={dropdownOpen}
          onOpenChange={setDropdownOpen}
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
          Dropdown
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>title</span>
            <Switch checked={title} onChange={setTitle} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>search</span>
            <Switch checked={search} onChange={setSearch} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>actions</span>
            <Switch checked={actions} onChange={setActions} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>multiple</span>
            <Switch checked={multiple} onChange={setMultiple} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>subitem</span>
            <Switch checked={subitem} onChange={setSubitem} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
