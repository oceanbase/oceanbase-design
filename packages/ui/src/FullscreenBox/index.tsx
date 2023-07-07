import { FullscreenExitOutlined, FullscreenOutlined } from '@oceanbase/icons';
import classnames from 'classnames';
import type { ReactNode } from 'react';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import type { Screenfull as ScreenFull } from 'screenfull';
import screenFull from 'screenfull';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import { getPrefix } from '../_util';
import zhCN from './locale/zh-CN';
// @ts-ignore
import './index.less';

export type FullscreenModeType = 'viewport' | 'browser';

export interface FullscreenBoxRef {
  changeFullscreen: () => void;
}

export interface FullscreenBoxProps extends LocaleWrapperProps {
  /**
   * @description 组件类名
   * @ignore
   */
  className?: string;
  /**
   * @description 自定义组件样式
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * @description 全屏模式，viewport（视口内全屏）, browser（浏览器全屏）
   * @default "viewport"
   */
  defaultMode?: FullscreenModeType;
  /**
   * @description 自定义 Header 头部
   */
  header?: false | ReactNode | { title: ReactNode; extra?: ReactNode };

  /**
   * @description 全屏状态切换时触发
   */
  onChange?: (fullscreen: boolean) => void;
  /**
   * @description 手动添加children申明
   */
  children?: any;
}

const prefix = getPrefix('fullscreen-box');

const FullscreenBox: React.FC<FullscreenBoxProps> = React.forwardRef<
  FullscreenBoxProps,
  FullscreenBoxRef
>(({ style, header, className, defaultMode, children, onChange }, ref) => {
  const [innerFullscreen, setInnerFullscreen] = useState(false);
  const containerRef = useRef();
  const fullscreenMode: string = defaultMode || 'viewport';

  useEffect(() => {
    // 添加事件监听
    (screenFull as ScreenFull).on('change', handleFullscreenChange);
    return () => {
      // 移除事件监听
      (screenFull as ScreenFull).off('change', handleFullscreenChange);
    };
  }, []);

  /**
   * 处理全屏模式切换完成后动作
   */
  const handleFullscreenChange = () => {
    const { isFullscreen } = screenFull as ScreenFull;
    setInnerFullscreen(() => {
      return isFullscreen;
    });
    emitChange(isFullscreen);
  };

  const toggleFullscreen = () => {
    changeFullscreen(!innerFullscreen);
  };

  /**
   * 供外部调用
   */
  const changeFullscreen: (fullscreen: boolean) => Promise<boolean> = (fullscreen: boolean) => {
    if (!containerRef.current) {
      return Promise.reject(new Error('Container element is not ready.'));
    }
    let p: Promise<void>;
    // 处理浏览器全屏
    if (fullscreenMode === 'browser') {
      const sf = screenFull as ScreenFull;
      if (fullscreen) {
        p = sf.request(containerRef.current);
      } else {
        p = sf.exit();
      }

      return p.then(() => sf.isFullscreen);
    }
    // 视口全屏，则直接修改状态并发通知
    setInnerFullscreen(fullscreen);
    emitChange(fullscreen);
    return Promise.resolve(fullscreen);
  };

  /**
   * 通知外部
   */
  const emitChange = (fullscreen: boolean) => {
    if (onChange) {
      onChange(fullscreen);
    }
  };

  // 向组件外部暴露 refresh 属性函数，可通过 ref 引用
  useImperativeHandle(ref, () => ({
    changeFullscreen: (fullscreen: boolean) => {
      changeFullscreen(fullscreen);
    },
  }));

  const icon = innerFullscreen ? (
    <FullscreenExitOutlined className={`${prefix}-header-icon`} onClick={toggleFullscreen} />
  ) : (
    <FullscreenOutlined className={`${prefix}-header-icon`} onClick={toggleFullscreen} />
  );

  if (innerFullscreen) {
    document.body.classList.add(`${prefix}-body-overflow-hidden`);
  } else {
    document.body.classList.remove(`${prefix}-body-overflow-hidden`);
  }

  const isComplexHeader = header && ((header as any).title || (header as any).extra);
  const isStringHeader = typeof header === 'string';

  let headerContent;
  // 隐藏 Header
  if (header === false) {
    headerContent = null;
  } else if (React.isValidElement(header)) {
    // 自定义Header
    headerContent = header;
  } else {
    const title = isStringHeader ? header : isComplexHeader && (header as any).title;
    const extra = isComplexHeader && (header as any).extra;
    headerContent = (
      <div className={`${prefix}-header`} data-testid="header">
        <div className={`${prefix}-header-left`}>
          {icon}
          {title && <span className={`${prefix}-header-title `}>{title}</span>}
        </div>
        {isComplexHeader && extra && <div className={`${prefix}-header-extra`}>{extra}</div>}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={style}
      className={classnames(prefix, className, {
        [`${prefix}-fullscreen`]: innerFullscreen,
      })}
    >
      {headerContent}
      {children}
    </div>
  );
});

export default LocaleWrapper({
  componentName: 'FullscreenBox',
  defaultLocale: zhCN,
})(FullscreenBox);
