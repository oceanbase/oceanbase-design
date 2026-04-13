// @ts-nocheck

import { figma } from '@figma/code-connect';
import { DownOutlined, EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space } from '@oceanbase/design';
import type { CSSProperties } from 'react';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵ Button"
 */

// Figma: "Button" · 5002:921
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5002-921&m=dev
figma.connect(Button, '<FIGMA_OCEANBASE_BUTTON>', {
  props: {
    type: figma.enum('type', {
      primary: 'primary',
      secondary: 'default',
      default: 'default',
      danger: 'primary',
      text: 'text',
      link: 'link',
    }),
    color: figma.enum('type', {
      primary: undefined,
      secondary: 'primary',
      default: undefined,
      danger: undefined,
      text: undefined,
      link: undefined,
    }),
    variant: figma.enum('type', {
      primary: undefined,
      secondary: 'outlined',
      default: undefined,
      danger: undefined,
      text: undefined,
      link: undefined,
    }),
    danger: figma.enum('type', {
      primary: false,
      secondary: false,
      default: false,
      danger: true,
      text: false,
      link: false,
    }),
    size: figma.enum('size', {
      medium: 'middle',
      small: 'small',
      default: 'middle',
    }),
    disabled: figma.enum('status', {
      default: false,
      disabled: true,
      loading: false,
      hover: false,
    }),
    loading: figma.enum('status', {
      default: false,
      disabled: false,
      loading: true,
      hover: false,
    }),
    icon: figma.enum('icon only', {
      true: figma.instance('icontype'),
      false: figma.boolean('Icon Placement start', {
        true: figma.boolean('Icon Placement End', {
          true: undefined,
          false: <PlusOutlined />,
        }),
        false: figma.boolean('Icon Placement End', {
          true: <DownOutlined />,
          false: undefined,
        }),
      }),
    }),
    iconPosition: figma.enum('icon only', {
      true: undefined,
      false: figma.boolean('Icon Placement start', {
        true: figma.boolean('Icon Placement End', {
          true: undefined,
          false: figma.enum('status', {
            default: figma.enum('type', {
              link: undefined,
              text: 'start' as const,
              primary: 'start' as const,
              secondary: 'start' as const,
              default: 'start' as const,
              danger: 'start' as const,
            }),
            disabled: figma.enum('type', {
              link: undefined,
              text: 'start' as const,
              primary: 'start' as const,
              secondary: 'start' as const,
              default: 'start' as const,
              danger: 'start' as const,
            }),
            loading: undefined,
            hover: figma.enum('type', {
              link: undefined,
              text: 'start' as const,
              primary: 'start' as const,
              secondary: 'start' as const,
              default: 'start' as const,
              danger: 'start' as const,
            }),
          }),
        }),
        false: figma.boolean('Icon Placement End', {
          true: 'end' as const,
          false: undefined,
        }),
      }),
    }),
    children: figma.enum('type', {
      primary: figma.enum('icon only', {
        true: undefined,
        false: figma.boolean('Icon Placement start', {
          true: figma.boolean('Icon Placement End', {
            true: (
              <Space size={12}>
                <PlusOutlined />
                {figma.string('Label')}
                <DownOutlined />
              </Space>
            ),
            false: figma.string('Label'),
          }),
          false: figma.boolean('Icon Placement End', {
            true: figma.string('Label'),
            false: figma.string('Label'),
          }),
        }),
      }),
      secondary: figma.enum('icon only', {
        true: undefined,
        false: figma.boolean('Icon Placement start', {
          true: figma.boolean('Icon Placement End', {
            true: (
              <Space size={12}>
                <PlusOutlined />
                {figma.string('Label')}
                <DownOutlined />
              </Space>
            ),
            false: figma.string('Label'),
          }),
          false: figma.boolean('Icon Placement End', {
            true: figma.string('Label'),
            false: figma.string('Label'),
          }),
        }),
      }),
      default: figma.enum('icon only', {
        true: undefined,
        false: figma.boolean('Icon Placement start', {
          true: figma.boolean('Icon Placement End', {
            true: (
              <Space size={12}>
                <PlusOutlined />
                {figma.string('Label')}
                <DownOutlined />
              </Space>
            ),
            false: figma.string('Label'),
          }),
          false: figma.boolean('Icon Placement End', {
            true: figma.string('Label'),
            false: figma.string('Label'),
          }),
        }),
      }),
      danger: figma.enum('icon only', {
        true: undefined,
        false: figma.boolean('Icon Placement start', {
          true: figma.boolean('Icon Placement End', {
            true: (
              <Space size={12}>
                <PlusOutlined />
                {figma.string('text')}
                <DownOutlined />
              </Space>
            ),
            false: figma.string('text'),
          }),
          false: figma.boolean('Icon Placement End', {
            true: figma.string('text'),
            false: figma.string('text'),
          }),
        }),
      }),
      text: figma.enum('icon only', {
        true: undefined,
        false: figma.boolean('Icon Placement start', {
          true: figma.boolean('Icon Placement End', {
            true: (
              <Space size={12}>
                <PlusOutlined />
                {figma.string('Label')}
                <DownOutlined />
              </Space>
            ),
            false: figma.string('Label'),
          }),
          false: figma.boolean('Icon Placement End', {
            true: figma.string('Label'),
            false: figma.string('Label'),
          }),
        }),
      }),
      link: figma.enum('icon only', {
        true: undefined,
        false: 'Link',
      }),
    }),
  },
  example: ({
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
  }) => (
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
  ),
});

