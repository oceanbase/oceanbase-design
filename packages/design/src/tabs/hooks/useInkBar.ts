import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { TabsPosition, TabsType } from 'antd/es/tabs';
import type { MutableRefObject } from 'react';
import { useEffect } from 'react';

export default ({
  prefixCls,
  activeKey,
  size,
  type,
  tabPosition,
  containerRef,
}: {
  prefixCls: string;
  activeKey: string;
  size: SizeType;
  type: TabsType;
  tabPosition: TabsPosition;
  // 容器节点
  containerRef: MutableRefObject<HTMLDivElement>;
}) => {
  const isHorizontal = !tabPosition || tabPosition === 'top' || tabPosition === 'bottom';
  const isVertical = tabPosition === 'left' || tabPosition === 'right';

  useEffect(() => {
    // Tabs 容器节点
    const containerNode = containerRef.current;
    // inkbar 节点
    const inkBarNode = containerNode?.getElementsByClassName(
      `${prefixCls}-ink-bar`
    )?.[0] as HTMLElement;
    // 当前选中的 Tab 节点
    const activeTabNode = containerNode?.querySelector(`[data-node-key="${activeKey}"]`) as
      | HTMLElement
      | undefined;
    // 当前选中的 Tab 下的 btn 节点
    const activeTabBtnNode = containerNode?.querySelector(
      `[data-node-key="${activeKey}"]>.${prefixCls}-tab-btn`
    ) as HTMLElement | undefined;

    // 水平布局下 inkbar 的偏移量
    const horizontalOffset = 8;

    setTimeout(() => {
      if ((!type || type === 'line') && inkBarNode) {
        // 水平布局，如果 inkbar 宽度 >= 24，则两侧各减去 8px，并保持水平居中
        if (isHorizontal && activeTabNode?.offsetWidth >= 24) {
          inkBarNode.style.width = `${activeTabNode?.offsetWidth - horizontalOffset * 2}px`;
          inkBarNode.style.marginLeft = `${horizontalOffset}px`;
          inkBarNode.style.marginTop = '0px';
        }
        // 垂直布局，inkbar 高度始终与 Tab btn 相同，并保持垂直居中
        if (isVertical) {
          inkBarNode.style.height = `${activeTabBtnNode?.offsetHeight}px`;
          inkBarNode.style.marginTop = `${
            (activeTabNode?.offsetHeight - activeTabBtnNode?.offsetHeight) / 2
          }px`;
          inkBarNode.style.marginLeft = '0px';
        }
      }
    }, 100);
  }, [prefixCls, activeKey, size, type, isHorizontal, isVertical, containerRef]);
};
