import type { MenuProps } from '@oceanbase/design';
import { Tag } from '@oceanbase/design';
import { Link, useFullSidebarData, useSidebarData } from 'dumi';
import React, { useMemo } from 'react';
import queryString from 'query-string';
import useLocation from './useLocation';
import useSiteToken from './useSiteToken';
import { ISidebarGroup } from 'dumi/dist/client/theme-api/types';

export interface UseMenuOptions {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const useMenu = (options: UseMenuOptions = {}): [MenuProps['items'], string] => {
  const fullData = useFullSidebarData();
  const { pathname, search: allSearch } = useLocation();
  const { theme } = queryString.parse(allSearch);
  // sync theme query only when click menu
  const search = allSearch ? `?${queryString.stringify({ theme })}` : '';
  const sidebarData = useSidebarData();
  const { before, after } = options;
  const { token } = useSiteToken();

  const menuItems = useMemo<MenuProps['items']>(() => {
    const sidebarItems = [...(sidebarData ?? [])];

    // 将设计文档未分类的放在最后
    if (pathname.startsWith('/docs/spec')) {
      const notGrouped = sidebarItems.splice(0, 1);
      sidebarItems.push(...notGrouped);
    }

    // 把 /changelog 拼到开发文档中
    if (pathname.startsWith('/docs/react')) {
      const changelogData = Object.entries(fullData).find(([key]) =>
        key.startsWith('/changelog')
      )?.[1];
      if (changelogData) {
        sidebarItems.push(...changelogData);
      }
    }
    if (pathname.startsWith('/changelog')) {
      const reactDocData = Object.entries(fullData).find(([key]) =>
        key.startsWith('/docs/react')
      )?.[1];
      if (reactDocData) {
        sidebarItems.unshift(...reactDocData);
      }
    }

    const getChildItems = (group: ISidebarGroup) => {
      const childrenGroup = group.children.reduce<
        Record<string, ReturnType<typeof useSidebarData>[number]['children']>
      >((childrenResult, child) => {
        const type = (child.frontmatter as any).type ?? 'default';
        if (!childrenResult[type]) {
          childrenResult[type] = [];
        }
        childrenResult[type].push(child);
        return childrenResult;
      }, {});
      const childItems = [];
      childItems.push(
        ...(childrenGroup.default?.map(item => ({
          label: (
            <Link to={`${item.link}${search}`}>
              {before}
              {item?.title}
              {after}
            </Link>
          ),
          key: item.link.replace(/(-cn$)/g, ''),
        })) ?? [])
      );
      Object.entries(childrenGroup).forEach(([type, children]) => {
        if (type !== 'default') {
          childItems.push({
            type: 'group',
            label: type,
            key: type,
            children: children?.map(item => ({
              label: (
                <Link to={`${item.link}${search}`}>
                  {before}
                  {item?.title}
                  {after}
                </Link>
              ),
              key: item.link.replace(/(-cn$)/g, ''),
              children: getChildItems(item),
            })),
          });
        }
      });
      return childItems;
    };

    return (
      sidebarItems?.reduce<Exclude<MenuProps['items'], undefined>>((result, group) => {
        if (group?.title) {
          // 设计文档特殊处理二级分组
          if (pathname.startsWith('/docs/spec')) {
            const childrenGroup = group.children.reduce<
              Record<string, ReturnType<typeof useSidebarData>[number]['children']>
            >((childrenResult, child) => {
              const subGroup = (child.frontmatter as any).subGroup ?? 'default';
              if (!childrenResult[subGroup]) {
                childrenResult[subGroup] = [];
              }
              childrenResult[subGroup].push(child);
              return childrenResult;
            }, {});
            const childItems = [];
            childItems.push(
              ...(childrenGroup.default?.map(item => ({
                label: (
                  <Link to={`${item.link}${search}`}>
                    {before}
                    {item?.title}
                    {after}
                  </Link>
                ),
                key: item.link.replace(/(-cn$)/g, ''),
              })) ?? [])
            );
            Object.entries(childrenGroup).forEach(([subGroup, children]) => {
              if (subGroup !== 'default') {
                childItems.push({
                  label: subGroup,
                  key: subGroup,
                  children: children?.map(item => ({
                    label: (
                      <Link to={`${item.link}${search}`}>
                        {before}
                        {item?.title}
                        {after}
                      </Link>
                    ),
                    key: item.link.replace(/(-cn$)/g, ''),
                  })),
                });
              }
            });
            result.push({
              type: 'group',
              label: group?.title,
              key: group?.title,
              children: childItems,
            });
          } else {
            result.push({
              type: 'group',
              label: group?.title,
              key: group?.title,
              children: group.children?.map(item => ({
                label: (
                  <Link to={`${item.link}${search}`}>
                    {before}
                    <span key="english">{item?.title}</span>
                    {(item.frontmatter as any)?.subtitle && (
                      <span className="chinese" key="chinese">
                        {(item.frontmatter as any)?.subtitle}
                      </span>
                    )}
                    {(item.frontmatter as any)?.tag && (
                      <Tag color="warning" style={{ marginInlineStart: token.marginXS }}>
                        {(item.frontmatter as any)?.tag}
                      </Tag>
                    )}
                    {after}
                  </Link>
                ),
                key: item.link.replace(/(-cn$)/g, ''),
              })),
            });
          }
        } else {
          const list = group.children || [];
          // 如果有 date 字段，我们就对其进行排序
          if (list.every(info => info?.frontmatter?.date)) {
            list.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));
          }

          result.push(
            ...list.map(item => ({
              label: (
                <Link to={`${item.link}${search}`}>
                  {before}
                  {item?.title}
                  {after}
                </Link>
              ),
              key: item.link.replace(/(-cn$)/g, ''),
            }))
          );
        }
        return result;
      }, []) ?? []
    );
  }, [sidebarData, fullData, pathname, search, options]);

  return [menuItems, pathname];
};

export default useMenu;
