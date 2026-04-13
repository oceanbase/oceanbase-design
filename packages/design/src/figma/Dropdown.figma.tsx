// @ts-nocheck

import { CheckOutlined } from '@oceanbase/icons';
import { PlusOutlined, RightOutlined } from '@ant-design/icons';
import {
  Badge,
  Button,
  Checkbox,
  Col,
  Divider,
  Dropdown,
  Input,
  Row,
  Space,
} from '@oceanbase/design';
import { figma } from '@figma/code-connect';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Dropdown"
 */

// Figma: "Dropdown" · 2359:4334
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2359-4334&m=dev
figma.connect(Dropdown, '<FIGMA_OCEANBASE_DROPDOWN>', {
  props: {
    titleHeader: figma.boolean('title', {
      true: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 12px',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <span style={{ color: 'rgba(0,0,0,0.45)' }}>Title</span>
        </div>
      ),
      false: null,
    }),
    searchSection: figma.boolean('search', {
      true: (
        <div style={{ padding: '8px 12px 4px' }}>
          <Input.Search placeholder="Search" allowClear />
        </div>
      ),
      false: null,
    }),
    actionsFooter: figma.boolean('actions', {
      true: (
        <>
          <Divider style={{ margin: 0 }} />
          <Row justify="space-between" align="middle" style={{ padding: '8px 12px' }}>
            <Col>
              <Button type="primary" size="small">
                Apply
              </Button>
            </Col>
            <Col>
              <Button type="text" size="middle">
                Clear All
              </Button>
            </Col>
          </Row>
        </>
      ),
      false: null,
    }),
    menu: figma.boolean('multiple', {
      false: figma.boolean('subitem', {
        false: {
          selectable: true,
          multiple: false,
          selectedKeys: ['1'],
          items: [
            {
              key: '1',
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    gap: 8,
                  }}
                >
                  <span>{figma.string('Label')}</span>
                  <CheckOutlined style={{ color: '#1677ff', fontSize: 14 }} />
                </div>
              ),
            },
            {
              key: '2',
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    gap: 8,
                  }}
                >
                  <span>{figma.string('Label')}</span>
                  <span style={{ width: 14 }} />
                </div>
              ),
            },
            {
              key: '3',
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    gap: 8,
                  }}
                >
                  <span>{figma.string('Label')}</span>
                  <span style={{ width: 14 }} />
                </div>
              ),
              style: { background: 'rgba(22, 119, 255, 0.08)' },
            },
            {
              key: '4',
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    gap: 8,
                  }}
                >
                  <span>{figma.string('Label')}</span>
                  <span style={{ width: 14 }} />
                </div>
              ),
            },
            {
              key: '5',
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    gap: 8,
                  }}
                >
                  <span>{figma.string('Label')}</span>
                  <span style={{ width: 14 }} />
                </div>
              ),
            },
          ],
        },
        true: {
          selectable: false,
          items: [
            {
              key: '1',
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <span>{figma.string('Label')}</span>
                  <RightOutlined style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }} />
                </div>
              ),
              children: [{ key: '1-sub', label: 'Sub item' }],
            },
            {
              key: '2',
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <span>{figma.string('Label')}</span>
                  <RightOutlined style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }} />
                </div>
              ),
              children: [{ key: '2-sub', label: 'Sub item' }],
            },
            {
              key: '3',
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <span>{figma.string('Label')}</span>
                  <RightOutlined style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }} />
                </div>
              ),
              children: [{ key: '3-sub', label: 'Sub item' }],
            },
            {
              key: '4',
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <span>{figma.string('Label')}</span>
                  <RightOutlined style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }} />
                </div>
              ),
              children: [{ key: '4-sub', label: 'Sub item' }],
            },
          ],
        },
      }),
      true: figma.boolean('subitem', {
        false: {
          selectable: false,
          items: [
            {
              key: '1',
              label: (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    width: '100%',
                  }}
                >
                  <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </div>
              ),
            },
            {
              key: '2',
              label: (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    width: '100%',
                  }}
                >
                  <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </div>
              ),
            },
            {
              key: '3',
              label: (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    width: '100%',
                  }}
                >
                  <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </div>
              ),
            },
            {
              key: '4',
              label: (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    width: '100%',
                  }}
                >
                  <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </div>
              ),
            },
            {
              key: '5',
              label: (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    width: '100%',
                  }}
                >
                  <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </div>
              ),
            },
          ],
        },
        true: {
          selectable: false,
          items: [
            {
              key: '1',
              label: (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
                    <span>{figma.string('Label')}</span>
                  </div>
                  <RightOutlined style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }} />
                </div>
              ),
              children: [{ key: '1-sub', label: 'Sub item' }],
            },
            {
              key: '2',
              label: (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
                    <span>{figma.string('Label')}</span>
                  </div>
                  <RightOutlined style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }} />
                </div>
              ),
              children: [{ key: '2-sub', label: 'Sub item' }],
            },
            {
              key: '3',
              label: (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
                    <span>{figma.string('Label')}</span>
                  </div>
                  <RightOutlined style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }} />
                </div>
              ),
              children: [{ key: '3-sub', label: 'Sub item' }],
            },
            {
              key: '4',
              label: (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
                    <span>{figma.string('Label')}</span>
                  </div>
                  <RightOutlined style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }} />
                </div>
              ),
              children: [{ key: '4-sub', label: 'Sub item' }],
            },
          ],
        },
      }),
    }),
  },
  example: ({ titleHeader, searchSection, actionsFooter, menu }) => (
    <Dropdown
      trigger={['click']}
      open
      menu={menu}
      dropdownRender={node => (
        <div>
          {titleHeader}
          {searchSection}
          {node}
          {actionsFooter}
        </div>
      )}
    >
      <Button type="default" size="small">
        选项
      </Button>
    </Dropdown>
  ),
});

