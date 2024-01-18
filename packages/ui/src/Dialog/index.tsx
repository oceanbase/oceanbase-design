import {
  CloseOutlined,
  ExpandAltOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  MinusOutlined,
} from '@oceanbase/icons';
import type { MouseEvent, PointerEvent } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import { getPrefix } from '../_util';
import { Anchor } from './Anchor';
import { Dock } from './Dock';
import { EventProxy } from './EventProxy';
import zhCN from './locale/zh-CN';

import './index.less';

const prefix = getPrefix('dialog');

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

class DialogComp extends React.PureComponent<DialogProps, DialogState> {
  state = {
    mask: true,
    width: this.props.width ?? DEFAULT_WIDTH_MEMBER,
    height: this.props.height ?? DEFAULT_HEIGHT_MEMBER,
    left:
      this.props.left ??
      this.props.clientWidth - (this.props.width ?? DEFAULT_WIDTH_MEMBER) - DEFAULT_BORDER_WIDTH,
    top:
      this.props.top ??
      this.props.clientHeight - (this.props.height ?? DEFAULT_HEIGHT_MEMBER) - DEFAULT_BORDER_WIDTH,
    moveX: 0,
    moveY: 0,
    maximization: this.props.isEmbed,
    minimize: false,
    headerStyle: {},
  };

  static defaultProps = {
    min: DEFAULT_MIN,
    resizable: true,
    draggable: true,
    enableMaximization: true,
    isEmbed: false,
  };

  clientX = 0;

  clientY = 0;

  protected getDefaultEmbedState = () => {
    const { clientHeight, clientWidth, width, height, left, top } = this.props;
    return {
      width: width ?? DEFAULT_WIDTH_MEMBER,
      height: height ?? DEFAULT_HEIGHT_MEMBER,
      left: left ?? clientWidth - (width ?? DEFAULT_WIDTH_MEMBER) - DEFAULT_BORDER_WIDTH,
      top: top ?? clientHeight - (height ?? DEFAULT_HEIGHT_MEMBER) - DEFAULT_BORDER_WIDTH,
    };
  };

  protected static _container: HTMLDivElement;

  public static get container() {
    if (!this._container) {
      this._container = document.createElement('div');
      document.body.appendChild(this._container);
    }
    return this._container;
  }

  host = document.createElement('div');

  componentDidMount() {
    DialogComp.container.appendChild(this.host);
  }

  componentDidUpdate(prevProps: Readonly<DialogProps>, _: Readonly<DialogState>): void {
    const {
      visible: preVisible,
      clientWidth: preClientWidth,
      clientHeight: preClientHeight,
      isEmbed: preIsEmbed,
    } = prevProps;
    const { visible, isEmbed, clientWidth, clientHeight, height, width, top, left } = this.props;
    // 嵌入式切换非嵌入式，属性重置
    if (preIsEmbed && !isEmbed) {
      this.setRootWidthInEmbedMode(0);
      this.setState({
        minimize: false,
        maximization: false,
        ...(height ? { height } : {}),
        ...(width ? { width } : {}),
        ...(top ? { top } : {}),
        ...(left ? { left } : {}),
      });
      return;
    }
    // 非嵌入式切换嵌入式，属性重置
    if (!preIsEmbed && isEmbed) {
      this.setState({
        minimize: false,
        maximization: true,
      });
    }
    if (visible) {
      if (!preVisible || clientWidth !== preClientWidth || clientHeight !== preClientHeight) {
        const tempState = this.getDefaultEmbedState();
        this.setState(tempState);
        this.setRootWidthInEmbedMode(tempState?.width);
      }
    } else if (preVisible && !visible) {
      this.setRootWidthInEmbedMode(0);
    }
  }

  componentWillUnmount() {
    DialogComp.container.removeChild(this.host);
  }

  get max() {
    let { max } = this.props;
    if (!max) {
      const { clientWidth, clientHeight } = this.props;
      max = [clientWidth, clientHeight];
    }
    return max;
  }

  get min() {
    return this.props.min;
  }

  get hasMask() {
    return this.state.mask;
  }

  isPointDown = false;

  onDragStart = (event: PointerEvent) => {
    if (!this.props.draggable) return;
    const { maximization } = this.state;
    if (maximization) return;
    this.setState({
      mask: true,
      ...(this.state.left === undefined ? { left: DEFAULT_LEFT } : {}),
      ...(this.state.top === undefined ? { top: DEFAULT_TOP } : {}),
    });

    this.clientX = event.clientX;
    this.clientY = event.clientY;
    this.isPointDown = true;
  };

