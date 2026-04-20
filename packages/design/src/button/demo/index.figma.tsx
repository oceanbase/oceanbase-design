import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import type { ButtonProps } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `<FIGMA_OCEANBASE_BUTTON>` 的 `props` / `example` 一致。
 * - 维度与 `props` 中 `figma.enum('type'|'size'|'status'|'icon only')`、`Icon Placement *` 等对齐；
 * - `figma.instance('icontype')` 在稿面为实例切换，演示固定为 `<PlusOutlined />`；
 * - `figma.string('Label')` / danger 分支的 `figma.string('text')` 共用右侧「Label / text」输入，避免两套文案漂移。
 * - `icon only`、Icon Placement 两档布尔枚举用 Switch（见 gen-playground §5），不用两档 Select。
 */

type FigmaTypeKey = 'primary' | 'secondary' | 'default' | 'danger' | 'text' | 'link';
type FigmaSizeKey = 'medium' | 'small' | 'default';
type FigmaStatusKey = 'default' | 'hover' | 'disabled' | 'loading';

const TYPE_BY_FIGMA: Record<FigmaTypeKey, ButtonProps['type']> = {
  primary: 'primary',
  secondary: 'default',
  default: 'default',
  danger: 'primary',
  text: 'text',
  link: 'link',
};

const COLOR_BY_FIGMA: Record<FigmaTypeKey, ButtonProps['color'] | undefined> = {
  primary: undefined,
  secondary: 'primary',
  default: undefined,
  danger: undefined,
  text: undefined,
  link: undefined,
};

const VARIANT_BY_FIGMA: Record<FigmaTypeKey, ButtonProps['variant'] | undefined> = {
  primary: undefined,
  secondary: 'outlined',
  default: undefined,
  danger: undefined,
  text: undefined,
  link: undefined,
};

const DANGER_BY_FIGMA: Record<FigmaTypeKey, boolean> = {
  primary: false,
  secondary: false,
  default: false,
  danger: true,
  text: false,
  link: false,
};

const SIZE_BY_FIGMA: Record<FigmaSizeKey, NonNullable<ButtonProps['size']>> = {
  medium: 'middle',
  small: 'small',
  default: 'middle',
};

function deriveDisabled(status: FigmaStatusKey): boolean {
  return status === 'disabled';
}

function deriveLoading(status: FigmaStatusKey): boolean {
  return status === 'loading';
}

/** 对齐 `props.icon`：`icon only` + `Icon Placement start/end` 嵌套枚举 */
function deriveIcon(
  iconOnly: boolean,
  placementStart: boolean,
  placementEnd: boolean
): React.ReactNode {
  if (iconOnly) {
    return <PlusOutlined />;
  }
  if (placementStart && placementEnd) {
    return undefined;
  }
  if (placementStart && !placementEnd) {
    return <PlusOutlined />;
  }
  if (!placementStart && placementEnd) {
    return <DownOutlined />;
  }
  return undefined;
}

/** 对齐 `props.iconPosition`（与 `index.figma.tsx` 嵌套分支一致） */
function deriveIconPosition(
  figmaType: FigmaTypeKey,
  status: FigmaStatusKey,
  iconOnly: boolean,
  placementStart: boolean,
  placementEnd: boolean
): 'start' | 'end' | undefined {
  if (iconOnly) {
    return undefined;
  }
  if (placementStart && placementEnd) {
    return undefined;
  }
  if (placementStart && !placementEnd) {
    if (status === 'loading') {
      return undefined;
    }
    if (figmaType === 'link') {
      return undefined;
    }
    return 'start';
  }
  if (!placementStart && placementEnd) {
    return 'end';
  }
  return undefined;
}

/** 对齐 `props.children` 各 `figma.enum('type')` × `icon only` × 放置分支 */
function deriveChildren(
  figmaType: FigmaTypeKey,
  iconOnly: boolean,
  placementStart: boolean,
  placementEnd: boolean,
  label: string
): React.ReactNode {
  if (figmaType === 'link') {
    if (iconOnly) {
      return undefined;
    }
    return 'Link';
  }
  if (iconOnly) {
    return undefined;
  }
  if (placementStart && placementEnd) {
    return (
      <Space size={4}>
        <PlusOutlined />
        {label}
        <DownOutlined />
      </Space>
    );
  }
  return label;
}

