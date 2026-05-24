// @ts-nocheck

import { ArrowRightOutlined, LeftOutlined, ReloadOutlined, RightOutlined } from '@oceanbase/icons';
import { figma } from '@figma/code-connect';
import { Button, DatePicker, Flex, Tag, TimePicker } from '@oceanbase/design';
import dayjs from 'dayjs';

/**
 * Code Connect — DatePicker 面板变体 + DateRager 时间区间条（Figma 组合）。
 * §3.4c：映射不含 style / styles / className / popupStyle；稿面像素见 `demo/*.figma.tsx`（§3.4a）。
 * `range` / `rangeOption` 为稿面布尔控件 → `figma.boolean`（§2.1）。
 * Page: "↵DatePicker"
 */

// Figma: "DatePicker" · 2424:15824
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2424-15824&m=dev
figma.connect(Flex, '<FIGMA_OCEANBASE_DATEPICKER>', {
  props: {
    body: figma.enum('type', {
      date: (
        <Flex vertical align="start">
          <DatePicker
            picker="date"
            defaultValue={dayjs('2025-03-19 12:00:00')}
            format="MM/DD/YYYY"
            open
            getPopupContainer={n => n.parentElement ?? document.body}
          />
        </Flex>
      ),
      'date range': (
        <Flex vertical align="start">
          <DatePicker.RangePicker
            defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
            format="MM/DD/YYYY"
            open
            getPopupContainer={n => n.parentElement ?? document.body}
          />
        </Flex>
      ),
      'date+time': (
        <Flex vertical align="start">
          <DatePicker
            showTime
            defaultValue={dayjs('2025-03-19 12:00:00')}
            format="MM/DD/YYYY HH:mm:ss"
            open
            getPopupContainer={n => n.parentElement ?? document.body}
          />
        </Flex>
      ),
      time: (
        <Flex vertical align="start">
          <TimePicker
            defaultValue={dayjs('2025-03-19 12:00:00')}
            format="HH:mm:ss"
            open
            getPopupContainer={n => n.parentElement ?? document.body}
          />
        </Flex>
      ),
    }),
  },
  example: ({ body }) => <div>{body}</div>,
});

// Figma: "DateRager" · 2424:1382
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2424-1382&m=dev
figma.connect(Flex, '<FIGMA_OCEANBASE_DATERAGER>', {
  props: {
    root: figma.boolean('range', {
      true: figma.boolean('rangeOption', {
        true: figma.enum('status', {
          default: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex align="center" gap={8} flex={1}>
                    <Tag>1h</Tag>
                    <span>03/19/2025 12:00:00</span>
                    <ArrowRightOutlined />
                    <span>03/19/2025 12:00:00</span>
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
                <Button type="default" icon={<ReloadOutlined />} />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex align="center" gap={8} flex={1}>
                    <Tag>1h</Tag>
                    <span>03/19/2025 12:00:00</span>
                    <ArrowRightOutlined />
                    <span>03/19/2025 12:00:00</span>
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
              </Flex>
            ),
          }),
          focus: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex flex={1}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                    />
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
                <Button type="default" icon={<ReloadOutlined />} />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex flex={1}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                    />
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
              </Flex>
            ),
          }),
        }),
        false: figma.enum('status', {
          default: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex flex={1}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open={false}
                      getPopupContainer={n => n.parentElement ?? document.body}
                    />
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
                <Button type="default" icon={<ReloadOutlined />} />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex flex={1}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open={false}
                      getPopupContainer={n => n.parentElement ?? document.body}
                    />
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
              </Flex>
            ),
          }),
          focus: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex flex={1}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                    />
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
                <Button type="default" icon={<ReloadOutlined />} />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex flex={1}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                    />
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
              </Flex>
            ),
          }),
        }),
      }),
      false: figma.boolean('rangeOption', {
        true: figma.enum('status', {
          default: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex align="center" gap={8} flex={1}>
                    <Tag>3d</Tag>
                    <span>Last 3 hours</span>
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
                <Button type="default" icon={<ReloadOutlined />} />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex align="center" gap={8} flex={1}>
                    <Tag>3d</Tag>
                    <span>Last 3 hours</span>
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
              </Flex>
            ),
          }),
          focus: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex flex={1}>
                    <DatePicker
                      showTime
                      defaultValue={dayjs('2025-03-19 12:00:00')}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                    />
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
                <Button type="default" icon={<ReloadOutlined />} />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8}>
                <Flex align="stretch">
                  <Flex flex={1}>
                    <DatePicker
                      showTime
                      defaultValue={dayjs('2025-03-19 12:00:00')}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                    />
                  </Flex>
                  <Button type="default" icon={<LeftOutlined />} />
                  <Button type="default" icon={<RightOutlined />} />
                </Flex>
              </Flex>
            ),
          }),
        }),
        false: figma.enum('status', {
          default: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8}>
                <DatePicker
                  showTime
                  defaultValue={dayjs('2025-03-19 12:00:00')}
                  format="MM/DD/YYYY HH:mm:ss"
                  open={false}
                />
                <Button type="default" icon={<ReloadOutlined />} />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8}>
                <DatePicker
                  showTime
                  defaultValue={dayjs('2025-03-19 12:00:00')}
                  format="MM/DD/YYYY HH:mm:ss"
                  open={false}
                />
              </Flex>
            ),
          }),
          focus: figma.boolean('refresh', {
            true: (
              <Flex vertical gap={8} align="start">
                <DatePicker
                  showTime
                  defaultValue={dayjs('2025-03-19 12:00:00')}
                  format="MM/DD/YYYY HH:mm:ss"
                  open
                  getPopupContainer={n => n.parentElement ?? document.body}
                />
                <Button type="default" icon={<ReloadOutlined />} />
              </Flex>
            ),
            false: (
              <Flex vertical gap={8} align="start">
                <DatePicker
                  showTime
                  defaultValue={dayjs('2025-03-19 12:00:00')}
                  format="MM/DD/YYYY HH:mm:ss"
                  open
                  getPopupContainer={n => n.parentElement ?? document.body}
                />
              </Flex>
            ),
          }),
        }),
      }),
    }),
  },
  example: ({ root }) => <div>{root}</div>,
});
