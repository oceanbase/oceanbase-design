// @ts-nocheck

import { figma } from '@figma/code-connect';
import {
  Button,
  Checkbox,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
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
          <Form layout="vertical">
            <Form.Item label="Label">
              <Input placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label">
                <Input placeholder="Enter" />
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
            >
              <Input placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
            >
              <Input placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
      }),
      InputNumber: figma.enum('descPosition', {
        none: (
          <Form layout="vertical">
            <Form.Item label="Label">
              <InputNumber placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label">
                <InputNumber placeholder="Enter" />
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
            >
              <InputNumber placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
            >
              <InputNumber placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
      }),
      InputTextArea: figma.enum('descPosition', {
        none: (
          <Form layout="vertical">
            <Form.Item label="Label">
              <Input.TextArea placeholder="Enter" rows={4} />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label">
                <Input.TextArea placeholder="Enter" rows={4} />
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
            >
              <Input.TextArea placeholder="Enter" rows={4} />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
            >
              <Input.TextArea placeholder="Enter" rows={4} />
            </Form.Item>
          </Form>
        ),
      }),
      InputPassword: figma.enum('descPosition', {
        none: (
          <Form layout="vertical">
            <Form.Item label="Label">
              <Input.Password placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label">
                <Input.Password placeholder="Enter" />
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
            >
              <Input.Password placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
            >
              <Input.Password placeholder="Enter" />
            </Form.Item>
          </Form>
        ),
      }),
      Select: figma.enum('descPosition', {
        none: (
          <Form layout="vertical">
            <Form.Item label="Label">
              <Select
                placeholder="Enter"
                options={[
                  { value: 'a', label: 'Option' },
                  { value: 'b', label: 'Option' },
                ]}
              />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label">
                <Select
                  placeholder="Enter"
                  options={[
                    { value: 'a', label: 'Option' },
                    { value: 'b', label: 'Option' },
                  ]}
                />
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
            >
              <Select
                placeholder="Enter"
                options={[
                  { value: 'a', label: 'Option' },
                  { value: 'b', label: 'Option' },
                ]}
              />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
            >
              <Select
                placeholder="Enter"
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
          <Form layout="vertical">
            <Form.Item label="Label">
              <Radio.Group defaultValue="a">
                <Radio value="a">Radio</Radio>
                <Radio value="b">Radio</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label">
                <Radio.Group defaultValue="a">
                  <Radio value="a">Radio</Radio>
                  <Radio value="b">Radio</Radio>
                </Radio.Group>
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
            >
              <Radio.Group defaultValue="a">
                <Radio value="a">Radio</Radio>
                <Radio value="b">Radio</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
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
          <Form layout="vertical">
            <Form.Item label="Label">
              <Radio.Group optionType="button" buttonStyle="solid" defaultValue="a">
                <Radio.Button value="a">A</Radio.Button>
                <Radio.Button value="b">B</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label">
                <Radio.Group optionType="button" buttonStyle="solid" defaultValue="a">
                  <Radio.Button value="a">A</Radio.Button>
                  <Radio.Button value="b">B</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
            >
              <Radio.Group optionType="button" buttonStyle="solid" defaultValue="a">
                <Radio.Button value="a">A</Radio.Button>
                <Radio.Button value="b">B</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
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
          <Form layout="vertical">
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
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label">
                <Radio.Group optionType="button" buttonStyle="outline" defaultValue="a">
                  <Radio.Button value="a">Tag</Radio.Button>
                  <Radio.Button value="b">Tag</Radio.Button>
                  <Radio.Button value="c">Tag</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
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
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
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
          <Form layout="vertical">
            <Form.Item label="Label" valuePropName="checked">
              <Checkbox defaultChecked={false}>Checkbox</Checkbox>
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label" valuePropName="checked">
                <Checkbox defaultChecked={false}>Checkbox</Checkbox>
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
              valuePropName="checked"
            >
              <Checkbox defaultChecked={false}>Checkbox</Checkbox>
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
              valuePropName="checked"
            >
              <Checkbox defaultChecked={false}>Checkbox</Checkbox>
            </Form.Item>
          </Form>
        ),
      }),
      Switch: figma.enum('descPosition', {
        none: (
          <Form layout="vertical">
            <Form.Item label="Label" valuePropName="checked">
              <Switch defaultChecked={false} />
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label" valuePropName="checked">
                <Switch defaultChecked={false} />
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
              valuePropName="checked"
            >
              <Switch defaultChecked={false} />
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
              valuePropName="checked"
            >
              <Switch defaultChecked={false} />
            </Form.Item>
          </Form>
        ),
      }),
      Upload: figma.enum('descPosition', {
        none: (
          <Form layout="vertical">
            <Form.Item label="Label">
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        ),
        top: (
          <Form layout="vertical">
            <Flex vertical gap={4}>
              <Typography.Text type="secondary">Description</Typography.Text>
              <Form.Item label="Label">
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button>Upload</Button>
                </Upload>
              </Form.Item>
            </Flex>
          </Form>
        ),
        bottom: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Text type="secondary">Description</Typography.Text>}
            >
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        ),
        withLink: (
          <Form layout="vertical">
            <Form.Item
              label="Label"
              extra={<Typography.Link href="#">Description</Typography.Link>}
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
  example: ({ formRow }) => <div>{formRow}</div>,
});

// Figma: "FormDescription" · 2245:2127
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2127&m=dev
figma.connect(Typography.Text, '<FIGMA_OCEANBASE_FORMDESCRIPTION>', {
  props: {
    root: figma.enum('style', {
      default: <Typography.Text type="secondary">{figma.string('desc')}</Typography.Text>,
      error: <Typography.Text type="danger">{figma.string('desc')}</Typography.Text>,
      link: <Typography.Link href="#">{figma.string('desc')}</Typography.Link>,
    }),
  },
  example: ({ root }) => <div>{root}</div>,
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
            <Space size={4}>
              <Typography.Text>{figma.string('label')}</Typography.Text>
              <Typography.Text type="secondary">{figma.string('optional')}</Typography.Text>
            </Space>
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
            <Space size={4}>
              <Typography.Text>{figma.string('label')}</Typography.Text>
              <Typography.Text type="secondary">{figma.string('optional')}</Typography.Text>
            </Space>
          }
          tooltip="Description"
        >
          <Input placeholder="Field" />
        </Form.Item>
      ),
    }),
  },
  example: ({ root }) => <div>{root}</div>,
});
