/* eslint-disable react/sort-comp */
/* eslint-disable no-restricted-syntax */

import classnames from 'classnames';
import React from 'react';
import type { Position } from './index';
import {
  getClientHeight,
  getClientWidth,
  getScrollBarSize,
  getScrollOffsets,
  isFixedElem,
} from './utils';

const INIT_RIGHT = 32;
const INIT_BOTTOM = 32;

interface DraggableProps {
  onOverlap?: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onDrag?: (offset: any) => void;
  onClick?: (e: any) => void;
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  hide?: boolean;
  open?: boolean;
  style?: React.CSSProperties;
  position?: Position;
  className?: string;
  prefix?: string;
  id?: string;
  getPopupContainer?: () => HTMLElement;
  children?: any;
}

interface DraggableState {
  dragged?: boolean;
  width?: number;
  bottom?: number;
  right?: number;
}

class Draggable extends React.Component<DraggableProps, DraggableState> {
  nodeRef: React.RefObject<HTMLDivElement>;

  intervalStart: number;

  deltaX: number;

  deltaY: number;

  defaultScrollBarSize: number;

  constructor(props) {
    super(props);

    const { position = {} } = props;

    this.intervalStart = 0;
    this.nodeRef = React.createRef();

    this.deltaX = 0;
    this.deltaY = 0;

    this.defaultScrollBarSize = getScrollBarSize();

    this.state = {
      dragged: false,
      width: 0,
      bottom: position.bottom ? position.bottom : INIT_BOTTOM,
      right: position.right ? position.right : INIT_RIGHT,
    };
  }

