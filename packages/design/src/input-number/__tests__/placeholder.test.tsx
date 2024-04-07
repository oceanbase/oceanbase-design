import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, InputNumber } from '@oceanbase/design';
import type { InputNumberProps } from '@oceanbase/design';

const InputNumberTest: React.FC<InputNumberProps> = props => <InputNumber {...props} />;

describe('InputNumber placeholder', () => {
  it('default placeholder should be correct', () => {
    const { container, asFragment } = render(<InputNumberTest />);
    expect(container.querySelector('.ant-input-number-input').getAttribute('placeholder')).toBe(
      'Please enter'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('custom placeholder should work', () => {
    const { container, asFragment } = render(<InputNumberTest placeholder="custom placeholder" />);
    expect(container.querySelector('.ant-input-number-input').getAttribute('placeholder')).toBe(
      'custom placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.global.placeholder should work', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            inputPlaceholder: 'global placeholder',
          },
        }}
      >
        <InputNumberTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-input-number-input').getAttribute('placeholder')).toBe(
      'global placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('InputNumber placeholder should be priority to ConfigProvider locale.global.inputPlaceholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            inputPlaceholder: 'global placeholder',
          },
        }}
      >
        <InputNumberTest placeholder="custom placeholder" />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-input-number-input').getAttribute('placeholder')).toBe(
      'custom placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.InputNumber.placeholder should work', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          InputNumber: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <InputNumberTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-input-number-input').getAttribute('placeholder')).toBe(
      'global placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('InputNumber placeholder should be priority to ConfigProvider locale.InputNumber.placeholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          InputNumber: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <InputNumberTest placeholder="custom placeholder" />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-input-number-input').getAttribute('placeholder')).toBe(
      'custom placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.InputNumber.placeholder should be priority to ConfigProvider locale.global.inputPlaceholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            inputPlaceholder: 'global placeholder',
          },
          InputNumber: {
            placeholder: 'InputNumber global placeholder',
          },
        }}
      >
        <InputNumberTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-input-number-input').getAttribute('placeholder')).toBe(
      'InputNumber global placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
