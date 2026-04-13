// @ts-nocheck

import { QuestionCircleOutlined } from '@ant-design/icons';
import { figma } from '@figma/code-connect';
import {
  AwsColored,
  GoogleCloudColored,
  OceanbaseColored,
  TencentCloudColored,
} from '@oceanbase/icons';
import { Radio, Space, Typography } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Radio"
 */

// Figma: "Radio" · 2245:2134
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2134&m=dev
figma.connect(Radio, '<FIGMA_OCEANBASE_RADIO>', {
  props: {
    disabledBool: figma.enum('disabled', {
      false: false,
      true: true,
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
    positionRadius: figma.enum('position', {
      left: { borderRadius: '4px 0 0 4px' },
      center: { borderRadius: 0 },
      right: { borderRadius: '0 4px 4px 0' },
    }),
    defaultValue: figma.enum('checked', {
      yes: 'on',
      no: 'off',
    }),
    disabledBool: figma.enum('disabled', {
      true: true,
      false: false,
    }),
    buttonInner: figma.boolean('logo', {
      true: (
        <Space size={4} align="center">
          <OceanbaseColored style={{ fontSize: 14, lineHeight: 1 }} />
          <span>{figma.string('text')}</span>
        </Space>
      ),
      false: <span>{figma.string('text')}</span>,
    }),
  },
  example: ({ groupSize, positionRadius, defaultValue, disabledBool, buttonInner }) => (
    <Radio.Group
      optionType="button"
      size={groupSize}
      defaultValue={defaultValue}
      style={{ display: 'inline-block' }}
    >
      <Radio.Button value="on" disabled={disabledBool} style={positionRadius}>
        {buttonInner}
      </Radio.Button>
      <Radio.Button value="off" style={{ display: 'none' }} tabIndex={-1} aria-hidden />
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
    defaultChecked: figma.enum('checked', {
      true: true,
      false: false,
    }),
    disabledBool: figma.enum('disabled', {
      true: true,
      false: false,
    }),
    radioChildren: figma.enum('description', {
      false: figma.enum('disabled', {
        true: figma.enum('infoIcon', {
          false: (
            <span style={{ color: '#b6c0d4', fontSize: 13, lineHeight: '20px' }}>
              {figma.string('itemText')}
            </span>
          ),
          true: (
            <Space size={4} align="center">
              <span style={{ color: '#b6c0d4', fontSize: 13, lineHeight: '20px' }}>
                {figma.string('itemText')}
              </span>
              <QuestionCircleOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />
            </Space>
          ),
        }),
        false: figma.enum('infoIcon', {
          false: (
            <span style={{ color: '#595959', fontSize: 13, lineHeight: '20px' }}>
              {figma.string('itemText')}
            </span>
          ),
          true: (
            <Space size={4} align="center">
              <span style={{ color: '#595959', fontSize: 13, lineHeight: '20px' }}>
                {figma.string('itemText')}
              </span>
              <QuestionCircleOutlined style={{ color: '#8c8c8c', fontSize: 14 }} />
            </Space>
          ),
        }),
      }),
      true: figma.enum('disabled', {
        true: figma.enum('infoIcon', {
          false: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: '#b6c0d4', fontSize: 13, lineHeight: '20px' }}>
                {figma.string('itemText')}
              </span>
              <Typography.Text style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                Description
              </Typography.Text>
            </div>
          ),
          true: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Space size={4} align="center">
                <span style={{ color: '#b6c0d4', fontSize: 13, lineHeight: '20px' }}>
                  {figma.string('itemText')}
                </span>
                <QuestionCircleOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />
              </Space>
              <Typography.Text style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                Description
              </Typography.Text>
            </div>
          ),
        }),
        false: figma.enum('infoIcon', {
          false: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: '#595959', fontSize: 13, lineHeight: '20px' }}>
                {figma.string('itemText')}
              </span>
              <Typography.Text style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                Description
              </Typography.Text>
            </div>
          ),
          true: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Space size={4} align="center">
                <span style={{ color: '#595959', fontSize: 13, lineHeight: '20px' }}>
                  {figma.string('itemText')}
                </span>
                <QuestionCircleOutlined style={{ color: '#8c8c8c', fontSize: 14 }} />
              </Space>
              <Typography.Text style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>
                Description
              </Typography.Text>
            </div>
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
        yes: figma.enum('disabled', {
          true: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid #cdd5e4',
                background: '#cdd5e4',
              }}
            >
              <span style={{ color: '#8592ad', fontSize: 14, lineHeight: '20px' }}>
                {figma.string('text')}
              </span>
            </span>
          ),
          false: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid #0d6cf2',
                background: '#ffffff',
              }}
            >
              <span style={{ color: '#0d6cf2', fontSize: 14, lineHeight: '20px' }}>
                {figma.string('text')}
              </span>
            </span>
          ),
        }),
        no: figma.enum('disabled', {
          true: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid #cdd5e4',
                background: '#f5f7fc',
              }}
            >
              <span style={{ color: '#b6c0d4', fontSize: 14, lineHeight: '20px' }}>
                {figma.string('text')}
              </span>
            </span>
          ),
          false: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid #cdd5e4',
                background: '#ffffff',
              }}
            >
              <span style={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}>
                {figma.string('text')}
              </span>
            </span>
          ),
        }),
      }),
      'pic+text': figma.enum('checked', {
        yes: figma.enum('disabled', {
          true: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid #cdd5e4',
                background: '#cdd5e4',
              }}
            >
              <AwsColored style={{ fontSize: 14 }} />
              <span style={{ color: '#8592ad', fontSize: 14, lineHeight: '20px' }}>
                {figma.string('text')}
              </span>
            </span>
          ),
          false: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid #0d6cf2',
                background: '#ffffff',
              }}
            >
              <AwsColored style={{ fontSize: 14 }} />
              <span style={{ color: '#0d6cf2', fontSize: 14, lineHeight: '20px' }}>
                {figma.string('text')}
              </span>
            </span>
          ),
        }),
        no: figma.enum('disabled', {
          true: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid #cdd5e4',
                background: '#f5f7fc',
              }}
            >
              <AwsColored style={{ fontSize: 14 }} />
              <span style={{ color: '#b6c0d4', fontSize: 14, lineHeight: '20px' }}>
                {figma.string('text')}
              </span>
            </span>
          ),
          false: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid #cdd5e4',
                background: '#ffffff',
              }}
            >
              <AwsColored style={{ fontSize: 14 }} />
              <span style={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}>
                {figma.string('text')}
              </span>
            </span>
          ),
        }),
      }),
      pic: figma.enum('checked', {
        yes: figma.enum('disabled', {
          true: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                borderRadius: 4,
                border: '1px solid #cdd5e4',
                background: '#cdd5e4',
              }}
            >
              <AwsColored style={{ fontSize: 32 }} />
            </span>
          ),
          false: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                borderRadius: 4,
                border: '1px solid #0d6cf2',
                background: '#ffffff',
              }}
            >
              <AwsColored style={{ fontSize: 32 }} />
            </span>
          ),
        }),
        no: figma.enum('disabled', {
          true: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                borderRadius: 4,
                border: '1px solid #cdd5e4',
                background: '#f5f7fc',
              }}
            >
              <AwsColored style={{ fontSize: 32, opacity: 0.45 }} />
            </span>
          ),
          false: (
            <span
              style={{
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                borderRadius: 4,
                border: '1px solid #cdd5e4',
                background: '#ffffff',
              }}
            >
              <AwsColored style={{ fontSize: 32 }} />
            </span>
          ),
        }),
      }),
    }),
  },
  example: ({ tagExample }) => (
    <Radio style={{ margin: 0, height: 'auto', alignItems: 'flex-start' }}>{tagExample}</Radio>
  ),
});

