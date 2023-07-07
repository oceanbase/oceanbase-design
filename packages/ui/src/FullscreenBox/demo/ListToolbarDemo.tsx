/**
 * title: 和 ListToolbar 一起使用
 */
import { Button } from '@oceanbase/design';
import { FullscreenBox } from '@oceanbase/ui';
import { useRef, useState } from 'react';
import { SimpleTable } from './SimpleTable';

export default () => {
  const [fullscreen, setFullscreen] = useState(false);
  const boxRef = useRef<typeof FullscreenBox>();

  function handleFullscreenChange(fs) {
    setFullscreen(fs);
  }

  function toggleFullscreen() {
    boxRef?.current?.changeFullscreen(!fullscreen);
  }

  return (
    <div style={{ width: 1000 }}>
      <FullscreenBox
        ref={boxRef}
        onChange={handleFullscreenChange}
        header={
          <Button type="link" onClick={() => toggleFullscreen()}>
            全屏
          </Button>
        }
      >
        <SimpleTable />
      </FullscreenBox>
    </div>
  );
};
