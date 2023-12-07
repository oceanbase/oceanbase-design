import { SearchOutlined } from '@oceanbase/icons';
import { Divider, Empty, Form, Input, Tree } from '@oceanbase/design';
import type { DataNode } from '@oceanbase/design/es/tree';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { deepFilter, findFromTree, getAllOptions, nodes2treeNodes, treeNode2node } from './util';

// 用户传入的树节点数据结构
export interface Node {
  originTitle?: string;
  value?: string;
  title?: string;
  icon?: React.ReactNode;
  children?: Node[];
}

export interface TreeNode extends Node {
  originTitle: string;
  key: string;
  children?: TreeNode[];
}

export interface TreeSearchRef {
  reset: () => void;
  checkAll: () => void;
  invertSelect: () => void;
}

export interface TreeSearchProps {
  treeData: Node[];
  titleRender?: (nodeData: DataNode) => React.ReactNode;
  checkable?: boolean;
  onChange?: (nodes: Node[]) => void;
  width?: number | string;
  height?: number;
  /**
   * 是否默认展开所有节点
   */
  defaultExpandAll?: boolean;
  /** onChange 时只关注叶子节点的变化 */
  followLeaf?: boolean;
  /** 异步请求节点数据的回调函数 */
  loadData?: (data: unknown) => Promise<void>;
  searchStyle?: React.CSSProperties;
}

export default forwardRef<TreeSearchRef, TreeSearchProps>(
  (
    {
      treeData = [],
      width,
      checkable = true,
      titleRender,
      onChange,
      followLeaf = true,
      height,
      defaultExpandAll,
      loadData,
      searchStyle = {},
    },
    ref
  ) => {
    const memoTreeData = useMemo(() => nodes2treeNodes(treeData), [treeData]);
    const [searchData, setSearchData] = useState(memoTreeData);
    // 内部计算虚拟滚动的高度
    const treeWrapperDOM = useRef<HTMLDivElement>(null);
    const [innerHeight, setInnerHeight] = useState(height);
    const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
    const [searchStr, setSearchStr] = useState<string>('');
    const [form] = Form.useForm();

    useEffect(() => {
      if (height === undefined && treeWrapperDOM?.current) {
        const containerheight = treeWrapperDOM?.current?.clientHeight;
        setInnerHeight(containerheight);
      }
    }, []);

    useEffect(() => {
      if (!searchData || searchData.length === 0) {
        setSearchData(memoTreeData);
      }
      onSearch({ searchKey: searchStr });
    }, [memoTreeData]);

    const reset = () => {
      form.resetFields();
      setCheckedKeys([]);
    };

    const checkAll = () => {
      const allOptions = getAllOptions(memoTreeData);
      setCheckedKeys(allOptions.map(node => node.key));
      onChange(allOptions);
    };

    // 反选
    const invertSelect = () => {
      const allOptions = getAllOptions(memoTreeData);
      // 收集未选择的项，用于设置反选
      const notCheckedOptions = allOptions.filter(item => !checkedKeys.includes(item.key));
      setCheckedKeys(notCheckedOptions.map(item => item.key));
      onChange(allOptions.filter(node => !checkedKeys.includes(node.key)));
    };

    useImperativeHandle(ref, () => ({
      reset,
      checkAll,
      invertSelect,
    }));

    const onSearch = ({ searchKey }: { searchKey: string }) => {
      setSearchStr(searchKey);
      // 过滤掉所有叶子节点不匹配的
      const next = deepFilter(memoTreeData, node => {
        const titleIsStr = typeof node.title === 'string';
        return (titleIsStr ? node.title : node.value).includes(searchKey);
        // (!isLeaf(node) && node.children.length > 0)
      });
      setSearchData(next);
    };

    const onCheck = (keys: string[]) => {
      let treeNodes = keys.map(key => findFromTree(key, memoTreeData));

      if (followLeaf) {
        treeNodes = treeNodes.filter(node => !node?.children);
      }
      setCheckedKeys(treeNodes.map(node => node.key));
      onChange(treeNodes.map(treeNode2node));
    };

    // 整体宽度 - input - divider
    const treeHeight = innerHeight ? innerHeight - (32 + 12 * 2 + 1) : 0;

    const defaultSearchStyle = { padding: '0 12px' };

    return (
      <div ref={treeWrapperDOM} style={{ width, height: height ?? '100%' }}>
        <Form
          form={form}
          onValuesChange={onSearch}
          style={Object.assign(defaultSearchStyle, searchStyle)}
        >
          <Form.Item noStyle name="searchKey">
            <Input data-testid="search" prefix={<SearchOutlined />} />
          </Form.Item>
        </Form>
        <Divider style={{ margin: '12px 0' }} />

        {searchData.length !== 0 ? (
          <Tree
            height={treeHeight}
            showIcon
            checkable={checkable}
            blockNode
            selectable={false}
            checkedKeys={checkedKeys}
            onCheck={onCheck}
            titleRender={titleRender}
            defaultExpandAll={defaultExpandAll}
            treeData={form.getFieldValue('searchKey') ? searchData : memoTreeData}
            loadData={loadData}
          />
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    );
  }
);
