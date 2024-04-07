import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Select } from '@oceanbase/design';
import type { SelectProps } from '@oceanbase/design';

const SelectTest: React.FC<SelectProps> = props => (
  <Select options={[{ value: 'lucy', label: 'Lucy' }]} {...props} />
);

describe('Select placeholder', () => {
  it('default placeholder should be correct', () => {
    const { container, asFragment } = render(<SelectTest />);
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'Please select'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('custom placeholder should work', () => {
    const { container, asFragment } = render(<SelectTest placeholder="custom placeholder" />);
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
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
            placeholder: 'global placeholder',
          },
        }}
      >
        <SelectTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'global placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('Select placeholder should be priority to ConfigProvider locale.global.placeholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <SelectTest placeholder="custom placeholder" />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'custom placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.Select.placeholder should work', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          Select: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <SelectTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'global placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('Select placeholder should be priority to ConfigProvider locale.Select.placeholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          Select: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <SelectTest placeholder="custom placeholder" />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'custom placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.Select.placeholder should be priority to ConfigProvider locale.global.placeholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            placeholder: 'global placeholder',
          },
          Select: {
            placeholder: 'Select global placeholder',
          },
        }}
      >
        <SelectTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'Select global placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
