import { Button } from '@oceanbase/design';
import { Dialog } from '@oceanbase/ui';
import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

const docLink = 'https://www.oceanbase.com/docs/enterprise';

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);

  const onHelpDocClick = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const handleResize = debounce(() => {
    setClientWidth(document.body.clientWidth);
    setClientHeight(document.body.clientHeight);
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Dialog
        visible={showDialog}
        onClose={() => setShowDialog(false)}
        clientWidth={clientWidth}
        clientHeight={clientHeight}
        draggable={true}
        extLink={{ link: docLink }}
      >
        <iframe src={docLink} />
      </Dialog>
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
