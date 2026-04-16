// @ts-nocheck

import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { CheckOutlined, FilterOutlined } from '@oceanbase/icons';
import {
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
  Filter,
} from '@oceanbase/design';
import { figma } from '@figma/code-connect';

/**
 * Code Connect — Filter 页：映射均在各 `figma.connect` 的 `props` 内；`example` 不引用文件顶层函数组件。
 * `<FIGMA_OCEANBASE_FILTERS>` 使用 `Filter.Checkbox`（MCP get_context_for_code_connect 5312:6672）；`FiltersDropdown` 仍用 `Dropdown` + `Flex` 布局（§3.5）。
 * Page: "↵Filter"
 */

// Figma: "Filters" · 5312:6672
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5312-6672&m=dev
figma.connect(Filter.Checkbox, '<FIGMA_OCEANBASE_FILTERS>', {
  props: {
    chip: figma.enum('status', {
      default: figma.enum('mini', {
        true: figma.enum('multiple', {
          true: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
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
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
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
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
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
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
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
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
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
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#595959' }} />}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={false}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
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
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={true}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={true}
                    bordered={false}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={false}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
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
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c', 'd', 'e']}
                    count={{ showTotal: true }}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={['a', 'b', 'c']}
                    count={true}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
          }),
          false: figma.enum('value', {
            true: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={true}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Value')}
                    icon={undefined}
                    disabled={true}
                    bordered={true}
                    options={[{ value: '1', label: figma.string('Value') }]}
                    value={['1']}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
            false: figma.enum('moreFilters', {
              true: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
              false: figma.boolean('filterIcon', {
                true: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={<FilterOutlined style={{ fontSize: 14, color: '#b6c0d4' }} />}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
                false: (
                  <Filter.Checkbox
                    label={figma.string('Title')}
                    icon={undefined}
                    disabled={true}
                    bordered={true}
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                    ]}
                    value={[]}
                    count={false}
                    allowClear={false}
                  />
                ),
              }),
            }),
          }),
        }),
      }),
    }),
  },
  example: ({ chip }) => <div>{chip}</div>,
});