  onDragMove = (event: PointerEvent) => {
    if (!this.props.draggable || !this.isPointDown) return;
    event.preventDefault();
    this.setState({
      moveX: event.clientX - this.clientX,
      moveY: event.clientY - this.clientY,
    });
  };

  onDragEnd = () => {
    const { draggable } = this.props;
    if (!draggable) return;
    this.isPointDown = false;
    if (this.state.moveX === 0 && this.state.moveY === 0) return;
    this.setState({
      mask: false,
      left: this.state.left + this.state.moveX,
      top: this.state.top + this.state.moveY,
      moveX: 0,
      moveY: 0,
    });
  };

  renderHeader() {
    const { locale, title, isEmbed } = this.props;
    const { headerStyle, minimize } = this.state;
    const style = {
      ...headerStyle,
      ...(minimize ? { boxShadow: '0 2px 20px 0 rgba(4, 1, 30, 0.07)' } : {}),
      ...(isEmbed ? { cursor: 'initial' } : {}),
    };
    return (
      <header
        className={`${prefix}-header`}
        style={style}
        onPointerDown={this.onDragStart}
        onDoubleClick={this.toggleMaximization}
      >
        <span className={`${prefix}-title`}>{title || locale.helpDocument}</span>
        {this.renderControls()}
      </header>
    );
  }

  toggleMinimize = () => {
    this.setState({
      maximization: false,
      minimize: !this.state.minimize,
    });
  };

  toggleMaximization = () => {
    // 嵌入模式不支持toggleMaximization
    const enable = this.props.resizable && this.props.enableMaximization && !this.props.isEmbed;
    if (!enable) return;
    this.setState({
      maximization: !this.state.maximization,
      minimize: false,
    });
  };

  onClose = (event: MouseEvent) => {
    event.stopPropagation();
    this.props.onClose?.();
  };

