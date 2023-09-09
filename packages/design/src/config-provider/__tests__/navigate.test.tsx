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

  it('navigate should work in nested ConfigProvider', () => {
    const SubChild1 = () => {
      const { navigate } = useContext(ConfigProvider.ExtendedConfigContext);
      expect(typeof navigate).toBe('function');
      return <div />;
    };
    const SubChild2 = () => {
      const { navigate } = useContext(ConfigProvider.ExtendedConfigContext);
      expect(navigate).toBe(null);
      return <div />;
    };
    const Child = () => {
      const { navigate } = useContext(ConfigProvider.ExtendedConfigContext);
      expect(typeof navigate).toBe('function');
      return (
        <>
          <ConfigProvider>
            <SubChild1 />
          </ConfigProvider>
          <ConfigProvider navigate={null}>
            <SubChild2 />
          </ConfigProvider>
        </>
      );
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
