import React from 'react';
import { Flex } from 'antd';
import theme from '../../../../../theme';
import { CheckOutlined, RightOutlined } from '@oceanbase/icons';
import { getFilterCls } from '../../../../style';
import { GAP_SIZE_SMALL, ICON_SIZE } from '../../constants';

interface OptionItemProps {
  label: React.ReactNode;
  hasChildren: boolean;
  isSelected: boolean;
  isMultiple: boolean;
  prefixCls: string;
}

/**
 * 级联选择器的选项文本显示组件（单选模式）
 */
export const OptionItem: React.FC<OptionItemProps> = ({
  label,
  hasChildren,
  isSelected,
  isMultiple,
  prefixCls,
}) => {
  const { token } = theme.useToken();

  return (
    <>
      {label && (
        <div className={getFilterCls(prefixCls, 'text-ellipsis')} style={{ flex: 1 }}>
          {label}
        </div>
      )}
      <Flex align="center" gap={GAP_SIZE_SMALL}>
        {!isMultiple && !hasChildren && isSelected && (
          <CheckOutlined style={{ color: token.colorPrimary }} />
        )}
        {hasChildren && (
          <RightOutlined style={{ fontSize: ICON_SIZE, color: token.colorTextSecondary }} />
        )}
      </Flex>
    </>
  );
};
