// @ts-nocheck

import { CheckOutlined } from '@oceanbase/icons';
import { PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Checkbox, Dropdown, Flex, Input, Space } from '@oceanbase/design';
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
        <Flex
          justify="space-between"
          align="center"
          style={{
            width: '100%',
            padding: '8px 12px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          }}
        >
          <span style={{ color: 'rgba(0,0,0,0.45)' }}>Title</span>
        </Flex>
      ),
      false: null,
    }),
    searchSection: figma.boolean('search', {
      true: (
        <Flex style={{ width: '100%', padding: '8px 12px 4px' }}>
          <Input.Search placeholder="Search" allowClear />
        </Flex>
      ),
      false: null,
    }),
    actionsFooter: figma.boolean('actions', {
      true: (
        <Flex
          justify="space-between"
          align="center"
          style={{
            width: '100%',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)',
            padding: '8px 12px',
          }}
        >
          <Button type="primary" size="small">
            Apply
          </Button>
          <Button type="link" size="small">
            Clear All
          </Button>
        </Flex>
      ),
      false: null,
    }),
    menu: figma.boolean('multiple', {
      false: figma.boolean('subitem', {
        false: {
          selectable: true,
          multiple: false,
          selectedKeys: ['1'],
          style: {
            width: '100%',
            minWidth: 0,
            background: 'transparent',
            boxShadow: 'none',
            borderRadius: 0,
          },
          items: [
            {
              key: '1',
              label: (
                <Flex justify="space-between" align="center" gap={8} style={{ width: '100%' }}>
                  <span>{figma.string('Label')}</span>
                  <CheckOutlined style={{ color: '#1677ff', fontSize: 14 }} />
                </Flex>
              ),
            },
            {
              key: '2',
              label: (
                <Flex justify="space-between" align="center" gap={8} style={{ width: '100%' }}>
                  <span>{figma.string('Label')}</span>
                  <span style={{ width: 14 }} />
                </Flex>
              ),
            },
            {
              key: '3',
              label: (
                <Flex justify="space-between" align="center" gap={8} style={{ width: '100%' }}>
                  <span>{figma.string('Label')}</span>
                  <span style={{ width: 14 }} />
                </Flex>
              ),
              style: { background: 'rgba(22, 119, 255, 0.08)' },
            },
            {
              key: '4',
              label: (
                <Flex justify="space-between" align="center" gap={8} style={{ width: '100%' }}>
                  <span>{figma.string('Label')}</span>
                  <span style={{ width: 14 }} />
                </Flex>
              ),
            },
            {
              key: '5',
              label: (
                <Flex justify="space-between" align="center" gap={8} style={{ width: '100%' }}>
                  <span>{figma.string('Label')}</span>
                  <span style={{ width: 14 }} />
                </Flex>
              ),
            },
          ],
        },
        true: {
          selectable: false,
          style: {
            width: '100%',
            minWidth: 0,
            background: 'transparent',
            boxShadow: 'none',
            borderRadius: 0,
          },
          items: [
            {
              key: '1',
              label: figma.string('Label'),
              children: [{ key: '1-sub', label: 'Sub item' }],
            },
            {
              key: '2',
              label: figma.string('Label'),
              children: [{ key: '2-sub', label: 'Sub item' }],
            },
            {
              key: '3',
              label: figma.string('Label'),
              children: [{ key: '3-sub', label: 'Sub item' }],
            },
            {
              key: '4',
              label: figma.string('Label'),
              children: [{ key: '4-sub', label: 'Sub item' }],
            },
          ],
        },
      }),
      true: figma.boolean('subitem', {
        false: {
          selectable: false,
          style: {
            width: '100%',
            minWidth: 0,
            background: 'transparent',
            boxShadow: 'none',
            borderRadius: 0,
          },
          items: [
            {
              key: '1',
              label: (
                <Flex align="center" gap={8} style={{ width: '100%' }}>
                  <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </Flex>
              ),
            },
            {
              key: '2',
              label: (
                <Flex align="center" gap={8} style={{ width: '100%' }}>
                  <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </Flex>
              ),
            },
            {
              key: '3',
              label: (
                <Flex align="center" gap={8} style={{ width: '100%' }}>
                  <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </Flex>
              ),
            },
            {
              key: '4',
              label: (
                <Flex align="center" gap={8} style={{ width: '100%' }}>
                  <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </Flex>
              ),
            },
            {
              key: '5',
              label: (
                <Flex align="center" gap={8} style={{ width: '100%' }}>
                  <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </Flex>
              ),
            },
          ],
        },
        true: {
          selectable: false,
          style: {
            width: '100%',
            minWidth: 0,
            background: 'transparent',
            boxShadow: 'none',
            borderRadius: 0,
          },
          items: [
            {
              key: '1',
              label: (
                <Flex align="center" gap={8} style={{ width: '100%' }}>
                  <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </Flex>
              ),
              children: [{ key: '1-sub', label: 'Sub item' }],
            },
            {
              key: '2',
              label: (
                <Flex align="center" gap={8} style={{ width: '100%' }}>
                  <Checkbox defaultChecked onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </Flex>
              ),
              children: [{ key: '2-sub', label: 'Sub item' }],
            },
            {
              key: '3',
              label: (
                <Flex align="center" gap={8} style={{ width: '100%' }}>
                  <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </Flex>
              ),
              children: [{ key: '3-sub', label: 'Sub item' }],
            },
            {
              key: '4',
              label: (
                <Flex align="center" gap={8} style={{ width: '100%' }}>
                  <Checkbox defaultChecked={false} onClick={e => e.stopPropagation()} />
                  <span>{figma.string('Label')}</span>
                </Flex>
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
      popupRender={node => (
        <Flex
          vertical
          align="stretch"
          style={{
            minWidth: 160,
            width: '100%',
            background: '#ffffff',
            borderRadius: 8,
            boxShadow:
              '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden',
          }}
        >
          {titleHeader}
          {searchSection}
          {node}
          {actionsFooter}
        </Flex>
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
        <Flex justify="space-between" align="center" style={{ width: '100%' }}>
          <Button type="primary" size="small">
            Apply
          </Button>
          <Button type="link" size="small">
            Clear All
          </Button>
        </Flex>
      ),
      add: (
        <Flex justify="flex-start" align="center" style={{ width: '100%' }}>
          <Button type="link" size="small" icon={<PlusOutlined />} iconPosition="start">
            Add
          </Button>
        </Flex>
      ),
    }),
    menu: {
      selectable: true,
      multiple: true,
      items: [
        { key: 'oceanbase-dropdown-actions-1', label: 'Item 1' },
        { key: 'oceanbase-dropdown-actions-2', label: 'Item 2' },
      ],
      style: {
        width: '100%',
        minWidth: 0,
        background: 'transparent',
        boxShadow: 'none',
        borderRadius: 0,
      },
    },
  },
  example: ({ actionsFooter, menu }) => (
    <Dropdown
      trigger={['click']}
      open
      menu={menu}
      popupRender={node => (
        <Flex
          vertical
          align="stretch"
          style={{
            minWidth: 160,
            width: '100%',
            background: '#ffffff',
            borderRadius: 8,
            boxShadow:
              '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden',
          }}
        >
          {node}
          <Flex
            vertical
            align="stretch"
            style={{
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              padding: '8px 12px',
              width: '100%',
            }}
          >
            {actionsFooter}
          </Flex>
        </Flex>
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
// `subitem && itemNum`：子菜单父级不展示 `extra`，故在 `subitem: true` 下用 `label: figma.boolean('itemNum', …)` 将右侧对勾/徽标并入 `label`（与 demo/dropdown-item.tsx 的 buildDropdownItemMenu 一致）；`subitem: false` 仍用 `extra`。
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
            label: figma.boolean('itemNum', {
              false: figma.boolean('checkbox', {
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
              true: (
                <Flex
                  justify="space-between"
                  align="center"
                  gap={8}
                  style={{ width: '100%', minWidth: 0, flex: 1 }}
                >
                  <Flex align="center" style={{ minWidth: 0, flex: '1 1 auto' }}>
                    {figma.boolean('checkbox', {
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
                    })}
                  </Flex>
                  <Space size={8} align="center" style={{ flexShrink: 0, marginLeft: 'auto' }}>
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
                </Flex>
              ),
            }),
            disabled: figma.enum('status', {
              default: false,
              hover: false,
              selected: false,
              disabled: true,
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
        <Button type="link" size="small" icon={<PlusOutlined />} iconPosition="start">
          Add
        </Button>
      ),
      false: null,
    }),
    menu: {
      items: [{ key: 'oceanbase-dropdown-title-sample', label: 'Item' }],
      style: {
        width: '100%',
        minWidth: 0,
        background: 'transparent',
        boxShadow: 'none',
        borderRadius: 0,
      },
    },
  },
  example: ({ titleAction, menu }) => (
    <Dropdown
      trigger={['click']}
      open
      menu={menu}
      popupRender={node => (
        <Flex
          vertical
          align="stretch"
          style={{
            minWidth: 160,
            width: '100%',
            background: '#ffffff',
            borderRadius: 8,
            boxShadow:
              '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden',
          }}
        >
          <Flex
            justify="space-between"
            align="center"
            style={{
              width: '100%',
              padding: '8px 12px',
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            }}
          >
            <span style={{ color: 'rgba(0,0,0,0.45)' }}>Title</span>
            {titleAction}
          </Flex>
          {node}
        </Flex>
      )}
    >
      <Button type="default">Open menu</Button>
    </Dropdown>
  ),
});
