import React, { isValidElement } from 'react';
import { Tooltip, Space, Popover } from 'antd';
import {
  ExclamationCircleFilled,
  InfoCircleFilled,
  InfoCircleOutlined,
  QuestionCircleOutlined,
} from '@oceanbase/icons';
import classNames from 'classnames';
import { getPrefix } from '../_util';
import './index.less';

export interface ContentWithIconProps {
  content?: React.ReactNode;
  tooltip?: any;
  prefixIcon?: React.ReactNode | boolean;
  suffixIcon?: React.ReactNode;
  className?: string;
  iconType?: 'question' | 'info' | 'exclamation';
  color?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.SyntheticEvent) => void;
  tooltipWithLink?: boolean;
  textHidden?: boolean;
  popOver?: any;
  size?: number;
  infoColor?: string;
  exclamationColor?: string;
}

const prefix = getPrefix('content-with-question');

const ContentWithIcon: React.FC<ContentWithIconProps> = ({
  content,
  tooltip,
  prefixIcon = null,
  suffixIcon,
  className,
  children,
  iconType,
  color,
  tooltipWithLink = false,
  popOver,
  textHidden = true,
  size = 14,
  infoColor,
  exclamationColor = '#FAAD14',
  ...restProps
}: any) => {
  const defaultIconType = () => {
    if (iconType === 'question') {
      return (
        <QuestionCircleOutlined
          style={{ color: color === 'default' ? '#132039' : color, fontSize: size }}
          className={`${prefix}-help`}
        />
      );
    }
    if (iconType === 'info') {
      if (infoColor) {
        return (
          <InfoCircleFilled
            style={{ color: infoColor, fontSize: size }}
            className={`${prefix}-help`}
          />
        );
      } else {
        return (
          <InfoCircleOutlined
            style={{ color: '3333333', fontSize: size }}
            className={`${prefix}-help`}
          />
        );
      }
    }
    if (iconType === 'exclamation') {
      return (
        <ExclamationCircleFilled
          style={{ color: exclamationColor, fontSize: size }}
          className={`${prefix}-help`}
        />
      );
    }
  };

  // 图标在文字后
  suffixIcon = suffixIcon !== null && iconType ? defaultIconType() : suffixIcon; // 自定义图标，非内置

  // FIXME: antd 已经废弃 icon type 的用法，该组件也需要做相应处理，后面将会是传入 Icon 的形式而非 type
  const getIcon = (iconConfig: React.ReactNode) => {
    return iconConfig ? (
      !textHidden && iconType === 'info' ? (
        // 文本描述直接展示且只在 info 类型下生效
        <Space size={4}>
          {iconConfig}
          <span style={{ color: '#5C6B8A' }}>文本示意不超过二十字文本示意不超过二十字</span>
        </Space>
      ) : // 提示文案描述带有链接
      tooltipWithLink ? (
        <Popover {...popOver}>
          {isValidElement(iconConfig) ? iconConfig : defaultIconType()}
        </Popover>
      ) : (
        <Tooltip {...tooltip}>
          {isValidElement(iconConfig) ? iconConfig : defaultIconType()}
        </Tooltip>
      )
    ) : null;
  };

  return (
    <>
      {
        <span
          className={classNames({
            [`${prefix}-item`]: true,
            [className]: !!className,
          })}
          {...restProps}
        >
          <Space size={4}>
            {getIcon(
              //  图标在文字前
              prefixIcon === true ? defaultIconType() : prefixIcon
            )}
            <span
              data-testid="content"
              style={{ color: color === 'default' ? '#5C6B8A' : color, fontSize: size }}
            >
              {content ?? children}
            </span>
            {getIcon(suffixIcon)}
          </Space>
        </span>
      }
    </>
  );
};

export default ContentWithIcon;