/** 与 `index.figma.tsx` 中 `example` 解构字段与传参顺序一致 */
function FigmaButtonExample(props: {
  type: ButtonProps['type'];
  color: ButtonProps['color'];
  variant: ButtonProps['variant'];
  danger: boolean;
  size: NonNullable<ButtonProps['size']>;
  disabled: boolean;
  loading: boolean;
  icon: React.ReactNode;
  iconPosition: ButtonProps['iconPosition'];
  children: React.ReactNode;
}) {
  const { type, color, variant, danger, size, disabled, loading, icon, iconPosition, children } =
    props;
  return (
    <Button
      type={type}
      color={color}
      variant={variant}
      danger={danger}
      size={size}
      disabled={disabled}
      loading={loading}
      icon={icon}
      iconPosition={iconPosition}
    >
      {children}
    </Button>
  );
}

function FormSwitchRow(props: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  const { label, checked, onChange } = props;
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}
    >
      <span style={{ fontSize: 12 }}>{label}</span>
      <Switch checked={checked} onChange={onChange} />
    </div>
  );
}

const App: React.FC = () => {
  const [figmaType, setFigmaType] = useState<FigmaTypeKey>('primary');
  const [figmaSize, setFigmaSize] = useState<FigmaSizeKey>('medium');
  const [status, setStatus] = useState<FigmaStatusKey>('default');
  const [iconOnly, setIconOnly] = useState(false);
  const [placementStart, setPlacementStart] = useState(false);
  const [placementEnd, setPlacementEnd] = useState(false);
  const [label, setLabel] = useState('Button');

  const derived = useMemo(() => {
    const type = TYPE_BY_FIGMA[figmaType];
    const color = COLOR_BY_FIGMA[figmaType];
    const variant = VARIANT_BY_FIGMA[figmaType];
    const danger = DANGER_BY_FIGMA[figmaType];
    const size = SIZE_BY_FIGMA[figmaSize];
    const disabled = deriveDisabled(status);
    const loading = deriveLoading(status);
    const icon = deriveIcon(iconOnly, placementStart, placementEnd);
    const iconPosition = deriveIconPosition(
      figmaType,
      status,
      iconOnly,
      placementStart,
      placementEnd
    );
    const children = deriveChildren(figmaType, iconOnly, placementStart, placementEnd, label);
    return {
      type,
      color,
      variant,
      danger,
      size,
      disabled,
      loading,
      icon,
      iconPosition,
      children,
    };
  }, [figmaType, figmaSize, status, iconOnly, placementStart, placementEnd, label]);

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
        <FigmaButtonExample
          type={derived.type}
          color={derived.color}
          variant={derived.variant}
          danger={derived.danger}
          size={derived.size}
          disabled={derived.disabled}
          loading={derived.loading}
          icon={derived.icon}
          iconPosition={derived.iconPosition}
        >
          {derived.children}
        </FigmaButtonExample>
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Button
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={figmaType}
              onChange={v => setFigmaType(v as FigmaTypeKey)}
              options={[
                { value: 'primary', label: 'primary' },
                { value: 'secondary', label: 'secondary' },
                { value: 'default', label: 'default' },
                { value: 'danger', label: 'danger' },
                { value: 'text', label: 'text' },
                { value: 'link', label: 'link' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={figmaSize}
              onChange={v => setFigmaSize(v as FigmaSizeKey)}
              options={[
                { value: 'medium', label: 'medium' },
                { value: 'small', label: 'small' },
                { value: 'default', label: 'default' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as FigmaStatusKey)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'hover', label: 'hover' },
                { value: 'disabled', label: 'disabled' },
                { value: 'loading', label: 'loading' },
              ]}
            />
          </div>
          <FormSwitchRow label="icon only" checked={iconOnly} onChange={setIconOnly} />
          <FormSwitchRow
            label="Icon Placement start"
            checked={placementStart}
            onChange={setPlacementStart}
          />
          <FormSwitchRow
            label="Icon Placement End"
            checked={placementEnd}
            onChange={setPlacementEnd}
          />
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>Label / text</div>
            <Input
              style={{ width: '100%' }}
              value={label}
              onChange={e => setLabel(e.target.value)}
              placeholder="Button"
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
