import { isFunction } from 'lodash';
import type { HTMLAttributes } from 'react';
import React, { useCallback, useEffect, useMemo } from 'react';

export const EventProxy = (props: HTMLAttributes<HTMLDivElement>) => {
  const handlers = useMemo(() => {
    return Object.entries(props).reduce((list, [name, handler]) => {
      let transName = name;
      if (!isFunction(handler) || !name.startsWith('on')) return list;
      if (name === 'onDoubleClick') transName = 'onDblClick';
      return [...list, [transName.slice(2).toLowerCase(), handler]];
    }, []);
  }, [props]);

  const bind = useCallback(() => {
    handlers.forEach(([name, handler]) => {
      document.addEventListener(name, handler);
    });
  }, [handlers]);

  const unbind = useCallback(() => {
    handlers.forEach(([name, handler]) => {
      document.removeEventListener(name, handler);
    });
  }, [handlers]);

  useEffect(() => {
    bind();
    return () => {
      unbind();
    };
  }, [bind, unbind]);

  return <div id="event-proxy" />;
};
