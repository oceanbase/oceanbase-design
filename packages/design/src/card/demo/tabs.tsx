import React, { useState } from 'react';
import { Card, Form, Radio, Switch } from '@oceanbase/design';
import type { CardSize } from '@oceanbase/design/es/card';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList: Record<string, React.ReactNode> = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
    tag: 22,
  },
  {
    key: 'app',
    tab: 'app',
    tag: 99,
  },
  {
    key: 'project',
    tab: 'project',
    tag: 0,
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const App: React.FC = () => {
  const [size, setSize] = useState<CardSize>('default');
  const [divided, setDivided] = useState(true);
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState<string>('app');

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <>
      <Form layout="inline" requiredMark={false} style={{ marginBottom: 24 }}>
        <Form.Item label="size">
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="divided">
          <Switch
            checked={divided}
            onChange={e => {
              setDivided(e);
            }}
          />
        </Form.Item>
      </Form>
      <Card
        size={size}
        divided={divided}
        title="Card title"
        extra={<a>More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <Card
        size={size}
        divided={divided}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a>More</a>}
        onTabChange={onTab2Change}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};

export default App;
