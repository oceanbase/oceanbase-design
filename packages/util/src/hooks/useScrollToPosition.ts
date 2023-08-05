import { useEffect, useCallback } from 'react';
import type { MutableRefObject } from 'react';
import { toNumber, omit, toString, debounce } from 'lodash';
import queryString from 'query-string';

type OptionsType = {
  // 支持 url 和 sessionStorage 两次存储值的方式
  mode?: 'query' | 'sessionStorage';
  // 与请求联动，当请求完成后进行设置 scroll
  ready?: boolean;
};
type Direction = 'top' | 'left' | undefined;

type TargetType<T = HTMLElement> =
  | string
  | HTMLElement
  | Document
  | undefined
  | null
  | (() => T)
  | MutableRefObject<T | null | undefined>;
type TargetElement = HTMLElement | Element | Document | Window;

function getTargetElement(target?: TargetType, defaultElement?: TargetElement) {
  if (!target) {
    return defaultElement;
  }

  let targetElement: TargetElement | undefined | null;

  if (typeof target === 'string') {
    targetElement = document.querySelector(target);
  } else if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  // 为 current 等于 null 和 query 未查找到 dom 元素做兜底
  return targetElement;
}

/**
 * 使用 scroll 定位页面位置 的 hook
 * @param {TargetType} target 支持 字符串 或者 Dom 元素
 * @param {OptionsType} option
 * @returns
 */
export const useScrollToPosition = (target?: TargetType, options?: OptionsType) => {
  const scrollToPosition = () => {
    sessionStorage.setItem('toPosition', 'ok');
  };

  const { mode = 'sessionStorage', ready } = options || {};

  const topId = `${location.pathname}-scrollTop`;
  const leftId = `${location.pathname}-scrollLeft`;

  const getPosition = useCallback((currentTarget: HTMLElement | Document) => {
    let newPosition;

    // document 需要特殊处理
    if (currentTarget === document) {
      if (!document.scrollingElement) return {};
      newPosition = {
        left: document.scrollingElement.scrollLeft,
        top: document.scrollingElement.scrollTop,
      };
    } else {
      newPosition = {
        left: (currentTarget as HTMLElement).scrollLeft,
        top: (currentTarget as HTMLElement).scrollTop,
      };
    }
    return newPosition;
  }, []);

  const saveScroll = debounce(ele => {
    const scroll = getPosition(ele as HTMLElement);
    if (mode === 'sessionStorage') {
      sessionStorage.setItem(topId, toString(scroll?.top));
      sessionStorage.setItem(leftId, toString(scroll?.left));
    } else {
      const parsed = queryString.parse(location.search);
      parsed.scrollTop = scroll?.top;
      parsed.scrollLeft = scroll?.left;
      const stringified = queryString.stringify(parsed);
      // 往 state 中注入 scrollTop 和 scrollLeft, pushState 不会刷新页面，但浏览器回退的时候会保留值
      window.history.pushState({}, '', `${location.origin}${location.pathname}?${stringified}`);
    }
  }, 100);

  const clearScroll = () => {
    //  clear scrollToPosition
    sessionStorage.removeItem('toPosition');

    if (mode === 'sessionStorage') {
      sessionStorage.removeItem(topId);
      sessionStorage.removeItem(leftId);
    } else {
      const parsed = queryString.parse(location.search);
      const stringified = queryString.stringify(omit(parsed, ['scrollTop', 'scrollLeft']));
      // 将 location search 中的 scrollTop, scrollLeft 删除
      window.history.replaceState({}, '', `${location.origin}${location.pathname}?${stringified}`);
    }
  };

  const getScrollEle = ele => {
    if (ele === document) {
      return document.scrollingElement || {};
    }
    return ele;
  };

  const setScroll = (direction: Direction = 'top') => {
    const ele = getTargetElement(target, document);
    const toPosition = sessionStorage.getItem('toPosition');
    if (!ele || toPosition !== 'ok') {
      return;
    }

    const parsed = queryString.parse(location.search);
    const top = mode === 'query' ? parsed.scrollTop : sessionStorage.getItem(topId);
    const left = mode === 'query' ? parsed.scrollLeft : sessionStorage.getItem(leftId);
    const dom = getScrollEle(ele);

    if (direction === 'top' && top) {
      dom.scrollTop = toNumber(top);
    }

    if (direction === 'left' && left) {
      dom.scrollLeft = toNumber(left);
    }
    clearScroll();
  };

  // 处理与请求的联动
  useEffect(() => {
    if (ready) {
      setScroll();
    }
  }, [ready]);

  useEffect(() => {
    const ele = getTargetElement(target, document);
    if (!ele) {
      return;
    }

    const listener = (event: Event) => {
      if (!event.target) return;
      saveScroll(event.target);
    };

    ele.addEventListener('scroll', listener);
    return () => {
      ele.removeEventListener('scroll', listener);
    };
  }, [target]);

  // 添加默认返回，调用时不会提示错误
  return {
    scrollToPosition,
  };
};
