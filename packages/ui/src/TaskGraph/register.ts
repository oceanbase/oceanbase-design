import G6 from '@antv/g6';
import { token } from '@oceanbase/design';
import { findByValue } from '@oceanbase/util';
import { toLower } from 'lodash';

/**
 * 计算字符串的长度
 * @param {string} str 指定的字符串
 * @return {number} 字符串长度
 */
const calcStrLen = str => {
  let len = 0;
  // eslint-disable-next-line
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
      // eslint-disable-next-line
      len++;
    } else {
      len += 2;
    }
  }
  return len;
};

/**
 * 计算显示的字符串
 * @param {string} str 要裁剪的字符串
 * @param {number} maxWidth 最大宽度
 * @param {number} fontSize 字体大小
 * @return {string} 处理后的字符串
 */
const fittingString = (str, maxWidth, fontSize) => {
  const fontWidth = fontSize * 1.3; // 字号+边距
  maxWidth *= 2; // 需要根据自己项目调整
  const width = calcStrLen(str) * fontWidth;
  const ellipsis = '…';
  if (width > maxWidth) {
    const actualLen = Math.floor((maxWidth - 10) / fontWidth);
    const result = str.substring(0, actualLen) + ellipsis;
    return result;
  }
  return str;
};

export interface StatusItem {
  label: string;
  value: string;
  color: string;
  operations: string[];
}

export default function (statusList: StatusItem[], assetsPath: string) {
  G6.registerNode(
    'subTaskNode',
    {
      drawShape(cfg, group) {
        const defaultNodeWidth = 200;
        let nodeWidth = defaultNodeWidth;
        let offsetX = 0;
        // 任务名
        if (cfg.name) {
          // 使用 ellipsisName 字段用于超长文本截断
          const ellipsisName = fittingString(cfg.name, 180, 12);
          const nameShape = group.addShape('text', {
            attrs: {
              // 使用裁剪后的 name
              text: ellipsisName,
              x: -30,
              y: -5,
              fill: token.colorText,
              fontSize: 14,
              fontFamily: 'SFProText-Medium',
            },
          });

          const nameBBox = nameShape.getBBox();
          nodeWidth = nameBBox.width + 100;
          if (nodeWidth > 280) {
            // 节点宽度最大为 280
            nodeWidth = 280;
          } else if (nodeWidth < 200) {
            // 节点宽度最小为 200
            nodeWidth = 200;
          }
          offsetX = -(nodeWidth - defaultNodeWidth) / 2;
          nameShape.translate(offsetX, 0);
        }
        const rect = group.addShape('rect', {
          name: 'rect',
          attrs: {
            x: -nodeWidth / 2,
            y: -34,
            width: nodeWidth,
            height: 62,
            radius: 30,
            fill: '#fff',
            lineWidth: 3,
            shadowColor: '#e1e3e6',
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 10,
          },
        });

        // 状态图片
        group.addShape('image', {
          name: 'statusImage',
          attrs: {
            x: -89 + offsetX,
            y: -23,
            width: 42,
            height: 42,
            // 任务状态图标的命名需要与状态名保持一致
            img: `${assetsPath}/task_${toLower(cfg.status as string)}.svg`,
          },
        });

        // 任务状态
        group.addShape('text', {
          name: 'statusName',
          attrs: {
            text: findByValue(statusList, cfg.status as string).label,
            x: -30 + offsetX,
            y: 15,
            fill: token.colorTextTertiary,
            fontSize: 12,
            fontFamily: 'PingFangSC-Regular',
          },
        });

        const moreGroup = group.addGroup({
          name: 'moreGroup',
        });

        // ellipsis 图片
        moreGroup.addShape('image', {
          attrs: {
            // 右边距为 34
            x: nodeWidth / 2 - 34 - 16,
            y: 8,
            width: 16,
            height: 2.5,
            cursor: 'pointer',
            img: `${assetsPath}/icon_ellipsis.svg`,
          },
        });

        moreGroup.addShape('rect', {
          attrs: {
            x: nodeWidth / 2 - 34 - 16,
            y: 0,
            width: 16,
            height: 16,
            cursor: 'pointer',
            fill: 'transparent',
          },
        });

        // rect 在节点名称之后渲染，需要对 rect 进行置底操作
        rect.toBack();
        return rect;
      },
      update(cfg, node) {
        const group = node.get('group');
        const statusImage =
          group.findAllByName('statusImage') && group.findAllByName('statusImage')[0];
        const statusName =
          group.findAllByName('statusName') && group.findAllByName('statusName')[0];
        // 更新状态图标
        if (statusImage) {
          statusImage.attr('img', `${assetsPath}/task_${toLower(cfg.status as string)}.svg`);
        }
        // 更新状态文本
        if (statusName) {
          statusName.attr('text', findByValue(statusList, cfg.status as string).label);
        }
      },
    },

    'single-node'
  );

  G6.registerEdge(
    'subTaskEdge',
    {
      curvePosition: [9 / 10, 1 / 10],
      getShapeStyle(cfg) {
        const targetNodeModel = (cfg.targetNode && cfg.targetNode.get('model')) || {};
        const { status } = targetNodeModel;
        const { startPoint, endPoint } = cfg;
        const controlPoints = this.getControlPoints(cfg);
        let points = [startPoint]; // 添加起始点
        // 添加控制点
        if (controlPoints) {
          points = points.concat(controlPoints);
        }
        // 添加结束点
        points.push(endPoint);
        const path = this.getPath(points, cfg);
        const statusColor = findByValue(statusList, status).color;
        const style = {
          ...G6.Global.defaultEdge.style,
          path,
          // 自定义结束箭头，箭头的边长为 10，夹角为 60 度
          endArrow: {
            path: `M${10 * Math.cos(Math.PI / 6)},${10 * Math.sin(Math.PI / 6)} L0,0 L${
              10 * Math.cos(Math.PI / 6)
            },-${10 * Math.sin(Math.PI / 6)}`,
            fill: statusColor,
          },

          lineWidth: 2,
          stroke: statusColor,

          ...cfg.style,
        };

        return style;
      },
    },
    'cubic-vertical'
  );
}
