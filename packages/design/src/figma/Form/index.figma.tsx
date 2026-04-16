// @ts-nocheck

import { figma } from '@figma/code-connect';
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  Typography,
  Upload,
} from '@oceanbase/design';

/**
 * Code Connect — Form（type × descPosition）与 FormDescription、FormLabel。
 * Page: "↵Form"
 */

// Figma: "Form" · 2255:1823
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2255-1823&m=dev
figma.connect(Form, '<FIGMA_OCEANBASE_FORM>', {
  props: {
    formRow: figma.enum('type', {
      Input: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">
              <Input placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 328 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label">
              <Input placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
            >
              <Input placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
            >
              <Input placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
      }),
      InputNumber: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 216 }}>
            <Form.Item label="Label">
              <InputNumber placeholder="Enter" style={{ width: '100%' }} />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 216 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label">
              <InputNumber placeholder="Enter" style={{ width: '100%' }} />
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 216 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
            >
              <InputNumber placeholder="Enter" style={{ width: '100%' }} />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 216 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
            >
              <InputNumber placeholder="Enter" style={{ width: '100%' }} />
            </Form.Item>
          </Form>
        ),
      }),
      InputTextArea: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">
              <Input.TextArea placeholder="Enter" rows={4} style={{ resize: 'none' }} />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 328 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label">
              <Input.TextArea placeholder="Enter" rows={4} style={{ resize: 'none' }} />
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
            >
              <Input.TextArea placeholder="Enter" rows={4} style={{ resize: 'none' }} />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
            >
              <Input.TextArea placeholder="Enter" rows={4} style={{ resize: 'none' }} />
            </Form.Item>
          </Form>
        ),
      }),
      InputPassword: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">
              <Input.Password placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 328 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label">
              <Input.Password placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
            >
              <Input.Password placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
            >
              <Input.Password placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
      }),
      Select: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">
              <Select
                placeholder="Enter"
                style={{ width: '100%' }}
                options={[
                  { value: 'a', label: 'Option' },
                  { value: 'b', label: 'Option' },
                ]}
              />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 328 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label">
              <Select
                placeholder="Enter"
                style={{ width: '100%' }}
                options={[
                  { value: 'a', label: 'Option' },
                  { value: 'b', label: 'Option' },
                ]}
              />
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
            >
              <Select
                placeholder="Enter"
                style={{ width: '100%' }}
                options={[
                  { value: 'a', label: 'Option' },
                  { value: 'b', label: 'Option' },
                ]}
              />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
            >
              <Select
                placeholder="Enter"
                style={{ width: '100%' }}
                options={[
                  { value: 'a', label: 'Option' },
                  { value: 'b', label: 'Option' },
                ]}
              />
            </Form.Item>
          </Form>
        ),
      }),
      Radio: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">
              <Radio.Group defaultValue="a">
                <Radio value="a">Radio</Radio>
                <Radio value="b">Radio</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 328 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label">
              <Radio.Group defaultValue="a">
                <Radio value="a">Radio</Radio>
                <Radio value="b">Radio</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
            >
              <Radio.Group defaultValue="a">
                <Radio value="a">Radio</Radio>
                <Radio value="b">Radio</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
            >
              <Radio.Group defaultValue="a">
                <Radio value="a">Radio</Radio>
                <Radio value="b">Radio</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
      }),
      RadioButton: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">
              <Radio.Group optionType="button" buttonStyle="solid" defaultValue="a">
                <Radio.Button value="a">A</Radio.Button>
                <Radio.Button value="b">B</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 328 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label">
              <Radio.Group optionType="button" buttonStyle="solid" defaultValue="a">
                <Radio.Button value="a">A</Radio.Button>
                <Radio.Button value="b">B</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
            >
              <Radio.Group optionType="button" buttonStyle="solid" defaultValue="a">
                <Radio.Button value="a">A</Radio.Button>
                <Radio.Button value="b">B</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
            >
              <Radio.Group optionType="button" buttonStyle="solid" defaultValue="a">
                <Radio.Button value="a">A</Radio.Button>
                <Radio.Button value="b">B</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
      }),
      RadioTag: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label">
              <Radio.Group optionType="button" buttonStyle="outline" defaultValue="a">
                <Radio.Button value="a">Tag</Radio.Button>
                <Radio.Button value="b">Tag</Radio.Button>
                <Radio.Button value="c">Tag</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 328 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label">
              <Radio.Group optionType="button" buttonStyle="outline" defaultValue="a">
                <Radio.Button value="a">Tag</Radio.Button>
                <Radio.Button value="b">Tag</Radio.Button>
                <Radio.Button value="c">Tag</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
            >
              <Radio.Group optionType="button" buttonStyle="outline" defaultValue="a">
                <Radio.Button value="a">Tag</Radio.Button>
                <Radio.Button value="b">Tag</Radio.Button>
                <Radio.Button value="c">Tag</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
            >
              <Radio.Group optionType="button" buttonStyle="outline" defaultValue="a">
                <Radio.Button value="a">Tag</Radio.Button>
                <Radio.Button value="b">Tag</Radio.Button>
                <Radio.Button value="c">Tag</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
      }),
      Checkbox: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item label="Label" valuePropName="checked">
              <Checkbox defaultChecked={false}>Checkbox</Checkbox>
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 328 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label" valuePropName="checked">
              <Checkbox defaultChecked={false}>Checkbox</Checkbox>
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
              valuePropName="checked"
            >
              <Checkbox defaultChecked={false}>Checkbox</Checkbox>
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 328 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
              valuePropName="checked"
            >
              <Checkbox defaultChecked={false}>Checkbox</Checkbox>
            </Form.Item>
          </Form>
        ),
      }),
      Switch: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 65 }}>
            <Form.Item label="Label" valuePropName="checked">
              <Switch defaultChecked={false} />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 65 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label" valuePropName="checked">
              <Switch defaultChecked={false} />
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 65 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
              valuePropName="checked"
            >
              <Switch defaultChecked={false} />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 65 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
              valuePropName="checked"
            >
              <Switch defaultChecked={false} />
            </Form.Item>
          </Form>
        ),
      }),
      Upload: figma.enum('descPosition', {
        none: (
          <Form layout="vertical" style={{ width: 270 }}>
            <Form.Item label="Label">
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical" style={{ width: 270 }}>
            <div style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad', marginBottom: 4 }}>
              Description
            </div>
            <Form.Item label="Label">
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        ),
        bottom: (
          <Form layout="vertical" style={{ width: 270 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                  Description
                </span>
              }
            >
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical" style={{ width: 270 }}>
            <Form.Item
              label="Label"
              extra={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#0d6cf2' }}>
                  Description
                </span>
              }
            >
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        ),
      }),
    }),
  },
  // Fragment 强制走 figma.tsx；裸 `=> formRow` 会走 figma.value，Dev Mode 里 string 槽位可能不展开
  example: ({ formRow }) => <>{formRow}</>,
});

