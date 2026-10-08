import { render } from '@testing-library/react';
import React from 'react';
import { PlusOutlined } from '@oceanbase/icons';
import ConfigProvider from '../../config-provider';
import Radio from '../index';

// token.colorIcon = token.gray8
const COLOR_ICON = 'rgb(92, 107, 138)';

describe('Radio.Button style', () => {
  it('should apply Radio style when Radio.Button is used without Radio', () => {
    const { container } = render(
      <ConfigProvider>
        <Radio.Group defaultValue="b">
          <Radio.Button value="a" icon={<PlusOutlined />}>
            Add
          </Radio.Button>
          <Radio.Button value="b">Edit</Radio.Button>
        </Radio.Group>
      </ConfigProvider>
    );
    // Radio.Button 的 className 由 OB 生成
    expect(container.querySelector('.ant-radio-button-wrapper-with-icon')).toBeTruthy();
    // OB 的 Radio 样式（未选中按钮的图标色等）也应生效
    const icon = container.querySelector('.ant-radio-button-label .anticon') as HTMLElement;
    expect(getComputedStyle(icon).color).toBe(COLOR_ICON);
  });
});
