/**
 * iframe: 600
 */
import { Button, Card, Empty } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      header={{
        title: '总览',
      }}
    >
      <Card
        bordered={false}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 48px - 72px - 24px)',
        }}
      >
        <Empty
          description={<h3>暂无数据</h3>}
          image="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*GIGHRpu40ZoAAAAAAAAAAAAADvSFAQ/original"
        >
          <Button type="primary">立即刷新</Button>
        </Empty>
      </Card>
    </PageContainer>
  );
};
