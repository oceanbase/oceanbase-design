import React, { useCallback, useState } from 'react';
import { Button } from '@oceanbase/design';
import { DocDialog } from '@oceanbase/ui';
import './index.less';

const docLink = 'https://www.oceanbase.com/docs/enterprise';

const docLinkMap = {
  '/overview':
    'https://www.oceanbase.com/en/docs/enterprise/oceanbase-database-en/V3.2.2/10000000000385431',
  '/cluster':
    'https://www.oceanbase.com/en/docs/enterprise/oceanbase-database-en/V3.2.2/10000000000386301',
};

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [rootWidth, setRootWidth] = useState('100%');

  const onHelpDocClick = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const setVisible = useCallback(
    (payload: boolean) => {
      setShowDialog(payload);
    },
    [setShowDialog]
  );

  return (
    <div
      style={{
        transition: 'all 0.3s ease-out',
        overflow: 'scroll',
        height: '100%',
        border: '2px solid aqua',
        width: rootWidth,
      }}
    >
      <DocDialog
        className="doc-dialog-demo"
        visible={showDialog}
        setVisible={setVisible}
        setRootWidth={setRootWidth}
        fallbackUrl={docLink}
        docUrls={docLinkMap}
      />
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