// Figma: "DropdownActions" · 5307:14386
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5307-14386&m=dev
// type=apply: 多选底部 Apply + Clear All（两端对齐）；type=add: 底部 + Add（左对齐）
figma.connect(Dropdown, '<FIGMA_OCEANBASE_DROPDOWNACTIONS>', {
  props: {
    actionsFooter: figma.enum('type', {
      apply: (
        <Row justify="space-between" align="middle" style={{ padding: '8px 12px' }}>
          <Col>
            <Button type="primary" size="small">
              Apply
            </Button>
          </Col>
          <Col>
            <Button type="text" size="middle">
              Clear All
            </Button>
          </Col>
        </Row>
      ),
      add: (
        <div style={{ padding: '8px 12px' }}>
          <Button type="text" size="middle" icon={<PlusOutlined />} iconPosition="start">
            Add
          </Button>
        </div>
      ),
    }),
  },
  example: ({ actionsFooter }) => (
    <Dropdown
      trigger={['click']}
      open
      menu={{
        selectable: true,
        multiple: true,
        items: [
          { key: 'oceanbase-dropdown-actions-1', label: 'Item 1' },
          { key: 'oceanbase-dropdown-actions-2', label: 'Item 2' },
        ],
      }}
      dropdownRender={node => (
        <div>
          {node}
          <Divider style={{ margin: 0 }} />
          {actionsFooter}
        </div>
      )}
    >
      <Button type="default" size="small">
        选项
      </Button>
    </Dropdown>
  ),
});

