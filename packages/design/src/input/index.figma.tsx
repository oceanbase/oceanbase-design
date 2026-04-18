// @ts-nocheck

// Figma 搜索图标：稿面与 antd Search 惯例一致；`SearchOutlined` 取自 @ant-design/icons。
import { SearchOutlined } from '@ant-design/icons';
import { figma } from '@figma/code-connect';
import { Input } from '@oceanbase/design';

/**
 * Code Connect — Input、Input.Password、Input.Search、Input.TextArea。
 * §3.4c：映射不含 style / styles / className；预览尺寸与白底见 `demo/*.figma.tsx`（§3.4a）。
 * Page: "↵Input"
 */

// Figma: "Input" · 2205:1510
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2205-1510&m=dev
figma.connect(Input, '<FIGMA_OCEANBASE_INPUT>', {
  props: {
    placeholder: figma.boolean('placeholder', {
      true: figma.enum('status', {
        default: 'Enter',
        hover: 'Enter',
        focus: 'Enter',
        disabled: 'Enter',
      }),
      false: figma.enum('status', {
        default: undefined,
        hover: undefined,
        focus: undefined,
        disabled: undefined,
      }),
    }),
    defaultValue: figma.boolean('placeholder', {
      true: figma.enum('status', {
        default: undefined,
        hover: undefined,
        focus: undefined,
        disabled: undefined,
      }),
      false: figma.enum('status', {
        default: figma.string('text'),
        hover: figma.string('text'),
        focus: figma.string('text'),
        disabled: figma.string('text'),
      }),
    }),
    autoFocus: figma.boolean('placeholder', {
      true: figma.enum('status', {
        default: false,
        hover: false,
        focus: true,
        disabled: false,
      }),
      false: figma.enum('status', {
        default: false,
        hover: false,
        focus: true,
        disabled: false,
      }),
    }),
    disabled: figma.boolean('placeholder', {
      true: figma.enum('status', {
        default: false,
        hover: false,
        focus: false,
        disabled: true,
      }),
      false: figma.enum('status', {
        default: false,
        hover: false,
        focus: false,
        disabled: true,
      }),
    }),
  },
  example: ({ placeholder, defaultValue, autoFocus, disabled }) => (
    <Input
      placeholder={placeholder}
      defaultValue={defaultValue}
      autoFocus={autoFocus}
      disabled={disabled}
    />
  ),
});

// Figma: "Input Password " · 2245:2211
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2211&m=dev
figma.connect(Input.Password, '<FIGMA_OCEANBASE_INPUT_PASSWORD>', {
  props: {
    placeholder: figma.boolean('placeholder', {
      true: figma.enum('satus', {
        default: 'Enter',
        hover: 'Enter',
        focus: 'Enter',
        disabled: 'Enter',
      }),
      false: figma.enum('satus', {
        default: undefined,
        hover: undefined,
        focus: undefined,
        disabled: undefined,
      }),
    }),
    defaultValue: figma.boolean('placeholder', {
      true: figma.enum('satus', {
        default: undefined,
        hover: undefined,
        focus: undefined,
        disabled: undefined,
      }),
      false: figma.enum('satus', {
        default: figma.string('text'),
        hover: figma.string('text'),
        focus: figma.string('text'),
        disabled: figma.string('text'),
      }),
    }),
    autoFocus: figma.boolean('placeholder', {
      true: figma.enum('satus', {
        default: false,
        hover: false,
        focus: true,
        disabled: false,
      }),
      false: figma.enum('satus', {
        default: false,
        hover: false,
        focus: true,
        disabled: false,
      }),
    }),
    disabled: figma.boolean('placeholder', {
      true: figma.enum('satus', {
        default: false,
        hover: false,
        focus: false,
        disabled: true,
      }),
      false: figma.enum('satus', {
        default: false,
        hover: false,
        focus: false,
        disabled: true,
      }),
    }),
  },
  example: ({ placeholder, defaultValue, autoFocus, disabled }) => (
    <Input.Password
      placeholder={placeholder}
      defaultValue={defaultValue}
      autoFocus={autoFocus}
      disabled={disabled}
    />
  ),
});

