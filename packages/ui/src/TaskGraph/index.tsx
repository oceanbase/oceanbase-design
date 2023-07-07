//@ts-nocheck
import { DownOutlined, UpOutlined } from '@oceanbase/icons';
import type { GraphData } from '@antv/g6/lib/types';
import { Spin, Tabs } from '@oceanbase/design';
import { find, noop } from 'lodash';
import React, { useState } from 'react';
import SplitPane from 'react-split-pane';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import { getPrefix } from '../_util';
import type { TaskGraphLocale } from './Graph';
import Graph from './Graph';
import './index.less';
import zhCN from './locale/zh-CN';

const { TabPane } = Tabs;

const MIN_SIZE = 56;
const DEFAULT_SIZE = 240;

export interface TaskGraphProps extends LocaleWrapperProps {
  data: GraphData;
  logLoading?: boolean;
  subTaskLog: string;
  onMenuClick: (key: string, subTask: any, onSuccess: () => void) => void;
  onTabsChange?: (targetKey: string) => void;
  onTabsEdit?: (targetKey: string, action: 'add' | 'remove') => void;
  assetsPath?: string;
  locale?: TaskGraphLocale;
}

const prefix = getPrefix('task-graph');

const TaskGraph: React.FC<TaskGraphProps> = ({
  logLoading = false,
  subTaskLog,
  onTabsChange = noop,
  onTabsEdit = noop,
  ...restProps
}) => {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [activeKey, setActiveKey] = useState<string | undefined>(undefined);
  const [panes, setPanes] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  function handleEditLogWindow(targetKey: string, action: 'add' | 'remove') {
    // 只处理关闭标签页的行为
    if (action === 'remove') {
      let lastIndex = -1;
      panes.forEach((item, i) => {
        // id 为数值，需要转为字符串才能与 targetKey 进行比较判断
        if (`${item.id}` === targetKey) {
          lastIndex = i - 1;
        }
      });
      const newPanes = panes.filter(item => `${item.id}` !== targetKey);
      // 关闭当前打开的 tab 页
      if (newPanes.length > 0 && activeKey === targetKey) {
        if (lastIndex >= 0) {
          setActiveKey(`${newPanes?.[lastIndex]?.id}`);
        } else {
          setActiveKey(`${newPanes?.[0]?.id}`);
        }
      }
      setPanes(newPanes);
      if (newPanes.length === 0) {
        // 关闭全部 tab 页时，选中的 tab 页为空
        setActiveKey('');
        setCollapsed(true);
      }
    }
    if (onTabsEdit) {
      onTabsEdit(targetKey, action);
    }
  }

  return (
    <SplitPane
      split="horizontal"
      primary="second"
      // 折叠状态最小高度为 MIN_SIZE，否则为 160
      minSize={collapsed ? MIN_SIZE : 160}
      maxSize={480}
      size={collapsed ? MIN_SIZE : size}
      onChange={value => {
        setSize(value);
        if (value === MIN_SIZE) {
          // 如果高度等于最小值，则设为收缩状态
          setCollapsed(true);
        } else if (value > MIN_SIZE && collapsed) {
          // 如果高度大于最小值，且为收缩状态，则设为展开状态
          setCollapsed(false);
        }
      }}
      className={`${prefix}-split-pane`}
    >
      <div style={{ position: 'absolute', width: '100%' }}>
        <Graph
          onLogAdd={subTask => {
            const isExisted = find(panes, item => item.id === subTask.id);
            if (!isExisted) {
              setPanes([...panes, subTask]);
            }
            setCollapsed(false);
            if (size === MIN_SIZE) {
              setSize(DEFAULT_SIZE);
            }
            setActiveKey(subTask && `${subTask.id}`);
          }}
          {...restProps}
        />
      </div>
      <div className={`${prefix}-tabs-wrapper`}>
        <Tabs
          type="editable-card"
          hideAdd={true}
          activeKey={activeKey}
          onChange={key => {
            setActiveKey(key);
            if (onTabsChange) {
              onTabsChange(key);
            }
          }}
          onEdit={handleEditLogWindow}
          tabBarExtraContent={
            collapsed ? (
              <UpOutlined
                onClick={() => {
                  setCollapsed(!collapsed);
                  if (size === MIN_SIZE) {
                    setSize(DEFAULT_SIZE);
                  }
                }}
              />
            ) : (
              <DownOutlined
                onClick={() => {
                  setCollapsed(!collapsed);
                  if (size === MIN_SIZE) {
                    setSize(DEFAULT_SIZE);
                  }
                }}
              />
            )
          }
        >
          {panes.map(item => (
            <TabPane key={`${item.id}`} tab={`${item.name} (ID: ${item.id})`}>
              {/* 不使用 Spin 对日志进行包裹，否则 loading 图标会出现在滚动区域的中间，切换 tab 时会看不到，而只能看到蒙层 */}
              {logLoading && item.status !== 'RUNNING' ? <Spin /> : subTaskLog}
              {/* 子任务运行中，日志结尾加上 loading 态 */}
              <Spin spinning={item.status === 'RUNNING'} />
            </TabPane>
          ))}
        </Tabs>
      </div>
    </SplitPane>
  );
};

export default LocaleWrapper({
  componentName: 'TaskGraph',
  defaultLocale: zhCN,
})(TaskGraph);