  overlapDetection = () => {
    const node = this.nodeRef.current;
    const { left, top, right, bottom, width, height } = node.getBoundingClientRect();
    const aroundElems = [
      document.elementFromPoint(left, top),
      document.elementFromPoint(right, bottom),
      document.elementFromPoint(left + width / 2, top + height / 2),
    ];

    for (const elem of aroundElems) {
      if (elem !== node && isFixedElem(elem)) {
        if (this.props.onOverlap) {
          // eslint-disable-next-line react/destructuring-assignment
          this.props.onOverlap();
        }
        break;
      }
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize, false);
    window.addEventListener('mousemove', this.handleMouseMove, false);
    window.addEventListener('mouseup', this.handleMouseUp, false);
    window.addEventListener('load', this.overlapDetection, false);

    const { width } = this.nodeRef.current.getBoundingClientRect();
    this.setState({
      width,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.overlapDetection, false);
    window.removeEventListener('mousemove', this.handleMouseMove, false);
    window.removeEventListener('mouseup', this.handleMouseUp, false);
    window.removeEventListener('resize', this.handleResize, false);
  }

  getContainerDom = () => {
    const { getPopupContainer } = this.props;
    const dom = getPopupContainer ? getPopupContainer() : undefined;
    return dom;
  };

  componentDidUpdate(preProps) {
    const { hide: preHide } = preProps;
    const { hide } = this.props;

    // 隐藏到显示，贴右侧边
    if (preHide && !hide) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        right: INIT_RIGHT,
      });
    }
  }

  handleResize = () => {
    const dom = this.getContainerDom();
    // update defaultScrollBarSize
    this.defaultScrollBarSize = getScrollBarSize();
    const node = this.nodeRef.current;
    const clientRect = node.getBoundingClientRect();
    const { width, height } = clientRect;
    const { right: styleRight, bottom: styleBottom } = window.getComputedStyle(node);
    let right = Number(styleRight.replace('px', ''));
    let bottom = Number(styleBottom.replace('px', ''));

    const clientWidth = getClientWidth(dom);
    const clientHeight = getClientHeight(dom);

    const deltaX = clientWidth - right - width;
    const deltaY = clientHeight - bottom - height;

    // drag boundary detection
    if (deltaX < 0) {
      right += deltaX;
    }
    if (deltaY < 0) {
      bottom += deltaY;
    }

    this.setState({
      bottom,
      right,
    });
  };

  handleMouseDown = e => {
    // 非鼠标左键点按不处理
    if (e.button !== 0) {
      return;
    }
    const dom = this.getContainerDom();
    this.intervalStart = new Date().getTime();
    const scroll = getScrollOffsets(dom);
    const node = this.nodeRef.current;
    const startX = e.clientX + scroll.x;
    const startY = e.clientY + scroll.y;

    const origX = node.offsetLeft;
    const origY = node.offsetTop;

    this.deltaX = startX - origX;
    this.deltaY = startY - origY;

    if (this.props.onDragStart) {
      this.props.onDragStart();
    }

    this.setState({
      dragged: true,
    });

    // We've handled this event. Don't let anybody else see it.
    if (e.stopPropagation) e.stopPropagation();
    // Standard model
    else e.cancelBubble = true; // IE

    // Now prevent any default action.
    if (e.preventDefault) e.preventDefault();
    // Standard model
    else e.returnValue = false; // IE
  };

  handleMouseMove = e => {
    const { dragged } = this.state;
    const { hide } = this.props;

    // 非鼠标左键点击 || 不在组件点击或拖拽过程中 || 组件隐藏中 都不处理鼠标移动事件
    if (e.button !== 0 || !dragged || !!hide) {
      return;
    }

    const { clientX, clientY } = e;
    const { deltaX, deltaY } = this;
    const node = this.nodeRef.current;

    const dom = this.getContainerDom();
    const scroll = getScrollOffsets(dom);

    const clientWidth = getClientWidth(dom);
    const clientHeight = getClientHeight(dom);

    const { width, height } = node.getBoundingClientRect();
    const left = clientX + scroll.x - deltaX;
    const top = clientY + scroll.y - deltaY;
    let right = clientWidth - left - width;
    let bottom = clientHeight - top - height;

    // boundary detection
    // left boundary
    if (right > clientWidth - width) {
      right = clientWidth - width;
    }
    // top boundary
    if (bottom > clientHeight - height) {
      bottom = clientHeight - height;
    }
    // right boundary
    if (right < 0) {
      right = 0;
    }
    // bottom boundary
    if (bottom < 0) {
      bottom = 0;
    }

    this.setState(
      {
        dragged: true,
        right: right - this.defaultScrollBarSize,
        bottom,
      },
      () => {
        if (this.props.onDrag) {
          this.props.onDrag({
            right,
            bottom,
          });
        }
      }
    );
  };

  handleMouseUp = e => {
    const { dragged } = this.state;

    // 非组件左键点按之后的事件不处理
    if (dragged) {
      const interval = new Date().getTime() - this.intervalStart;
      if (interval < 200 && e.target.id !== 'ui-mini-hide') {
        this.props.onClick(e);
        this.setState({
          dragged: false,
        });
        return;
      }

      this.setState(
        {
          dragged: false,
        },
        () => {
          if (this.props.onDragEnd) {
            this.props.onDragEnd();
          }
        }
      );
    }
  };

  render() {
    const {
      children,
      hide,
      style = {},
      prefix,
      className,
      id,
      onMouseEnter,
      onMouseLeave,
    } = this.props;
    const { dragged, width, bottom, right } = this.state;

    const containerStyle = { bottom, right, ...style };

    const containerPrefix = `${prefix}-container`;

    const containerClassName = classnames(containerPrefix, className, {
      [`${containerPrefix}-dragged`]: dragged,
      [`${containerPrefix}-hide`]: hide,
      [`${containerPrefix}-hide-not-dragged`]: hide && !dragged,
    });

    return (
      <div
        id={id}
        ref={this.nodeRef}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={hide ? { ...containerStyle, right: -width / 1.5 } : containerStyle}
        className={containerClassName}
      >
        {children}
      </div>
    );
  }
}

export default Draggable;