// Figma: "Input Search" · 2245:2340
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2340&m=dev
figma.connect(Input.Search, '<FIGMA_OCEANBASE_INPUT_SEARCH>', {
  props: {
    placeholder: figma.boolean('placeholder', {
      true: figma.enum('searchButton', {
        ture: figma.boolean('allowClear', {
          true: 'Search',
          false: 'Search',
        }),
        false: figma.boolean('allowClear', {
          true: 'Search',
          false: 'Search',
        }),
      }),
      false: figma.enum('searchButton', {
        ture: figma.boolean('allowClear', {
          true: undefined,
          false: undefined,
        }),
        false: figma.boolean('allowClear', {
          true: undefined,
          false: undefined,
        }),
      }),
    }),
    defaultValue: figma.boolean('placeholder', {
      true: figma.enum('searchButton', {
        ture: figma.boolean('allowClear', {
          true: undefined,
          false: undefined,
        }),
        false: figma.boolean('allowClear', {
          true: undefined,
          false: undefined,
        }),
      }),
      false: figma.enum('searchButton', {
        ture: figma.boolean('allowClear', {
          true: figma.string('text'),
          false: figma.string('text'),
        }),
        false: figma.boolean('allowClear', {
          true: figma.string('text'),
          false: figma.string('text'),
        }),
      }),
    }),
    enterButton: figma.enum('searchButton', {
      ture: true,
      false: false,
    }),
    allowClear: figma.boolean('placeholder', {
      true: figma.enum('searchButton', {
        ture: figma.boolean('allowClear', {
          true: true,
          false: false,
        }),
        false: figma.boolean('allowClear', {
          true: true,
          false: false,
        }),
      }),
      false: figma.enum('searchButton', {
        ture: figma.boolean('allowClear', {
          true: true,
          false: false,
        }),
        false: figma.boolean('allowClear', {
          true: true,
          false: false,
        }),
      }),
    }),
  },
  example: ({ placeholder, defaultValue, enterButton, allowClear }) => (
    <Input.Search
      placeholder={placeholder}
      defaultValue={defaultValue}
      enterButton={enterButton}
      allowClear={allowClear}
      prefix={<SearchOutlined />}
    />
  ),
});

// Figma: "Input TextArea" · 2245:2236
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2236&m=dev
figma.connect(Input.TextArea, '<FIGMA_OCEANBASE_INPUT_TEXTAREA>', {
  props: {
    rows: 4,
    showCount: true,
    placeholder: figma.boolean('placeholder', {
      true: figma.enum('status', {
        default: 'Enter',
        focus: 'Enter',
        disabled: 'Enter',
      }),
      false: figma.enum('status', {
        default: undefined,
        focus: undefined,
        disabled: undefined,
      }),
    }),
    defaultValue: figma.boolean('placeholder', {
      true: figma.enum('status', {
        default: undefined,
        focus: undefined,
        disabled: undefined,
      }),
      false: figma.enum('status', {
        default: figma.string('text'),
        focus: figma.string('text'),
        disabled: figma.string('text'),
      }),
    }),
    maxLength: figma.boolean('placeholder', {
      true: figma.enum('status', {
        default: 200,
        focus: 2000,
        disabled: 200,
      }),
      false: figma.enum('status', {
        default: 200,
        focus: 200,
        disabled: 200,
      }),
    }),
    autoFocus: figma.boolean('placeholder', {
      true: figma.enum('status', {
        default: false,
        focus: true,
        disabled: false,
      }),
      false: figma.enum('status', {
        default: false,
        focus: true,
        disabled: false,
      }),
    }),
    disabled: figma.boolean('placeholder', {
      true: figma.enum('status', {
        default: false,
        focus: false,
        disabled: true,
      }),
      false: figma.enum('status', {
        default: false,
        focus: false,
        disabled: true,
      }),
    }),
  },
  example: ({ rows, showCount, placeholder, defaultValue, maxLength, autoFocus, disabled }) => (
    <Input.TextArea
      rows={rows}
      showCount={showCount}
      placeholder={placeholder}
      defaultValue={defaultValue}
      maxLength={maxLength}
      autoFocus={autoFocus}
      disabled={disabled}
    />
  ),
});