// Figma: "FormDescription" · 2245:2127
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2127&m=dev
figma.connect(Typography.Text, '<FIGMA_OCEANBASE_FORMDESCRIPTION>', {
  props: {
    desc: figma.string('desc'),
    textStyle: figma.enum('style', {
      default: { fontSize: 12, lineHeight: '20px', color: '#8592ad' },
      error: { fontSize: 12, lineHeight: '20px', color: '#eb4242' },
      link: { fontSize: 12, lineHeight: '20px', color: '#0d6cf2' },
    }),
  },
  example: ({ desc, textStyle }) => <Typography.Text style={textStyle}>{desc}</Typography.Text>,
});

// Figma: "FormLabel" · 2245:2114
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2114&m=dev
figma.connect(Form.Item, '<FIGMA_OCEANBASE_FORMLABEL>', {
  props: {
    root: figma.enum('style', {
      default: (
        <Form.Item label={figma.string('label')}>
          <Input placeholder="Field" />
        </Form.Item>
      ),
      optional: (
        <Form.Item
          label={
            <span>
              <span style={{ fontSize: 13, lineHeight: '20px', color: '#132339' }}>
                {figma.string('label')}
              </span>
              <span style={{ fontSize: 13, lineHeight: '20px', color: '#8592ad', marginLeft: 4 }}>
                {figma.string('optional')}
              </span>
            </span>
          }
        >
          <Input placeholder="Field" />
        </Form.Item>
      ),
      'with info': (
        <Form.Item label={figma.string('label')} tooltip="Description">
          <Input placeholder="Field" />
        </Form.Item>
      ),
      'optional + info': (
        <Form.Item
          label={
            <span>
              <span style={{ fontSize: 13, lineHeight: '20px', color: '#132339' }}>
                {figma.string('label')}
              </span>
              <span style={{ fontSize: 13, lineHeight: '20px', color: '#8592ad', marginLeft: 4 }}>
                {figma.string('optional')}
              </span>
            </span>
          }
          tooltip="Description"
        >
          <Input placeholder="Field" />
        </Form.Item>
      ),
    }),
  },
  // 同上：<>…</> 让整段枚举 JSX 经 figma.tsx 渲染，利于 label / optional 等 figma.string 在面板里解析
  example: ({ root }) => <>{root}</>,
});
