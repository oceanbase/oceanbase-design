import type { HTMLAttributes, PointerEvent } from 'react';
import React from 'react';
import { getPrefix } from '../_util';
import type { IDockProps } from './Dock';
import { EventProxy } from './EventProxy';

export interface IAnchorProps extends HTMLAttributes<HTMLDivElement> {
  onStart?: (event: PointerEvent) => void;
  onMove?: (event: PointerEvent) => void;
  onEnd?: (event: PointerEvent) => void;
  dock?: IDockProps;
}

const prefix = getPrefix('dialog');

export class Anchor extends React.Component<IAnchorProps> {
  isPointDown = false;

  originBodyStyle: string | null = null;

  clientX = 0;

  clientY = 0;

  onDragStart = (event: PointerEvent) => {
    this.isPointDown = true;
    const { onStart, dock } = this.props;
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    if (onStart) onStart(event);
    const cursor = dock?.style?.cursor;
    if (cursor) {
      this.originBodyStyle = document.body.getAttribute('style') || '';
      const style = `cursor:${cursor} !important; ${this.originBodyStyle}`;
      document.body.setAttribute('style', style);
    }
  };

  onDragMove = (event: PointerEvent) => {
    if (!this.isPointDown) return;
    const { onMove, dock = {} } = this.props;
    if (dock.adjust) {
      const { clientX, clientY } = event;
      const moveX = clientX - this.clientX;
      const moveY = clientY - this.clientY;
      // 以下event没有moveTop、moveBottom属性，希望在事件传递带上计算后的属性值
      // @ts-ignore
      event.moveTop = moveY * (dock.adjust[0] || 0);
      // @ts-ignore
      event.moveBottom = moveY * (dock.adjust[1] || 0);
      // @ts-ignore
      event.moveLeft = moveX * (dock.adjust[2] || 0);
      // @ts-ignore
      event.moveRight = moveX * (dock.adjust[3] || 0);
    }
    if (onMove) onMove(event);
  };

  onDragEnd = (event: PointerEvent) => {
    if (!this.isPointDown) return;
    this.isPointDown = false;
    const { onEnd } = this.props;
    if (onEnd) onEnd(event);
    if (this.originBodyStyle !== null) {
      document.body.setAttribute('style', this.originBodyStyle);
    }
    this.originBodyStyle = null;
  };

  render() {
    const { children, style, dock } = this.props;
    return (
      <div
        className={`${prefix}-anchor`}
        style={{ ...style, ...dock?.style }}
        onPointerDown={this.onDragStart}
      >
        <EventProxy onPointerMove={this.onDragMove} onPointerUp={this.onDragEnd} />
        {children}
      </div>
    );
  }
}
