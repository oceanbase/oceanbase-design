import type { Graph } from '@antv/g6';
import G6 from '@antv/g6';
import type { GraphData } from '@antv/g6/lib/types';
import { findByValue } from '@oceanbase/util';
import { Dropdown, Menu, Typography } from '@oceanbase/design';
import { isEqual } from 'lodash';
import React from 'react';
import { token } from '@oceanbase/design';
import GraphToolbar from '../GraphToolbar';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import { getPrefix } from '../_util';
import zhCN from './locale/zh-CN';
import type { StatusItem } from './register';
import register from './register';

import './graph.less';

const { Text } = Typography;

export interface TaskGraphLocale {
  successful: string;
  running: string;
  failed: string;
  pending: string;
  taskId: string;
  log: string;
  parameter: string;
  stop: string;
  retry: string;
  skip: string;
}

export interface TaskGraphProps extends LocaleWrapperProps {
  data: GraphData;
  onMenuClick: (key: string, subTask: any, onSuccess: () => void) => void;
  onLogAdd: (subTask: any) => void;
  assetsPath?: string;
  locale?: TaskGraphLocale;
}

interface TaskGraphState {
  currentSubTask: any | null;
  statusList: StatusItem[];
}

const prefix = getPrefix('task-graph-item');

class TaskGraph extends React.PureComponent<TaskGraphProps, TaskGraphState> {
  public main: HTMLElement | null = null;

  public menu: HTMLElement | null = null;

  public graph: Graph | null;

  constructor(props: TaskGraphProps) {
    super(props);
    const { locale } = props;
    this.state = {
      currentSubTask: null,
      statusList: [
        {
          label: locale.successful,
          value: 'SUCCESSFUL',
          color: '#9adc78',
          operations: ['taskId', 'log', 'parameter'],
        },
        {
          label: locale.running,
          value: 'RUNNING',
          color: '#80c3fc',
          operations: ['taskId', 'log', 'parameter', 'stop'],
        },
        {
          label: locale.failed,
          value: 'FAILED',
          color: '#fca4a2',
          operations: ['taskId', 'log', 'parameter', 'retry', 'skip'],
        },
        {
          label: locale.pending,
          value: 'PENDING',
          color: '#cccccc',
          operations: ['taskId', 'parameter'],
        },
      ],
    };
  }

  public componentDidMount() {
    const { assetsPath = '/assets' } = this.props;
    const { statusList } = this.state;
    register(statusList, assetsPath);
    this.menu = document.getElementById('menu');
    this.drawGraph();
  }

  public componentDidUpdate(prevProps: TaskGraphProps) {
    const { data } = this.props;
    if (!isEqual(data, prevProps.data)) {
      this.drawGraph();
    }
  }

  public drawGraph = () => {
    const { data } = this.props;
    if (this.graph && this.graph.changeData) {
      this.graph.changeData(data);
    } else {
      const splitPane =
        document.getElementsByClassName('SplitPane') &&
        document.getElementsByClassName('SplitPane')[0];
      const width = (this.main && this.main.scrollWidth) || 1200;
      // 高度优先级: 元素本身的高度 => 分隔面板的高度 => 500
      // 还需要减去下方的 log 条的最小高度 56px
      const height = ((this.main && this.main.scrollHeight) || splitPane.scrollHeight || 500) - 65;
      const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        minZoom: 0.2,
        maxZoom: 2,
        layout: {
          type: 'dagre',
          nodesep: 90,
          ranksep: 40,
          controlPoints: false,
        },

        defaultNode: {
          type: 'subTaskNode',
          anchorPoints: [
            [0.5, 0],
            [0.5, 1],
          ],
        },
        defaultEdge: {
          type: 'subTaskEdge',
        },
        nodeStateStyles: {
          hover: {
            lineWidth: 2,
            stroke: token.colorPrimary,
            fill: '#e6f7ff',
          },
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'click-select'],
        },
      });

      const canvas = graph.get('canvas');
      // 关闭局部渲染，避免渲染出现拖影
      canvas.set('localRefresh', false);
      graph.data(data);
      graph.render();
      graph.fitView();

      // 监听 moreGroup 的 click 事件
      canvas.on('moreGroup:click', e => {
        const subTaskNode = e.currentTarget && e.currentTarget.getParent();
        const model = subTaskNode && subTaskNode.get('item') && subTaskNode.get('item').getModel();
        this.setState(
          {
            currentSubTask: model,
          },

          () => {
            if (!this.menu) {
              this.menu = document.getElementById('menu');
            }
            this.menu.style.left = `${e.x}px`;
            // y 坐标减去高度，并再往上 5px
            this.menu.style.top = `${e.y - height - 5}px`;
          }
        );
      });

      // 监听节点的 mouseleave 事件
      (graph as any).on('node:mouseleave', () => {
        if (!this.menu) {
          this.menu = document.getElementById('menu');
        }
        this.menu.style.left = '-1500px';
      });

      this.graph = graph;
      // 强制更新一次视图，否则 this.graph 不会更新
      this.forceUpdate();
    }
  };

  public handleMenuClick = ({ key }) => {
    const { onMenuClick } = this.props;
    const { currentSubTask } = this.state;
    // 成功的回调
    const onSuccess = () => {
      this.setState({
        currentSubTask: null,
      });
    };
    if (key === 'log') {
      this.log();
    }
    if (onMenuClick) {
      onMenuClick(key, currentSubTask, onSuccess);
    }
    if (this.menu) {
      this.menu.style.left = '-1500px';
    }
  };

  public log = () => {
    const { onLogAdd } = this.props;
    const { currentSubTask } = this.state;
    if (onLogAdd) {
      onLogAdd(currentSubTask);
    }
  };

  public render() {
    const { locale } = this.props;
    const { statusList, currentSubTask } = this.state;
    const operations =
      findByValue(statusList, currentSubTask && currentSubTask.status).operations || [];
    const menus = [
      {
        label: locale.taskId,
        value: 'taskId',
      },
      {
        label: locale.log,
        value: 'log',
      },
      {
        label: locale.parameter,
        value: 'parameter',
      },
      {
        label: locale.stop,
        value: 'stop',
      },
      {
        label: locale.retry,
        value: 'retry',
      },
      {
        label: locale.skip,
        value: 'skip',
      },
    ];
    const filterMenus = menus.filter(item => operations.includes(item.value));
    const menu = (
      <Menu id="menu" onClick={this.handleMenuClick} style={{ left: -1500 }}>
        {filterMenus.map(item =>
          item.value === 'taskId' ? (
            <div
              className={`${prefix}-task-id-wrapper`}
              // 下拉菜单数 > 1 时才有下边框
              style={filterMenus.length > 1 ? { borderBottom: '1px solid #e8e8e8' } : {}}
            >
              <Text copyable={true}>{`ID: ${currentSubTask && currentSubTask.id}`}</Text>
            </div>
          ) : (
            <Menu.Item key={item.value}>{item.label}</Menu.Item>
          )
        )}
      </Menu>
    );
    return (
      <div>
        {this.graph && <GraphToolbar mode="fixed" graph={this.graph} />}
        <div
          id="container"
          ref={node => {
            this.main = node;
          }}
        />
        <Dropdown
          visible={true}
          // Support for antd 5.0
          open={true}
          overlay={menu}
          overlayClassName={`${prefix}-menu`}
        >
          <span />
        </Dropdown>
      </div>
    );
  }
}

export default LocaleWrapper({
  componentName: 'TaskGraph',
  defaultLocale: zhCN,
})(TaskGraph);
