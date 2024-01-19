/**
 * iframe: 600
 */
import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Descriptions,
  Input,
  Radio,
  Select,
  TimePicker,
  message,
} from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { SizeType } from '@oceanbase/design/es/config-provider';

export default () => {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<SizeType>('large');

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
          <Input.Search
            key="4"
            size={size}
            placeholder="placeholder"
            allowClear={true}
            style={{
              display: 'block',
            }}
          />,
          <Select
            key="5"
            size={size}
            defaultValue="large"
            options={[
              { value: 'large', label: 'large' },
              { value: 'middle', label: 'middle' },
              { value: 'small', label: 'small' },
            ]}
            onChange={value => {
              setSize(value);
            }}
            placeholder="placeholder"
            style={{ width: 100 }}
          />,
          <Radio.Group key="6" size={size} defaultValue="option1">
            <Radio.Button value="option1">选项 1</Radio.Button>
            <Radio.Button value="option2">选项 2</Radio.Button>
          </Radio.Group>,
        ],
      }}
      footer={[<Button>重置</Button>, <Button type="primary">提交</Button>]}
    >
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
    </PageContainer>
  );
};
