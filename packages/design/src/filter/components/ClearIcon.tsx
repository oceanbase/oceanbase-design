import { CloseOutlined, DownOutlined } from '@oceanbase/icons';
import type { FC } from 'react';
import React from 'react';
import useFilterStyle, { getFilterCls } from '../style';

interface ClearIconProps {
  handleClearClick?: () => void;
}

const ClearIcon: FC<ClearIconProps> = ({ handleClearClick }) => {
  const { prefixCls } = useFilterStyle();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    handleClearClick?.();
  };

  return (
    <div className={getFilterCls(prefixCls, 'icon-wrapper')}>
      <DownOutlined className={getFilterCls(prefixCls, 'arrow-icon')} />
      <div className={getFilterCls(prefixCls, 'clear-icon')} onClick={handleClick}>
        <CloseOutlined />
      </div>
    </div>
  );
};

export default ClearIcon;
