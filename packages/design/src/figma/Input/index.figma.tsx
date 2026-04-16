// @ts-nocheck

import { SearchOutlined } from '@ant-design/icons';
import { figma } from '@figma/code-connect';
import { Input } from '@oceanbase/design';

/**
 * Code Connect — Input、Input.Password、Input.Search、Input.TextArea。
 * Page: "↵Input"
 */

// Figma: "Input" · 2205:1510
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2205-1510&m=dev
figma.connect(Input, '<FIGMA_OCEANBASE_INPUT>', {
  props: {
    root: figma.enum('placeholder', {
      true: figma.enum('status', {
        default: <Input placeholder="Enter" style={{ width: 280 }} />,
        hover: <Input placeholder="Enter" style={{ width: 280 }} />,
        focus: <Input placeholder="Enter" autoFocus style={{ width: 280 }} />,
        disabled: <Input placeholder="Enter" disabled style={{ width: 280 }} />,
      }),
      false: figma.enum('status', {
        default: <Input defaultValue={figma.string('text')} style={{ width: 280 }} />,
        hover: <Input defaultValue={figma.string('text')} style={{ width: 280 }} />,
        focus: <Input defaultValue={figma.string('text')} autoFocus style={{ width: 280 }} />,
        disabled: <Input defaultValue={figma.string('text')} disabled style={{ width: 280 }} />,
      }),
    }),
  },
  example: ({ root }) => root,
});

// Figma: "Input Password " · 2245:2211
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2211&m=dev
figma.connect(Input.Password, '<FIGMA_OCEANBASE_INPUT_PASSWORD>', {
  props: {
    root: figma.enum('placeholder', {
      true: figma.enum('satus', {
        default: <Input.Password placeholder="Enter" style={{ width: 280 }} />,
        hover: <Input.Password placeholder="Enter" style={{ width: 280 }} />,
        focus: <Input.Password placeholder="Enter" autoFocus style={{ width: 280 }} />,
        disabled: <Input.Password placeholder="Enter" disabled style={{ width: 280 }} />,
      }),
      false: figma.enum('satus', {
        default: <Input.Password defaultValue={figma.string('text')} style={{ width: 280 }} />,
        hover: <Input.Password defaultValue={figma.string('text')} style={{ width: 280 }} />,
        focus: (
          <Input.Password defaultValue={figma.string('text')} autoFocus style={{ width: 280 }} />
        ),
        disabled: (
          <Input.Password defaultValue={figma.string('text')} disabled style={{ width: 280 }} />
        ),
      }),
    }),
  },
  example: ({ root }) => root,
});

// Figma: "Input Search" · 2245:2340
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2340&m=dev
figma.connect(Input.Search, '<FIGMA_OCEANBASE_INPUT_SEARCH>', {
  props: {
    root: figma.enum('placeholder', {
      true: figma.enum('searchButton', {
        ture: figma.boolean('allowClear', {
          true: (
            <Input.Search
              placeholder="Search"
              prefix={<SearchOutlined />}
              enterButton
              allowClear
              style={{ width: 320 }}
            />
          ),
          false: (
            <Input.Search
              placeholder="Search"
              prefix={<SearchOutlined />}
              enterButton
              style={{ width: 320 }}
            />
          ),
        }),
        false: figma.boolean('allowClear', {
          true: (
            <Input.Search
              placeholder="Search"
              prefix={<SearchOutlined />}
              allowClear
              style={{ width: 320 }}
            />
          ),
          false: (
            <Input.Search placeholder="Search" prefix={<SearchOutlined />} style={{ width: 320 }} />
          ),
        }),
      }),
      false: figma.enum('searchButton', {
        ture: figma.boolean('allowClear', {
          true: (
            <Input.Search
              defaultValue={figma.string('text')}
              prefix={<SearchOutlined />}
              enterButton
              allowClear
              style={{ width: 320 }}
            />
          ),
          false: (
            <Input.Search
              defaultValue={figma.string('text')}
              prefix={<SearchOutlined />}
              enterButton
              style={{ width: 320 }}
            />
          ),
        }),
        false: figma.boolean('allowClear', {
          true: (
            <Input.Search
              defaultValue={figma.string('text')}
              prefix={<SearchOutlined />}
              allowClear
              style={{ width: 320 }}
            />
          ),
          false: (
            <Input.Search
              defaultValue={figma.string('text')}
              prefix={<SearchOutlined />}
              style={{ width: 320 }}
            />
          ),
        }),
      }),
    }),
  },
  example: ({ root }) => root,
});

// Figma: "Input TextArea" · 2245:2236
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2236&m=dev
figma.connect(Input.TextArea, '<FIGMA_OCEANBASE_INPUT_TEXTAREA>', {
  props: {
    root: figma.enum('placeholder', {
      true: figma.enum('status', {
        default: (
          <Input.TextArea
            placeholder="Enter"
            rows={4}
            maxLength={200}
            showCount
            style={{ width: 360, resize: 'none' }}
          />
        ),
        focus: (
          <Input.TextArea
            placeholder="Enter"
            rows={4}
            maxLength={2000}
            showCount
            autoFocus
            style={{ width: 360, resize: 'none' }}
          />
        ),
        disabled: (
          <Input.TextArea
            placeholder="Enter"
            rows={4}
            maxLength={200}
            showCount
            disabled
            style={{ width: 360, resize: 'none' }}
          />
        ),
      }),
      false: figma.enum('status', {
        default: (
          <Input.TextArea
            defaultValue={figma.string('text')}
            rows={4}
            maxLength={200}
            showCount
            style={{ width: 360, resize: 'none' }}
          />
        ),
        focus: (
          <Input.TextArea
            defaultValue={figma.string('text')}
            rows={4}
            maxLength={200}
            showCount
            autoFocus
            style={{ width: 360, resize: 'none' }}
          />
        ),
        disabled: (
          <Input.TextArea
            defaultValue={figma.string('text')}
            rows={4}
            maxLength={200}
            showCount
            disabled
            style={{ width: 360, resize: 'none' }}
          />
        ),
      }),
    }),
  },
  example: ({ root }) => root,
});
