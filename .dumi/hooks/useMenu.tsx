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

type SidebarGroupList = ReturnType<typeof useSidebarData>;

function groupOrder(group: ISidebarGroup): number {
  if (group?.title === 'AI') return 0;
  return (group as ISidebarGroup & { order?: number }).order ?? 999;
}

function pinAiGroupFirst(groups: SidebarGroupList): SidebarGroupList {
  const aiIndex = groups.findIndex(g => g?.title === 'AI');
  if (aiIndex <= 0) return groups;
  const next = [...groups];
  const [ai] = next.splice(aiIndex, 1);
  (ai as ISidebarGroup & { order?: number }).order = 0;
  next.unshift(ai);
  return next;
}

function getSidebarBranch(
  fullData: Record<string, SidebarGroupList>,
  suffix: string
): SidebarGroupList {
  if (fullData[suffix]?.length) return fullData[suffix];
  const entry = Object.entries(fullData).find(([key]) => key === suffix || key.endsWith(suffix));
  return entry?.[1] ?? [];
}

/** docs/design/* 与 docs/design/react/* 在 dumi 中分属 /docs 与 /docs/react 两棵侧栏，合并后 AI 分组才能置顶显示 */
function mergeDesignDocSidebars(
  docsGroups: SidebarGroupList,
  reactGroups: SidebarGroupList
): SidebarGroupList {
  const byTitle = new Map<string, ISidebarGroup>();
  const ungrouped: NonNullable<ISidebarGroup['children']> = [];

  const ingest = (groups: SidebarGroupList) => {
    for (const group of groups ?? []) {
      if (!group?.title) {
        if (group?.children) ungrouped.push(...group.children);
        continue;
      }
      const existing = byTitle.get(group.title);
      if (!existing) {
        const normalized = {
          ...group,
          children: [...(group.children ?? [])],
        } as ISidebarGroup & { order?: number };
        if (normalized.title === 'AI') normalized.order = 0;
        byTitle.set(group.title, normalized);
        continue;
      }
      const links = new Set(existing.children?.map(child => child.link));
      const children = [...(existing.children ?? [])];
      for (const child of group.children ?? []) {
        if (!links.has(child.link)) {
          children.push(child);
          links.add(child.link);
        }
      }
      children.sort((a, b) => {
        const ao = (a.frontmatter as { order?: number })?.order ?? 0;
        const bo = (b.frontmatter as { order?: number })?.order ?? 0;
        return ao - bo;
      });
      existing.children = children;
      (existing as ISidebarGroup & { order?: number }).order = Math.min(
        groupOrder(existing),
        groupOrder(group)
      );
    }
  };

  ingest(docsGroups);
  ingest(reactGroups);

  const merged = pinAiGroupFirst(
    Array.from(byTitle.values()).sort((a, b) => groupOrder(a) - groupOrder(b))
  );
  if (ungrouped.length) {
    merged.unshift({ title: '', children: ungrouped } as ISidebarGroup);
  }
  return merged;
}

const useMenu = (options: UseMenuOptions = {}): [MenuProps['items'], string] => {
  const fullData = useFullSidebarData();
  const { pathname, search } = useLocation();
  const sidebarData = useSidebarData();
  const { before, after } = options;
  const { token } = useSiteToken();

  const menuItems = useMemo<MenuProps['items']>(() => {
    const isDesignDoc =
      pathname.startsWith('/docs/react') ||
      pathname.startsWith('/docs/design') ||
      pathname.startsWith('/changelog');

    let sidebarItems: SidebarGroupList = [...(sidebarData ?? [])];

    if (isDesignDoc) {
      const docsGroups = getSidebarBranch(fullData, '/docs');
      const reactGroups = getSidebarBranch(fullData, '/docs/react');
      if (docsGroups.length || reactGroups.length) {
        sidebarItems = mergeDesignDocSidebars(docsGroups, reactGroups);
      }
    }

    // 将设计文档未分类的放在最后
    if (pathname.startsWith('/docs/spec')) {
      const notGrouped = sidebarItems.splice(0, 1);
      sidebarItems.push(...notGrouped);
    }

    // 把 /changelog 拼到研发文档侧栏（AI 分组与基础组件同在 docs/design docDir）
    if (isDesignDoc) {
      const changelogData = Object.entries(fullData).find(([key]) =>
        key.startsWith('/changelog')
      )?.[1];
      if (changelogData) {
        sidebarItems.push(...changelogData);
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
