import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: '已选中项',
      value: 1,
    },
    {
      label: '未选中项',
      value: 2,
    },
    {
      label: '未选中项',
      value: 3,
    },
    {
      label: '未选中项',
      value: 4,
    },
  ];
  return (
    <div>
      <div>
        <div>单选</div>
        <TagSelect.Group title="small" options={option} size="small" defaultValue={1} />
        <TagSelect.Group title="middle" options={option} size="middle" defaultValue={1} />
        <TagSelect.Group title="large" options={option} size="large" defaultValue={1} />
        <div style={{ marginTop: 20 }}>图片样式</div>
        <TagSelect.Group defaultValue={'tag1'} size="small">
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="middle">
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="large">
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
      </div>
      <div>
        <div style={{ marginTop: 20 }}>多选</div>
        <TagSelect.Group title="small" options={option} size="small" defaultValue={[1]} multiple />
        <TagSelect.Group
          title="middle"
          options={option}
          size="middle"
          defaultValue={[1]}
          multiple
        />
        <TagSelect.Group title="large" options={option} size="large" defaultValue={[1]} multiple />
        <div style={{ marginTop: 20 }}>图片样式</div>
        <TagSelect.Group defaultValue={'tag1'} size="small" multiple>
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="middle" multiple>
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="large" multiple>
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
      </div>
    </div>
  );
};
