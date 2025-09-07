import { Flex } from '@oceanbase/design';
import { CloseOutlined } from '@oceanbase/icons';
import type { FC } from 'react';
import React from 'react';
import { getPrefix } from '../../_util';
import '../styles.less';

interface ClearCircleProps {
  clear: () => void;
}

/**
 * 清空按钮
 * @param clear 点击清除后的回调函数
 */
const ClearCircle: FC<ClearCircleProps> = ({ clear }) => {
  const prefix = getPrefix('filter');

  return (
    <Flex justify="center" align="center" className={`${prefix}-clear-circle-container`}>
      <CloseOutlined
        className={`${prefix}-clear-circle`}
        onClick={e => {
          e.stopPropagation();
          clear();
        }}
      />
    </Flex>
  );
};

export default ClearCircle;
