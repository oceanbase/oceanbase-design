import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Form, Switch } from '@oceanbase/design';
import type { FormItemProps } from '@oceanbase/design';

const FormItemTest: React.FC<FormItemProps> = ({ children }) => (
  <Form>
    <Form.Item label="Switch" name="switch">
      {children}
    </Form.Item>
  </Form>
);

describe('Form.Item with Switch', () => {
  it('normal Switch', () => {
    const { container, asFragment } = render(
      <FormItemTest>
        <Switch />
      </FormItemTest>
    );
    expect(container.querySelector('.ant-form-item-optional')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('dynamic Switch', () => {
    const { container, asFragment } = render(
      <FormItemTest>{true ? <Switch /> : null}</FormItemTest>
    );
    expect(container.querySelector('.ant-form-item-optional')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('nested Switch', () => {
    const { container, asFragment } = render(
      <FormItemTest>
        <span>
          <Switch />
        </span>
      </FormItemTest>
    );
    expect(container.querySelector('.ant-form-item-optional')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('renderProps Switch', () => {
    const { container, asFragment } = render(
      <FormItemTest>
        {() => {
          return true ? <Switch /> : null;
        }}
      </FormItemTest>
    );
    expect(container.querySelector('.ant-form-item-optional')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('sub component Switch', () => {
    const SwitchComponent = () => <Switch />;
    const { container, asFragment } = render(
      <FormItemTest>
        <SwitchComponent />
      </FormItemTest>
    );
    expect(container.querySelector('.ant-form-item-optional')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
