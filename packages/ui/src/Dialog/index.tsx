import {
  CloseOutlined,
  ExpandAltOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  MinusOutlined,
} from '@oceanbase/icons';
import type { MouseEvent, PointerEvent } from 'react';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ConfigProvider } from '@oceanbase/design';
import { createPortal } from 'react-dom';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import { Anchor } from './Anchor';
import { Dock } from './Dock';
import { EventProxy } from './EventProxy';
import zhCN from './locale/zh-CN';
import useStyle from './style';

const DEFAULT_LEFT = 0.1;
const DEFAULT_TOP = 0.1;
const MINIMIZE_HEIGHT = 36;
const MINIMIZE_WIDTH = 320;
const DEFAULT_MIN: [number, number] = [320, 256];
const DEFAULT_WIDTH_MEMBER = 520;
const DEFAULT_HEIGHT_MEMBER = 600;
const DEFAULT_BORDER_WIDTH = 24;
// 预留滚动条宽度
const SCROLL_BAR_WIDTH = 1;

export interface DialogLocale {
  helpDocument: string;
  openHelpCenter: string;
}

export interface DialogExtLink {
  text?: string;
  link: string;
}

export interface DialogProps extends LocaleWrapperProps {
  className?: string;
  visible?: boolean;
  children?: React.ReactNode;
  min?: [number, number];
  max?: [number, number];
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  title?: string;
  onClose?: () => void;
  clientWidth: number;
  clientHeight: number;
  resizable?: boolean;
  draggable?: boolean;
  enableMaximization?: boolean;
  locale?: DialogLocale;
  extLink?: DialogExtLink;
  // 内部修改外部容器宽度
  setRootWidth?: (newWidth: string) => void;
  // 是否嵌入模式
  isEmbed?: boolean;
}

interface DialogState {
  mask?: boolean;
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  moveX?: number;
  moveY?: number;
  maximization?: boolean;
  minimize?: boolean;
  headerStyle?: Record<string, any>;
}

// Static container for portal
let _container: HTMLDivElement | null = null;

const getContainer = (): HTMLDivElement => {
  if (!_container) {
    _container = document.createElement('div');
    document.body.appendChild(_container);
  }
  return _container;
};

