import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  Typography,
  Upload,
} from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_FORM 的 `props` / `example` 一致。
 * `example`: `({ formRow }) => <div>{formRow}</div>`
 */

type DescPosition = 'none' | 'top' | 'bottom' | 'withLink';

type FormRowType =
  | 'Input'
  | 'InputNumber'
  | 'InputTextArea'
  | 'InputPassword'
  | 'Select'
  | 'Radio'
  | 'RadioButton'
  | 'RadioTag'
  | 'Checkbox'
  | 'Switch'
  | 'Upload';

const DESC_TOP: CSSProperties = {
  fontSize: 12,
  lineHeight: '20px',
  color: '#8592ad',
  marginBottom: 4,
};

const EXTRA_SECONDARY: CSSProperties = { fontSize: 12, lineHeight: '20px', color: '#8592ad' };
const EXTRA_LINK: CSSProperties = { fontSize: 12, lineHeight: '20px', color: '#0d6cf2' };

const SELECT_OPTIONS = [
  { value: 'a', label: 'Option' },
  { value: 'b', label: 'Option' },
];

function TopDescriptionBlock() {
  return <div style={DESC_TOP}>Description</div>;
}

function buildFormRow(formRowType: FormRowType, descPosition: DescPosition): React.ReactNode {
  const extra =
    descPosition === 'bottom' ? (
      <span style={EXTRA_SECONDARY}>Description</span>
    ) : descPosition === 'withLink' ? (
      <span style={EXTRA_LINK}>Description</span>
    ) : null;

  const wrapTop = (body: React.ReactNode) => (
    <>
      <TopDescriptionBlock />
      {body}
    </>
  );

  const itemBottomOrLink = (child: React.ReactNode, valuePropName?: 'checked') =>
    descPosition === 'bottom' || descPosition === 'withLink' ? (
      <Form.Item label="Label" extra={extra!} {...(valuePropName ? { valuePropName } : {})}>
        {child}
      </Form.Item>
    ) : null;

  switch (formRowType) {
    case 'Input': {
      const field = <Input placeholder="Enter" />;
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">{field}</Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {wrapTop(<Form.Item label="Label">{field}</Form.Item>)}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {itemBottomOrLink(field)}
          </Form>
        );
      }
      break;
    }
    case 'InputNumber': {
      const field = <InputNumber placeholder="Enter" style={{ width: '100%' }} />;
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 216 }}>
            <Form.Item label="Label">{field}</Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 216 }}>
            {wrapTop(<Form.Item label="Label">{field}</Form.Item>)}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 216 }}>
            {itemBottomOrLink(field)}
          </Form>
        );
      }
      break;
    }
    case 'InputTextArea': {
      const field = (
        <Input.TextArea placeholder="Enter" rows={4} style={{ resize: 'none' as const }} />
      );
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">{field}</Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {wrapTop(<Form.Item label="Label">{field}</Form.Item>)}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {itemBottomOrLink(field)}
          </Form>
        );
      }
      break;
    }
    case 'InputPassword': {
      const field = <Input.Password placeholder="Enter" />;
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">{field}</Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {wrapTop(<Form.Item label="Label">{field}</Form.Item>)}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {itemBottomOrLink(field)}
          </Form>
        );
      }
      break;
    }
    case 'Select': {
      const field = (
        <Select placeholder="Enter" style={{ width: '100%' }} options={SELECT_OPTIONS} />
      );
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">{field}</Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {wrapTop(<Form.Item label="Label">{field}</Form.Item>)}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {itemBottomOrLink(field)}
          </Form>
        );
      }
      break;
    }
    case 'Radio': {
      const field = (
        <Radio.Group defaultValue="a">
          <Radio value="a">Radio</Radio>
          <Radio value="b">Radio</Radio>
        </Radio.Group>
      );
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">{field}</Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {wrapTop(<Form.Item label="Label">{field}</Form.Item>)}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {itemBottomOrLink(field)}
          </Form>
        );
      }
      break;
    }
    case 'RadioButton': {
      const field = (
        <Radio.Group optionType="button" buttonStyle="solid" defaultValue="a">
          <Radio.Button value="a">A</Radio.Button>
          <Radio.Button value="b">B</Radio.Button>
        </Radio.Group>
      );
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">{field}</Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {wrapTop(<Form.Item label="Label">{field}</Form.Item>)}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {itemBottomOrLink(field)}
          </Form>
        );
      }
      break;
    }
    case 'RadioTag': {
      const field = (
        <Radio.Group optionType="button" buttonStyle="outline" defaultValue="a">
          <Radio.Button value="a">Tag</Radio.Button>
          <Radio.Button value="b">Tag</Radio.Button>
          <Radio.Button value="c">Tag</Radio.Button>
        </Radio.Group>
      );
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">{field}</Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {wrapTop(<Form.Item label="Label">{field}</Form.Item>)}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {itemBottomOrLink(field)}
          </Form>
        );
      }
      break;
    }
    case 'Checkbox': {
      const field = <Checkbox defaultChecked={false}>Checkbox</Checkbox>;
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label" valuePropName="checked">
              {field}
            </Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {wrapTop(
              <Form.Item label="Label" valuePropName="checked">
                {field}
              </Form.Item>
            )}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 328 }}>
            {itemBottomOrLink(field, 'checked')}
          </Form>
        );
      }
      break;
    }
    case 'Switch': {
      const field = <Switch defaultChecked={false} />;
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 65 }}>
            <Form.Item label="Label" valuePropName="checked">
              {field}
            </Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 65 }}>
            {wrapTop(
              <Form.Item label="Label" valuePropName="checked">
                {field}
              </Form.Item>
            )}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 65 }}>
            {itemBottomOrLink(field, 'checked')}
          </Form>
        );
      }
      break;
    }
    case 'Upload': {
      const field = (
        <Upload beforeUpload={() => false} maxCount={1}>
          <Button>Upload</Button>
        </Upload>
      );
      if (descPosition === 'none') {
        return (
          <Form layout="vertical" style={{ width: 270 }}>
            <Form.Item label="Label">{field}</Form.Item>
          </Form>
        );
      }
      if (descPosition === 'top') {
        return (
          <Form layout="vertical" style={{ width: 270 }}>
            {wrapTop(<Form.Item label="Label">{field}</Form.Item>)}
          </Form>
        );
      }
      if (descPosition === 'bottom' || descPosition === 'withLink') {
        return (
          <Form layout="vertical" style={{ width: 270 }}>
            {itemBottomOrLink(field)}
          </Form>
        );
      }
      break;
    }
    default:
      break;
  }
  return null;
}