  renderControlLink() {
    const { extLink } = this.props;
    return (
      <span className={`${prefix}-item`}>
        <a
          className={`${prefix}-item-link`}
          href={extLink?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            // t="1679557306532"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // p-id="2545"
            width="16"
            height="16"
          >
            <path
              d="M880.0256 912.0256H144.0256a31.9488 31.9488 0 0 1-32.0512-32V144.0256c0-17.7152 14.336-32.0512 32.0512-32.0512h359.936c4.4544 0 8.0384 3.584 8.0384 8.0384v56.0128c0 4.352-3.584 7.9872-7.9872 7.9872h-320v655.9744h655.9744v-320c0-4.4032 3.584-7.9872 8.0384-7.9872h55.9616c4.4032 0 8.0384 3.584 8.0384 7.9872v359.9872c0 17.7152-14.336 32-32 32zM770.8672 199.1168l-52.224-52.224a8.0384 8.0384 0 0 1 4.7104-13.568l179.4048-20.992c5.12-0.6144 9.5232 3.6864 8.9088 8.9088l-20.992 179.4048a8.0384 8.0384 0 0 1-13.6192 4.6592L824.6784 252.928l-256.2048 256.2048c-3.072 3.072-8.192 3.072-11.264 0l-42.4448-42.3936a8.0384 8.0384 0 0 1 0-11.264l256.1024-256.3584z"
              // p-id="2546"
            />
          </svg>
        </a>
      </span>
    );
  }

  renderControls() {
    const { maximization, minimize } = this.state;
    const { enableMaximization, isEmbed } = this.props;
    if (isEmbed) {
      return (
        <span className={`${prefix}-controls`}>
          {this.renderControlLink()}
          <span className={`${prefix}-item`} onClick={this.onClose}>
            <CloseOutlined />
          </span>
        </span>
      );
    }
    return (
      <span className={`${prefix}-controls`}>
        {this.renderControlLink()}
        <span className={`${prefix}-item`} onClick={this.toggleMinimize}>
          {minimize ? <ExpandAltOutlined /> : <MinusOutlined />}
        </span>
        {enableMaximization && (
          <span className={`${prefix}-item`} onClick={this.toggleMaximization}>
            {maximization ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          </span>
        )}
        <span className={`${prefix}-item`} onClick={this.onClose}>
          <CloseOutlined />
        </span>
      </span>
    );
  }

  renderContent() {
    const { children } = this.props;
    return (
      <main
        className={`${prefix}-main`}
        style={this.state.minimize ? { visibility: 'hidden' } : {}}
      >
        {this.renderMask()}
        {children}
      </main>
    );
  }

  renderMask() {
    if (!this.hasMask) return;
    return <div className={`${prefix}-mask`} />;
  }

  getBaseStyle = () => {
    const { visible } = this.props;
    // 通过样式控制显隐
    const baseStyle = {
      visibility: visible ? 'visible' : 'hidden',
      opacity: visible ? 1 : 0,
    };
    return baseStyle;
  };

  getStyle = () => {
    const { maximization, minimize, headerStyle } = this.state;
    const transform = `translate(${this.state.moveX}px, ${this.state.moveY}px)`;
    const baseStyle = this.getBaseStyle();
    if (maximization && !this.props.isEmbed) {
      return {
        ...baseStyle,
        top: 0,
        bottom: 0,
        right: 0,
        width: this.props.width || DEFAULT_WIDTH_MEMBER,
        height: 'auto',
        borderRadius: 0,
      };
    } else if (minimize) {
      const { height } = headerStyle as any;
      return {
        ...baseStyle,
        ...this.getCompatAbsPostion(this.state),
        width: MINIMIZE_WIDTH,
        height: height || MINIMIZE_HEIGHT,
        transform,
      };
    } else {
      return {
        ...baseStyle,
        ...this.getCompatAbsPostion(this.state),
        transform,
      };
    }
  };

  // 将比例转换为绝对数值，各个端的渲染依据视口大小会有不同
  getCompatAbsPostion(info: any) {
    const compatInfo = this.compatClonedModel(info);
    const { minimize } = compatInfo;
    const { clientWidth, clientHeight } = this.props;

    const ret: any = {};
    ['left', 'width', 'top', 'height'].forEach(key => {
      ret[key] = compatInfo[key];
    });

    const { max } = this;
    const { min } = this;
    // 最小宽度
    if (max && ret.width > max[0]) {
      ret.width = max[0];
    }
    if (max && ret.height > max[1]) {
      ret.height = max[1];
    }
    if (min && ret.width < min[0]) {
      ret.width = min[0];
    }
    if (min && ret.height < min[1]) {
      ret.height = min[1];
    }

    ret.width = minimize ? MINIMIZE_WIDTH : ret.width;
    ret.height = minimize ? MINIMIZE_HEIGHT : ret.height;

    if (ret.left + ret.width > clientWidth) {
      ret.left = clientWidth - ret.width;
      this.setState({ left: ret.left });
    }
    if (ret.left < 0) {
      this.setState({ left: 0 });
    }
    if (ret.top < 0) {
      this.setState({ top: 0 });
    }
    if (ret.top + ret.height > clientHeight) {
      ret.top = clientHeight - ret.height;
      this.setState({ top: ret.top });
    }

    return ret;
  }

  compatClonedModel = (model: any): Record<string, any> => {
    return {
      left: DEFAULT_LEFT,
      top: DEFAULT_TOP,
      width: DEFAULT_WIDTH_MEMBER / this.props.clientWidth,
      height: DEFAULT_HEIGHT_MEMBER / this.props.clientHeight,
      minimize: false,
      maximization: false,
      ...model,
    };
  };

  detectPointUp = () => {
    this.setState({ mask: false });
  };

  renderDialog() {
    const style = this.getStyle();
    const { className, isEmbed } = this.props;
    return (
      <React.Fragment>
        <div
          className={`${prefix}-container ${className} ${
            isEmbed ? `${prefix}-container-embed` : ''
          }`}
          style={style}
          {...(this.state.minimize ? {} : { tabIndex: 0 })}
        >
          {this.renderHeader()}
          {this.renderContent()}
          {isEmbed ? this.renderEmbedBorders() : this.renderBorders()}
          <EventProxy onPointerMove={this.onDragMove} onPointerUp={this.onDragEnd} />
          <EventProxy onPointerUp={this.detectPointUp} />
        </div>
      </React.Fragment>
    );
  }

  originInfo: Record<string, any>;

  setRootWidthInEmbedMode = (newWidth: number) => {
    const { setRootWidth } = this.props;
    const restWidth = !!newWidth ? newWidth + SCROLL_BAR_WIDTH : 0;
    const rootWidth = (this.props.clientWidth - restWidth) / this.props.clientWidth;
    setRootWidth?.(`${rootWidth * 100}%`);
  };

  onResizeStart = () => {
    if (this.state.minimize || !this.props.resizable) return;
    this.originInfo = this.compatClonedModel(this.state);
    this.setState({ mask: true });
  };

  onResizeMove = (event: PointerEvent) => {
    const { resizable } = this.props;
    event.preventDefault();
    if (this.state.minimize || !resizable) return;
    // 以下PointerEvent没有moveRight属性，通过event传递，所以加上了ts-ignore
    // @ts-ignore
    const newWidth = this.originInfo.width + event.moveRight;
    // @ts-ignore
    const newHeight = this.originInfo.height + event.moveBottom;
    const checkResult = this.checkSize(newWidth, newHeight);

    // 只在宽度允许发生改变时设置外部width
    if (checkResult.widthShouldChange) {
      this.setRootWidthInEmbedMode(newWidth);
    }

    this.setState({
      ...(checkResult.widthShouldChange
        ? {
            // @ts-ignore
            left: this.originInfo.left + event.moveLeft,
            width: newWidth,
          }
        : {}),
      ...(checkResult.heightShouldChange
        ? {
            // @ts-ignore
            top: this.originInfo.top + event.moveTop,
            height: newHeight,
          }
        : {}),
    });
  };

  onResizeEnd = () => {
    const { mask } = this.state;
    if (!mask || !this.props.resizable) return;
    this.setState({ mask: false });
  };

  /**
   * width，height 是否在最大最小值的范围内
   */
  checkSize(width: number, height: number) {
    const { max } = this;
    const { min } = this;
    const newModel: DialogState = {};

    const result = {
      widthShouldChange: true,
      heightShouldChange: true,
    };

    if (min && width < min[0]) {
      newModel.width = min[0];
      result.widthShouldChange = false;
    }
    if (min && height < min[1]) {
      newModel.height = min[1];
      result.heightShouldChange = false;
    }
    if (max && width > max[0]) {
      newModel.width = max[0];
      result.widthShouldChange = false;
    }
    if (max && height > max[1]) {
      newModel.height = max[1];
      result.heightShouldChange = false;
    }

    return result;
  }

  renderEmbedBorders() {
    return (
      <React.Fragment>
        <Anchor
          dock={Dock.left}
          onStart={this.onResizeStart}
          onMove={this.onResizeMove}
          onEnd={this.onResizeEnd}
        />
      </React.Fragment>
    );
  }

  renderBorders() {
    return (
      <React.Fragment>
        <Anchor
          dock={Dock.top}
          onStart={this.onResizeStart}
          onMove={this.onResizeMove}
          onEnd={this.onResizeEnd}
        />

        <Anchor
          dock={Dock.right}
          onStart={this.onResizeStart}
          onMove={this.onResizeMove}
          onEnd={this.onResizeEnd}
        />

        <Anchor
          dock={Dock.bottom}
          onStart={this.onResizeStart}
          onMove={this.onResizeMove}
          onEnd={this.onResizeEnd}
        />

        <Anchor
          dock={Dock.left}
          onStart={this.onResizeStart}
          onMove={this.onResizeMove}
          onEnd={this.onResizeEnd}
        />

        <Anchor
          dock={Dock.topLeft}
          onStart={this.onResizeStart}
          onMove={this.onResizeMove}
          onEnd={this.onResizeEnd}
        />

        <Anchor
          dock={Dock.topRight}
          onStart={this.onResizeStart}
          onMove={this.onResizeMove}
          onEnd={this.onResizeEnd}
        />

        <Anchor
          dock={Dock.bottomLeft}
          onStart={this.onResizeStart}
          onMove={this.onResizeMove}
          onEnd={this.onResizeEnd}
        />

        <Anchor
          dock={Dock.bottomRight}
          onStart={this.onResizeStart}
          onMove={this.onResizeMove}
          onEnd={this.onResizeEnd}
        />
      </React.Fragment>
    );
  }

  render() {
    const { visible, isEmbed } = this.props;
    // 嵌入模式通过style控制显隐
    if (!visible && !isEmbed) return <React.Fragment />;
    return createPortal(this.renderDialog(), DialogComp.container);
  }
}

export default LocaleWrapper({
  componentName: 'Dialog',
  defaultLocale: zhCN,
})(DialogComp);
