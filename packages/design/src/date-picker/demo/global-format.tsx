import React, { useState } from 'react';
import { ConfigProvider, DatePicker, Radio, Space, Switch } from '@oceanbase/design';
import type { DatePickerProps } from '@oceanbase/design';
import enUS from '@oceanbase/design/locale/en-US';
import zhCN from '@oceanbase/design/locale/zh-CN';
import dayjs from 'dayjs';

const App: React.FC = () => {
  const [locale, setLocale] = useState('en-US');
  const [timezone, setTimezone] = useState(false);

  const onChange: DatePickerProps['onChange'] = (_, dateStr) => {
    console.log('onChange:', dateStr);
  };

  const timezoneFormat = (format: string) => {
    return timezone ? `${format} (UTC+8)` : format;
  };

  const enUSLocale: typeof enUS = {
    ...enUS,
    DatePicker: {
      ...enUS.DatePicker!,
      lang: {
        ...enUS.DatePicker?.lang,
        fieldDateFormat: timezoneFormat('MM/DD/YYYY'),
        fieldDateTimeFormat: timezoneFormat('MM/DD/YYYY HH:mm:ss'),
      },
    },
  };

  const zhCNLocale: typeof zhCN = {
    ...zhCN,
    DatePicker: {
      ...zhCN.DatePicker!,
      lang: {
        ...zhCN.DatePicker?.lang,
        fieldDateFormat: timezoneFormat('YYYY-MM-DD'),
        fieldDateTimeFormat: timezoneFormat('YYYY-MM-DD HH:mm:ss'),
      },
    },
  };

  return (
    <Space direction="vertical" size={12}>
      <Space>
        locale:
        <Radio.Group
          value={locale}
          onChange={e => {
            setLocale(e.target.value);
          }}
        >
          <Radio value="en-US">en-US</Radio>
          <Radio value="zh-CN">zh-CN</Radio>
        </Radio.Group>
      </Space>
      <Space>
        timezone:
        <Switch
          size="small"
          value={timezone}
          onChange={value => {
            setTimezone(value);
          }}
        />
      </Space>
      <ConfigProvider locale={locale === 'en-US' ? enUSLocale : zhCNLocale}>
        <Space direction="vertical">
          <DatePicker defaultValue={dayjs('2024-01-01')} onChange={onChange} />
          <DatePicker defaultValue={dayjs('2024-01-01')} onChange={onChange} showTime />
        </Space>
      </ConfigProvider>
    </Space>
  );
};

export default App;
