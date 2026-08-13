import React, { useState } from 'react';
import { ConfigProvider, Card, Table, Filter } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import type { ColumnsType } from '@oceanbase/design/es/table';

/* IMPLEMENT: replace with real data types and API */
type Row = { id: string; name: string };

const columns: ColumnsType<Row> = [{ title: 'Name', dataIndex: 'name', key: 'name' }];

export default function ListFilterTablePage() {
  const [data, setData] = useState<Row[]>([]);
  const [filters, setFilters] = useState<Record<string, unknown>>({});

  return (
    <ConfigProvider>
      <PageContainer title="List">
        <Filter.ResponsiveGroup
          value={filters}
          onChange={setFilters}
          onApply={() => {
            /* IMPLEMENT: fetch with filters */
          }}
        >
          <Filter.Select label="Status" name="status" options={[]} />
        </Filter.ResponsiveGroup>
        <Card bodyStyle={{ padding: 0 }}>
          <Table<Row> rowKey="id" columns={columns} dataSource={data} innerBordered />
        </Card>
      </PageContainer>
    </ConfigProvider>
  );
}
