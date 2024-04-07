import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Input } from '@oceanbase/design';
import type { InputProps } from '@oceanbase/design';
import type { TextAreaProps } from '@oceanbase/design/es/input';

const InputTest: React.FC<InputProps & TextAreaProps> = props => (
  <>
    <Input {...props} />
    <Input.Search {...props} />
    <Input.TextArea {...props} />
    <Input.Password {...props} />
  </>
);

const placeholderExpect = (container: HTMLElement, placeholder?: string) => {
  expect(container.querySelector('input.ant-input').getAttribute('placeholder')).toBe(placeholder);
  expect(container.querySelector('.ant-input-search .ant-input').getAttribute('placeholder')).toBe(
    placeholder
  );
  expect(
    container.querySelector('.ant-input-password .ant-input').getAttribute('placeholder')
  ).toBe(placeholder);
  expect(container.querySelector('textarea.ant-input').getAttribute('placeholder')).toBe(
    placeholder
  );
};

describe('Input placeholder', () => {
  it('default placeholder should be correct', () => {
    const { container, asFragment } = render(<InputTest />);
    placeholderExpect(container, 'Please enter');
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('custom placeholder should work', () => {
    const { container, asFragment } = render(<InputTest placeholder="custom placeholder" />);
    placeholderExpect(container, 'custom placeholder');
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.Input.placeholder should work', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          Input: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <InputTest />
      </ConfigProvider>
    );
    placeholderExpect(container, 'global placeholder');
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('Input placeholder should be priority to ConfigProvider locale.Input.placeholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          Input: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <InputTest placeholder="custom placeholder" />
      </ConfigProvider>
    );
    placeholderExpect(container, 'custom placeholder');
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.global.inputPlaceholder should work', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            inputPlaceholder: 'global placeholder',
          },
        }}
      >
        <InputTest />
      </ConfigProvider>
    );
    placeholderExpect(container, 'global placeholder');
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('Input placeholder should be priority to ConfigProvider locale.global.inputPlaceholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            inputPlaceholder: 'global placeholder',
          },
        }}
      >
        <InputTest placeholder="custom placeholder" />
      </ConfigProvider>
    );
    placeholderExpect(container, 'custom placeholder');
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.Input.placeholder should be priority to ConfigProvider locale.global.inputPlaceholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            inputPlaceholder: 'global placeholder',
          },
          Input: {
            placeholder: 'Input global placeholder',
          },
        }}
      >
        <InputTest />
      </ConfigProvider>
    );
    placeholderExpect(container, 'Input global placeholder');
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
