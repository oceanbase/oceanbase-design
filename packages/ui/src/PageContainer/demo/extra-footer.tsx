/**
 * iframe: 600
 */
import React, { useState } from 'react';
import {
  Button,
  Card,
  DatePicker,
  Descriptions,
  Dropdown,
  Input,
  Radio,
  Select,
  Space,
  TimePicker,
  message,
} from '@oceanbase/design';
import { PageContainer, Ranger } from '@oceanbase/ui';
import { SizeType } from '@oceanbase/design/es/config-provider';
import { EllipsisOutlined, LikeOutlined, CommentOutlined, StarOutlined } from '@oceanbase/icons';

export default () => {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<SizeType>('middle');
  const [inputType, setInputType] = useState('search');

  const mockRequest = () => {
    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setLoading(true);
    promise.then(() => {
      setLoading(false);
      message.success('刷新成功');
    });
  };
  const InputComponent = inputType === 'search' ? Input.Search : Input;

  return (
    <PageContainer
      ghost={false}
      loading={loading}
      header={{
        title: '页面标题',
        reload: {
          spin: loading,
          onClick: () => {
            mockRequest();
          },
        },
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
          <DatePicker key="1" size={size} placeholder="DatePicker" />,
          <DatePicker.RangePicker key="2" size={size} />,
          <TimePicker key="3" size={size} placeholder="TimePicker" />,
          <InputComponent
            key="4"
            size={size}
            placeholder="placeholder"
            allowClear={true}
            addonAfter={inputType === 'addon' ? 'suffix' : ''}
          />,
          <Select
            key="5"
            size={size}
            value={size}
            allowClear={true}
            options={[
              { value: 'large', label: 'large' },
              { value: 'middle', label: 'middle' },
            ]}
            onChange={value => {
              setSize(value);
            }}
            placeholder="placeholder"
            style={{ width: 100 }}
          />,
          <Radio.Group
            key="6"
            size={size}
            value={inputType}
            onChange={e => {
              setInputType(e.target.value);
            }}
          >
            <Radio.Button value="input">Input</Radio.Button>
            <Radio.Button value="search">Search</Radio.Button>
            <Radio.Button value="addon">Addon</Radio.Button>
          </Radio.Group>,
          <Button key="7" size={size} type="primary">
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
            <Button key="8" size={size} style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      footer={[
        <Ranger />,
        <Space.Compact>
          <Select
            size={size}
            defaultValue="option1"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
          <DatePicker size={size} />
        </Space.Compact>,
        <Space.Compact>
          <Input size={size} defaultValue="0571" />
          <Input size={size} defaultValue="26888888" />
        </Space.Compact>,
        <Space.Compact>
          <Button size={size} icon={<LikeOutlined />} />
          <Button size={size} icon={<CommentOutlined />} />
          <Button size={size} icon={<StarOutlined />} />
        </Space.Compact>,
        <Button size={size}>重置</Button>,
        <Button size={size} type="primary">
          提交
        </Button>,
      ]}
    >
      <Card bordered={false}>
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
      </Card>
    </PageContainer>
  );
};