/** 与 figma.connect example 相同的拼装：`({ formRow }) => <>{formRow}</>` */
function FigmaFormExample(props: { formRow: React.ReactNode }) {
  const { formRow } = props;
  return <>{formRow}</>;
}

const App: React.FC = () => {
  const [formRowType, setFormRowType] = useState<FormRowType>('Input');
  const [descPosition, setDescPosition] = useState<DescPosition>('none');

  const formRow = useMemo(
    () => buildFormRow(formRowType, descPosition),
    [formRowType, descPosition]
  );

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
        <FigmaFormExample formRow={formRow} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Form
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={formRowType}
              onChange={v => setFormRowType(v as FormRowType)}
              options={[
                { value: 'Input', label: 'Input' },
                { value: 'InputNumber', label: 'InputNumber' },
                { value: 'InputTextArea', label: 'InputTextArea' },
                { value: 'InputPassword', label: 'InputPassword' },
                { value: 'Select', label: 'Select' },
                { value: 'Radio', label: 'Radio' },
                { value: 'RadioButton', label: 'RadioButton' },
                { value: 'RadioTag', label: 'RadioTag' },
                { value: 'Checkbox', label: 'Checkbox' },
                { value: 'Switch', label: 'Switch' },
                { value: 'Upload', label: 'Upload' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>descPosition</div>
            <Select
              style={{ width: '100%' }}
              value={descPosition}
              onChange={v => setDescPosition(v as DescPosition)}
              options={[
                { value: 'none', label: 'none' },
                { value: 'top', label: 'top' },
                { value: 'bottom', label: 'bottom' },
                { value: 'withLink', label: 'withLink' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
