import { FullscreenExitOutlined, FullscreenOutlined } from '@oceanbase/icons';
import { ConfigProvider } from '@oceanbase/design';
import classnames from 'classnames';
import type { ReactNode } from 'react';
import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import screenFull from 'screenfull';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import useStyle from './style';
import zhCN from './locale/zh-CN';

export type FullscreenModeType = 'viewport' | 'browser';

export interface FullscreenBoxRef {
  changeFullscreen: (fullscreen: boolean) => void;
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

const FullscreenBox = React.forwardRef<FullscreenBoxRef, FullscreenBoxProps>(
  ({ style, header, className, defaultMode, children, onChange }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('fullscreen-box');
    const { wrapSSR } = useStyle(prefixCls);
    const [innerFullscreen, setInnerFullscreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const fullscreenMode: string = defaultMode || 'viewport';

    /**
     * 通知外部
     */
    const emitChange = (fullscreen: boolean) => {
      if (onChange) {
        onChange(fullscreen);
      }
    };

    /**
     * 处理全屏模式切换完成后动作
     */
    const handleFullscreenChange = () => {
      const { isFullscreen } = screenFull;
      setInnerFullscreen(() => {
        return isFullscreen;
      });
      emitChange(isFullscreen);
    };

    useEffect(() => {
      // 添加事件监听
      screenFull.on('change', handleFullscreenChange);
      return () => {
        // 移除事件监听
        screenFull.off('change', handleFullscreenChange);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        const sf = screenFull;
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

    // 向组件外部暴露 refresh 属性函数，可通过 ref 引用
    useImperativeHandle(ref, () => ({
      changeFullscreen: (fullscreen: boolean) => {
        changeFullscreen(fullscreen);
      },
    }));

    const icon = innerFullscreen ? (
      <FullscreenExitOutlined className={`${prefixCls}-header-icon`} onClick={toggleFullscreen} />
    ) : (
      <FullscreenOutlined className={`${prefixCls}-header-icon`} onClick={toggleFullscreen} />
    );

    useEffect(() => {
      if (innerFullscreen) {
        document.body.classList.add(`${prefixCls}-body-overflow-hidden`);
      } else {
        document.body.classList.remove(`${prefixCls}-body-overflow-hidden`);
      }
      return () => {
        document.body.classList.remove(`${prefixCls}-body-overflow-hidden`);
      };
    }, [innerFullscreen, prefixCls]);

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
        <div className={`${prefixCls}-header`} data-testid="header">
          <div className={`${prefixCls}-header-left`}>
            {icon}
            {title && <span className={`${prefixCls}-header-title`}>{title}</span>}
          </div>
          {isComplexHeader && extra && <div className={`${prefixCls}-header-extra`}>{extra}</div>}
        </div>
      );
    }

    return wrapSSR(
      <div
        ref={containerRef}
        style={style}
        className={classnames(`${prefixCls}-box`, className, {
          [`${prefixCls}-box-fullscreen`]: innerFullscreen,
        })}
      >
        {headerContent}
        {children}
      </div>
    );
  }
);

export default LocaleWrapper({
  componentName: 'FullscreenBox',
  defaultLocale: zhCN,
})(FullscreenBox);
