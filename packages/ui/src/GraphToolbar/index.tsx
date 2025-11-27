import { FullscreenOutlined, MinusOutlined, PlusOutlined, SyncOutlined } from '@oceanbase/icons';
import type { Graph } from '@antv/g6';
import { toPercent } from '@oceanbase/util';
import { ConfigProvider, Divider, Space, Tooltip } from '@oceanbase/design';
import { debounce } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import useStyle from './style';
import zhCN from './locale/zh-CN';
// @ts-ignore
import fitViewIcon from '../assets/graph_fit_view_icon.svg';
// @ts-ignore
import resetIcon from '../assets/graph_reset_icon.svg';

export function getCenterPointByGraph(graph) {
  const group = graph?.get('group');
  if (group) {
    const { minX, minY, maxX, maxY } = group.getCanvasBBox();
    return {
      x: (minX + maxX) / 2,
      y: (minY + maxY) / 2,
    };
  }
  // 默认返回 undefined，这样传入 G6 时会使用默认的参数值
  return undefined;
}

export interface GraphToolbarLocale {
  fullscreen: string;
  shrink: string;
  enlarge: string;
  reset: string;
  fitView: string;
  refresh: string;
}

export interface GraphToolbarProps extends LocaleWrapperProps {
  // 模式: 悬浮模式 | 嵌入模式
  mode?: 'fixed' | 'embed';
  // G6 的 Graph 实例
  graph?: Graph;
  // 是否展示全屏入口
  showFullscreen?: boolean;
  // 点击全屏的回调函数
  onFullscreen?: () => void;
  // 点击刷新的回调函数
  onReload?: () => void;
  locale?: GraphToolbarLocale;
  className?: string;
}

const GraphToolbar: React.FC<GraphToolbarProps> = ({
  mode = 'fixed',
  graph,
  showFullscreen,
  onFullscreen,
  onReload,
  locale,
  className,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('graph-toolbar');
  const { wrapSSR } = useStyle(prefixCls);
  const [zoom, setZoom] = useState(0);
  useEffect(() => {
    const initialZoom = graph?.getZoom() > 2 ? 2 : graph?.getZoom();
    // 上层调用 fitView() 后缩放可能超过 100%，因此这里再做一次缩放，避免缩放超过 100%
    graph?.zoomTo(initialZoom, getCenterPointByGraph(graph));
    setZoom(initialZoom);
    (graph as any)?.on(
      'wheelzoom',
      // 使用防抖函数，避免状态改变过于频繁，影响页面交互流畅
      // 设置延迟时间为 16ms，为渲染一帧所需时间
      debounce(() => {
        setZoom(graph?.getZoom());
      }, 16)
    );
  }, [graph]);

  return wrapSSR(
    <Space size={16} className={`${prefixCls} ${`${prefixCls}-${mode}`} ${className || ''}`}>
      {showFullscreen && (
        <Tooltip title={locale.fullscreen}>
          <FullscreenOutlined
            className={`${prefixCls}-pointable`}
            onClick={() => {
              if (onFullscreen) {
                onFullscreen();
              }
            }}
          />
        </Tooltip>
      )}
      <span className={`${prefixCls}-zoom-wrapper`}>
        <Tooltip title={locale.shrink}>
          <MinusOutlined
            className={zoom >= 0.3 ? `${prefixCls}-pointable` : `${prefixCls}-disabled`}
            onClick={() => {
              if (zoom >= 0.3) {
                const newZoom = zoom - 0.1;
                setZoom(newZoom);
                graph?.zoomTo(newZoom, getCenterPointByGraph(graph));
              }
            }}
          />
        </Tooltip>
        {toPercent(zoom)}
        <Tooltip title={locale.enlarge}>
          <PlusOutlined
            className={zoom <= 0.9 ? `${prefixCls}-pointable` : `${prefixCls}-disabled`}
            onClick={() => {
              if (zoom <= 0.9) {
                const newZoom = zoom + 0.1;
                setZoom(newZoom);
                graph?.zoomTo(newZoom, getCenterPointByGraph(graph));
              }
            }}
          />
        </Tooltip>
      </span>
      <Tooltip title={locale.reset}>
        <img
          src={resetIcon}
          alt=""
          className={`${prefixCls}-pointable`}
          onClick={() => {
            setZoom(1);
            graph?.zoomTo(1, getCenterPointByGraph(graph));
          }}
        />
      </Tooltip>
      <Tooltip title={locale.fitView}>
        <img
          src={fitViewIcon}
          alt=""
          className={`${prefixCls}-pointable`}
          onClick={() => {
            graph?.fitView();
          }}
        />
      </Tooltip>
      {onReload && (
        <span>
          <Divider type="vertical" className={`${prefixCls}-divider`} />
        </span>
      )}
      {onReload && (
        <Tooltip title={locale.refresh}>
          <span>
            <SyncOutlined
              className={`${prefixCls}-pointable`}
              onClick={() => {
                onReload();
              }}
            />
          </span>
        </Tooltip>
      )}
    </Space>
  );
};

export default LocaleWrapper({
  componentName: 'GraphToolbar',
  defaultLocale: zhCN,
})(GraphToolbar);
