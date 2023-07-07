import { Button } from '@oceanbase/design';
import { Dialog } from '@oceanbase/ui';
import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

const docLink = 'https://www.oceanbase.com/docs/enterprise';
const DEFAULT_EMBDED_WIDTH = 0.4;
const MAX_EMBED_WIDTH = 0.5;
const MIN_EMBED_WIDTH = 0.3;

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const [rootWidth, setRootWidth] = useState('100%');

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
    <div
      style={{
        transition: 'all 0.3s ease-out',
        overflow: 'scroll',
        height: '100%',
        border: '2px solid aqua',
        width: rootWidth,
      }}
    >
      <Dialog
        visible={showDialog}
        onClose={() => setShowDialog(false)}
        clientWidth={clientWidth}
        clientHeight={clientHeight}
        draggable={true}
        extLink={{ link: docLink }}
        setRootWidth={setRootWidth}
        max={[MAX_EMBED_WIDTH * clientWidth, clientHeight]}
        min={[MIN_EMBED_WIDTH * clientWidth, clientHeight]}
        width={DEFAULT_EMBDED_WIDTH * clientWidth}
        height={clientHeight}
        top={0}
        left={(1 - DEFAULT_EMBDED_WIDTH) * clientWidth}
        isEmbed={true}
      >
        <iframe src={docLink} />
      </Dialog>
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
