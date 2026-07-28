import React from 'react';
import DocMarkdownTable, { type DocMarkdownTableColumn } from './DocMarkdownTable';

export interface BuiltInImageRow {
  key: string;
  name: React.ReactNode;
  description: string;
  image: React.ReactNode;
}

export interface BuiltInImageTableProps {
  columns: {
    name: string;
    description: string;
    preview: string;
  };
  dataSource: BuiltInImageRow[];
}

const BuiltInImageTable: React.FC<BuiltInImageTableProps> = ({ columns, dataSource }) => {
  const tableColumns: DocMarkdownTableColumn<BuiltInImageRow>[] = [
    {
      title: columns.name,
      dataIndex: 'name',
      render: name =>
        typeof name === 'string' ? <code style={{ whiteSpace: 'pre-wrap' }}>{name}</code> : name,
    },
    {
      title: columns.description,
      dataIndex: 'description',
    },
    {
      title: columns.preview,
      dataIndex: 'image',
      align: 'center',
      render: image => <div style={{ display: 'flex', justifyContent: 'center' }}>{image}</div>,
    },
  ];

  return <DocMarkdownTable columns={tableColumns} dataSource={dataSource} />;
};

export default BuiltInImageTable;
