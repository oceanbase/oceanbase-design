// @ts-nocheck

// QuestionCircleOutlined：Figma 为提示类图标；@oceanbase/icons 无等价语义图标时沿用 @ant-design/icons（§1）。
import { QuestionCircleOutlined } from '@ant-design/icons';
import { figma } from '@figma/code-connect';
import {
  AwsColored,
  GoogleCloudColored,
  OceanbaseColored,
  TencentCloudColored,
} from '@oceanbase/icons';
import { Flex, Radio, Space, Typography } from '@oceanbase/design';

/**
 * Code Connect — Radio 页多节点。`index.figma.tsx` 不挂样式（§3.4c）；预览根与白底见 `demo/*.figma.tsx`（§3.4a）。
 */

// Figma: "Radio" · 2245:2134
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2134&m=dev
figma.connect(Radio, '<FIGMA_OCEANBASE_RADIO>', {
  props: {
    disabledBool: figma.boolean('disabled', {
      true: true,
      false: false,
    }),
    defaultChecked: figma.enum('active', {
      yes: true,
      no: false,
    }),
  },
  example: ({ defaultChecked, disabledBool }) => (
    <Radio defaultChecked={defaultChecked} disabled={disabledBool} />
  ),
});

// Figma: "RadioButton" · 2245:2513
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2513&m=dev
figma.connect(Radio.Button, '<FIGMA_OCEANBASE_RADIOBUTTON>', {
  props: {
    groupSize: figma.enum('size', {
      small: 'small',
      medium: 'middle',
    }),
    defaultValue: figma.enum('checked', {
      yes: 'on',
      no: 'off',
    }),
    disabledBool: figma.boolean('disabled', {
      true: true,
      false: false,
    }),
    buttonInner: figma.boolean('logo', {
      true: (
        <Space size={4} align="center">
          <OceanbaseColored />
          <span>{figma.string('text')}</span>
        </Space>
      ),
      false: <span>{figma.string('text')}</span>,
    }),
  },
  example: ({ groupSize, defaultValue, disabledBool, buttonInner }) => (
    <Radio.Group optionType="button" size={groupSize} defaultValue={defaultValue}>
      <Radio.Button value="on" disabled={disabledBool}>
        {buttonInner}
      </Radio.Button>
    </Radio.Group>
  ),
});

// Figma: "RadioButtonGroup" · 2245:2406
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2406&m=dev
figma.connect(Radio.Group, '<FIGMA_OCEANBASE_RADIOBUTTONGROUP>', {
  props: {
    groupSize: figma.enum('size', {
      medium: 'middle',
      small: 'small',
    }),
    row: (
      <>
        <Radio.Button value="1">item</Radio.Button>
        <Radio.Button value="2">item</Radio.Button>
        <Radio.Button value="3">item</Radio.Button>
      </>
    ),
  },
  example: ({ groupSize, row }) => (
    <Radio.Group optionType="button" size={groupSize} defaultValue="3" buttonStyle="outline">
      {row}
    </Radio.Group>
  ),
});

// Figma: "RadioItem" · 2245:2369
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2369&m=dev
figma.connect(Radio, '<FIGMA_OCEANBASE_RADIOITEM>', {
  props: {
    defaultChecked: figma.boolean('checked', {
      true: true,
      false: false,
    }),
    disabledBool: figma.boolean('disabled', {
      true: true,
      false: false,
    }),
    radioChildren: figma.enum('description', {
      false: figma.boolean('disabled', {
        true: figma.boolean('infoIcon', {
          true: (
            <Space size={4} align="center">
              <Typography.Text disabled>{figma.string('itemText')}</Typography.Text>
              <QuestionCircleOutlined />
            </Space>
          ),
          false: <Typography.Text disabled>{figma.string('itemText')}</Typography.Text>,
        }),
        false: figma.boolean('infoIcon', {
          true: (
            <Space size={4} align="center">
              <Typography.Text>{figma.string('itemText')}</Typography.Text>
              <QuestionCircleOutlined />
            </Space>
          ),
          false: <Typography.Text>{figma.string('itemText')}</Typography.Text>,
        }),
      }),
      true: figma.boolean('disabled', {
        true: figma.boolean('infoIcon', {
          true: (
            <Flex vertical gap={4}>
              <Space size={4} align="center">
                <Typography.Text disabled>{figma.string('itemText')}</Typography.Text>
                <QuestionCircleOutlined />
              </Space>
              <Typography.Text type="secondary">Description</Typography.Text>
            </Flex>
          ),
          false: (
            <Flex vertical gap={4}>
              <Typography.Text disabled>{figma.string('itemText')}</Typography.Text>
              <Typography.Text type="secondary">Description</Typography.Text>
            </Flex>
          ),
        }),
        false: figma.boolean('infoIcon', {
          true: (
            <Flex vertical gap={4}>
              <Space size={4} align="center">
                <Typography.Text>{figma.string('itemText')}</Typography.Text>
                <QuestionCircleOutlined />
              </Space>
              <Typography.Text type="secondary">Description</Typography.Text>
            </Flex>
          ),
          false: (
            <Flex vertical gap={4}>
              <Typography.Text>{figma.string('itemText')}</Typography.Text>
              <Typography.Text type="secondary">Description</Typography.Text>
            </Flex>
          ),
        }),
      }),
    }),
  },
  example: ({ defaultChecked, disabledBool, radioChildren }) => (
    <Radio defaultChecked={defaultChecked} disabled={disabledBool}>
      {radioChildren}
    </Radio>
  ),
});

