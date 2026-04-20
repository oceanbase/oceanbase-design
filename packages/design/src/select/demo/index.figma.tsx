import { Col, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：行为与 `../index.figma.tsx` 的 `props` 嵌套一致；宽度与 `status` 边框色仅在 Playground（§3.4a），不在 Code Connect 映射（§3.4c）。
 * 右侧面板对应 Figma：`multiple`、`placeholder`、`status`；其余 props 由映射规则派生。
 *
 * 下拉默认收起（gen-playground §6）：映射在 `status === focus` 时 `defaultOpen` 为 true，文档中固定为 false，避免首屏遮挡。
 */

type FigmaStatus = 'default' | 'hover' | 'focus' | 'disabled';

/** 与 `index.figma.tsx` 中 `props` 嵌套一致；`borderColor` 仅用于本 Playground 预览 */
function deriveSelectPropsFromFigma(multiple: boolean, placeholder: boolean, status: FigmaStatus) {
  const mode = multiple ? ('multiple' as const) : undefined;
  const inputPlaceholder = placeholder ? 'item' : undefined;
  const disabled = status === 'disabled';
  const defaultOpen = status === 'focus';
  const showSearch = status === 'focus';

  const allowClear = placeholder ? false : !multiple ? true : status === 'focus';

  const defaultValue = placeholder ? undefined : !multiple ? '2' : (['t1', 't2', 't3'] as const);

  const options = placeholder
    ? [
        { value: '1', label: 'item' },
        { value: '2', label: 'option' },
      ]
    : !multiple
      ? [
          { value: '1', label: 'item' },
          { value: '2', label: 'option' },
        ]
      : [
          { value: 't1', label: 'tag' },
          { value: 't2', label: 'tag' },
          { value: 't3', label: 'tag' },
        ];

  const borderColor =
    status === 'default'
      ? '#cdd5e4'
      : status === 'hover'
        ? '#8592ad'
        : status === 'focus'
          ? '#0d6cf2'
          : '#cdd5e4';

  return {
    mode,
    inputPlaceholder,
    disabled,
    defaultOpen,
    showSearch,
    allowClear,
    defaultValue,
    options,
    borderColor,
  };
}

/** 与 figma.connect 的 `example` 解构字段、`<Select />` 传参一致（`defaultOpen` 在文档中由 `docDefaultOpen` 覆盖） */
function FigmaSelectExample(props: {
  mode: 'multiple' | undefined;
  inputPlaceholder: string | undefined;
  disabled: boolean;
  defaultOpen: boolean;
  showSearch: boolean;
  allowClear: boolean;
  defaultValue: string | string[] | undefined;
  options: { value: string; label: string }[];
  borderColor: string;
  /** 文档层：默认收起下拉（gen-playground §6）；映射在 focus 时 `defaultOpen` 为 true */
  docDefaultOpen: boolean;
}) {
  const {
    mode,
    inputPlaceholder,
    disabled,
    defaultOpen: _mappingDefaultOpen,
    showSearch,
    allowClear,
    defaultValue,
    options,
    borderColor,
    docDefaultOpen,
  } = props;

  return (
    <Select
      mode={mode}
      placeholder={inputPlaceholder}
      disabled={disabled}
      defaultOpen={docDefaultOpen}
      showSearch={showSearch}
      allowClear={allowClear}
      defaultValue={defaultValue}
      options={options}
      style={{ width: 224 }}
      styles={{ root: { borderColor } }}
    />
  );
}

const App: React.FC = () => {
  const [multiple, setMultiple] = useState(false);
  const [placeholder, setPlaceholder] = useState(false);
  const [status, setStatus] = useState<FigmaStatus>('default');

  const derived = useMemo(
    () => deriveSelectPropsFromFigma(multiple, placeholder, status),
    [multiple, placeholder, status]
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
        <FigmaSelectExample
          key={`${multiple}-${placeholder}-${status}`}
          {...derived}
          docDefaultOpen={false}
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
          Select
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>multiple</span>
            <Switch checked={multiple} onChange={setMultiple} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>placeholder</span>
            <Switch checked={placeholder} onChange={setPlaceholder} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as FigmaStatus)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'hover', label: 'hover' },
                { value: 'focus', label: 'focus' },
                { value: 'disabled', label: 'disabled' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
