import { render } from '@testing-library/react';
import React from 'react';
import ConfigProvider from '../../config-provider';
import Radio from '../index';

describe('Radio.Group style', () => {
  it('should apply Radio style when Radio.Group renders radios from options', () => {
    const { container } = render(
      <ConfigProvider>
        <Radio.Group
          options={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ]}
        />
      </ConfigProvider>
    );
    const radio = container.querySelector('.ant-radio-wrapper .ant-radio') as HTMLElement;
    // OB 样式让单选框与文案顶部对齐，antd 默认是居中
    expect(getComputedStyle(radio).alignSelf).toBe('flex-start');
    // OB 样式为单选框补充了上边距，用于多行文案的对齐
    expect(getComputedStyle(radio).marginTop).not.toBe('0px');
  });
});
