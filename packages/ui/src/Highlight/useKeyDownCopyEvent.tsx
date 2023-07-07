import React, { useEffect } from 'react';

/**
 * 为 Highlight 添加 focus 时可以按键全选的能力
 * @param codeRef: React.RefObject<HTMLPreElement>
 */

export const useKeyDownCopyEvent = (codeRef: React.RefObject<HTMLPreElement | HTMLDivElement>) => {
  // focus能力支持
  const focus = React.useRef<boolean>();

  function bindEvent(events, dom) {
    Object.keys(events).forEach(key => {
      if (typeof events[key] === 'object' && events[key].handle) {
        dom.addEventListener(key, events[key].handle, events[key].options);
      } else {
        dom.addEventListener(key, events[key]);
      }
    });
    return function () {
      Object.keys(events).forEach(key => {
        if (typeof events[key] === 'object' && events[key].handle) {
          dom.removeEventListener(key, events[key].handle, events[key].options);
        } else {
          dom.removeEventListener(key, events[key]);
        }
      });
    };
  }

  useEffect(() => {
    if (codeRef.current) {
      return bindEvent(
        {
          keydown: ev => {
            const selection = window.getSelection();
            // 拦截ctrl + a 并判断是否 focus
            if (
              (ev.ctrlKey || ev.metaKey) &&
              ev.code === 'KeyA' &&
              focus.current &&
              codeRef.current
            ) {
              const range = document.createRange();
              range.selectNodeContents(codeRef.current);
              selection.removeAllRanges();
              selection.addRange(range);
              ev.preventDefault();
            }
          },
          focus: () => {
            focus.current = true;
          },
          blur: () => {
            focus.current = false;
          },
        },
        codeRef.current
      );
    }
  }, [codeRef.current, codeRef]);

  return null;
};
