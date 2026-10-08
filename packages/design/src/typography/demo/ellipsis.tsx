import { Space, Switch, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

const { Link, Paragraph, Text, Title } = Typography;

const article =
  'OceanBase is a distributed relational database designed for financial-grade scenarios. It provides high availability, high scalability and high compatibility with MySQL, and supports both OLTP and OLAP workloads in the same cluster.';

const App: React.FC = () => {
  const [ellipsis, setEllipsis] = useState(true);
  const textStyle: React.CSSProperties | undefined = ellipsis ? { width: 240 } : undefined;

  return (
    <Space direction="vertical" size={16} style={{ width: '100%', maxWidth: 560 }}>
      <Switch
        checked={ellipsis}
        onChange={value => {
          setEllipsis(value);
        }}
      />

      {/* Single line, the full text is shown in a Tooltip on overflow by default */}
      <Paragraph ellipsis={ellipsis} style={{ marginBottom: 0 }}>
        {article}
      </Paragraph>

      {/* Multiple lines, limited to the given rows */}
      <Paragraph ellipsis={ellipsis ? { rows: 2 } : false} style={{ marginBottom: 0 }}>
        {article}
      </Paragraph>

      {/* Multiple lines, expandable with a custom symbol and suffix */}
      <Paragraph
        ellipsis={
          ellipsis
            ? {
                rows: 2,
                expandable: true,
                symbol: 'Expand',
                suffix: '--OceanBase',
              }
            : false
        }
        style={{ marginBottom: 0 }}
      >
        {article} {article}
      </Paragraph>

      {/* Single line, customize the Tooltip content */}
      <Text style={textStyle} ellipsis={ellipsis ? { tooltip: 'This is a custom tooltip' } : false}>
        {article}
      </Text>

      {/* Single line, disable the default Tooltip */}
      <Text code style={textStyle} ellipsis={ellipsis ? { tooltip: false } : false}>
        {article}
      </Text>

      {/* Ellipsis also works on Title */}
      <Title level={5} ellipsis={ellipsis} style={{ marginBottom: 0 }}>
        {article}
      </Title>

      {/* Link only supports boolean ellipsis, without a default Tooltip */}
      <Link
        href="https://design.oceanbase.com"
        target="_blank"
        ellipsis={ellipsis}
        style={ellipsis ? { width: 240 } : undefined}
      >
        {article}
      </Link>
    </Space>
  );
};

export default App;
