import React from 'react';
import { Result } from '@oceanbase/design';
import Success from '../Success';
import Error from '../Error';
import Warning from '../Warning';
import Processing from '../Processing';
import Normal from '../Normal';
import Image403 from '../403';
import Image404 from '../404';
import Image500 from '../500';

const statusItems = [
  { name: 'success', image: <Success /> },
  { name: 'error', image: <Error /> },
  { name: 'warning', image: <Warning /> },
  { name: 'processing', image: <Processing /> },
  { name: 'normal', image: <Normal /> },
  { name: '403', image: <Image403 /> },
  { name: '404', image: <Image404 /> },
  { name: '500', image: <Image500 /> },
] as const;

const iconItems = [
  { name: 'PRESENTED_IMAGE_NOT_FOUND', image: <Result.PRESENTED_IMAGE_NOT_FOUND /> },
  { name: 'PRESENTED_IMAGE_NETWORK_ERROR', image: <Result.PRESENTED_IMAGE_NETWORK_ERROR /> },
  { name: 'PRESENTED_IMAGE_VERSION_UPDATE', image: <Result.PRESENTED_IMAGE_VERSION_UPDATE /> },
] as const;

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(160px, 1fr) auto',
  gap: '16px 32px',
  alignItems: 'center',
};

const sectionTitleStyle: React.CSSProperties = {
  gridColumn: '1 / -1',
  margin: '8px 0 0',
  fontWeight: 600,
};

const PreviewGrid = ({ items }: { items: readonly { name: string; image: React.ReactNode }[] }) => (
  <>
    {items.map(item => (
      <React.Fragment key={item.name}>
        <code>{item.name}</code>
        <div style={{ display: 'flex', justifyContent: 'center' }}>{item.image}</div>
      </React.Fragment>
    ))}
  </>
);

export default () => (
  <div style={gridStyle}>
    <div style={sectionTitleStyle}>status</div>
    <PreviewGrid items={statusItems} />
    <div style={sectionTitleStyle}>PRESENTED_IMAGE_*</div>
    <PreviewGrid items={iconItems} />
  </div>
);