// Figma: "Button Group" · 5002:609
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5002-609&m=dev
figma.connect(Space, '<FIGMA_OCEANBASE_BUTTON_GROUP>', {
  props: {
    size: figma.enum('size', {
      medium: 'middle',
      small: 'small',
    }),
    groupStyle: figma.enum('layout', {
      lefttoright: undefined,
      righttoleft: { direction: 'rtl' } satisfies CSSProperties,
    }),
    children: figma.enum('type', {
      default: figma.enum('layout', {
        lefttoright: figma.enum('size', {
          medium: (
            <>
              <Button type="primary" size="middle">
                Button
              </Button>
              <Button type="default" color="primary" variant="outlined" size="middle">
                Button
              </Button>
              <Button type="default" size="middle">
                Button
              </Button>
              <Button type="default" size="middle" icon={<EllipsisOutlined />} />
            </>
          ),
          small: (
            <>
              <Button type="primary" size="small">
                Button
              </Button>
              <Button type="default" color="primary" variant="outlined" size="small">
                Button
              </Button>
              <Button type="default" size="small">
                Button
              </Button>
              <Button type="default" size="small" icon={<EllipsisOutlined />} />
            </>
          ),
        }),
        righttoleft: figma.enum('size', {
          medium: (
            <>
              <Button type="default" size="middle">
                Button
              </Button>
              <Button type="default" color="primary" variant="outlined" size="middle">
                Button
              </Button>
              <Button type="primary" size="middle">
                Button
              </Button>
              <Button type="default" size="middle" icon={<EllipsisOutlined />} />
            </>
          ),
          small: (
            <>
              <Button type="default" size="small">
                Button
              </Button>
              <Button type="default" color="primary" variant="outlined" size="small">
                Button
              </Button>
              <Button type="primary" size="small">
                Button
              </Button>
              <Button type="default" size="small" icon={<EllipsisOutlined />} />
            </>
          ),
        }),
      }),
      text: figma.enum('layout', {
        lefttoright: figma.enum('size', {
          medium: (
            <>
              <Button type="text" size="middle" icon={<DownOutlined />} iconPosition="end">
                Button
              </Button>
              <Button type="text" size="middle">
                Button
              </Button>
              <Button type="text" size="middle" icon={<EllipsisOutlined />} />
            </>
          ),
          small: (
            <>
              <Button type="text" size="small" icon={<DownOutlined />} iconPosition="end">
                Button
              </Button>
              <Button type="text" size="small">
                Button
              </Button>
              <Button type="text" size="small" icon={<EllipsisOutlined />} />
            </>
          ),
        }),
        righttoleft: figma.enum('size', {
          medium: (
            <>
              <Button type="text" size="middle" icon={<DownOutlined />} iconPosition="end">
                Button
              </Button>
              <Button type="text" size="middle">
                Button
              </Button>
              <Button type="text" size="middle" icon={<EllipsisOutlined />} />
            </>
          ),
          small: (
            <>
              <Button type="text" size="small" icon={<DownOutlined />} iconPosition="end">
                Button
              </Button>
              <Button type="text" size="small">
                Button
              </Button>
              <Button type="text" size="small" icon={<EllipsisOutlined />} />
            </>
          ),
        }),
      }),
      expand: figma.enum('layout', {
        lefttoright: figma.enum('size', {
          medium: (
            <>
              <Button.Group size="middle">
                <Button type="primary" size="middle">
                  Button
                </Button>
                <Button type="primary" size="middle" icon={<DownOutlined />} />
              </Button.Group>
              <Button type="default" size="middle">
                Button
              </Button>
              <Button type="default" size="middle" icon={<EllipsisOutlined />} />
            </>
          ),
          small: (
            <>
              <Button.Group size="small">
                <Button type="primary" size="small">
                  Button
                </Button>
                <Button type="primary" size="small" icon={<DownOutlined />} />
              </Button.Group>
              <Button type="default" size="small">
                Button
              </Button>
              <Button type="default" size="small" icon={<EllipsisOutlined />} />
            </>
          ),
        }),
        righttoleft: figma.enum('size', {
          medium: (
            <>
              <Button type="default" size="middle">
                Button
              </Button>
              <Button type="default" color="primary" variant="outlined" size="middle">
                Button
              </Button>
              <Button.Group size="middle">
                <Button type="primary" size="middle">
                  Button
                </Button>
                <Button type="primary" size="middle" icon={<DownOutlined />} />
              </Button.Group>
              <Button type="default" size="middle" icon={<EllipsisOutlined />} />
            </>
          ),
          small: (
            <>
              <Button type="default" size="small">
                Button
              </Button>
              <Button.Group size="small">
                <Button type="primary" size="small">
                  Button
                </Button>
                <Button type="primary" size="small" icon={<DownOutlined />} />
              </Button.Group>
              <Button type="default" size="small" icon={<EllipsisOutlined />} />
            </>
          ),
        }),
      }),
    }),
  },
  example: ({ size, groupStyle, children }) => (
    <Space size={size} style={groupStyle}>
      {children}
    </Space>
  ),
});
