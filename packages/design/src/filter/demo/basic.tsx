import React, { useMemo, useState } from 'react';
import { Filter, Space, Flex, theme, Badge, Button, Typography } from '@oceanbase/design';
import { HeaderTableOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [selectValue, setSelectValue] = useState<string>('');
  const [statusListValue, setStatusListValue] = useState<string[]>([]);

  const statusList = [
    {
      status: 'success',
      color: token.colorSuccess,
    },
    {
      status: 'failure',
      color: token.colorError,
    },
    {
      status: 'processing',
      color: token.colorPrimary,
    },
    {
      status: 'warning',
      color: token.colorWarning,
    },
  ];

  const renderFilterStatusIcon = useMemo(() => {
    // 每个 icon 的宽度
    const iconWidth = 8;
    // 重叠距离（每个 icon 向左偏移的距离）
    const overlapDistance = 3;
    // 计算容器宽度：第一个 icon 的完整宽度 + (icon数量 - 1) * 重叠距离
    const containerWidth = iconWidth + (statusList.length - 1) * overlapDistance;

    return (
      <div
        style={{
          position: 'relative',
          width: containerWidth,
          height: iconWidth,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {statusList.map((item, index) =>
          statusListValue.includes(item.status) ? (
            <Badge
              key={item.status}
              color={item.color}
              style={{
                position: 'absolute',
                left: index * overlapDistance,
                top: -6,
                zIndex: statusList.length - index, // 后面的 icon z-index 更高，显示在上层
              }}
            />
          ) : (
            <div
              key={item.status}
              style={{
                position: 'absolute',
                left: index * overlapDistance,
                top: 1,
                width: iconWidth,
                height: iconWidth,
                backgroundColor: 'white',
                borderRadius: '50%',
                border: `1px solid ${token.colorBorder}`,
                zIndex: statusList.length - index, // 后面的 icon z-index 更高，显示在上层
              }}
            />
          )
        )}
      </div>
    );
  }, [statusList, statusListValue, token.colorBorder]);

  return (
    <Flex vertical gap={16}>
      <div>
        <Space wrap>
          <Filter.Select
            label="状态"
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: 'running', label: '运行中' },
              { value: 'stopped', label: '已停止' },
              { value: 'pending', label: '待处理' },
            ]}
          />
          <Filter.Select
            label="类型"
            options={[
              { value: 'type1', label: '类型一' },
              { value: 'type2', label: '类型二' },
              { value: 'disabled', label: '禁用选项', disabled: true },
            ]}
          />
          <Filter.Select
            label="禁用状态"
            disabled
            options={[{ value: 'option1', label: '选项一' }]}
          />
          <Filter.Select label="加载中" loading options={[{ value: 'option1', label: '选项一' }]} />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="有边框"
            bordered
            options={[
              { value: 'option1', label: '选项一' },
              { value: 'option2', label: '选项二' },
            ]}
          />
          <Filter.Select
            label="无边框"
            bordered={false}
            options={[
              { value: 'option1', label: '选项一' },
              { value: 'option2', label: '选项二' },
            ]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="带图标"
            icon={<HeaderTableOutlined />}
            options={[
              { value: 'type1', label: '类型一' },
              { value: 'type2', label: '类型二' },
              { value: 'disabled', label: '禁用选项', disabled: true },
            ]}
          />
          <Filter.Cascader
            label="footer"
            options={[
              {
                value: 'frontend',
                label: '前端',
                children: [
                  { value: 'react', label: 'React' },
                  { value: 'vue', label: 'Vue' },
                  { value: 'angular', label: 'Angular', disabled: true },
                ],
              },
              {
                value: 'backend',
                label: '后端',
                disabled: true,
                children: [
                  { value: 'java', label: 'Java' },
                  { value: 'python', label: 'Python' },
                  { value: 'go', label: 'Go' },
                ],
              },
            ]}
            footer={<Typography.Link>了解更多</Typography.Link>}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="内容自动缩略"
            options={[
              { value: 'type1', label: '这是一个非常长的选项，用来测试内容自动缩略功能' },
              { value: 'type2', label: '这是一个非常长的选项，用来测试内容自动缩略功能' },
            ]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Checkbox
            icon={renderFilterStatusIcon}
            value={statusListValue}
            onChange={setStatusListValue}
            count={{ showTotal: true }}
            label="Status"
            options={statusList.map(item => ({
              label: <Badge text={item.status} color={item.color} />,
              value: item.status,
            }))}
          />
          <Filter.DatePreset label="日期" />
        </Space>
      </div>
    </Flex>
  );
};

export default App;
