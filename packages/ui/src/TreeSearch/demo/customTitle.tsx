import {
  DatabaseOutlined,
  FolderViewOutlined,
  ProfileOutlined,
  TableOutlined,
} from '@oceanbase/icons';
import { TreeSearch } from '@oceanbase/ui';
import { DataNode } from 'antd/es/tree';
import React from 'react';
import './style.less';

interface Node extends DataNode {
  extra: React.ReactNode;
  title?: React.ReactNode;
}

const alertMsg = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.stopPropagation();
  alert('test');
};

const treeData = [
  {
    title: 'database1',
    icon: <DatabaseOutlined />,
    children: [
      {
        title: 'Table',
        icon: <TableOutlined />,
        extra: <a onClick={alertMsg}>测试</a>,
        children: [
          {
            title: 'table1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'table2',
            icon: <ProfileOutlined />,
            extra: <a onClick={alertMsg}>测试</a>,
          },
        ],
      },
      {
        title: 'View',
        icon: <FolderViewOutlined />,
        children: [
          {
            title: 'view1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'view2',
            icon: <ProfileOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: 'database2',
    icon: <DatabaseOutlined />,
    children: [
      {
        title: 'Table',
        icon: <TableOutlined />,
        extra: <a onClick={alertMsg}>测试</a>,
        children: [
          {
            title: 'table1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'table2',
            icon: <ProfileOutlined />,
          },
        ],
      },
      {
        title: 'View',
        icon: <FolderViewOutlined />,
        children: [
          {
            title: 'view1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'view2',
            icon: <ProfileOutlined />,
          },
        ],
      },
    ],
  },
];

export default () => {
  // 渲染title
  const renderTitle = (nodeData: Node) => {
    if (nodeData.extra) {
      return (
        <>
          <span>{nodeData.title}</span>
          <span className="treetitle-extra">{nodeData.extra}</span>
        </>
      );
    }

    return nodeData.title;
  };
  return (
    <TreeSearch
      width={500}
      height={500}
      checkable={false}
      titleRender={renderTitle}
      treeData={treeData}
    />
  );
};
