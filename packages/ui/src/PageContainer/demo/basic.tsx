/**
 * iframe: 600
 */
import { EllipsisOutlined } from '@oceanbase/icons';
import { Button, Descriptions, Dropdown, Radio } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      ghost={false}
      header={{
        title: '页面标题',
        breadcrumb: {
          items: [
            {
              href: '',
              title: '一级页面',
            },
            {
              href: '',
              title: '二级页面',
            },
            {
              title: '当前页面',
            },
          ],
        },
        extra: [
          <Radio.Group defaultValue="option1">
            <Radio.Button value="option1">选项 1</Radio.Button>
            <Radio.Button value="option2">选项 2</Radio.Button>
          </Radio.Group>,
          <Button key="2">次要按钮</Button>,
          <Button key="3" type="primary">
            主要按钮
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: '下拉菜单',
                  key: '1',
                },
                {
                  label: '下拉菜单2',
                  key: '2',
                },
                {
                  label: '下拉菜单3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="4" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      content={
        <Descriptions>
          <Descriptions.Item label="创建人">曲丽丽</Descriptions.Item>
          <Descriptions.Item label="电话号码">1810000000</Descriptions.Item>
          <Descriptions.Item label="地址">浙江省杭州市西湖区工专路</Descriptions.Item>
          <Descriptions.Item label="关联表单">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="备注">这是备注</Descriptions.Item>
        </Descriptions>
      }
      tabBarExtraContent="测试 tabBarExtraContent"
      tabList={[
        {
          tab: '基本信息',
          key: 'base',
          closable: false,
        },
        {
          tab: '详细信息',
          key: 'info',
        },
      ]}
      tabProps={{
        type: 'editable-card',
        hideAdd: true,
        onEdit: (e, action) => console.log(e, action),
      }}
      footer={[<Button>重置</Button>, <Button type="primary">提交</Button>]}
    />
  );
};
