import type { HTMLAttributes, PointerEvent } from 'react';
import React, { useCallback, useRef } from 'react';
import type { IDockProps } from './Dock';
import { EventProxy } from './EventProxy';

export interface IAnchorProps extends HTMLAttributes<HTMLDivElement> {
  onStart?: (event: PointerEvent) => void;
  onMove?: (event: PointerEvent) => void;
  onEnd?: (event: PointerEvent) => void;
  dock?: IDockProps;
  prefixCls?: string;
}

export const Anchor: React.FC<IAnchorProps> = ({
  children,
  style,
  dock,
  prefixCls,
  onStart,
  onMove,
  onEnd,
  ...restProps
}) => {
  const isPointDownRef = useRef(false);
  const originBodyStyleRef = useRef<string | null>(null);
  const clientXRef = useRef(0);
  const clientYRef = useRef(0);

  const onDragStart = useCallback(
    (event: PointerEvent) => {
      isPointDownRef.current = true;
      clientXRef.current = event.clientX;
      clientYRef.current = event.clientY;
      if (onStart) onStart(event);
      const cursor = dock?.style?.cursor;
      if (cursor) {
        originBodyStyleRef.current = document.body.getAttribute('style') || '';
        const bodyStyle = `cursor:${cursor} !important; ${originBodyStyleRef.current}`;
        document.body.setAttribute('style', bodyStyle);
      }
    },
    [onStart, dock]
  );

  const onDragMove = useCallback(
    (event: PointerEvent) => {
      if (!isPointDownRef.current) return;
      if (dock?.adjust) {
        const { clientX, clientY } = event;
        const moveX = clientX - clientXRef.current;
        const moveY = clientY - clientYRef.current;
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
    },
    [onMove, dock]
  );

  const onDragEnd = useCallback(
    (event: PointerEvent) => {
      if (!isPointDownRef.current) return;
      isPointDownRef.current = false;
      if (onEnd) onEnd(event);
      if (originBodyStyleRef.current !== null) {
        document.body.setAttribute('style', originBodyStyleRef.current);
      }
      originBodyStyleRef.current = null;
    },
    [onEnd]
  );

  return (
    <div
      className={`${prefixCls}-anchor`}
      style={{ ...style, ...dock?.style }}
      onPointerDown={onDragStart}
      {...restProps}
    >
      <EventProxy onPointerMove={onDragMove} onPointerUp={onDragEnd} />
      {children}
    </div>
  );
};
