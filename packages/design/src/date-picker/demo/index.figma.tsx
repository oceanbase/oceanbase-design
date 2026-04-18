import {
  Col,
  DatePicker,
  Flex,
  Row,
  Select,
  Space,
  TimePicker,
  Typography,
} from '@oceanbase/design';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `FIGMA_OCEANBASE_DATEPICKER` 的 props / example 一致。
 */

type FigmaPickerType = 'date' | 'date range' | 'date+time' | 'time';

/** 与 figma.connect example 相同：({ body }) => <div>{body}</div> */
function FigmaDatePickerExample(props: { body: React.ReactNode }) {
  const { body } = props;
  return <div>{body}</div>;
}

function getBody(type: FigmaPickerType): React.ReactNode {
  switch (type) {
    case 'date':
      return (
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
      );
    case 'date range':
      return (
        <Flex vertical align="start">
          <DatePicker.RangePicker
            defaultValue={[dayjs('2025-03-19 12:00:00'), dayjs('2025-03-19 12:00:00')]}
            format="MM/DD/YYYY"
            open
            getPopupContainer={n => n.parentElement ?? document.body}
            popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
          />
        </Flex>
      );
    case 'date+time':
      return (
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
      );
    case 'time':
      return (
        <Flex vertical align="start">
          <TimePicker
            defaultValue={dayjs('2025-03-19 12:00:00')}
            format="HH:mm:ss"
            open
            getPopupContainer={n => n.parentElement ?? document.body}
            popupStyle={{ boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)' }}
          />
        </Flex>
      );
    default:
      return null;
  }
}

const App: React.FC = () => {
  const [type, setType] = useState<FigmaPickerType>('date');
  const body = useMemo(() => getBody(type), [type]);

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
        <FigmaDatePickerExample body={body} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          DatePicker（FIGMA_OCEANBASE_DATEPICKER）
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={type}
              onChange={v => setType(v as FigmaPickerType)}
              options={[
                { value: 'date', label: 'date' },
                { value: 'date range', label: 'date range' },
                { value: 'date+time', label: 'date+time' },
                { value: 'time', label: 'time' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
