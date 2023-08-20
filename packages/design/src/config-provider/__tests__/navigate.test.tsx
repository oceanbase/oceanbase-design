import React, { useContext } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
import ConfigProvider from '..';

describe('ConfigProvider navigate', () => {
  it('navigate should work', () => {
    const Child = () => {
      const { navigate } = useContext(ConfigProvider.ExtendedConfigContext);
      expect(typeof navigate).toBe('function');
      return <div />;
    };
    const Parent = () => {
      const navigate = useNavigate();
      return (
        <ConfigProvider navigate={navigate}>
          <Child />
        </ConfigProvider>
      );
    };
    const Demo = () => (
      // useNavigate() may be used only in the context of a <Router> component
      <BrowserRouter>
        <Parent />
      </BrowserRouter>
    );
    render(<Demo />);
  });
});
