import React, { useState } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { ConfigProvider, Radio, RadioChangeEvent, Space } from '@oceanbase/design';
import dayjs from 'dayjs';
import enUS from '@oceanbase/ui/locale/en-US';
import zhCN from '@oceanbase/ui/locale/zh-CN';

export default () => {
  const [locale, setLocal] = useState(enUS);

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginInlineEnd: 16 }}>Change locale of components:</span>
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
          <DateRanger />
          <DateRanger simpleMode />
        </Space>
      </ConfigProvider>
    </div>
  );
};
