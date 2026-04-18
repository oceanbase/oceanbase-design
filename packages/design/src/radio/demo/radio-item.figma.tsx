import { QuestionCircleOutlined } from '@ant-design/icons';
import { Col, Flex, Input, Radio, Row, Space, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `<FIGMA_OCEANBASE_RADIOITEM>` 的 `props` / `example` 一致。
 * `description` / 内层 `disabled` / `infoIcon` 为 Figma 嵌套枚举维度；`itemText` 对齐 `figma.string('itemText')`。
 */

function buildRadioItemChildren(
  description: boolean,
  innerDisabled: boolean,
  infoIcon: boolean,
  itemText: string
): React.ReactNode {
  if (!description) {
    if (innerDisabled) {
      if (!infoIcon) {
        return <Typography.Text disabled>{itemText}</Typography.Text>;
      }
      return (
        <Space size={4} align="center">
          <Typography.Text disabled>{itemText}</Typography.Text>
          <QuestionCircleOutlined />
        </Space>
      );
    }
    if (!infoIcon) {
      return <Typography.Text>{itemText}</Typography.Text>;
    }
    return (
      <Space size={4} align="center">
        <Typography.Text>{itemText}</Typography.Text>
        <QuestionCircleOutlined />
      </Space>
    );
  }

  if (innerDisabled) {
    if (!infoIcon) {
      return (
        <Flex vertical gap={4}>
          <Typography.Text disabled>{itemText}</Typography.Text>
          <Typography.Text type="secondary">Description</Typography.Text>
        </Flex>
      );
    }
    return (
      <Flex vertical gap={4}>
        <Space size={4} align="center">
          <Typography.Text disabled>{itemText}</Typography.Text>
          <QuestionCircleOutlined />
        </Space>
        <Typography.Text type="secondary">Description</Typography.Text>
      </Flex>
    );
  }
  if (!infoIcon) {
    return (
      <Flex vertical gap={4}>
        <Typography.Text>{itemText}</Typography.Text>
        <Typography.Text type="secondary">Description</Typography.Text>
      </Flex>
    );
  }
  return (
    <Flex vertical gap={4}>
      <Space size={4} align="center">
        <Typography.Text>{itemText}</Typography.Text>
        <QuestionCircleOutlined />
      </Space>
      <Typography.Text type="secondary">Description</Typography.Text>
    </Flex>
  );
}

function FigmaRadioItemExample(props: {
  checked: boolean;
  disabledBool: boolean;
  radioChildren: React.ReactNode;
  onCheckedChange: (checked: boolean) => void;
}) {
  const { checked, disabledBool, radioChildren, onCheckedChange } = props;
  return (
    <Radio
      checked={checked}
      disabled={disabledBool}
      onChange={e => onCheckedChange(e.target.checked)}
    >
      {radioChildren}
    </Radio>
  );
}

const App: React.FC = () => {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const [disabledBool, setDisabledBool] = useState(false);
  const [description, setDescription] = useState(false);
  const [innerDisabled, setInnerDisabled] = useState(false);
  const [infoIcon, setInfoIcon] = useState(false);
  const [itemText, setItemText] = useState('item');

  const radioChildren = useMemo(
    () => buildRadioItemChildren(description, innerDisabled, infoIcon, itemText),
    [description, innerDisabled, infoIcon, itemText]
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
        <FigmaRadioItemExample
          checked={defaultChecked}
          disabledBool={disabledBool}
          radioChildren={radioChildren}
          onCheckedChange={setDefaultChecked}
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
          RadioItem
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>checked</span>
            <Switch checked={defaultChecked} onChange={setDefaultChecked} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>disabled</span>
            <Switch checked={disabledBool} onChange={setDisabledBool} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>description</span>
            <Switch checked={description} onChange={setDescription} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>muted (inner)</span>
            <Switch checked={innerDisabled} onChange={setInnerDisabled} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>infoIcon</span>
            <Switch checked={infoIcon} onChange={setInfoIcon} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>itemText</div>
            <Input value={itemText} onChange={e => setItemText(e.target.value)} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