const DialogComp: React.FC<DialogProps> = props => {
  const {
    className,
    visible,
    children,
    min = DEFAULT_MIN,
    max,
    width,
    height,
    left,
    top,
    title,
    onClose,
    clientWidth,
    clientHeight,
    resizable = true,
    draggable = true,
    enableMaximization = true,
    locale,
    extLink,
    setRootWidth,
    isEmbed = false,
  } = props;

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('dialog');
  const { wrapSSR } = useStyle(prefixCls);

  // Refs for instance properties
  const hostRef = useRef<HTMLDivElement | null>(null);
  const clientXRef = useRef(0);
  const clientYRef = useRef(0);
  const isPointDownRef = useRef(false);
  const originInfoRef = useRef<Record<string, any>>({});

  // State
  const [mask, setMask] = useState(true);
  const [dialogWidth, setDialogWidth] = useState(width ?? DEFAULT_WIDTH_MEMBER);
  const [dialogHeight, setDialogHeight] = useState(height ?? DEFAULT_HEIGHT_MEMBER);
  const [dialogLeft, setDialogLeft] = useState(
    left ?? clientWidth - (width ?? DEFAULT_WIDTH_MEMBER) - DEFAULT_BORDER_WIDTH
  );
  const [dialogTop, setDialogTop] = useState(
    top ?? clientHeight - (height ?? DEFAULT_HEIGHT_MEMBER) - DEFAULT_BORDER_WIDTH
  );
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [maximization, setMaximization] = useState(isEmbed);
  const [minimize, setMinimize] = useState(false);
  const [headerStyle, setHeaderStyle] = useState<Record<string, any>>({});

  // Computed values
  const maxSize = useMemo(() => {
    if (max) return max;
    return [clientWidth, clientHeight];
  }, [max, clientWidth, clientHeight]);

  const minSize = useMemo(() => min, [min]);

  const getDefaultEmbedState = useCallback(() => {
    return {
      width: width ?? DEFAULT_WIDTH_MEMBER,
      height: height ?? DEFAULT_HEIGHT_MEMBER,
      left: left ?? clientWidth - (width ?? DEFAULT_WIDTH_MEMBER) - DEFAULT_BORDER_WIDTH,
      top: top ?? clientHeight - (height ?? DEFAULT_HEIGHT_MEMBER) - DEFAULT_BORDER_WIDTH,
    };
  }, [width, height, left, top, clientWidth, clientHeight]);

  const setRootWidthInEmbedMode = useCallback(
    (newWidth: number) => {
      const restWidth = !!newWidth ? newWidth + SCROLL_BAR_WIDTH : 0;
      const rootWidth = (clientWidth - restWidth) / clientWidth;
      setRootWidth?.(`${rootWidth * 100}%`);
    },
    [clientWidth, setRootWidth]
  );

  const compatClonedModel = useCallback(
    (model: any): Record<string, any> => {
      return {
        left: DEFAULT_LEFT,
        top: DEFAULT_TOP,
        width: DEFAULT_WIDTH_MEMBER / clientWidth,
        height: DEFAULT_HEIGHT_MEMBER / clientHeight,
        minimize: false,
        maximization: false,
        ...model,
      };
    },
    [clientWidth, clientHeight]
  );

  const checkSize = (w: number, h: number) => {
    const newModel: Partial<DialogState> = {};

    const result = {
      widthShouldChange: true,
      heightShouldChange: true,
    };

    if (minSize && w < minSize[0]) {
      newModel.width = minSize[0];
      result.widthShouldChange = false;
    }
    if (minSize && h < minSize[1]) {
      newModel.height = minSize[1];
      result.heightShouldChange = false;
    }
    if (maxSize && w > maxSize[0]) {
      newModel.width = maxSize[0];
      result.widthShouldChange = false;
    }
    if (maxSize && h > maxSize[1]) {
      newModel.height = maxSize[1];
      result.heightShouldChange = false;
    }

    return result;
  };

  // componentDidMount
  useEffect(() => {
    const host = document.createElement('div');
    hostRef.current = host;
    getContainer().appendChild(host);

    return () => {
      if (hostRef.current && getContainer().contains(hostRef.current)) {
        getContainer().removeChild(hostRef.current);
      }
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (!visible) {
      setRootWidthInEmbedMode(0);
      return;
    }

    const tempState = getDefaultEmbedState();
    setDialogWidth(tempState.width);
    setDialogHeight(tempState.height);
    setDialogLeft(tempState.left);
    setDialogTop(tempState.top);
    setRootWidthInEmbedMode(tempState.width);
  }, [visible, clientWidth, clientHeight, getDefaultEmbedState, setRootWidthInEmbedMode]);

  useEffect(() => {
    if (isEmbed) {
      setMinimize(false);
      setMaximization(true);
    } else {
      setMinimize(false);
      setMaximization(false);
      if (height) setDialogHeight(height);
      if (width) setDialogWidth(width);
      if (top !== undefined) setDialogTop(top);
      if (left !== undefined) setDialogLeft(left);
    }
  }, [isEmbed, height, width, top, left]);

  // Drag handlers
  const onDragStart = (event: PointerEvent) => {
    if (!draggable) return;
    if (maximization) return;
    setMask(true);
    if (dialogLeft === undefined) {
      setDialogLeft(DEFAULT_LEFT);
    }
    if (dialogTop === undefined) {
      setDialogTop(DEFAULT_TOP);
    }

    clientXRef.current = event.clientX;
    clientYRef.current = event.clientY;
    isPointDownRef.current = true;
  };

  const onDragMove = (event: PointerEvent) => {
    if (!draggable || !isPointDownRef.current) return;
    event.preventDefault();
    setMoveX(event.clientX - clientXRef.current);
    setMoveY(event.clientY - clientYRef.current);
  };

  const onDragEnd = () => {
    if (!draggable) return;
    isPointDownRef.current = false;
    if (moveX === 0 && moveY === 0) return;
    setMask(false);
    setDialogLeft(prev => (prev ?? 0) + moveX);
    setDialogTop(prev => (prev ?? 0) + moveY);
    setMoveX(0);
    setMoveY(0);
  };

  const detectPointUp = () => {
    setMask(false);
  };

  // Resize handlers
  const onResizeStart = () => {
    if (minimize || !resizable) return;
    originInfoRef.current = compatClonedModel({
      width: dialogWidth,
      height: dialogHeight,
      left: dialogLeft,
      top: dialogTop,
      minimize,
      maximization,
    });
    setMask(true);
  };

  const onResizeMove = (event: PointerEvent) => {
    event.preventDefault();
    if (minimize || !resizable) return;
    // @ts-ignore
    const newWidth = originInfoRef.current.width + event.moveRight;
    // @ts-ignore
    const newHeight = originInfoRef.current.height + event.moveBottom;
    const checkResult = checkSize(newWidth, newHeight);

    if (checkResult.widthShouldChange) {
      setRootWidthInEmbedMode(newWidth);
    }

    if (checkResult.widthShouldChange) {
      // @ts-ignore
      setDialogLeft(originInfoRef.current.left + event.moveLeft);
      setDialogWidth(newWidth);
    }
    if (checkResult.heightShouldChange) {
      // @ts-ignore
      setDialogTop(originInfoRef.current.top + event.moveTop);
      setDialogHeight(newHeight);
    }
  };

  const onResizeEnd = () => {
    if (!mask || !resizable) return;
    setMask(false);
  };

  // Toggle handlers
  const toggleMinimize = () => {
    setMaximization(false);
    setMinimize(prev => !prev);
  };

  const toggleMaximization = () => {
    const enable = resizable && enableMaximization && !isEmbed;
    if (!enable) return;
    setMaximization(prev => !prev);
    setMinimize(false);
  };

  const handleClose = (event: MouseEvent) => {
    event.stopPropagation();
    onClose?.();
  };

  // Style calculations
  const getBaseStyle = useCallback(() => {
    return {
      visibility: visible ? 'visible' : 'hidden',
      opacity: visible ? 1 : 0,
    };
  }, [visible]);

  const getCompatAbsPostion = useCallback(
    (info: {
      width?: number;
      height?: number;
      left?: number;
      top?: number;
      minimize?: boolean;
    }) => {
      const compatInfo = compatClonedModel(info);
      const { minimize: isMinimize } = compatInfo;

      const ret: any = {};
      ['left', 'width', 'top', 'height'].forEach(key => {
        ret[key] = compatInfo[key];
      });

      // Apply min/max constraints
      if (maxSize && ret.width > maxSize[0]) {
        ret.width = maxSize[0];
      }
      if (maxSize && ret.height > maxSize[1]) {
        ret.height = maxSize[1];
      }
      if (minSize && ret.width < minSize[0]) {
        ret.width = minSize[0];
      }
      if (minSize && ret.height < minSize[1]) {
        ret.height = minSize[1];
      }

      ret.width = isMinimize ? MINIMIZE_WIDTH : ret.width;
      ret.height = isMinimize ? MINIMIZE_HEIGHT : ret.height;

      // Adjust position if out of bounds (calculate but don't setState here)
      if (ret.left + ret.width > clientWidth) {
        ret.left = clientWidth - ret.width;
      }
      if (ret.left < 0) {
        ret.left = 0;
      }
      if (ret.top < 0) {
        ret.top = 0;
      }
      if (ret.top + ret.height > clientHeight) {
        ret.top = clientHeight - ret.height;
      }

      return ret;
    },
    [maxSize, minSize, clientWidth, clientHeight, compatClonedModel]
  );

  // Adjust position if out of bounds
  useEffect(() => {
    if (!visible) return;

    const adjusted = getCompatAbsPostion({
      width: dialogWidth,
      height: dialogHeight,
      left: dialogLeft,
      top: dialogTop,
      minimize,
    });

    if (adjusted.left !== dialogLeft) {
      setDialogLeft(adjusted.left);
    }
    if (adjusted.top !== dialogTop) {
      setDialogTop(adjusted.top);
    }
  }, [dialogWidth, dialogHeight, dialogLeft, dialogTop, minimize, visible, getCompatAbsPostion]);

  const getStyle = useMemo(() => {
    const transform = `translate(${moveX}px, ${moveY}px)`;
    const baseStyle = getBaseStyle();
    if (maximization && !isEmbed) {
      return {
        ...baseStyle,
        top: 0,
        bottom: 0,
        right: 0,
        width: width || DEFAULT_WIDTH_MEMBER,
        height: 'auto',
        borderRadius: 0,
      };
    } else if (minimize) {
      const { height: headerHeight } = headerStyle as any;
      const position = getCompatAbsPostion({
        width: dialogWidth,
        height: dialogHeight,
        left: dialogLeft,
        top: dialogTop,
        minimize,
      });
      return {
        ...baseStyle,
        ...position,
        width: MINIMIZE_WIDTH,
        height: headerHeight || MINIMIZE_HEIGHT,
        transform,
      };
    } else {
      const position = getCompatAbsPostion({
        width: dialogWidth,
        height: dialogHeight,
        left: dialogLeft,
        top: dialogTop,
      });
      return {
        ...baseStyle,
        ...position,
        transform,
      };
    }
  }, [
    maximization,
    isEmbed,
    minimize,
    moveX,
    moveY,
    width,
    headerStyle,
    dialogWidth,
    dialogHeight,
    dialogLeft,
    dialogTop,
    getCompatAbsPostion,
    getBaseStyle,
  ]);

  // Render methods
  const renderControlLink = () => {
    return (
      <span className={`${prefixCls}-item`}>
        <a
          className={`${prefixCls}-item-link`}
          href={extLink?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="M880.0256 912.0256H144.0256a31.9488 31.9488 0 0 1-32.0512-32V144.0256c0-17.7152 14.336-32.0512 32.0512-32.0512h359.936c4.4544 0 8.0384 3.584 8.0384 8.0384v56.0128c0 4.352-3.584 7.9872-7.9872 7.9872h-320v655.9744h655.9744v-320c0-4.4032 3.584-7.9872 8.0384-7.9872h55.9616c4.4032 0 8.0384 3.584 8.0384 7.9872v359.9872c0 17.7152-14.336 32-32 32zM770.8672 199.1168l-52.224-52.224a8.0384 8.0384 0 0 1 4.7104-13.568l179.4048-20.992c5.12-0.6144 9.5232 3.6864 8.9088 8.9088l-20.992 179.4048a8.0384 8.0384 0 0 1-13.6192 4.6592L824.6784 252.928l-256.2048 256.2048c-3.072 3.072-8.192 3.072-11.264 0l-42.4448-42.3936a8.0384 8.0384 0 0 1 0-11.264l256.1024-256.3584z" />
          </svg>
        </a>
      </span>
    );
  };

  const renderControls = () => {
    if (isEmbed) {
      return (
        <span className={`${prefixCls}-controls`}>
          {renderControlLink()}
          <span className={`${prefixCls}-item`} onClick={handleClose}>
            <CloseOutlined />
          </span>
        </span>
      );
    }
    return (
      <span className={`${prefixCls}-controls`}>
        {renderControlLink()}
        <span className={`${prefixCls}-item`} onClick={toggleMinimize}>
          {minimize ? <ExpandAltOutlined /> : <MinusOutlined />}
        </span>
        {enableMaximization && (
          <span className={`${prefixCls}-item`} onClick={toggleMaximization}>
            {maximization ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          </span>
        )}
        <span className={`${prefixCls}-item`} onClick={handleClose}>
          <CloseOutlined />
        </span>
      </span>
    );
  };

  const renderHeader = () => {
    const headerStyleObj = {
      ...headerStyle,
      ...(minimize ? { boxShadow: '0 2px 20px 0 rgba(4, 1, 30, 0.07)' } : {}),
      ...(isEmbed ? { cursor: 'initial' } : {}),
    };
    return (
      <header
        className={`${prefixCls}-header`}
        style={headerStyleObj}
        onPointerDown={onDragStart}
        onDoubleClick={toggleMaximization}
      >
        <span className={`${prefixCls}-title`}>{title || locale?.helpDocument}</span>
        {renderControls()}
      </header>
    );
  };

  const renderMask = () => {
    if (!mask) return null;
    return <div className={`${prefixCls}-mask`} />;
  };

  const renderContent = () => {
    return (
      <main className={`${prefixCls}-main`} style={minimize ? { visibility: 'hidden' } : {}}>
        {renderMask()}
        {children}
      </main>
    );
  };

  const renderEmbedBorders = () => {
    return (
      <React.Fragment>
        <Anchor
          prefixCls={prefixCls}
          dock={Dock.left}
          onStart={onResizeStart}
          onMove={onResizeMove}
          onEnd={onResizeEnd}
        />
      </React.Fragment>
    );
  };

  const renderBorders = () => {
    return (
      <React.Fragment>
        <Anchor
          prefixCls={prefixCls}
          dock={Dock.top}
          onStart={onResizeStart}
          onMove={onResizeMove}
          onEnd={onResizeEnd}
        />

        <Anchor
          prefixCls={prefixCls}
          dock={Dock.right}
          onStart={onResizeStart}
          onMove={onResizeMove}
          onEnd={onResizeEnd}
        />

        <Anchor
          prefixCls={prefixCls}
          dock={Dock.bottom}
          onStart={onResizeStart}
          onMove={onResizeMove}
          onEnd={onResizeEnd}
        />

        <Anchor
          prefixCls={prefixCls}
          dock={Dock.left}
          onStart={onResizeStart}
          onMove={onResizeMove}
          onEnd={onResizeEnd}
        />

        <Anchor
          prefixCls={prefixCls}
          dock={Dock.topLeft}
          onStart={onResizeStart}
          onMove={onResizeMove}
          onEnd={onResizeEnd}
        />

        <Anchor
          prefixCls={prefixCls}
          dock={Dock.topRight}
          onStart={onResizeStart}
          onMove={onResizeMove}
          onEnd={onResizeEnd}
        />

        <Anchor
          prefixCls={prefixCls}
          dock={Dock.bottomLeft}
          onStart={onResizeStart}
          onMove={onResizeMove}
          onEnd={onResizeEnd}
        />

        <Anchor
          prefixCls={prefixCls}
          dock={Dock.bottomRight}
          onStart={onResizeStart}
          onMove={onResizeMove}
          onEnd={onResizeEnd}
        />
      </React.Fragment>
    );
  };

  const renderDialog = () => {
    const style = getStyle;

    return wrapSSR(
      <div
        className={`${prefixCls}-container ${className || ''} ${isEmbed ? `${prefixCls}-container-embed` : ''}`}
        style={style}
        {...(minimize ? {} : { tabIndex: 0 })}
      >
        {renderHeader()}
        {renderContent()}
        {isEmbed ? renderEmbedBorders() : renderBorders()}
        <EventProxy onPointerMove={onDragMove} onPointerUp={onDragEnd} />
        <EventProxy onPointerUp={detectPointUp} />
      </div>
    );
  };

  // 嵌入模式通过style控制显隐
  if (!visible && !isEmbed) return <React.Fragment />;
  return createPortal(renderDialog(), getContainer());
};

export default LocaleWrapper({
  componentName: 'Dialog',
  defaultLocale: zhCN,
})(DialogComp);