// Figma: "DropdownItem" · 2359:3181
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/...?node-id=2359-3181
figma.connect(Dropdown, '<FIGMA_OCEANBASE_DROPDOWNITEM>', {
  props: {
    trigger: ['click'],
    open: true,
    children: <Button type="default">Open menu</Button>,
    menu: {
      selectable: figma.boolean('checkbox', {
        true: true,
        false: false,
      }),
      multiple: figma.boolean('checkbox', {
        true: true,
        false: false,
      }),
      selectedKeys: figma.boolean('checkbox', {
        true: figma.enum('status', {
          default: [],
          hover: [],
          selected: ['oceanbase-dropdown-item'],
          disabled: [],
        }),
        false: [],
      }),
      items: [
        figma.boolean('subitem', {
          true: {
            key: 'oceanbase-dropdown-item',
            label: figma.boolean('checkbox', {
              false: figma.boolean('badge', {
                true: (
                  <Space size={8} align="center">
                    {figma.enum('status', {
                      default: <Badge dot color="#52c41a" size="small" />,
                      hover: <Badge dot color="#52c41a" size="small" />,
                      selected: <Badge dot color="#52c41a" size="small" />,
                      disabled: <Badge dot color="#ff4d4f" size="small" />,
                    })}
                    {figma.boolean('icon', {
                      true: figma.instance('icontype'),
                      false: undefined,
                    })}
                    {figma.string('Label')}
                  </Space>
                ),
                false: figma.boolean('icon', {
                  true: (
                    <Space size={8} align="center">
                      {figma.instance('icontype')}
                      {figma.string('Label')}
                    </Space>
                  ),
                  false: figma.string('Label'),
                }),
              }),
              true: figma.boolean('badge', {
                true: (
                  <Space size={8} align="center">
                    <Checkbox
                      checked={figma.enum('status', {
                        default: false,
                        hover: false,
                        selected: true,
                        disabled: false,
                      })}
                      disabled={figma.enum('status', {
                        default: false,
                        hover: false,
                        selected: false,
                        disabled: true,
                      })}
                    />
                    {figma.enum('status', {
                      default: <Badge dot color="#52c41a" size="small" />,
                      hover: <Badge dot color="#52c41a" size="small" />,
                      selected: <Badge dot color="#52c41a" size="small" />,
                      disabled: <Badge dot color="#ff4d4f" size="small" />,
                    })}
                    {figma.boolean('icon', {
                      true: figma.instance('icontype'),
                      false: undefined,
                    })}
                    {figma.string('Label')}
                  </Space>
                ),
                false: (
                  <Space size={8} align="center">
                    <Checkbox
                      checked={figma.enum('status', {
                        default: false,
                        hover: false,
                        selected: true,
                        disabled: false,
                      })}
                      disabled={figma.enum('status', {
                        default: false,
                        hover: false,
                        selected: false,
                        disabled: true,
                      })}
                    />
                    {figma.boolean('icon', {
                      true: figma.instance('icontype'),
                      false: undefined,
                    })}
                    {figma.string('Label')}
                  </Space>
                ),
              }),
            }),
            disabled: figma.enum('status', {
              default: false,
              hover: false,
              selected: false,
              disabled: true,
            }),
            extra: figma.boolean('itemNum', {
              true: (
                <Space size={8} align="center">
                  {figma.enum('status', {
                    default: null,
                    hover: null,
                    selected: <CheckOutlined style={{ color: '#1677ff', fontSize: 14 }} />,
                    disabled: null,
                  })}
                  <Badge
                    count={99}
                    styles={{
                      indicator: {
                        background: '#ebeff7',
                        color: '#5c6b8a',
                      },
                    }}
                  />
                </Space>
              ),
              false: undefined,
            }),
            children: [
              {
                key: 'oceanbase-dropdown-item-sub',
                label: 'Sub item',
              },
            ],
          },
          false: {
            key: 'oceanbase-dropdown-item',
            label: figma.boolean('checkbox', {
              false: figma.boolean('badge', {
                true: (
                  <Space size={8} align="center">
                    {figma.enum('status', {
                      default: <Badge dot color="#52c41a" size="small" />,
                      hover: <Badge dot color="#52c41a" size="small" />,
                      selected: <Badge dot color="#52c41a" size="small" />,
                      disabled: <Badge dot color="#ff4d4f" size="small" />,
                    })}
                    {figma.boolean('icon', {
                      true: figma.instance('icontype'),
                      false: undefined,
                    })}
                    {figma.string('Label')}
                  </Space>
                ),
                false: figma.boolean('icon', {
                  true: (
                    <Space size={8} align="center">
                      {figma.instance('icontype')}
                      {figma.string('Label')}
                    </Space>
                  ),
                  false: figma.string('Label'),
                }),
              }),
              true: figma.boolean('badge', {
                true: (
                  <Space size={8} align="center">
                    <Checkbox
                      checked={figma.enum('status', {
                        default: false,
                        hover: false,
                        selected: true,
                        disabled: false,
                      })}
                      disabled={figma.enum('status', {
                        default: false,
                        hover: false,
                        selected: false,
                        disabled: true,
                      })}
                    />
                    {figma.enum('status', {
                      default: <Badge dot color="#52c41a" size="small" />,
                      hover: <Badge dot color="#52c41a" size="small" />,
                      selected: <Badge dot color="#52c41a" size="small" />,
                      disabled: <Badge dot color="#ff4d4f" size="small" />,
                    })}
                    {figma.boolean('icon', {
                      true: figma.instance('icontype'),
                      false: undefined,
                    })}
                    {figma.string('Label')}
                  </Space>
                ),
                false: (
                  <Space size={8} align="center">
                    <Checkbox
                      checked={figma.enum('status', {
                        default: false,
                        hover: false,
                        selected: true,
                        disabled: false,
                      })}
                      disabled={figma.enum('status', {
                        default: false,
                        hover: false,
                        selected: false,
                        disabled: true,
                      })}
                    />
                    {figma.boolean('icon', {
                      true: figma.instance('icontype'),
                      false: undefined,
                    })}
                    {figma.string('Label')}
                  </Space>
                ),
              }),
            }),
            disabled: figma.enum('status', {
              default: false,
              hover: false,
              selected: false,
              disabled: true,
            }),
            extra: figma.boolean('itemNum', {
              true: (
                <Space size={8} align="center">
                  {figma.enum('status', {
                    default: null,
                    hover: null,
                    selected: <CheckOutlined style={{ color: '#1677ff', fontSize: 14 }} />,
                    disabled: null,
                  })}
                  <Badge
                    count={99}
                    styles={{
                      indicator: {
                        background: '#ebeff7',
                        color: '#5c6b8a',
                      },
                    }}
                  />
                </Space>
              ),
              false: undefined,
            }),
          },
        }),
      ],
    },
  },
  example: ({ trigger, open, menu, children }) => (
    <Dropdown trigger={trigger} open={open} menu={menu}>
      {children}
    </Dropdown>
  ),
});

// Figma: "DropdownTitle" · 5312:8660
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5312-8660&m=dev
figma.connect(Dropdown, '<FIGMA_OCEANBASE_DROPDOWNTITLE>', {
  props: {
    titleAction: figma.boolean('actions', {
      true: (
        <Button type="text" size="middle" icon={<PlusOutlined />} iconPosition="start">
          Add
        </Button>
      ),
      false: null,
    }),
  },
  example: ({ titleAction }) => (
    <Dropdown
      trigger={['click']}
      open
      menu={{
        items: [{ key: 'oceanbase-dropdown-title-sample', label: 'Item' }],
      }}
      dropdownRender={node => (
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 12px',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <span style={{ color: 'rgba(0,0,0,0.45)' }}>Title</span>
            {titleAction}
          </div>
          {node}
        </div>
      )}
    >
      <Button type="default">Open menu</Button>
    </Dropdown>
  ),
});
