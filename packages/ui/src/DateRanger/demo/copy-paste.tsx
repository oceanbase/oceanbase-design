import React, { useState } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { ConfigProvider, Radio, RadioChangeEvent, Space } from '@oceanbase/design';
import dayjs from 'dayjs';
import enUS from '@oceanbase/ui/locale/en-US';
import zhCN from '@oceanbase/ui/locale/zh-CN';

export default () => {
  const [locale, setLocal] = useState(enUS);
  const [format, setFormat] = useState('MMM DD, YYYY HH:mm:ss(UTC+8)');
  // 初始化时设置 dayjs locale
  React.useEffect(() => {
    dayjs.locale('en');
  }, []);

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (localeValue === enUS || (localeValue as any)?.locale === 'en') {
      dayjs.locale('en');
      setFormat('MMM DD, YYYY HH:mm:ss(UTC+8)');
    } else {
      dayjs.locale('zh-cn');
      setFormat('YYYY-MM-DD HH:mm:ss(UTC+8)');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginInlineEnd: 16 }}>复制粘贴格式:</span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            中文
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Space direction="vertical">
          <DateRanger
            onChange={value => {
              console.log('onChange', `${value[0].format()} - ${value[1].format()}`);
            }}
            hasSync={false}
            allowClear
            format={format}
          />
        </Space>
      </ConfigProvider>
    </div>
  );
};
