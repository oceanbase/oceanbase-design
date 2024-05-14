import { FloatButton } from '@oceanbase/design';
import { CompactTheme, DarkTheme, Motion } from 'antd-token-previewer/es/icons';
import { FormattedMessage } from 'dumi';
import React from 'react';
import ThemeIcon from './ThemeIcon';
import { FontColorsOutlined } from '@ant-design/icons';

export type ThemeName = 'light' | 'dark' | 'compact' | 'motion-off' | 'custom-font';

export type ThemeSwitchProps = {
  value?: ThemeName[];
  onChange: (value: ThemeName[]) => void;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = (props: ThemeSwitchProps) => {
  const { value = ['light'], onChange } = props;
  const isMotionOff = value.includes('motion-off');
  const isCustomFont = value.includes('custom-font');

  return (
    <FloatButton.Group trigger="click" icon={<ThemeIcon />}>
      <FloatButton
        icon={<DarkTheme />}
        type={value.includes('dark') ? 'primary' : 'default'}
        onClick={() => {
          if (value.includes('dark')) {
            onChange(value.filter(theme => theme !== 'dark'));
          } else {
            onChange([...value, 'dark']);
          }
        }}
        tooltip={<FormattedMessage id="app.theme.switch.dark" />}
      />
      <FloatButton
        icon={<CompactTheme />}
        type={value.includes('compact') ? 'primary' : 'default'}
        onClick={() => {
          if (value.includes('compact')) {
            onChange(value.filter(theme => theme !== 'compact'));
          } else {
            onChange([...value, 'compact']);
          }
        }}
        tooltip={<FormattedMessage id="app.theme.switch.compact" />}
      />
      <FloatButton
        icon={<Motion />}
        type={!isMotionOff ? 'primary' : 'default'}
        onClick={() => {
          if (isMotionOff) {
            onChange(value.filter(theme => theme !== 'motion-off'));
          } else {
            onChange([...value, 'motion-off']);
          }
        }}
        tooltip={
          <FormattedMessage
            id={isMotionOff ? 'app.theme.switch.motion.off' : 'app.theme.switch.motion.on'}
          />
        }
      />
      <FloatButton
        icon={<FontColorsOutlined />}
        type={isCustomFont ? 'primary' : 'default'}
        onClick={() => {
          if (isCustomFont) {
            onChange(value.filter(theme => theme !== 'custom-font'));
          } else {
            onChange([...value, 'custom-font']);
          }
        }}
        tooltip={
          <FormattedMessage
            id={isCustomFont ? 'app.theme.switch.font.custom' : 'app.theme.switch.font.default'}
          />
        }
      />
    </FloatButton.Group>
  );
};

export default ThemeSwitch;