// Figma: "RadioTagGroup" · 2245:2415
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2415&m=dev
figma.connect(Radio.Group, '<FIGMA_OCEANBASE_RADIOTAGGROUP>', {
  props: {
    groupRow: figma.enum('type', {
      text: (
        <Radio.Group defaultValue="a" style={{ display: 'flex', gap: 8 }}>
          <Radio
            value="a"
            style={{
              margin: 0,
              padding: '4px 12px',
              borderRadius: 4,
              border: '1px solid #0d6cf2',
              height: 'auto',
            }}
          >
            <span style={{ color: '#0d6cf2', fontSize: 14, lineHeight: '20px' }}>item</span>
          </Radio>
          <Radio
            value="b"
            style={{
              margin: 0,
              padding: '4px 12px',
              borderRadius: 4,
              border: '1px solid #cdd5e4',
              height: 'auto',
            }}
          >
            <span style={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}>item</span>
          </Radio>
          <Radio
            value="c"
            disabled
            style={{
              margin: 0,
              padding: '4px 12px',
              borderRadius: 4,
              border: '1px solid #cdd5e4',
              background: '#f5f7fc',
              height: 'auto',
            }}
          >
            <span style={{ color: '#b6c0d4', fontSize: 14, lineHeight: '20px' }}>item</span>
          </Radio>
        </Radio.Group>
      ),
      'pic+text': (
        <Radio.Group defaultValue="a" style={{ display: 'flex', gap: 8 }}>
          <Radio
            value="a"
            style={{
              margin: 0,
              padding: '4px 12px',
              borderRadius: 4,
              border: '1px solid #0d6cf2',
              height: 'auto',
            }}
          >
            <Space size={4} align="center">
              <AwsColored style={{ fontSize: 14 }} />
              <span style={{ color: '#0d6cf2', fontSize: 14, lineHeight: '20px' }}>AWS</span>
            </Space>
          </Radio>
          <Radio
            value="b"
            style={{
              margin: 0,
              padding: '4px 12px',
              borderRadius: 4,
              border: '1px solid #cdd5e4',
              height: 'auto',
            }}
          >
            <Space size={4} align="center">
              <GoogleCloudColored style={{ fontSize: 14 }} />
              <span style={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}>
                Google Cloud
              </span>
            </Space>
          </Radio>
          <Radio
            value="c"
            disabled
            style={{
              margin: 0,
              padding: '4px 12px',
              borderRadius: 4,
              border: '1px solid #cdd5e4',
              background: '#f5f7fc',
              height: 'auto',
            }}
          >
            <Space size={4} align="center">
              <TencentCloudColored style={{ fontSize: 14 }} />
              <span style={{ color: '#b6c0d4', fontSize: 14, lineHeight: '20px' }}>
                Tencent Cloud
              </span>
            </Space>
          </Radio>
        </Radio.Group>
      ),
      pic: (
        <Radio.Group defaultValue="a" style={{ display: 'flex', gap: 8 }}>
          <Radio
            value="a"
            style={{
              margin: 0,
              padding: '16px 32px',
              borderRadius: 4,
              border: '1px solid #0d6cf2',
              height: 'auto',
            }}
          >
            <AwsColored style={{ fontSize: 32 }} />
          </Radio>
          <Radio
            value="b"
            style={{
              margin: 0,
              padding: '16px 32px',
              borderRadius: 4,
              border: '1px solid #cdd5e4',
              height: 'auto',
            }}
          >
            <GoogleCloudColored style={{ fontSize: 32 }} />
          </Radio>
          <Radio
            value="c"
            disabled
            style={{
              margin: 0,
              padding: '16px 32px',
              borderRadius: 4,
              border: '1px solid #cdd5e4',
              background: '#f5f7fc',
              height: 'auto',
            }}
          >
            <TencentCloudColored style={{ fontSize: 32, opacity: 0.45 }} />
          </Radio>
        </Radio.Group>
      ),
    }),
  },
  example: ({ groupRow }) => groupRow,
});
