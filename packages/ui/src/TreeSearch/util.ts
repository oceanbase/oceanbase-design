import { omit } from 'lodash';
import type { Node, TreeNode } from '.';

const generateKey = (values: string[]) => {
  return `${values.join('$$')}`;
};

const splitKey = (value: string) => {
  // todo 考虑格式错误的情况
  const [...values] = value.split('$$') as string[];
  return { values };
};

/** 根据 key 判断节点是否为叶子节点 */
export const isLeaf = (node: TreeNode) => {
  return !node?.children;
};

/** 将传入格式的 node 处理为组件内需要的内容 */
export const nodes2treeNodes = (nodes?: Node[], parentKey?: string): TreeNode[] => {
  if (!nodes) return undefined;
  return nodes.map(node => {
    let values: string[] = [];
    if (parentKey) {
      values = [...splitKey(parentKey).values];
    }
    const key = generateKey([...values, node.value ?? node.originTitle ?? node.title]);
    const next: TreeNode = {
      ...node,
      key,
      // 补齐 originTitle
      originTitle: node.originTitle ?? node.title,
      children: nodes2treeNodes(node.children, key),
    };
    return next;
  });
};

export const treeNode2node = (treeNode: TreeNode): Node => omit(treeNode, 'key');

export const deepFilter = (treeNodes: TreeNode[], cb: (treeNode: TreeNode) => boolean) => {
  const filtered = treeNodes.map(treeNode => {
    const next = { ...treeNode };
    // 若过滤通过，无需再关注子节点，直接全部显示
    if (cb(treeNode)) {
      return next;
    }
    // 若过滤不通过，并且有子节点，递归对子节点做过滤操作
    if (treeNode.children?.length) {
      next.children = deepFilter(treeNode.children, cb);
    }
    return next;
  });
  return filtered.filter(treeNode => treeNode?.children?.length || cb(treeNode));
};

/** 根据 node key 取得 node 节点 */
export const findFromTree = (key: string, treeNodes: TreeNode[]) => {
  const { values } = splitKey(key);

  let node: TreeNode | undefined;
  let i = 0;
  for (; i < values.length; i += 1) {
    const value = values[i];
    if (!node) {
      node = treeNodes.find(e => e.value === value);
    } else {
      node = node.children?.find(e => e.value === value);
    }
  }
  return node as TreeNode;
};

/** 获取所有的选项
 *  如果有子项，则获取子项，否则取本级
 */
export const getAllOptions = (treeNodes: TreeNode[]) => {
  const allOptions = treeNodes.map(node =>
    node?.children?.length > 0 ? getAllOptions(node?.children) : node
  );
  return allOptions.flat();
};
