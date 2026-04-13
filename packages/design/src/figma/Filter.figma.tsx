// @ts-nocheck

import { DownOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons';
import { CheckOutlined, GeneralFilterOutlined } from '@oceanbase/icons';
import {
  Badge,
  Button,
  Checkbox,
  Col,
  Divider,
  Dropdown,
  Flex,
  Form,
  Input,
  Row,
  Switch,
} from '@oceanbase/design';
import { figma } from '@figma/code-connect';

/**
 * Code Connect — Filter 页：映射均在各 `figma.connect` 的 `props` 内；`example` 不引用文件顶层函数组件。
 * Page: "↵Filter"
 */

// Figma: "Filters" · 5312:6672
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5312-6672&m=dev
figma.connect(Flex, '<FIGMA_OCEANBASE_FILTERS>', {
  props: {
    chip: figma.enum('status', {
      default: figma.enum('mini', {
        true: figma.enum('multiple', {
          true: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
        }),
        false: figma.enum('multiple', {
          true: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
        }),
      }),
      hover: figma.enum('mini', {
        true: figma.enum('multiple', {
          true: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#0d6cf2',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#0d6cf2',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#0d6cf2',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#0d6cf2',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#0d6cf2',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#0d6cf2',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#0d6cf2',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#0d6cf2',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
        }),
        false: figma.enum('multiple', {
          true: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
        }),
      }),
      focus: figma.enum('mini', {
        true: figma.enum('multiple', {
          true: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
        }),
        false: figma.enum('multiple', {
          true: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#132039',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#595959' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#ffffff',
                      border: '1px solid #8592ad',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#5c6b8a',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                ),
              }),
            }),
          }),
        }),
      }),
      disabled: figma.enum('mini', {
        true: figma.enum('multiple', {
          true: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 0px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
            }),
          }),
        }),
        false: figma.enum('multiple', {
          true: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={0}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={'5/6'}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 36,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                      <Badge
                        count={3}
                        showZero
                        styles={{
                          indicator: {
                            background: '#ebeff7',
                            color: '#5c6b8a',
                            fontSize: 12,
                            minWidth: 20,
                            height: 20,
                            lineHeight: '20px',
                            borderRadius: 10,
                            padding: '0 8px',
                          },
                        }}
                      />
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Value')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GeneralFilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
                false: (
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 4,
                      background: '#f5f7fc',
                      border: '1px solid #cdd5e4',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: '#b6c0d4',
                          lineHeight: '20px',
                        }}
                      >
                        {figma.string('Title')}
                      </span>
                    </div>
                    <DownOutlined style={{ fontSize: 12, color: '#b6c0d4' }} />
                  </Flex>
                ),
              }),
            }),
          }),
        }),
      }),
    }),
  },
  example: ({ chip }) => chip,
});

// Figma: "FiltersDropdown" · 5312:8231
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5312-8231&m=dev
figma.connect(Dropdown, '<FIGMA_OCEANBASE_FILTERSDROPDOWN>', {
  props: {
    moreFilterMode: figma.enum('moreFilter', {
      ture: 'more',
      false: 'list',
    }),
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
    menu: figma.enum('moreFilter', {
      ture: { items: [] },
      false: figma.boolean('multiple', {
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
    }),
    moreBody: figma.enum('moreFilter', {
      ture: figma.boolean('actions', {
        true: (
          <div style={{ width: 200, padding: '8px 0' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 16px',
              }}
            >
              <span style={{ fontSize: 14, color: '#132039' }}>More Filters</span>
              <Button type="link" size="small" icon={<PlusOutlined />}>
                Add
              </Button>
            </div>
            <div
              style={{
                padding: '0 16px 8px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontSize: 14, color: '#132039' }}>Option</span>
                <Switch size="small" defaultChecked={false} />
              </div>
              <Form layout="vertical" style={{ margin: 0 }}>
                <Form.Item label="Label" style={{ marginBottom: 6 }}>
                  <Input placeholder="Enter" />
                </Form.Item>
              </Form>
              <Input placeholder="item" style={{ width: '100%' }} />
            </div>
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
          </div>
        ),
        false: (
          <div style={{ width: 200, padding: '8px 0' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 16px',
              }}
            >
              <span style={{ fontSize: 14, color: '#132039' }}>More Filters</span>
              <Button type="link" size="small" icon={<PlusOutlined />}>
                Add
              </Button>
            </div>
            <div
              style={{
                padding: '0 16px 8px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontSize: 14, color: '#132039' }}>Option</span>
                <Switch size="small" defaultChecked={false} />
              </div>
              <Form layout="vertical" style={{ margin: 0 }}>
                <Form.Item label="Label" style={{ marginBottom: 6 }}>
                  <Input placeholder="Enter" />
                </Form.Item>
              </Form>
              <Input placeholder="item" style={{ width: '100%' }} />
            </div>
          </div>
        ),
      }),
      false: <></>,
    }),
  },
  example: ({ moreFilterMode, menu, titleHeader, searchSection, actionsFooter, moreBody }) => (
    <Dropdown
      trigger={['click']}
      open
      menu={menu}
      dropdownRender={node =>
        moreFilterMode === 'more' ? (
          <div
            style={{
              background: '#fff',
              borderRadius: 4,
              boxShadow: '0 6px 16px rgba(19,33,57,0.1)',
              overflow: 'hidden',
              minWidth: 200,
            }}
          >
            {moreBody}
          </div>
        ) : (
          <div
            style={{
              background: '#fff',
              borderRadius: 4,
              boxShadow: '0 6px 16px rgba(19,33,57,0.1)',
              overflow: 'hidden',
              minWidth: 240,
            }}
          >
            {titleHeader}
            {searchSection}
            {node}
            {actionsFooter}
          </div>
        )
      }
    >
      <Button type="default" size="small">
        选项
      </Button>
    </Dropdown>
  ),
});
