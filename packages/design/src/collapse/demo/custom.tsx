import type { CSSProperties } from 'react';
import React from 'react';
import { RightOutlined } from '@oceanbase/icons';
import type { CollapseProps } from '@oceanbase/design';
import { Collapse, theme } from '@oceanbase/design';

const text =
  'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long panel content.';

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = panelStyle => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const App: React.FC = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 16,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorderSecondary}`,
  };

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} />}
      style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle)}
    />
  );
};

export default App;
