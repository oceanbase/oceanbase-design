import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { Card, ConfigProvider } from '@oceanbase/design';
import type { CardProps } from '@oceanbase/design';

const CardTest: React.FC<CardProps> = props => {
  return (
    <Card title="Title" {...props}>
      Content
    </Card>
  );
};

describe('ConfigProvider card', () => {
  it('divided', () => {
    const Child1 = () => {
      const { card } = useContext(ConfigProvider.ConfigContext);
      expect(card.divided).toBe(undefined);
      return <CardTest />;
    };
    const Child2 = () => {
      const { card } = useContext(ConfigProvider.ConfigContext);
      expect(card.divided).toBe(false);
      return <CardTest />;
    };
    const Child3 = () => {
      const { card } = useContext(ConfigProvider.ConfigContext);
      expect(card.divided).toBe(false);
      return <CardTest />;
    };
    const Child4 = () => {
      const { card } = useContext(ConfigProvider.ConfigContext);
      expect(card.divided).toBe(false);
      return <CardTest divided={true} />;
    };

    const { container, asFragment } = render(
      <ConfigProvider>
        <Child1 />
        <ConfigProvider card={{ divided: false }}>
          <Child2 />
          <ConfigProvider>
            <Child3 />
            <Child4 />
          </ConfigProvider>
        </ConfigProvider>
      </ConfigProvider>
    );
    expect(container.querySelectorAll('.ant-card-no-divider').length).toBe(2);
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
