import { CloseOutlined } from '@oceanbase/icons';
import { Badge, ConfigProvider, Tooltip } from '@oceanbase/design';
import type { BadgeProps } from '@oceanbase/design/es/badge/index';
import type { TooltipPropsWithTitle } from '@oceanbase/design/es/tooltip/index';
import classnames from 'classnames';
import React, { createRef, useCallback, useContext, useEffect, useState } from 'react';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import useStyle from './style';
import Dragger from './Dragger';
import IconLoading from './IconLoading';
import zhCN from './locale/zh-CN';

export type SideTipType = 'primary' | 'default';
export type SideTipSize = 'small' | 'default';
export interface Position {
  /**
   * @title 距离右侧
   * @description 设置悬浮按钮距离右侧边框的像素距离
   * @default "32"
   */
  right?: number;
  /**
   * @title 距离底部
   * @description 设置悬浮按钮距离底部边框的像素距离
   * @default "32"
   */
  bottom?: number;
}

export interface SideTipProps extends LocaleWrapperProps {
  /**
   * @description 自定义前缀
   * @ignore
   */
  prefix?: string;
  /**
   * @title 按钮类型
   * @description 按钮类型
   */
  type?: SideTipType;
  /**
   * @title 按钮尺寸
   * @description 按钮尺寸
   */
  size?: SideTipSize;
  /**
   * @title icon 地址
   * @description icon地址，可以设置图片地址或 ReactNode
   */
  icon?: string | React.ReactNode;
  /**
   * @title 指定是否打开
   * @description 指定是否打开
   * @default false
   */
  open?: boolean;
  /**
   * @title 指定是否打开
   * @description 指定是否打开
   * @default false
   * @deprecated
   */
  visible?: boolean;
  /**
   * @title 加载中
   * @description 指定是否loading
   */
  loading?: boolean;
  /**
   * @title 是否可隐藏
   * @description 是否可隐藏
   * @default true
   */
  hideable?: boolean;
  /**
   * @title 组件 ID
   * @description 若页面中有多个侧边提示组件，则通过 id 标识当前组件，用于缓存侧边提示组件是否隐藏配置
   */
  id?: string;
  /**
   * @description style 属性
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * @description className
   * @ignore
   */
  className?: string;
  /**
   * @title 按钮 style 属性
   * @description 按钮的 style 属性
   */
  buttonStyle?: React.CSSProperties;
  /**
   * @title 按钮的 className 属性
   * @description 按钮的 className 属性
   */
  buttonClassName?: string;
  /**
   * @title 徽标属性
   * @description 徽标属性，详见antd [badge](https://ant.design/components/badge-cn/#API)属性
   */
  badge?: BadgeProps;
  /**
   * @title ToolTip 相关属性
   * @description ToolTip 相关属性
   */
  tooltip?: TooltipPropsWithTitle;
  /**
   * @title 默认是否隐藏
   * @description 按钮默认是否隐藏
   * @default false
   */
  defaultHide?: boolean;
  /**
   * @title 初始位置
   * @description 初始位置
   */
  position?: Position;
  /**
   * @description 点击气泡事件
   */
  onClick?: (e) => void;
  /**
   * @description 开始拖动
   */
  onDragStart?: () => void;
  /**
   * @description 结束拖动
   */
  onDragEnd?: () => void;
  /**
   * @description 正在拖动
   */
  onDrag?: (offset: any) => void;
  /**
   * 鼠标移入事件
   */
  onMouseEnter?: (e: MouseEvent) => void;
  /**
   * 鼠标离开事件
   */
  onMouseLeave?: (e: MouseEvent) => void;
  /**
   * @title 不可用
   * @description 不可用
   * @default false
   */
  disabled?: boolean;
  /**
   * @title 返回气泡弹出所在的容器
   * @description 返回气泡弹出所在的容器
   * @default "() => document.body"
   */
  getPopupContainer?: () => HTMLElement;
  children?: any;
  /**
   * @title 是否可拖拽
   * @description 是否可拖拽
   * @default true
   */
  draggable?: boolean;
}

export interface SideTipState {
  hide?: boolean;
  hovered?: boolean;
}

