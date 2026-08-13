import React from 'react';

export interface DocMarkdownTableColumn<RecordType> {
  title: string;
  dataIndex: keyof RecordType;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: RecordType[keyof RecordType], record: RecordType) => React.ReactNode;
}

export interface DocMarkdownTableProps<RecordType extends { key: React.Key }> {
  columns: DocMarkdownTableColumn<RecordType>[];
  dataSource: RecordType[];
  className?: string;
}

const renderCell = <RecordType extends { key: React.Key }>(
  column: DocMarkdownTableColumn<RecordType>,
  record: RecordType
) => {
  const value = record[column.dataIndex];
  return column.render ? column.render(value, record) : (value as React.ReactNode);
};

const DocMarkdownTable = <RecordType extends { key: React.Key }>({
  columns,
  dataSource,
  className,
}: DocMarkdownTableProps<RecordType>) => (
  <div className={['dumi-default-table', className].filter(Boolean).join(' ')}>
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={String(column.dataIndex)}
              style={{ width: column.width, textAlign: column.align }}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map(record => (
          <tr key={record.key}>
            {columns.map(column => (
              <td key={String(column.dataIndex)} style={{ textAlign: column.align }}>
                {renderCell(column, record)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DocMarkdownTable;
