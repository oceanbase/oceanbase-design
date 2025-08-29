import { Flex, theme } from '@oceanbase/design';
import { CloseOutlined } from '@oceanbase/icons';
import type { FC } from 'react';
import React from 'react';

interface ClearCircleProps {
  clear: () => void;
}

/**
 * 清空按钮
 * @param clear 点击清除后的回调函数
 */
const ClearCircle: FC<ClearCircleProps> = ({ clear }) => {
  const { token } = theme.useToken();

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        background: token.colorIcon,
        borderRadius: 8,
        padding: 3,
      }}
    >
      <CloseOutlined
        style={{
          fontSize: 10,
          lineHeight: 10,
          color: '#fff',
        }}
        onClick={e => {
          e.stopPropagation();
          clear();
        }}
      />
    </Flex>
  );
};

export default ClearCircle;
