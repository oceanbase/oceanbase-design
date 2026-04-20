import { CheckOutlined, UserOutlined } from '@oceanbase/icons';
import {
  Badge,
  Button,
  Checkbox,
  Col,
  Dropdown,
  Flex,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_DROPDOWNITEM 的 props / example 语义一致。
 * - 使用官方 Dropdown 默认浮层，不包 `popupRender`、不弱化 `menu` 样式。
 * - 子菜单父级上 `extra` 往往不展示：`subitem && itemNum` 时将徽标/对勾并入 `label` 右侧（与稿一致）。
 * - `figma.instance('icontype')` 在文档中用 `UserOutlined` 演示；Code Connect 侧仍为 instance 占位。
 */

type ItemStatus = 'default' | 'hover' | 'selected' | 'disabled';

/** 与 figma.connect example 相同的拼装方式（另加 onOpenChange 供文档交互） */
function FigmaDropdownItemExample(props: {
  trigger: ['click'];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  menu: MenuProps;
  children: React.ReactNode;
}) {
  const { trigger, open, onOpenChange, menu, children } = props;
  return (
    <Dropdown trigger={trigger} open={open} onOpenChange={onOpenChange} menu={menu}>
      {children}
    </Dropdown>
  );
}

const LABEL = 'Label';

function dotColor(status: ItemStatus) {
  return status === 'disabled' ? '#ff4d4f' : '#52c41a';
}

function buildItemLabel(checkbox: boolean, badge: boolean, icon: boolean, status: ItemStatus) {
  const IconNode = icon ? <UserOutlined /> : undefined;

  if (!checkbox) {
    if (badge) {
      return (
        <Space size={8} align="center">
          <Badge dot color={dotColor(status)} size="small" />
          {IconNode}
          {LABEL}
        </Space>
      );
    }
    if (icon) {
      return (
        <Space size={8} align="center">
          <UserOutlined />
          {LABEL}
        </Space>
      );
    }
    return LABEL;
  }

  const checked = status === 'selected';
  const disabled = status === 'disabled';

  if (badge) {
    return (
      <Space size={8} align="center">
        <Checkbox checked={checked} disabled={disabled} />
        <Badge dot color={dotColor(status)} size="small" />
        {IconNode}
        {LABEL}
      </Space>
    );
  }
  return (
    <Space size={8} align="center">
      <Checkbox checked={checked} disabled={disabled} />
      {IconNode}
      {LABEL}
    </Space>
  );
}

function buildItemExtra(itemNum: boolean, status: ItemStatus) {
  if (!itemNum) {
    return undefined;
  }
  return (
    <Space size={8} align="center">
      {status === 'selected' ? <CheckOutlined style={{ color: '#1677ff', fontSize: 14 }} /> : null}
      <Badge
        count={99}
        styles={{
          indicator: {
            background: '#ebeff7',
            color: '#5c6b8a',
          },
        }}
      />
    </Space>
  );
}

function buildDropdownItemMenu(opts: {
  checkbox: boolean;
  subitem: boolean;
  badge: boolean;
  icon: boolean;
  status: ItemStatus;
  itemNum: boolean;
}): MenuProps {
  const { checkbox, subitem, badge, icon, status, itemNum } = opts;

  const selectedKeys =
    checkbox && status === 'selected' ? (['oceanbase-dropdown-item'] as string[]) : [];

  const itemDisabled = status === 'disabled';

  const labelContent = buildItemLabel(checkbox, badge, icon, status);
  const extraContent = buildItemExtra(itemNum, status);

  let label: React.ReactNode = labelContent;
  let extra: React.ReactNode | undefined = extraContent;

  if (subitem && itemNum) {
    extra = undefined;
    label = (
      <Flex
        justify="space-between"
        align="center"
        gap={8}
        style={{ width: '100%', minWidth: 0, flex: 1 }}
      >
        <Flex align="center" style={{ minWidth: 0, flex: '1 1 auto' }}>
          {labelContent}
        </Flex>
        <Space size={8} align="center" style={{ flexShrink: 0, marginLeft: 'auto' }}>
          {status === 'selected' ? (
            <CheckOutlined style={{ color: '#1677ff', fontSize: 14 }} />
          ) : null}
          <Badge
            count={99}
            styles={{
              indicator: {
                background: '#ebeff7',
                color: '#5c6b8a',
              },
            }}
          />
        </Space>
      </Flex>
    );
  }

  return {
    selectable: checkbox,
    multiple: checkbox,
    selectedKeys,
    items: [
      {
        key: 'oceanbase-dropdown-item',
        label,
        disabled: itemDisabled,
        extra,
        ...(subitem
          ? {
              children: [{ key: 'oceanbase-dropdown-item-sub', label: 'Sub item' }],
            }
          : {}),
      },
    ],
  };
}

const App: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [subitem, setSubitem] = useState(false);
  const [badge, setBadge] = useState(true);
  const [icon, setIcon] = useState(false);
  const [status, setStatus] = useState<ItemStatus>('default');
  const [itemNum, setItemNum] = useState(false);

  const menu = useMemo(
    () =>
      buildDropdownItemMenu({
        checkbox,
        subitem,
        badge,
        icon,
        status,
        itemNum,
      }),
    [checkbox, subitem, badge, icon, status, itemNum]
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
        <FigmaDropdownItemExample
          trigger={['click']}
          open={dropdownOpen}
          onOpenChange={setDropdownOpen}
          menu={menu}
          children={<Button type="default">Open menu</Button>}
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
          DropdownItem
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>checkbox</span>
            <Switch checked={checkbox} onChange={setCheckbox} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>subitem</span>
            <Switch checked={subitem} onChange={setSubitem} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>badge</span>
            <Switch checked={badge} onChange={setBadge} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>icon</span>
            <Switch checked={icon} onChange={setIcon} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as ItemStatus)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'hover', label: 'hover' },
                { value: 'selected', label: 'selected' },
                { value: 'disabled', label: 'disabled' },
              ]}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>itemNum</span>
            <Switch checked={itemNum} onChange={setItemNum} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
