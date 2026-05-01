import { ArrowRightOutlined, LeftOutlined, ReloadOutlined, RightOutlined } from '@oceanbase/icons';
import {
  Button,
  Col,
  DatePicker,
  Flex,
  Row,
  Select,
  Space,
  Switch,
  Tag,
  Typography,
} from '@oceanbase/design';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `FIGMA_OCEANBASE_DATERAGER` 的 props / example 一致。
 * 下列 V01–V16 的 JSX 自 index.figma.tsx 对应分支抽取，与 `root` 枚举组合一一对应。
 */

function V01() {
  return (
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
          <span style={{ fontSize: 14, color: '#132039', flex: 1 }}>03/19/2025 12:00:00</span>
          <ArrowRightOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
          <span style={{ fontSize: 14, color: '#132039', flex: 1 }}>03/19/2025 12:00:00</span>
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
  );
}

function V02() {
  return (
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
          <span style={{ fontSize: 14, color: '#132039', flex: 1 }}>03/19/2025 12:00:00</span>
          <ArrowRightOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
          <span style={{ fontSize: 14, color: '#132039', flex: 1 }}>03/19/2025 12:00:00</span>
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
  );
}

function V03() {
  return (
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
  );
}

function V04() {
  return (
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
  );
}

function V05() {
  return (
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
  );
}

function V06() {
  return (
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
  );
}

function V07() {
  return (
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
  );
}

function V08() {
  return (
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
  );
}

function V09() {
  return (
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
  );
}

function V10() {
  return (
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
  );
}

function V11() {
  return (
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
  );
}

function V12() {
  return (
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
  );
}

function V13() {
  return (
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
  );
}

function V14() {
  return (
    <Flex align="center" gap={8}>
      <DatePicker
        showTime
        defaultValue={dayjs('2025-03-19 12:00:00')}
        format="MM/DD/YYYY HH:mm:ss"
        open={false}
        style={{ width: 216 }}
      />
    </Flex>
  );
}

function V15() {
  return (
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
  );
}

function V16() {
  return (
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
  );
}

function buildDateragerRoot(p: {
  range: boolean;
  rangeOption: boolean;
  status: 'default' | 'focus';
  refresh: boolean;
}): React.ReactNode {
  const { range, rangeOption, status, refresh } = p;
  if (range) {
    if (rangeOption) {
      if (status === 'default') {
        return refresh ? <V01 /> : <V02 />;
      }
      return refresh ? <V03 /> : <V04 />;
    }
    if (status === 'default') {
      return refresh ? <V05 /> : <V06 />;
    }
    return refresh ? <V07 /> : <V08 />;
  }
  if (rangeOption) {
    if (status === 'default') {
      return refresh ? <V09 /> : <V10 />;
    }
    return refresh ? <V11 /> : <V12 />;
  }
  if (status === 'default') {
    return refresh ? <V13 /> : <V14 />;
  }
  return refresh ? <V15 /> : <V16 />;
}

/** 与 figma.connect example 相同：({ root }) => <div>{root}</div> */
function FigmaDateragerExample(props: { root: React.ReactNode }) {
  const { root } = props;
  return <div>{root}</div>;
}

const App: React.FC = () => {
  const [range, setRange] = useState('true');
  const [rangeOption, setRangeOption] = useState('true');
  const [status, setStatus] = useState<'default' | 'focus'>('default');
  const [refresh, setRefresh] = useState(true);

  const root = useMemo(
    () =>
      buildDateragerRoot({
        range: range === 'true',
        rangeOption: rangeOption === 'true',
        status,
        refresh,
      }),
    [range, rangeOption, status, refresh]
  );

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 360,
        border: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
        borderRadius: 8,
        overflow: 'hidden',
        background: 'var(--ant-color-bg-container, #fff)',
      }}
    >
      <Col
        flex="1 1 auto"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 280,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaDateragerExample root={root} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          DateRager（FIGMA_OCEANBASE_DATERAGER）
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>range</div>
            <Select
              style={{ width: '100%' }}
              value={range}
              onChange={v => setRange(v as string)}
              options={[
                { value: 'true', label: 'true' },
                { value: 'false', label: 'false' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>rangeOption</div>
            <Select
              style={{ width: '100%' }}
              value={rangeOption}
              onChange={v => setRangeOption(v as string)}
              options={[
                { value: 'true', label: 'true' },
                { value: 'false', label: 'false' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as 'default' | 'focus')}
              options={[
                { value: 'default', label: 'default' },
                { value: 'focus', label: 'focus' },
              ]}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>refresh</span>
            <Switch checked={refresh} onChange={setRefresh} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
