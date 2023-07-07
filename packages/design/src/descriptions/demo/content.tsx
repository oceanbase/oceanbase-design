import { Descriptions, Tooltip } from '@oceanbase/design';

export default () => (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Remark">
      <Tooltip placement="topLeft" title="Custom Tooltip">
        <a>This is long long long long long long long long long long long Link</a>
      </Tooltip>
    </Descriptions.Item>
    <Descriptions.Item
      label="Description"
      contentProps={{
        copyable: true,
        editable: true,
      }}
    >
      This is a description. This is a description. This is a description
    </Descriptions.Item>
    <Descriptions.Item
      span={3}
      label="No ellipsis"
      contentProps={{
        ellipsis: false,
      }}
    >
      This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no
      ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis.
      This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no
      ellipsis. This is no ellipsis.
    </Descriptions.Item>
  </Descriptions>
);