const SideTip: React.FC<SideTipProps> = props => {
  const buttonRef = createRef<HTMLDivElement>();
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('sidetip');
  const { wrapSSR } = useStyle(prefixCls);

  const {
    defaultHide,
    onClick,
    open,
    loading,
    children,
    icon,
    type,
    size,
    style,
    visible,
    className,
    badge,
    tooltip,
    position,
    onDragStart,
    onDragEnd,
    onDrag,
    buttonClassName: customButtonClassName,
    buttonStyle,
    id,
    hideable = true,
    disabled = false,
    draggable = true,
    getPopupContainer,
  } = props;

  const getLocalStorageKey = useCallback(
    (localId?: string) => {
      return [`${prefixCls}-hide`, localId].join('-');
    },
    [prefixCls]
  );

  const [hide, setHide] = useState(
    hideable
      ? defaultHide === undefined
        ? window.localStorage.getItem(getLocalStorageKey(id)) === 'true'
        : !!defaultHide
      : false
  );
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    if (hide) {
      window.localStorage.setItem(getLocalStorageKey(id), 'true');
    } else {
      window.localStorage.removeItem(getLocalStorageKey(id));
    }
  }, [hide, id, getLocalStorageKey]);

  const hideSideTip = () => {
    setHide(true);
  };

  const onButtonClick = e => {
    if (hide) {
      // isHide
      setHide(false);
    } else {
      if (disabled) return;
      // not hide, show iframe
      if (onClick) {
        onClick(e);
      }
    }
  };

  const handleMouseEnter = e => {
    setHovered(true);
    if (props.onMouseEnter) {
      props.onMouseEnter(e);
    }
  };

  const handleMouseLeave = e => {
    setHovered(false);
    if (props.onMouseLeave) {
      props.onMouseLeave(e);
    }
  };

  const getTypeCls = (typeCls: string) => {
    if (typeCls === 'primary') return 'primary';
    return '';
  };

  const getSizeCls = (sizeCls: string) => {
    if (sizeCls === 'small') return 'small';
    return '';
  };

  const typeCls = getTypeCls(type);
  const sizeCls = getSizeCls(size);

  const buttonPrefix = `${prefixCls}-button`;

  // icon
  const iconClassName = classnames(
    `${buttonPrefix}-icon`,
    (open || visible) && `${buttonPrefix}-icon-open`,
    disabled && `${buttonPrefix}-icon-disabled`,
    typeCls && `${buttonPrefix}-icon-${typeCls}`,
    sizeCls && `${buttonPrefix}-icon-${sizeCls}`
  );
  // 接受三种形式的icon
  const iconDom = icon ? (
    <span className={iconClassName}>
      {React.isValidElement(icon) ? (
        icon
      ) : typeof icon === 'string' && icon ? (
        <img src={icon} alt="icon" width="100%" height="100%" />
      ) : null}
    </span>
  ) : null;

  // close 按钮
  const closeClassName = classnames(`${buttonPrefix}-close`, {
    [`${buttonPrefix}-close-show`]: open || visible,
    [`${buttonPrefix}-close-${typeCls}`]: typeCls,
    [`${buttonPrefix}-close-${sizeCls}`]: sizeCls,
  });

  const buttonClassName = classnames(buttonPrefix, customButtonClassName, {
    [`${buttonPrefix}-disabled`]: disabled,
    [`${buttonPrefix}-${typeCls}`]: typeCls,
    [`${buttonPrefix}-${sizeCls}`]: sizeCls,
  });

  const loadingClassName = classnames(`${buttonPrefix}-loading`, {
    [`${buttonPrefix}-loading-${typeCls}`]: typeCls,
    [`${buttonPrefix}-loading-${sizeCls}`]: sizeCls,
  });

  // 内部 Icon
  const InnerButton = (
    <div className={buttonClassName} ref={buttonRef} style={buttonStyle}>
      {loading && <IconLoading className={loadingClassName} />}
      <>
        {iconDom}
        <CloseOutlined className={closeClassName} />
      </>
    </div>
  );

  // 徽标
  const BadgeButton = badge ? (
    <Badge offset={[-6, 6]} {...badge}>
      {InnerButton}
    </Badge>
  ) : (
    InnerButton
  );

  const hideIconClassName = classnames(`${prefixCls}-hide`, {
    [`${prefixCls}-hide-hovered`]: hovered,
  });

  // 隐藏按钮
  const hideIcon = (
    <div id="ui-mini-hide" onClick={hideSideTip} className={hideIconClassName}>
      <div className={`${prefixCls}-hide-icon`} />
    </div>
  );

  const containerClassName = classnames(className, {
    [`${prefixCls}-container-disabled`]: disabled,
  });

  return wrapSSR(
    <Dragger
      id={id}
      open={open || visible}
      hide={hide}
      onClick={onButtonClick}
      onOverlap={hideSideTip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      position={position}
      prefix={prefixCls}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrag={onDrag}
      getPopupContainer={getPopupContainer}
      className={containerClassName}
      draggable={draggable}
    >
      {tooltip && tooltip.title ? (
        <Tooltip {...tooltip} getPopupContainer={() => buttonRef.current}>
          {BadgeButton}
        </Tooltip>
      ) : (
        BadgeButton
      )}
      {hideable && hideIcon}
      {children}
    </Dragger>
  );
};

export default LocaleWrapper({
  componentName: 'SideTip',
  defaultLocale: zhCN,
})(SideTip);
