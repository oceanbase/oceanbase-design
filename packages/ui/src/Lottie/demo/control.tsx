import React, { useState, useRef } from 'react';
import { Button, Space } from '@oceanbase/design';
import { PauseCircleOutlined, PlayCircleFilled } from '@oceanbase/icons';
import { Lottie } from '@oceanbase/ui';
import { LottieRef } from '@oceanbase/ui/es/Lottie';

export default () => {
  const ref = useRef<LottieRef>();

  const [play, setPlay] = useState(true);
  return (
    <div>
      <Space>
        {play ? (
          <Button
            icon={<PauseCircleOutlined />}
            onClick={() => {
              setPlay(false);
              ref.current?.animation?.pause();
            }}
          >
            Pause
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<PlayCircleFilled />}
            onClick={() => {
              setPlay(true);
              ref.current?.animation?.play();
            }}
          >
            Play
          </Button>
        )}
      </Space>
      <div>
        <Lottie
          ref={ref}
          path="https://assets9.lottiefiles.com/packages/lf20_WPqksadnNs.json"
          style={{
            height: 200,
          }}
        />
      </div>
    </div>
  );
};
