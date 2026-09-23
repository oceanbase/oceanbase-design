import { render } from '@testing-library/react';
import React from 'react';
import ConfigProvider from '../../config-provider';
import Checkbox from '../index';

describe('Checkbox.Group style', () => {
  it('should apply Checkbox style when Checkbox.Group renders checkboxes from options', () => {
    const { container } = render(
      <ConfigProvider>
        <Checkbox.Group
          options={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ]}
        />
      </ConfigProvider>
    );
    const checkbox = container.querySelector('.ant-checkbox-wrapper .ant-checkbox') as HTMLElement;
    // OB 样式让勾选框与文案顶部对齐，antd 默认是居中
    expect(getComputedStyle(checkbox).alignSelf).toBe('flex-start');
    // OB 样式为勾选框补充了上边距，用于多行文案的对齐
    expect(getComputedStyle(checkbox).marginTop).not.toBe('0px');
  });
});