// Figma: "RadioTag" · 2245:2562
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2562&m=dev
figma.connect(Radio, '<FIGMA_OCEANBASE_RADIOTAG>', {
  props: {
    tagExample: figma.enum('type', {
      text: figma.enum('checked', {
        yes: figma.boolean('disabled', {
          true: <Typography.Text disabled>{figma.string('text')}</Typography.Text>,
          false: <Typography.Text>{figma.string('text')}</Typography.Text>,
        }),
        no: figma.boolean('disabled', {
          true: <Typography.Text disabled>{figma.string('text')}</Typography.Text>,
          false: <Typography.Text>{figma.string('text')}</Typography.Text>,
        }),
      }),
      'pic+text': figma.enum('checked', {
        yes: figma.boolean('disabled', {
          true: (
            <Space size={4} align="center">
              <AwsColored />
              <Typography.Text disabled>{figma.string('text')}</Typography.Text>
            </Space>
          ),
          false: (
            <Space size={4} align="center">
              <AwsColored />
              <Typography.Text>{figma.string('text')}</Typography.Text>
            </Space>
          ),
        }),
        no: figma.boolean('disabled', {
          true: (
            <Space size={4} align="center">
              <AwsColored />
              <Typography.Text disabled>{figma.string('text')}</Typography.Text>
            </Space>
          ),
          false: (
            <Space size={4} align="center">
              <AwsColored />
              <Typography.Text>{figma.string('text')}</Typography.Text>
            </Space>
          ),
        }),
      }),
      pic: figma.enum('checked', {
        yes: figma.boolean('disabled', {
          true: <AwsColored />,
          false: <AwsColored />,
        }),
        no: figma.boolean('disabled', {
          true: <AwsColored />,
          false: <AwsColored />,
        }),
      }),
    }),
  },
  example: ({ tagExample }) => <Radio>{tagExample}</Radio>,
});

// Figma: "RadioTagGroup" · 2245:2415
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2415&m=dev
figma.connect(Radio.Group, '<FIGMA_OCEANBASE_RADIOTAGGROUP>', {
  props: {
    groupRow: figma.enum('type', {
      text: (
        <Radio.Group
          defaultValue="a"
          options={[
            { label: 'item', value: 'a' },
            { label: 'item', value: 'b' },
            { label: 'item', value: 'c', disabled: true },
          ]}
        />
      ),
      'pic+text': (
        <Radio.Group
          defaultValue="a"
          options={[
            {
              label: (
                <Space size={4} align="center">
                  <AwsColored />
                  <Typography.Text>AWS</Typography.Text>
                </Space>
              ),
              value: 'a',
            },
            {
              label: (
                <Space size={4} align="center">
                  <GoogleCloudColored />
                  <Typography.Text>Google Cloud</Typography.Text>
                </Space>
              ),
              value: 'b',
            },
            {
              label: (
                <Space size={4} align="center">
                  <TencentCloudColored />
                  <Typography.Text type="secondary">Tencent Cloud</Typography.Text>
                </Space>
              ),
              value: 'c',
              disabled: true,
            },
          ]}
        />
      ),
      pic: (
        <Radio.Group
          defaultValue="a"
          options={[
            { label: <AwsColored />, value: 'a' },
            { label: <GoogleCloudColored />, value: 'b' },
            { label: <TencentCloudColored />, value: 'c', disabled: true },
          ]}
        />
      ),
    }),
  },
  example: ({ groupRow }) => <div>{groupRow}</div>,
});
