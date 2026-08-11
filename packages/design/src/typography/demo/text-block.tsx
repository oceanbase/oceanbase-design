import React, { useState } from 'react';
import { Segmented, Typography } from '@oceanbase/design';

const { Text, Link } = Typography;

const textStyle: React.CSSProperties = {
  padding: '0px 8px',
  background: 'var(--ob-color-bg-secondary)',
  borderRadius: 'var(--ob-radius-sm)',
};

const rowStyle: React.CSSProperties = {
  marginBottom: 12,
};

const App: React.FC = () => {
  const [block, setBlock] = useState<'inline' | 'block'>('inline');

  return (
    <div>
      <div style={rowStyle}>
        <Segmented
          value={block}
          onChange={value => setBlock(value as 'inline' | 'block')}
          options={['inline', 'block']}
        />
      </div>
      <div style={rowStyle}>
        <Text style={textStyle} block={block === 'block'}>
          Typography.Text
        </Text>
      </div>
      <div style={rowStyle}>
        <Link
          style={textStyle}
          block={block === 'block'}
          href="https://design.oceanbase.com"
          target="_blank"
        >
          Typography.Link
        </Link>
      </div>
      <div>
        <Text style={textStyle} block={block === 'block'} caption>
          Typography.Text with caption
        </Text>
      </div>
    </div>
  );
};

export default App;
