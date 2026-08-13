import React, { useState } from 'react';
import { ConfigProvider, Radio, Space, Typography, theme } from '@oceanbase/design';
import { compactTheme, defaultTheme } from '@oceanbase/design';
import zhCN from '@oceanbase/design/locale/zh-CN';
import enUS from '@oceanbase/design/locale/en-US';

const { Text } = Typography;

type TypographyPreset = 'auto' | 'default' | 'compact';

const TokenPreview = () => {
  const { token } = theme.useToken();
  return (
    <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
      fontSize: {token.fontSize}px · fontFamily: {token.fontFamily.split(',')[0]}
    </Typography.Paragraph>
  );
};

export default () => {
  const [locale, setLocale] = useState(zhCN);
  const [preset, setPreset] = useState<TypographyPreset>('auto');

  const themeConfig =
    preset === 'default' ? defaultTheme : preset === 'compact' ? compactTheme : undefined;

  return (
    <ConfigProvider locale={locale} theme={themeConfig}>
      <Space direction="vertical" size={16} style={{ width: '100%', paddingTop: 16 }}>
        <Space wrap>
          <Radio.Group
            value={locale === zhCN ? 'zh' : 'en'}
            onChange={e => setLocale(e.target.value === 'zh' ? zhCN : enUS)}
          >
            <Radio.Button value="zh">中文</Radio.Button>
            <Radio.Button value="en">English</Radio.Button>
          </Radio.Group>
          <Radio.Group value={preset} onChange={e => setPreset(e.target.value)}>
            <Radio.Button value="auto">随 locale 自动</Radio.Button>
            <Radio.Button value="default">defaultTheme</Radio.Button>
            <Radio.Button value="compact">compactTheme</Radio.Button>
          </Radio.Group>
        </Space>
        <TokenPreview />
        <Text>正文示例 OceanBase Design / 奥星贝斯设计系统</Text>
      </Space>
    </ConfigProvider>
  );
};
