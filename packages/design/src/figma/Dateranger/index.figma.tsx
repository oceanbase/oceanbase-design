// @ts-nocheck

import { ArrowRightOutlined, LeftOutlined, ReloadOutlined, RightOutlined } from '@ant-design/icons';
import { figma } from '@figma/code-connect';
import { Button, DatePicker, Flex, Tag, TimePicker } from '@oceanbase/design';
import dayjs from 'dayjs';

/**
 * Code Connect — DatePicker 面板变体 + DateRager 时间区间条（Figma 组合；第一段用 Flex 包裹各 picker，第二段用 Flex + DatePicker 等对齐 MCP）。
 * Page: "↵DateRanger"
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
            popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
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
            popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
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
            popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
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
            popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
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
    root: figma.enum('range', {
      true: figma.enum('rangeOption', {
        true: figma.enum('status', {
          default: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8} style={{ width: 495 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 4,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      padding: '4px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      flex: 1,
                      minWidth: 0,
                      marginRight: -1,
                    }}
                  >
                    <Tag
                      style={{
                        margin: 0,
                        background: '#f5f7fc',
                        border: 'none',
                        borderRadius: 4,
                        padding: '0 8px',
                        lineHeight: '20px',
                      }}
                    >
                      1h
                    </Tag>
                    <span style={{ fontSize: 14, color: '#132039', flex: 1 }}>
                      03/19/2025 12:00:00
                    </span>
                    <ArrowRightOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                    <span style={{ fontSize: 14, color: '#132039', flex: 1 }}>
                      03/19/2025 12:00:00
                    </span>
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
                <Button
                  type="default"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cdd5e4',
                    borderRadius: 4,
                    padding: '6px 8px',
                    height: 'auto',
                  }}
                  icon={<ReloadOutlined style={{ fontSize: 14, color: '#595959' }} />}
                />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8} style={{ width: 495 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 4,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      padding: '4px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      flex: 1,
                      minWidth: 0,
                      marginRight: -1,
                    }}
                  >
                    <Tag
                      style={{
                        margin: 0,
                        background: '#f5f7fc',
                        border: 'none',
                        borderRadius: 4,
                        padding: '0 8px',
                        lineHeight: '20px',
                      }}
                    >
                      1h
                    </Tag>
                    <span style={{ fontSize: 14, color: '#132039', flex: 1 }}>
                      03/19/2025 12:00:00
                    </span>
                    <ArrowRightOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                    <span style={{ fontSize: 14, color: '#132039', flex: 1 }}>
                      03/19/2025 12:00:00
                    </span>
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
              </Flex>
            ),
          }),
          focus: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8} style={{ width: 495 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                      style={{ width: '100%' }}
                      popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
                    />
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
                <Button
                  type="default"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cdd5e4',
                    borderRadius: 4,
                    padding: '6px 8px',
                    height: 'auto',
                  }}
                  icon={<ReloadOutlined style={{ fontSize: 14, color: '#595959' }} />}
                />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8} style={{ width: 495 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                      style={{ width: '100%' }}
                      popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
                    />
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
              </Flex>
            ),
          }),
        }),
        false: figma.enum('status', {
          default: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8} style={{ width: 420 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open={false}
                      getPopupContainer={n => n.parentElement ?? document.body}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
                <Button
                  type="default"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cdd5e4',
                    borderRadius: 4,
                    padding: '6px 8px',
                    height: 'auto',
                  }}
                  icon={<ReloadOutlined style={{ fontSize: 14, color: '#595959' }} />}
                />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8} style={{ width: 420 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open={false}
                      getPopupContainer={n => n.parentElement ?? document.body}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
              </Flex>
            ),
          }),
          focus: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8} style={{ width: 420 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                      style={{ width: '100%' }}
                      popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
                    />
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
                <Button
                  type="default"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cdd5e4',
                    borderRadius: 4,
                    padding: '6px 8px',
                    height: 'auto',
                  }}
                  icon={<ReloadOutlined style={{ fontSize: 14, color: '#595959' }} />}
                />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8} style={{ width: 420 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <DatePicker.RangePicker
                      showTime
                      defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                      style={{ width: '100%' }}
                      popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
                    />
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
              </Flex>
            ),
          }),
        }),
      }),
      false: figma.enum('rangeOption', {
        true: figma.enum('status', {
          default: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8} style={{ width: 256 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 4,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      padding: '4px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      flex: 1,
                      minWidth: 0,
                      marginRight: -1,
                    }}
                  >
                    <Tag
                      style={{
                        margin: 0,
                        background: '#f5f7fc',
                        border: 'none',
                        borderRadius: 4,
                        padding: '0 8px',
                        lineHeight: '20px',
                      }}
                    >
                      3d
                    </Tag>
                    <span style={{ fontSize: 14, color: '#132039', flex: 1 }}>Last 3 hours</span>
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
                <Button
                  type="default"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cdd5e4',
                    borderRadius: 4,
                    padding: '6px 8px',
                    height: 'auto',
                  }}
                  icon={<ReloadOutlined style={{ fontSize: 14, color: '#595959' }} />}
                />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8} style={{ width: 256 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 4,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      padding: '4px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      flex: 1,
                      minWidth: 0,
                      marginRight: -1,
                    }}
                  >
                    <Tag
                      style={{
                        margin: 0,
                        background: '#f5f7fc',
                        border: 'none',
                        borderRadius: 4,
                        padding: '0 8px',
                        lineHeight: '20px',
                      }}
                    >
                      3d
                    </Tag>
                    <span style={{ fontSize: 14, color: '#132039', flex: 1 }}>Last 3 hours</span>
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
              </Flex>
            ),
          }),
          focus: figma.boolean('refresh', {
            true: (
              <Flex align="center" gap={8} style={{ width: 256 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <DatePicker
                      showTime
                      defaultValue={dayjs('2025-03-19 12:00:00')}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                      style={{ width: '100%' }}
                      popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
                    />
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                </Flex>
                <Button
                  type="default"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cdd5e4',
                    borderRadius: 4,
                    padding: '6px 8px',
                    height: 'auto',
                  }}
                  icon={<ReloadOutlined style={{ fontSize: 14, color: '#595959' }} />}
                />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8} style={{ width: 256 }}>
                <Flex align="stretch" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <DatePicker
                      showTime
                      defaultValue={dayjs('2025-03-19 12:00:00')}
                      format="MM/DD/YYYY HH:mm:ss"
                      open
                      getPopupContainer={n => n.parentElement ?? document.body}
                      style={{ width: '100%' }}
                      popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
                    />
                  </div>
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderRadius: 0,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                      borderRight: 'none',
                    }}
                    icon={<LeftOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
                  <Button
                    type="default"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #cdd5e4',
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      padding: '6px 8px',
                      height: 'auto',
                      lineHeight: 1,
                    }}
                    icon={<RightOutlined style={{ fontSize: 12, color: '#595959' }} />}
                  />
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
                  style={{ width: 216 }}
                />
                <Button
                  type="default"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cdd5e4',
                    borderRadius: 4,
                    padding: '6px 8px',
                    height: 'auto',
                  }}
                  icon={<ReloadOutlined style={{ fontSize: 14, color: '#595959' }} />}
                />
              </Flex>
            ),
            false: (
              <Flex align="center" gap={8}>
                <DatePicker
                  showTime
                  defaultValue={dayjs('2025-03-19 12:00:00')}
                  format="MM/DD/YYYY HH:mm:ss"
                  open={false}
                  style={{ width: 216 }}
                />
              </Flex>
            ),
          }),
          focus: figma.boolean('refresh', {
            true: (
              <Flex vertical gap={8} align="start" style={{ width: 444 }}>
                <DatePicker
                  showTime
                  defaultValue={dayjs('2025-03-19 12:00:00')}
                  format="MM/DD/YYYY HH:mm:ss"
                  open
                  getPopupContainer={n => n.parentElement ?? document.body}
                  style={{ width: 216 }}
                  popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
                />
                <Button
                  type="default"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cdd5e4',
                    borderRadius: 4,
                    padding: '6px 8px',
                    height: 'auto',
                  }}
                  icon={<ReloadOutlined style={{ fontSize: 14, color: '#595959' }} />}
                />
              </Flex>
            ),
            false: (
              <Flex vertical gap={8} align="start" style={{ width: 444 }}>
                <DatePicker
                  showTime
                  defaultValue={dayjs('2025-03-19 12:00:00')}
                  format="MM/DD/YYYY HH:mm:ss"
                  open
                  getPopupContainer={n => n.parentElement ?? document.body}
                  style={{ width: 216 }}
                  popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
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