// Figma: "FiltersDropdown" · 5312:8231
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5312-8231&m=dev
figma.connect(Dropdown, '<FIGMA_OCEANBASE_FILTERSDROPDOWN>', {
  props: {
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
                  <Flex justify="space-between" align="center" style={{ width: '100%', gap: 8 }}>
                    <span>{figma.string('Label')}</span>
                    <CheckOutlined style={{ color: '#1677ff', fontSize: 14 }} />
                  </Flex>
                ),
              },
              {
                key: '2',
                label: (
                  <Flex justify="space-between" align="center" style={{ width: '100%', gap: 8 }}>
                    <span>{figma.string('Label')}</span>
                    <span style={{ width: 14 }} />
                  </Flex>
                ),
              },
              {
                key: '3',
                label: (
                  <Flex justify="space-between" align="center" style={{ width: '100%', gap: 8 }}>
                    <span>{figma.string('Label')}</span>
                    <span style={{ width: 14 }} />
                  </Flex>
                ),
                style: { background: 'rgba(22, 119, 255, 0.08)' },
              },
              {
                key: '4',
                label: (
                  <Flex justify="space-between" align="center" style={{ width: '100%', gap: 8 }}>
                    <span>{figma.string('Label')}</span>
                    <span style={{ width: 14 }} />
                  </Flex>
                ),
              },
              {
                key: '5',
                label: (
                  <Flex justify="space-between" align="center" style={{ width: '100%', gap: 8 }}>
                    <span>{figma.string('Label')}</span>
                    <span style={{ width: 14 }} />
                  </Flex>
                ),
              },
            ],
          },
          true: {
            selectable: false,
            items: [
              {
                key: '1',
                label: <span>{figma.string('Label')}</span>,
                children: [{ key: '1-sub', label: 'Sub item' }],
              },
              {
                key: '2',
                label: <span>{figma.string('Label')}</span>,
                children: [{ key: '2-sub', label: 'Sub item' }],
              },
              {
                key: '3',
                label: <span>{figma.string('Label')}</span>,
                children: [{ key: '3-sub', label: 'Sub item' }],
              },
              {
                key: '4',
                label: <span>{figma.string('Label')}</span>,
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
    }),
    popupRender: figma.enum('moreFilter', {
      ture: figma.boolean('actions', {
        true: node => (
          <div
            style={{
              minWidth: 200,
              width: '100%',
              background: '#ffffff',
              borderRadius: 8,
              boxShadow:
                '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
            }}
          >
            <div style={{ width: 200, padding: '8px 0' }}>
              <Flex justify="space-between" align="center" style={{ padding: '8px 16px' }}>
                <span style={{ fontSize: 14, color: '#132039' }}>More Filters</span>
                <Button type="link" size="small" icon={<PlusOutlined />}>
                  Add
                </Button>
              </Flex>
              <Flex vertical gap={16} style={{ padding: '0 16px 8px' }}>
                <Flex justify="space-between" align="center">
                  <span style={{ fontSize: 14, color: '#132039' }}>Option</span>
                  <Switch size="small" defaultChecked={false} />
                </Flex>
                <Form layout="vertical" style={{ margin: 0 }}>
                  <Form.Item label="Label" style={{ marginBottom: 6 }}>
                    <Input placeholder="Enter" />
                  </Form.Item>
                </Form>
                <Input placeholder="item" style={{ width: '100%' }} />
              </Flex>
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
          </div>
        ),
        false: node => (
          <div
            style={{
              minWidth: 200,
              width: '100%',
              background: '#ffffff',
              borderRadius: 8,
              boxShadow:
                '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
            }}
          >
            <div style={{ width: 200, padding: '8px 0' }}>
              <Flex justify="space-between" align="center" style={{ padding: '8px 16px' }}>
                <span style={{ fontSize: 14, color: '#132039' }}>More Filters</span>
                <Button type="link" size="small" icon={<PlusOutlined />}>
                  Add
                </Button>
              </Flex>
              <Flex vertical gap={16} style={{ padding: '0 16px 8px' }}>
                <Flex justify="space-between" align="center">
                  <span style={{ fontSize: 14, color: '#132039' }}>Option</span>
                  <Switch size="small" defaultChecked={false} />
                </Flex>
                <Form layout="vertical" style={{ margin: 0 }}>
                  <Form.Item label="Label" style={{ marginBottom: 6 }}>
                    <Input placeholder="Enter" />
                  </Form.Item>
                </Form>
                <Input placeholder="item" style={{ width: '100%' }} />
              </Flex>
            </div>
          </div>
        ),
      }),
      false: figma.boolean('title', {
        true: figma.boolean('search', {
          true: figma.boolean('actions', {
            true: node => (
              <div
                style={{
                  minWidth: 240,
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
                    padding: '8px 12px',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <span style={{ color: 'rgba(0,0,0,0.45)' }}>{figma.string('Title')}</span>
                </Flex>

                <div style={{ padding: '8px 12px 4px' }}>
                  <Input.Search placeholder="Search" allowClear />
                </div>
                {node}

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
              </div>
            ),
            false: node => (
              <div
                style={{
                  minWidth: 240,
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
                    padding: '8px 12px',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <span style={{ color: 'rgba(0,0,0,0.45)' }}>{figma.string('Title')}</span>
                </Flex>

                <div style={{ padding: '8px 12px 4px' }}>
                  <Input.Search placeholder="Search" allowClear />
                </div>
                {node}
              </div>
            ),
          }),
          false: figma.boolean('actions', {
            true: node => (
              <div
                style={{
                  minWidth: 240,
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
                    padding: '8px 12px',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <span style={{ color: 'rgba(0,0,0,0.45)' }}>{figma.string('Title')}</span>
                </Flex>
                {node}

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
              </div>
            ),
            false: node => (
              <div
                style={{
                  minWidth: 240,
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
                    padding: '8px 12px',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <span style={{ color: 'rgba(0,0,0,0.45)' }}>{figma.string('Title')}</span>
                </Flex>
                {node}
              </div>
            ),
          }),
        }),
        false: figma.boolean('search', {
          true: figma.boolean('actions', {
            true: node => (
              <div
                style={{
                  minWidth: 240,
                  width: '100%',
                  background: '#ffffff',
                  borderRadius: 8,
                  boxShadow:
                    '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '8px 12px 4px' }}>
                  <Input.Search placeholder="Search" allowClear />
                </div>
                {node}

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
              </div>
            ),
            false: node => (
              <div
                style={{
                  minWidth: 240,
                  width: '100%',
                  background: '#ffffff',
                  borderRadius: 8,
                  boxShadow:
                    '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '8px 12px 4px' }}>
                  <Input.Search placeholder="Search" allowClear />
                </div>
                {node}
              </div>
            ),
          }),
          false: figma.boolean('actions', {
            true: node => (
              <div
                style={{
                  minWidth: 240,
                  width: '100%',
                  background: '#ffffff',
                  borderRadius: 8,
                  boxShadow:
                    '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden',
                }}
              >
                {node}

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
              </div>
            ),
            false: node => (
              <div
                style={{
                  minWidth: 240,
                  width: '100%',
                  background: '#ffffff',
                  borderRadius: 8,
                  boxShadow:
                    '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden',
                }}
              >
                {node}
              </div>
            ),
          }),
        }),
      }),
    }),
  },
  example: ({ menu, popupRender }) => (
    <Dropdown trigger={['click']} menu={menu} popupRender={popupRender}>
      <Button type="default" size="small">
        选项
      </Button>
    </Dropdown>
  ),
});
